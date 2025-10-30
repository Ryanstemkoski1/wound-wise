"use client";

import { useState, useEffect, useCallback } from "react";
import type {
  JournalData,
  JournalEntry,
  JournalSettings,
} from "@/types/journal";

const STORAGE_KEY = "woundwise-journal";
const CURRENT_VERSION = "1.0.0";

const DEFAULT_SETTINGS: JournalSettings = {
  woundLocation: "",
  woundType: "",
  startDate: new Date().toISOString().split("T")[0],
  showPhotos: true,
  showNutrition: true,
  showMedications: true,
};

const createEmptyJournalData = (): JournalData => ({
  settings: DEFAULT_SETTINGS,
  entries: [],
  version: CURRENT_VERSION,
  lastModified: Date.now(),
});

/**
 * Custom hook for managing journal data with local storage persistence
 */
export function useJournalData() {
  const [journalData, setJournalData] = useState<JournalData>(
    createEmptyJournalData()
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Initialize from local storage (client-side only)
  useEffect(() => {
    setIsClient(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as JournalData;
        setJournalData(parsed);
      }
    } catch (error) {
      console.error("Failed to load journal data:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to local storage whenever data changes
  const saveToStorage = useCallback(
    (data: JournalData) => {
      if (!isClient) return;
      try {
        const updatedData = {
          ...data,
          lastModified: Date.now(),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
        setJournalData(updatedData);
      } catch (error) {
        console.error("Failed to save journal data:", error);
      }
    },
    [isClient]
  );

  // Update settings
  const updateSettings = useCallback(
    (settings: Partial<JournalSettings>) => {
      const updated = {
        ...journalData,
        settings: { ...journalData.settings, ...settings },
      };
      saveToStorage(updated);
    },
    [journalData, saveToStorage]
  );

  // Add or update entry
  const saveEntry = useCallback(
    (entry: JournalEntry) => {
      const existingIndex = journalData.entries.findIndex(
        (e) => e.id === entry.id
      );
      const entries =
        existingIndex >= 0
          ? journalData.entries.map((e, i) => (i === existingIndex ? entry : e))
          : [...journalData.entries, entry];

      const updated = {
        ...journalData,
        entries: entries.sort((a, b) => b.timestamp - a.timestamp),
      };
      saveToStorage(updated);
    },
    [journalData, saveToStorage]
  );

  // Delete entry
  const deleteEntry = useCallback(
    (entryId: string) => {
      const updated = {
        ...journalData,
        entries: journalData.entries.filter((e) => e.id !== entryId),
      };
      saveToStorage(updated);
    },
    [journalData, saveToStorage]
  );

  // Get entry by ID
  const getEntry = useCallback(
    (entryId: string) => {
      return journalData.entries.find((e) => e.id === entryId);
    },
    [journalData.entries]
  );

  // Get entries for a specific date
  const getEntriesForDate = useCallback(
    (date: string) => {
      return journalData.entries.filter((e) => e.date === date);
    },
    [journalData.entries]
  );

  // Get entries in date range
  const getEntriesInRange = useCallback(
    (startDate: string, endDate: string) => {
      return journalData.entries.filter(
        (e) => e.date >= startDate && e.date <= endDate
      );
    },
    [journalData.entries]
  );

  // Clear all data
  const clearAllData = useCallback(() => {
    if (!isClient) return;
    if (
      confirm(
        "Are you sure you want to delete all journal data? This cannot be undone."
      )
    ) {
      localStorage.removeItem(STORAGE_KEY);
      setJournalData(createEmptyJournalData());
    }
  }, [isClient]);

  // Export data as JSON
  const exportData = useCallback(() => {
    const dataStr = JSON.stringify(journalData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(
      dataStr
    )}`;
    const exportFileDefaultName = `woundwise-journal-${
      new Date().toISOString().split("T")[0]
    }.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  }, [journalData]);

  // Import data from JSON
  const importData = useCallback(
    (jsonString: string) => {
      try {
        const imported = JSON.parse(jsonString) as JournalData;
        if (!imported.settings || !Array.isArray(imported.entries)) {
          throw new Error("Invalid journal data format");
        }
        saveToStorage(imported);
        return true;
      } catch (error) {
        console.error("Failed to import journal data:", error);
        return false;
      }
    },
    [saveToStorage]
  );

  return {
    // State
    journalData,
    isLoaded,
    isClient,

    // Settings
    settings: journalData.settings,
    updateSettings,

    // Entries
    entries: journalData.entries,
    saveEntry,
    deleteEntry,
    getEntry,
    getEntriesForDate,
    getEntriesInRange,

    // Data management
    clearAllData,
    exportData,
    importData,
  };
}
