"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Calendar as CalendarIcon,
  Plus,
  Download,
  Settings,
  Trash2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useJournalData } from "@/hooks/use-journal-data";
import { JournalCalendar } from "@/components/journal/journal-calendar";
import { JournalEntryForm } from "@/components/journal/journal-entry-form";
import { JournalSettingsDialog } from "@/components/journal/journal-settings-dialog";
import { exportJournalToPDF } from "@/lib/pdf-export";
import { Section } from "@/components/common/section";

export default function InteractiveJournalPage() {
  const {
    isLoaded,
    isClient,
    settings,
    entries,
    saveEntry,
    deleteEntry,
    exportData,
    clearAllData,
  } = useJournalData();

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Calculate days tracking (using useMemo to avoid re-render issues)
  const daysTracking = useMemo(() => {
    const startTime = new Date(settings.startDate).getTime();
    const currentTime = new Date().getTime();
    return Math.max(
      0,
      Math.ceil((currentTime - startTime) / (1000 * 60 * 60 * 24))
    );
  }, [settings.startDate]);

  // Don't render until client-side
  if (!isClient || !isLoaded) {
    return (
      <Section variant="narrow" className="py-10">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-pulse text-muted-foreground">
            Loading journal...
          </div>
        </div>
      </Section>
    );
  }

  const hasSettings = settings.woundLocation && settings.woundType;
  const selectedEntries = entries.filter((e) => e.date === selectedDate);

  return (
    <div>
      {/* Breadcrumb */}
      <Section variant="narrow" className="py-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link
            href="/resources"
            className="hover:text-foreground transition-colors"
          >
            Resources
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link
            href="/resources/journal"
            className="hover:text-foreground transition-colors"
          >
            Journal
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">
            Interactive Tracker
          </span>
        </nav>
      </Section>

      {/* Hero Section */}
      <Section variant="narrow">
        <Badge variant="secondary" className="mb-4">
          <CalendarIcon className="h-3 w-3 mr-1" />
          Interactive Wound Tracker
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Digital Wound Journal
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Track your wound healing progress with our interactive digital
          journal. All data is stored privately in your browser—no account
          required.
        </p>
      </Section>

      {/* Privacy Notice */}
      <Section variant="narrow" className="pt-0">
        <Alert className="bg-accent/10 border-accent/30">
          <AlertDescription className="text-sm">
            <strong>Privacy Notice:</strong> Your journal entries are stored
            locally in your browser. Data is never sent to our servers. Make
            sure to export your data regularly to avoid losing it if you clear
            your browser cache.
          </AlertDescription>
        </Alert>
      </Section>

      {/* Setup prompt if no settings */}
      {!hasSettings && (
        <Section variant="narrow" className="pt-0">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle>Get Started with Your Journal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Before you begin tracking, let&apos;s set up some basic
                information about your wound.
              </p>
              <Button onClick={() => setShowSettings(true)}>
                <Settings className="mr-2 h-4 w-4" />
                Configure Journal Settings
              </Button>
            </CardContent>
          </Card>
        </Section>
      )}

      {/* Main Content - Calendar and Entry Form */}
      <Section variant="narrow" className="pt-0">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar Column */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Wound Tracking Calendar</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowSettings(true)}
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={exportData}>
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <JournalCalendar
                  entries={entries}
                  selectedDate={selectedDate}
                  onDateSelect={setSelectedDate}
                  startDate={settings.startDate}
                />
              </CardContent>
            </Card>
          </div>

          {/* Entry Summary/Stats Column */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Journal Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {entries.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Entries
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {daysTracking}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Days Tracking
                  </div>
                </div>
                {hasSettings && (
                  <>
                    <div>
                      <div className="text-sm font-medium">
                        {settings.woundType}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {settings.woundLocation}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={exportData}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export Data (JSON)
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    const journalData = {
                      settings,
                      entries,
                      version: "1.0.0",
                      lastModified: Date.now(),
                    };
                    exportJournalToPDF(journalData);
                  }}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Export as PDF
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-destructive hover:bg-destructive/10"
                  onClick={clearAllData}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear All Data
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Selected Date Entries */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>
              Entries for{" "}
              {new Date(selectedDate + "T00:00:00").toLocaleDateString(
                "en-US",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </CardTitle>
            <Button onClick={() => setShowEntryForm(true)}>
              <Plus className="mr-2 h-4 w-4" />
              New Entry
            </Button>
          </CardHeader>
          <CardContent>
            {selectedEntries.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p className="mb-4">No entries for this date.</p>
                <Button onClick={() => setShowEntryForm(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Your First Entry
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {selectedEntries.map((entry) => (
                  <Card key={entry.id} className="border-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="font-semibold">
                            {new Date(entry.timestamp).toLocaleTimeString()}
                          </div>
                          {entry.painLevel !== undefined && (
                            <Badge variant="outline" className="mt-2">
                              Pain: {entry.painLevel}/10
                            </Badge>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteEntry(entry.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                      {entry.generalNotes && (
                        <p className="text-sm text-muted-foreground">
                          {entry.generalNotes}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </Section>

      {/* Dialogs */}
      <JournalSettingsDialog
        open={showSettings}
        onOpenChange={setShowSettings}
      />

      {showEntryForm && (
        <JournalEntryForm
          date={selectedDate}
          onSave={(entry) => {
            saveEntry(entry);
            setShowEntryForm(false);
          }}
          onCancel={() => setShowEntryForm(false)}
        />
      )}
    </div>
  );
}
