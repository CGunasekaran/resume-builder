import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function ATSFriendly({ data, style }: Props) {
  const {
    personalInfo,
    experience,
    education,
    skills,
    certifications,
    awards,
    hobbies,
  } = data;
  const { colors, fontSize, fontFamily } = style;

  // ATS-friendly resumes should use simple, clean formatting
  // No complex graphics, tables, or columns that can confuse ATS systems
  // Standard fonts, clear section headers, simple bullet points

  return (
    <div
      className="w-[210mm] min-h-[297mm] bg-white p-16 shadow-lg"
      style={{
        fontFamily: "Arial, sans-serif", // ATS prefers standard fonts
        fontSize: "11pt",
        color: "#000000", // Pure black for best ATS scanning
        lineHeight: "1.5",
      }}
    >
      {/* Header - Simple and Clean */}
      <header className="mb-6 text-center">
        <h1
          className="font-bold mb-1"
          style={{
            fontSize: "24pt",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {personalInfo.name}
        </h1>
        <div className="mb-2" style={{ fontSize: "12pt" }}>
          {personalInfo.title}
        </div>
        <div className="flex justify-center flex-wrap gap-3 text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>|</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>|</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>|</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>

      <hr className="border-t-2 border-black mb-4" />

      {/* Professional Summary */}
      {personalInfo.summary && (
        <section className="mb-6">
          <h2 className="font-bold text-base uppercase mb-2 border-b border-black pb-1">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-justify">{personalInfo.summary}</p>
        </section>
      )}

      {/* Core Competencies / Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="font-bold text-base uppercase mb-2 border-b border-black pb-1">
            CORE COMPETENCIES
          </h2>
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="mb-2">
              <span className="font-bold">{skillGroup.category}: </span>
              <span>{skillGroup.items.join(" • ")}</span>
            </div>
          ))}
        </section>
      )}

      {/* Professional Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="font-bold text-base uppercase mb-2 border-b border-black pb-1">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold">
                    {exp.position} | {exp.company}
                  </h3>
                  <span className="font-bold">
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                {exp.location && (
                  <div className="italic mb-2 text-sm">{exp.location}</div>
                )}
                <ul className="list-none space-y-1 ml-0">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex">
                      <span className="mr-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="font-bold text-base uppercase mb-2 border-b border-black pb-1">
            EDUCATION
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">
                    {edu.degree}, {edu.field}
                  </h3>
                  <span className="font-bold">{edu.graduationDate}</span>
                </div>
                <div>{edu.institution}</div>
                {edu.location && <div className="text-sm">{edu.location}</div>}
                {edu.gpa && <div className="text-sm">GPA: {edu.gpa}</div>}
                {edu.honors && edu.honors.length > 0 && (
                  <div className="text-sm">Honors: {edu.honors.join(", ")}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <section className="mb-6">
          <h2 className="font-bold text-base uppercase mb-2 border-b border-black pb-1">
            CERTIFICATIONS & LICENSES
          </h2>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div key={cert.id}>
                <span className="font-bold">{cert.name}</span> - {cert.issuer},{" "}
                {cert.date}
                {cert.credentialId && (
                  <span className="text-sm ml-2">
                    (ID: {cert.credentialId})
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Awards & Honors */}
      {awards && awards.length > 0 && (
        <section className="mb-6">
          <h2 className="font-bold text-base uppercase mb-2 border-b border-black pb-1">
            AWARDS & HONORS
          </h2>
          <div className="space-y-2">
            {awards.map((award, idx) => (
              <div key={idx}>
                <span className="font-bold">{award.title}</span> -{" "}
                {award.issuer}, {award.date}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Hobbies & Interests */}
      {hobbies && hobbies.length > 0 && (
        <section className="mb-6">
          <h2 className="font-bold text-base uppercase mb-2 border-b border-black pb-1">
            INTERESTS
          </h2>
          <div>{hobbies.join(", ")}</div>
        </section>
      )}

      {/* Additional Sections that ATS systems look for */}
      <div className="mt-8 text-xs text-center" style={{ color: "#666666" }}>
        <p>KEYWORDS: {skills.flatMap((s) => s.items).join(", ")}</p>
      </div>
    </div>
  );
}
