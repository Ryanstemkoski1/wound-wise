/**
 * Journal Entry Types
 * TypeScript definitions for the interactive wound tracking journal
 */

export type PainLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type DrainageAmount = "none" | "minimal" | "moderate" | "heavy";

export type DrainageType =
  | "none"
  | "clear"
  | "serous"
  | "sanguineous"
  | "serosanguineous"
  | "purulent";

export type WoundColor =
  | "pink"
  | "red"
  | "yellow"
  | "black"
  | "mixed"
  | "other";

export interface WoundMeasurement {
  length: number; // cm
  width: number; // cm
  depth?: number; // cm (optional)
}

export interface InfectionSigns {
  redness: boolean;
  warmth: boolean;
  swelling: boolean;
  odor: boolean;
  increasedPain: boolean;
  fever: boolean;
  notes?: string;
}

export interface DressingChange {
  productsUsed: string[];
  cleansingMethod: string;
  notes?: string;
}

export interface NutritionLog {
  proteinIntake: number; // grams
  fluidIntake: number; // ounces
  supplements: string[];
  notes?: string;
}

export interface JournalEntry {
  id: string;
  date: string; // ISO date string (YYYY-MM-DD)
  timestamp: number; // Unix timestamp for ordering

  // Wound Assessment
  woundMeasurement?: WoundMeasurement;
  woundColor?: WoundColor;
  drainageAmount?: DrainageAmount;
  drainageType?: DrainageType;
  painLevel?: PainLevel;
  infectionSigns?: InfectionSigns;

  // Care Activities
  dressingChange?: DressingChange;

  // Overall Health
  nutrition?: NutritionLog;
  sleepHours?: number;
  activityLevel?: "sedentary" | "light" | "moderate" | "active";
  medications?: string[];

  // Notes and Observations
  generalNotes?: string;
  questionsForProvider?: string[];

  // Photo tracking (URLs or local storage references)
  photos?: string[];
}

export interface JournalSettings {
  woundLocation: string;
  woundType: string;
  startDate: string;
  patientName?: string;
  // Preferences
  showPhotos: boolean;
  showNutrition: boolean;
  showMedications: boolean;
  reminderTime?: string; // HH:MM format
}

export interface JournalData {
  settings: JournalSettings;
  entries: JournalEntry[];
  version: string; // For future migrations
  lastModified: number; // Timestamp
}
