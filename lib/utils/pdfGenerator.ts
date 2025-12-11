import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export interface PDFOptions {
  filename?: string;
  quality?: number;
  format?: "a4" | "letter";
  orientation?: "portrait" | "landscape";
}

export async function generatePDFFromHTML(
  elementId: string,
  options: PDFOptions = {}
): Promise<void> {
  const {
    filename = "resume.pdf",
    quality = 0.95,
    format = "a4",
    orientation = "portrait",
  } = options;

  try {
    // Get the element
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    // Show loading state
    const originalCursor = document.body.style.cursor;
    document.body.style.cursor = "wait";

    // Calculate dimensions
    const a4Width = 210; // mm
    const a4Height = 297; // mm

    // Create canvas from element
    const canvas = await html2canvas(element, {
      useCORS: true,
      logging: false,
      background: "#ffffff",
      width: element.scrollWidth,
      height: element.scrollHeight,
    });

    // Calculate PDF dimensions
    const imgWidth = a4Width;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Create PDF
    const pdf = new jsPDF({
      orientation: orientation,
      unit: "mm",
      format: format,
    });

    let heightLeft = imgHeight;
    let position = 0;
    const pageHeight = a4Height;

    // Add image to PDF (handle multiple pages if needed)
    const imgData = canvas.toDataURL("image/png", quality);
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if content is longer than one page
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Save the PDF
    pdf.save(filename);

    // Restore cursor
    document.body.style.cursor = originalCursor;
  } catch (error) {
    console.error("PDF generation error:", error);
    document.body.style.cursor = "default";
    throw error;
  }
}

// Alternative: Return blob instead of auto-download
export async function generatePDFBlob(
  elementId: string,
  options: PDFOptions = {}
): Promise<Blob> {
  const { quality = 0.95, format = "a4", orientation = "portrait" } = options;

  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id "${elementId}" not found`);
  }

  const canvas = await html2canvas(element, {
    useCORS: true,
    logging: false,
    background: "#ffffff",
  });

  const a4Width = 210;
  const imgWidth = a4Width;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  const pdf = new jsPDF({
    orientation: orientation,
    unit: "mm",
    format: format,
  });

  const imgData = canvas.toDataURL("image/png", quality);
  pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

  return pdf.output("blob");
}

// Function to print resume
export async function printResume(elementId: string): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id "${elementId}" not found`);
  }

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    throw new Error("Could not open print window");
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print Resume</title>
        <style>
          @media print {
            body { margin: 0; padding: 0; }
            @page { size: A4; margin: 0; }
          }
          body { margin: 0; padding: 0; }
        </style>
      </head>
      <body>
        ${element.innerHTML}
      </body>
    </html>
  `);

  printWindow.document.close();

  // Wait for content to load then print
  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };
}
