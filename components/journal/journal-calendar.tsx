"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { JournalEntry } from "@/types/journal";
import { cn } from "@/lib/utils";

interface JournalCalendarProps {
  entries: JournalEntry[];
  selectedDate: string;
  onDateSelect: (date: string) => void;
  startDate: string;
}

export function JournalCalendar({
  entries,
  selectedDate,
  onDateSelect,
  startDate,
}: JournalCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const date = new Date(selectedDate + "T00:00:00");
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
    };
  });

  const daysInMonth = new Date(
    currentMonth.year,
    currentMonth.month + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.year,
    currentMonth.month,
    1
  ).getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const previousMonth = () => {
    if (currentMonth.month === 0) {
      setCurrentMonth({ year: currentMonth.year - 1, month: 11 });
    } else {
      setCurrentMonth({ ...currentMonth, month: currentMonth.month - 1 });
    }
  };

  const nextMonth = () => {
    if (currentMonth.month === 11) {
      setCurrentMonth({ year: currentMonth.year + 1, month: 0 });
    } else {
      setCurrentMonth({ ...currentMonth, month: currentMonth.month + 1 });
    }
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentMonth({
      year: today.getFullYear(),
      month: today.getMonth(),
    });
    onDateSelect(today.toISOString().split("T")[0]);
  };

  // Create date string for a given day
  const getDateString = (day: number) => {
    const year = currentMonth.year;
    const month = String(currentMonth.month + 1).padStart(2, "0");
    const dayStr = String(day).padStart(2, "0");
    return `${year}-${month}-${dayStr}`;
  };

  // Check if a date has entries
  const hasEntry = (dateStr: string) => {
    return entries.some((e) => e.date === dateStr);
  };

  // Get entry count for a date
  const getEntryCount = (dateStr: string) => {
    return entries.filter((e) => e.date === dateStr).length;
  };

  // Check if date is today
  const isToday = (dateStr: string) => {
    return dateStr === new Date().toISOString().split("T")[0];
  };

  // Check if date is before start date
  const isBeforeStart = (dateStr: string) => {
    return dateStr < startDate;
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {monthNames[currentMonth.month]} {currentMonth.year}
        </h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={previousMonth}
            aria-label="Previous month"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={goToToday}>
            Today
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextMonth}
            aria-label="Next month"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Day headers */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}

        {/* Empty cells for days before month starts */}
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}

        {/* Calendar days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dateStr = getDateString(day);
          const isSelected = dateStr === selectedDate;
          const hasEntries = hasEntry(dateStr);
          const entryCount = getEntryCount(dateStr);
          const beforeStart = isBeforeStart(dateStr);
          const today = isToday(dateStr);

          return (
            <button
              key={day}
              onClick={() => onDateSelect(dateStr)}
              disabled={beforeStart}
              aria-label={`${monthNames[currentMonth.month]} ${day}, ${
                currentMonth.year
              }${
                hasEntries
                  ? ` - ${entryCount} ${entryCount === 1 ? "entry" : "entries"}`
                  : ""
              }${today ? " (Today)" : ""}`}
              aria-pressed={isSelected}
              className={cn(
                "aspect-square rounded-md border transition-all relative",
                "hover:border-primary/50 hover:shadow-sm",
                "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border",
                isSelected && "border-primary bg-primary/10 shadow-sm",
                hasEntries && !isSelected && "border-accent bg-accent/10",
                today && !isSelected && "border-primary/30",
                "flex flex-col items-center justify-center p-1"
              )}
            >
              <span
                className={cn(
                  "text-sm font-medium",
                  isSelected && "text-primary",
                  today && !isSelected && "text-primary",
                  beforeStart && "text-muted-foreground"
                )}
              >
                {day}
              </span>
              {hasEntries && (
                <Badge
                  variant="secondary"
                  className="absolute bottom-1 h-4 px-1 text-[10px]"
                >
                  {entryCount}
                </Badge>
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-xs text-muted-foreground justify-center flex-wrap">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded border border-primary bg-primary/10" />
          <span>Selected</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded border border-accent bg-accent/10" />
          <span>Has entries</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded border border-primary/30" />
          <span>Today</span>
        </div>
      </div>
    </div>
  );
}
