import { NextRequest, NextResponse } from "next/server";
import { parsePDFResume } from "@/lib/parsers/pdfParser";
import { parseDOCXResume } from "@/lib/parsers/docxParser";
import { parseResumeWithAI } from "@/lib/parsers/aiParser";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileType = file.type;

    let extractedText = "";

    // Parse based on file type
    if (fileType === "application/pdf") {
      extractedText = await parsePDFResume(buffer);
    } else if (
      fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      fileType === "application/msword"
    ) {
      extractedText = await parseDOCXResume(buffer);
    } else {
      return NextResponse.json(
        { error: "Unsupported file type. Please upload PDF or DOCX." },
        { status: 400 }
      );
    }

    // Use AI to structure the data (if available)
    try {
      const structuredData = await parseResumeWithAI(extractedText);
      return NextResponse.json({
        success: true,
        data: structuredData,
        rawText: extractedText,
      });
    } catch (aiError) {
      // If AI parsing fails, return just the raw text
      console.warn("AI parsing not available:", aiError);
      return NextResponse.json({
        success: true,
        data: null,
        rawText: extractedText,
        message: "File parsed successfully. AI structuring not available.",
      });
    }
  } catch (error) {
    console.error("Resume parsing error:", error);
    return NextResponse.json(
      { error: "Failed to parse resume" },
      { status: 500 }
    );
  }
}
