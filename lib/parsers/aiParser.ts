import OpenAI from "openai";
import { ResumeData } from "../types/resume";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;

export async function parseResumeWithAI(text: string): Promise<ResumeData> {
  if (!openai) {
    throw new Error("OpenAI API key not configured");
  }
  const prompt = `
Extract structured resume information from the following text. Return a JSON object with this exact structure:

{
  "personalInfo": {
    "name": "",
    "title": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "website": "",
    "summary": ""
  },
  "experience": [
    {
      "id": "unique-id",
      "company": "",
      "position": "",
      "location": "",
      "startDate": "YYYY-MM",
      "endDate": "YYYY-MM" or "Present",
      "current": boolean,
      "description": ["bullet point 1", "bullet point 2"]
    }
  ],
  "education": [
    {
      "id": "unique-id",
      "institution": "",
      "degree": "",
      "field": "",
      "location": "",
      "startDate": "YYYY-MM",
      "graduationDate": "YYYY-MM",
      "gpa": ""
    }
  ],
  "skills": [
    {
      "category": "Technical Skills",
      "items": ["skill1", "skill2"]
    }
  ],
  "certifications": [
    {
      "id": "unique-id",
      "name": "",
      "issuer": "",
      "date": "YYYY-MM",
      "expiryDate": "",
      "credentialId": ""
    }
  ],
  "projects": [
    {
      "id": "unique-id",
      "name": "",
      "description": "",
      "technologies": ["tech1", "tech2"],
      "url": "",
      "startDate": "YYYY-MM",
      "endDate": "YYYY-MM"
    }
  ],
  "awards": [
    {
      "title": "",
      "issuer": "",
      "date": "YYYY-MM"
    }
  ],
  "hobbies": ["hobby1", "hobby2", "hobby3"]
}

Important instructions:
- Generate unique IDs for each experience, education, certification, and project entry
- Extract ALL available information from the resume
- For dates, use YYYY-MM format or "Present" for current positions
- Group skills into logical categories (Technical, Programming Languages, Tools, etc.)
- Extract awards, honors, achievements into the awards array
- Extract hobbies, interests, personal activities into the hobbies array
- If a section is not found, return an empty array or object as appropriate

Resume Text:
${text}

Return ONLY the JSON object, no additional text.
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a resume parser that extracts structured data from resumes. Always return valid JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.1,
      response_format: { type: "json_object" },
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error("No response from AI");
    }

    return JSON.parse(content) as ResumeData;
  } catch (error) {
    console.error("AI parsing error:", error);
    throw new Error("Failed to parse resume with AI");
  }
}
