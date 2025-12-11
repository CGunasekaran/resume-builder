import { NextRequest, NextResponse } from "next/server";
// import puppeteer from 'puppeteer';

// Note: Install puppeteer for server-side PDF generation
// npm install puppeteer

export async function POST(request: NextRequest) {
  try {
    const { html, filename = "resume.pdf" } = await request.json();

    if (!html) {
      return NextResponse.json(
        { error: "HTML content is required" },
        { status: 400 }
      );
    }

    // TODO: Install puppeteer to enable server-side PDF generation
    return NextResponse.json(
      {
        error:
          "PDF generation temporarily disabled. Install puppeteer to enable.",
      },
      { status: 501 }
    );

    // Launch headless browser
    // const browser = await puppeteer.launch({
    //   headless: true,
    //   args: ['--no-sandbox', '--disable-setuid-sandbox'],
    // });

    // const page = await browser.newPage();

    // Set content
    // await page.setContent(html, {
    //   waitUntil: 'networkidle0',
    // });

    // Generate PDF
    // const pdfBuffer = await page.pdf({
    //   format: 'A4',
    //   printBackground: true,
    //   margin: {
    //     top: '0px',
    //     right: '0px',
    //     bottom: '0px',
    //     left: '0px',
    //   },
    // });

    // await browser.close();

    // Return PDF as response
    // return new NextResponse(pdfBuffer, {
    //   headers: {
    //     'Content-Type': 'application/pdf',
    //     'Content-Disposition': `attachment; filename="${filename}"`,
    //   },
    // });
  } catch (error) {
    console.error("Server-side PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
