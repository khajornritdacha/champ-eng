"use client";

const STORAGE_KEY = "champ-eng:application-checklist-progress";
const EMPTY_PROGRESS: CompletedItemsByStage = {};

type CompletedItemsByStage = Record<string, string[]>;

let cachedSnapshot: CompletedItemsByStage | null = null;
const listeners = new Set<() => void>();

function isCompletedItemsByStage(value: unknown): value is CompletedItemsByStage {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return Object.values(value).every(
    (stageItems) =>
      Array.isArray(stageItems) &&
      stageItems.every((itemId) => typeof itemId === "string"),
  );
}

function readFromStorage(): CompletedItemsByStage {
  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      return EMPTY_PROGRESS;
    }

    const parsedValue = JSON.parse(storedValue);

    return isCompletedItemsByStage(parsedValue) ? parsedValue : EMPTY_PROGRESS;
  } catch {
    return EMPTY_PROGRESS;
  }
}

function writeToStorage(progress: CompletedItemsByStage): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Storage can be unavailable (e.g. private browsing); progress simply won't persist.
  }
}

export function subscribeToChecklistProgress(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);

  function handleStorageEvent(event: StorageEvent): void {
    if (event.key === STORAGE_KEY) {
      cachedSnapshot = readFromStorage();
      onStoreChange();
    }
  }

  window.addEventListener("storage", handleStorageEvent);

  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", handleStorageEvent);
  };
}

export function getChecklistProgressSnapshot(): CompletedItemsByStage {
  if (cachedSnapshot === null) {
    cachedSnapshot = readFromStorage();
  }

  return cachedSnapshot;
}

export function getServerChecklistProgressSnapshot(): CompletedItemsByStage {
  return EMPTY_PROGRESS;
}

export function setChecklistProgress(
  updateProgress: (currentProgress: CompletedItemsByStage) => CompletedItemsByStage,
): void {
  const updatedProgress = updateProgress(getChecklistProgressSnapshot());

  cachedSnapshot = updatedProgress;
  writeToStorage(updatedProgress);
  listeners.forEach((notifyListener) => notifyListener());
}
