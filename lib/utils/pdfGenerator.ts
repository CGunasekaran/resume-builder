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

    // Store original styles
    const originalStyles = {
      overflow: element.style.overflow,
      height: element.style.height,
      maxHeight: element.style.maxHeight,
    };

    // Temporarily modify element for better PDF capture
    element.style.overflow = "visible";
    element.style.height = "auto";
    element.style.maxHeight = "none";

    // Wait a moment for layout to settle
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Calculate dimensions with margins
    const a4Width = 210; // mm
    const a4Height = 297; // mm
    const margin = 10; // mm margins
    const contentWidth = a4Width - margin * 2;
    const contentHeight = a4Height - margin * 2;
    const pixelRatio = window.devicePixelRatio || 1;

    // Create canvas from element with better settings
    const canvas = await html2canvas(element, {
      useCORS: true,
      allowTaint: false,
      logging: false,
      background: "#ffffff",
      width: element.scrollWidth,
      height: element.scrollHeight,
    });

    // Restore original styles
    element.style.overflow = originalStyles.overflow;
    element.style.height = originalStyles.height;
    element.style.maxHeight = originalStyles.maxHeight;

    // Calculate PDF dimensions with proper margins
    const imgWidth = contentWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pageHeight = contentHeight;

    // Create PDF
    const pdf = new jsPDF({
      orientation: orientation,
      unit: "mm",
      format: format,
      compress: true,
    });

    // Convert canvas to high-quality image
    const imgData = canvas.toDataURL("image/jpeg", quality);

    // Handle single or multiple pages
    if (imgHeight <= pageHeight) {
      // Single page - add with margins
      pdf.addImage(imgData, "JPEG", margin, margin, imgWidth, imgHeight);
    } else {
      // Multiple pages - smart page breaks
      let sourceY = 0;
      let pageCount = 0;

      while (sourceY < canvas.height) {
        if (pageCount > 0) {
          pdf.addPage();
        }

        // Calculate remaining height
        const remainingCanvasHeight = canvas.height - sourceY;
        const currentPageHeight = Math.min(
          (pageHeight * canvas.width) / imgWidth,
          remainingCanvasHeight
        );

        // Create a temporary canvas for this page
        const pageCanvas = document.createElement("canvas");
        const pageContext = pageCanvas.getContext("2d");

        pageCanvas.width = canvas.width;
        pageCanvas.height = currentPageHeight;

        if (pageContext) {
          // Fill with white background
          pageContext.fillStyle = "#ffffff";
          pageContext.fillRect(0, 0, pageCanvas.width, pageCanvas.height);

          // Draw the portion of the original canvas
          pageContext.drawImage(
            canvas,
            0,
            sourceY,
            canvas.width,
            currentPageHeight,
            0,
            0,
            canvas.width,
            currentPageHeight
          );

          const pageImgData = pageCanvas.toDataURL("image/jpeg", quality);
          const pageImgHeight = (currentPageHeight * imgWidth) / canvas.width;

          pdf.addImage(
            pageImgData,
            "JPEG",
            margin,
            margin,
            imgWidth,
            pageImgHeight
          );
        }

        sourceY += currentPageHeight;
        pageCount++;
      }
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
