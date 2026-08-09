"use client";

import {
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
  type PointerEvent,
} from "react";

import { applicationStages } from "./application-checklist-data";
import {
  getChecklistProgressSnapshot,
  getServerChecklistProgressSnapshot,
  setChecklistProgress,
  subscribeToChecklistProgress,
} from "./checklist-progress-store";

const SWIPE_THRESHOLD_PX = 48;

export function useApplicationChecklist() {
  const [activeIndex, setActiveIndex] = useState(0);
  const completedItemsByStage = useSyncExternalStore(
    subscribeToChecklistProgress,
    getChecklistProgressSnapshot,
    getServerChecklistProgressSnapshot,
  );
  const pointerStartX = useRef<number | null>(null);

  const activeStage = applicationStages[activeIndex];
  const completedItems = completedItemsByStage[activeStage.id] ?? [];

  function selectStage(index: number): void {
    setActiveIndex(index);
  }

  function selectRelativeStage(offset: number): void {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + offset + applicationStages.length) %
        applicationStages.length,
    );
  }

  function showPreviousStage(): void {
    selectRelativeStage(-1);
  }

  function showNextStage(): void {
    selectRelativeStage(1);
  }

  function toggleChecklistItem(itemId: string): void {
    setChecklistProgress((currentItemsByStage) => {
      const stageItems = currentItemsByStage[activeStage.id] ?? [];
      const isComplete = stageItems.includes(itemId);
      const updatedItems = isComplete
        ? stageItems.filter((completedItemId) => completedItemId !== itemId)
        : [...stageItems, itemId];

      return {
        ...currentItemsByStage,
        [activeStage.id]: updatedItems,
      };
    });
  }

  function handleStageNavigationKeyDown(event: KeyboardEvent<HTMLElement>): void {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousStage();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextStage();
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLElement>): void {
    pointerStartX.current = event.clientX;
  }

  function handlePointerUp(event: PointerEvent<HTMLElement>): void {
    const startX = pointerStartX.current;
    pointerStartX.current = null;

    if (startX === null) {
      return;
    }

    const horizontalDistance = event.clientX - startX;

    if (horizontalDistance > SWIPE_THRESHOLD_PX) {
      showPreviousStage();
    }

    if (horizontalDistance < -SWIPE_THRESHOLD_PX) {
      showNextStage();
    }
  }

  return {
    activeIndex,
    activeStage,
    completedItems,
    handlePointerDown,
    handlePointerUp,
    handleStageNavigationKeyDown,
    selectStage,
    showNextStage,
    showPreviousStage,
    toggleChecklistItem,
  };
}
