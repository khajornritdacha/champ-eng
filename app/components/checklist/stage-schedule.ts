"use client";

import { useSyncExternalStore } from "react";

import type { ApplicationStage } from "./application-checklist-data";

const millisecondsPerDay = 24 * 60 * 60 * 1000;
const minute = 60 * 1000;

export type StageScheduleStatus = {
  message: string;
  isPast: boolean;
};

export function getStageScheduleStatus(
  stage: ApplicationStage,
  currentDay: string,
): StageScheduleStatus {
  const remainingDays = getDayNumber(stage.deadline) - getDayNumber(currentDay);

  if (remainingDays > 1) {
    return { message: `${remainingDays} days to go`, isPast: false };
  }

  if (remainingDays === 1) {
    return { message: "1 day to go", isPast: false };
  }

  if (remainingDays === 0) {
    return { message: "Today", isPast: false };
  }

  return {
    message:
      stage.id === "application-form"
        ? "Applications closed"
        : `${stage.label} concluded`,
    isPast: true,
  };
}

export function useStageScheduleStatuses(
  stages: ApplicationStage[],
): Record<string, StageScheduleStatus> | null {
  const currentDay = useSyncExternalStore(
    subscribeToBangkokDay,
    getBangkokDay,
    getServerBangkokDay,
  );

  if (currentDay === null) {
    return null;
  }

  return Object.fromEntries(
    stages.map((stage) => [stage.id, getStageScheduleStatus(stage, currentDay)]),
  );
}

function subscribeToBangkokDay(onStoreChange: () => void): () => void {
  const interval = window.setInterval(onStoreChange, minute);

  return () => window.clearInterval(interval);
}

function getBangkokDay(): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Bangkok",
    year: "numeric",
  }).formatToParts();
  const valueByType = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  );

  return `${valueByType.year}-${valueByType.month}-${valueByType.day}`;
}

function getServerBangkokDay(): null {
  return null;
}

function getDayNumber(date: string): number {
  const [year, month, day] = date.split("-").map(Number);

  return Date.UTC(year, month - 1, day) / millisecondsPerDay;
}
