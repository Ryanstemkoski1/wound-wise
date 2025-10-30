"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type {
  JournalEntry,
  PainLevel,
  DrainageAmount,
  DrainageType,
} from "@/types/journal";

interface JournalEntryFormProps {
  date: string;
  onSave: (entry: JournalEntry) => void;
  onCancel: () => void;
}

export function JournalEntryForm({
  date,
  onSave,
  onCancel,
}: JournalEntryFormProps) {
  const [painLevel, setPainLevel] = useState<string>("");
  const [drainage, setDrainage] = useState<DrainageAmount>("none");
  const [drainageType, setDrainageType] = useState<DrainageType>("none");
  const [generalNotes, setGeneralNotes] = useState("");

  const handleSubmit = () => {
    const entry: JournalEntry = {
      id: `${date}-${Date.now()}`,
      date,
      timestamp: Date.now(),
      painLevel: painLevel ? (parseInt(painLevel) as PainLevel) : undefined,
      drainageAmount: drainage !== "none" ? drainage : undefined,
      drainageType: drainageType !== "none" ? drainageType : undefined,
      generalNotes: generalNotes || undefined,
    };

    onSave(entry);
  };

  return (
    <Dialog open={true} onOpenChange={(open) => !open && onCancel()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>New Journal Entry</DialogTitle>
          <DialogDescription>
            Record your wound care observations for{" "}
            {new Date(date + "T00:00:00").toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Pain Level */}
          <div className="grid gap-2">
            <Label htmlFor="pain-level">Pain Level (0-10)</Label>
            <Select value={painLevel} onValueChange={setPainLevel}>
              <SelectTrigger id="pain-level">
                <SelectValue placeholder="Select pain level" />
              </SelectTrigger>
              <SelectContent>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                  <SelectItem key={level} value={level.toString()}>
                    {level} -{" "}
                    {level === 0
                      ? "No pain"
                      : level <= 3
                      ? "Mild"
                      : level <= 6
                      ? "Moderate"
                      : "Severe"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Drainage Amount */}
          <div className="grid gap-2">
            <Label htmlFor="drainage">Drainage Amount</Label>
            <Select
              value={drainage}
              onValueChange={(v) => setDrainage(v as DrainageAmount)}
            >
              <SelectTrigger id="drainage">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="minimal">Minimal</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="heavy">Heavy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Drainage Type */}
          {drainage !== "none" && (
            <div className="grid gap-2">
              <Label htmlFor="drainage-type">Drainage Type</Label>
              <Select
                value={drainageType}
                onValueChange={(v) => setDrainageType(v as DrainageType)}
              >
                <SelectTrigger id="drainage-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clear">Clear</SelectItem>
                  <SelectItem value="serous">
                    Serous (watery, pale yellow)
                  </SelectItem>
                  <SelectItem value="sanguineous">
                    Sanguineous (bloody)
                  </SelectItem>
                  <SelectItem value="serosanguineous">
                    Serosanguineous (mixed)
                  </SelectItem>
                  <SelectItem value="purulent">Purulent (pus-like)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* General Notes */}
          <div className="grid gap-2">
            <Label htmlFor="notes">General Notes</Label>
            <Textarea
              id="notes"
              value={generalNotes}
              onChange={(e) => setGeneralNotes(e.target.value)}
              placeholder="Describe the wound appearance, any changes, activities, or concerns..."
              rows={5}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save Entry</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
