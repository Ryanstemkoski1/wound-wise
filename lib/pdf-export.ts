import jsPDF from "jspdf";
import type { JournalData } from "@/types/journal";

/**
 * Generate a PDF export of journal data
 */
export function exportJournalToPDF(journalData: JournalData) {
  const doc = new jsPDF();
  const { settings, entries } = journalData;

  // Title Page
  doc.setFontSize(20);
  doc.text("Wound Healing Journal", 105, 20, { align: "center" });

  doc.setFontSize(12);
  doc.text("WoundWise.com", 105, 30, { align: "center" });

  // Patient/Wound Information
  doc.setFontSize(14);
  doc.text("Wound Information", 20, 50);

  doc.setFontSize(11);
  let yPos = 60;

  if (settings.patientName) {
    doc.text(`Patient: ${settings.patientName}`, 20, yPos);
    yPos += 8;
  }

  doc.text(`Wound Type: ${settings.woundType || "Not specified"}`, 20, yPos);
  yPos += 8;

  doc.text(`Location: ${settings.woundLocation || "Not specified"}`, 20, yPos);
  yPos += 8;

  doc.text(`Tracking Started: ${formatDate(settings.startDate)}`, 20, yPos);
  yPos += 8;

  doc.text(`Total Entries: ${entries.length}`, 20, yPos);
  yPos += 8;

  const daysTracking = Math.ceil(
    (Date.now() - new Date(settings.startDate).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  doc.text(`Days Tracking: ${daysTracking}`, 20, yPos);
  yPos += 15;

  // Export Information
  doc.setFontSize(9);
  doc.setTextColor(100);
  doc.text(`Generated: ${new Date().toLocaleString()}`, 20, yPos);
  doc.setTextColor(0);

  // Add new page for entries
  if (entries.length > 0) {
    doc.addPage();
    doc.setFontSize(16);
    doc.text("Journal Entries", 20, 20);

    // Sort entries by date (oldest first for chronological reading)
    const sortedEntries = [...entries].sort(
      (a, b) => a.timestamp - b.timestamp
    );

    let currentY = 35;
    const pageHeight = doc.internal.pageSize.height;
    const marginBottom = 20;

    sortedEntries.forEach((entry) => {
      // Check if we need a new page
      if (currentY > pageHeight - marginBottom - 40) {
        doc.addPage();
        currentY = 20;
      }

      // Entry header
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text(
        `${formatDate(entry.date)} - ${formatTime(entry.timestamp)}`,
        20,
        currentY
      );
      currentY += 8;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);

      // Pain Level
      if (entry.painLevel !== undefined) {
        doc.text(`Pain Level: ${entry.painLevel}/10`, 25, currentY);
        currentY += 6;
      }

      // Drainage
      if (entry.drainageAmount && entry.drainageAmount !== "none") {
        const drainageText = `Drainage: ${capitalize(entry.drainageAmount)}${
          entry.drainageType && entry.drainageType !== "none"
            ? ` (${capitalize(entry.drainageType)})`
            : ""
        }`;
        doc.text(drainageText, 25, currentY);
        currentY += 6;
      }

      // Wound Measurements
      if (entry.woundMeasurement) {
        const { length, width, depth } = entry.woundMeasurement;
        const measureText = `Measurements: ${length}cm × ${width}cm${
          depth ? ` × ${depth}cm` : ""
        }`;
        doc.text(measureText, 25, currentY);
        currentY += 6;
      }

      // Wound Color
      if (entry.woundColor) {
        doc.text(`Wound Color: ${capitalize(entry.woundColor)}`, 25, currentY);
        currentY += 6;
      }

      // Infection Signs
      if (entry.infectionSigns) {
        const signs = [];
        if (entry.infectionSigns.redness) signs.push("Redness");
        if (entry.infectionSigns.warmth) signs.push("Warmth");
        if (entry.infectionSigns.swelling) signs.push("Swelling");
        if (entry.infectionSigns.odor) signs.push("Odor");
        if (entry.infectionSigns.increasedPain) signs.push("Increased Pain");
        if (entry.infectionSigns.fever) signs.push("Fever");

        if (signs.length > 0) {
          doc.text(`Infection Signs: ${signs.join(", ")}`, 25, currentY);
          currentY += 6;
        }

        if (entry.infectionSigns.notes) {
          const notesLines = doc.splitTextToSize(
            `Notes: ${entry.infectionSigns.notes}`,
            170
          );
          doc.text(notesLines, 25, currentY);
          currentY += notesLines.length * 6;
        }
      }

      // Activity Level
      if (entry.activityLevel) {
        doc.text(`Activity: ${capitalize(entry.activityLevel)}`, 25, currentY);
        currentY += 6;
      }

      // Sleep
      if (entry.sleepHours) {
        doc.text(`Sleep: ${entry.sleepHours} hours`, 25, currentY);
        currentY += 6;
      }

      // Nutrition
      if (entry.nutrition) {
        const nutrition = entry.nutrition;
        if (nutrition.proteinIntake || nutrition.fluidIntake) {
          let nutritionText = "Nutrition: ";
          if (nutrition.proteinIntake) {
            nutritionText += `${nutrition.proteinIntake}g protein`;
          }
          if (nutrition.fluidIntake) {
            if (nutrition.proteinIntake) nutritionText += ", ";
            nutritionText += `${nutrition.fluidIntake}oz fluids`;
          }
          doc.text(nutritionText, 25, currentY);
          currentY += 6;
        }
      }

      // General Notes
      if (entry.generalNotes) {
        doc.setFont("helvetica", "italic");
        const notesLines = doc.splitTextToSize(entry.generalNotes, 170);
        doc.text(notesLines, 25, currentY);
        currentY += notesLines.length * 6;
        doc.setFont("helvetica", "normal");
      }

      // Questions for Provider
      if (entry.questionsForProvider && entry.questionsForProvider.length > 0) {
        doc.setTextColor(200, 0, 0);
        doc.text("Questions for Provider:", 25, currentY);
        currentY += 6;
        entry.questionsForProvider.forEach((question) => {
          const questionLines = doc.splitTextToSize(`• ${question}`, 165);
          doc.text(questionLines, 30, currentY);
          currentY += questionLines.length * 6;
        });
        doc.setTextColor(0);
      }

      // Separator between entries
      currentY += 5;
      doc.setDrawColor(200);
      doc.line(20, currentY, 190, currentY);
      currentY += 10;
    });

    // Summary Statistics Page
    if (entries.length > 5) {
      doc.addPage();
      doc.setFontSize(16);
      doc.text("Summary Statistics", 20, 20);

      // Calculate statistics
      const painLevels = entries
        .filter((e) => e.painLevel !== undefined)
        .map((e) => e.painLevel!);
      const avgPain =
        painLevels.length > 0
          ? (
              painLevels.reduce<number>((sum, level) => sum + level, 0) /
              painLevels.length
            ).toFixed(1)
          : "N/A";

      const entriesWithDrainage = entries.filter(
        (e) => e.drainageAmount && e.drainageAmount !== "none"
      ).length;

      const entriesWithInfectionSigns = entries.filter(
        (e) =>
          e.infectionSigns &&
          (e.infectionSigns.redness ||
            e.infectionSigns.warmth ||
            e.infectionSigns.swelling ||
            e.infectionSigns.odor)
      ).length;

      doc.setFontSize(11);
      let statsY = 35;

      doc.text(`Average Pain Level: ${avgPain}/10`, 20, statsY);
      statsY += 8;

      doc.text(
        `Entries with Drainage: ${entriesWithDrainage} (${(
          (entriesWithDrainage / entries.length) *
          100
        ).toFixed(1)}%)`,
        20,
        statsY
      );
      statsY += 8;

      doc.text(
        `Entries with Infection Signs: ${entriesWithInfectionSigns} (${(
          (entriesWithInfectionSigns / entries.length) *
          100
        ).toFixed(1)}%)`,
        20,
        statsY
      );
    }
  } else {
    doc.addPage();
    doc.setFontSize(12);
    doc.text("No journal entries found.", 20, 30);
  }

  // Footer on all pages
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text(
      `Page ${i} of ${pageCount}`,
      105,
      doc.internal.pageSize.height - 10,
      { align: "center" }
    );
    doc.text(
      "WoundWise.com - Educational purposes only. Consult your healthcare provider.",
      105,
      doc.internal.pageSize.height - 5,
      { align: "center" }
    );
  }

  // Save the PDF
  const fileName = `wound-journal-${settings.startDate}-${
    new Date().toISOString().split("T")[0]
  }.pdf`;
  doc.save(fileName);
}

// Helper functions
function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
