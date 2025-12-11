export async function parsePDFResume(buffer: Buffer): Promise<string> {
  try {
    const pdf = await import('pdf-parse');
    const data = await (pdf as any)(buffer);
    return data.text;
  } catch (error) {
    console.error('PDF parsing error:', error);
    throw new Error('Failed to parse PDF');
  }
}
