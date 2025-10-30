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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useJournalData } from "@/hooks/use-journal-data";

interface JournalSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WOUND_TYPES = [
  "Pressure Injury",
  "Diabetic Ulcer",
  "Venous Ulcer",
  "Arterial Wound",
  "Surgical Wound",
  "Other",
];

export function JournalSettingsDialog({
  open,
  onOpenChange,
}: JournalSettingsDialogProps) {
  const { settings, updateSettings } = useJournalData();

  // Use refs to avoid re-render cascades
  const [formData, setFormData] = useState({
    woundType: "",
    woundLocation: "",
    startDate: "",
    patientName: "",
  });

  // Reset form when dialog opens with current settings
  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen) {
      setFormData({
        woundType: settings.woundType,
        woundLocation: settings.woundLocation,
        startDate: settings.startDate,
        patientName: settings.patientName || "",
      });
    }
    onOpenChange(newOpen);
  };

  const handleSave = () => {
    updateSettings(formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Journal Settings</DialogTitle>
          <DialogDescription>
            Configure your wound tracking journal. This information helps
            contextualize your entries.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="patient-name">Patient Name (Optional)</Label>
            <Input
              id="patient-name"
              value={formData.patientName}
              onChange={(e) =>
                setFormData({ ...formData, patientName: e.target.value })
              }
              placeholder="Your name"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="wound-type">Wound Type</Label>
            <Select
              value={formData.woundType}
              onValueChange={(value) =>
                setFormData({ ...formData, woundType: value })
              }
            >
              <SelectTrigger id="wound-type">
                <SelectValue placeholder="Select wound type" />
              </SelectTrigger>
              <SelectContent>
                {WOUND_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="wound-location">Wound Location</Label>
            <Input
              id="wound-location"
              value={formData.woundLocation}
              onChange={(e) =>
                setFormData({ ...formData, woundLocation: e.target.value })
              }
              placeholder="e.g., Left heel, Right sacrum"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="start-date">Start Tracking Date</Label>
            <Input
              id="start-date"
              type="date"
              value={formData.startDate}
              onChange={(e) =>
                setFormData({ ...formData, startDate: e.target.value })
              }
            />
            <p className="text-xs text-muted-foreground">
              The date you began tracking this wound
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Settings</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
