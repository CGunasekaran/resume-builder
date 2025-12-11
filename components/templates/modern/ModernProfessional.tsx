import { ResumeData, StyleConfig } from "@/lib/types/resume";
import { format } from "date-fns";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function ModernProfessional({ data, style }: Props) {
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

  return (
    <div
      className="w-[210mm] min-h-[297mm] bg-white p-12 shadow-lg"
      style={{
        fontFamily: fontFamily,
        color: colors.text,
        fontSize: `${fontSize.body}px`,
      }}
    >
      {/* Header */}
      <header
        className="border-b-4 pb-6 mb-8"
        style={{ borderColor: colors.primary }}
      >
        <h1
          className="font-bold mb-2"
          style={{ fontSize: `${fontSize.name}px`, color: colors.primary }}
        >
          {personalInfo.name}
        </h1>
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: `${fontSize.heading}px`, color: colors.secondary }}
        >
          {personalInfo.title}
        </h2>
        <div
          className="flex flex-wrap gap-4 text-sm"
          style={{ color: colors.text, minHeight: "20px" }}
        >
          {personalInfo.email && (
            <span style={{ color: colors.text }}>{personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span style={{ color: colors.secondary }}>•</span>
          )}
          {personalInfo.phone && (
            <span style={{ color: colors.text }}>{personalInfo.phone}</span>
          )}
          {personalInfo.location && (
            <span style={{ color: colors.secondary }}>•</span>
          )}
          {personalInfo.location && (
            <span style={{ color: colors.text }}>{personalInfo.location}</span>
          )}
          {personalInfo.linkedin && (
            <span style={{ color: colors.secondary }}>•</span>
          )}
          {personalInfo.linkedin && (
            <span style={{ color: colors.text }}>{personalInfo.linkedin}</span>
          )}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-8">
          <h3
            className="font-bold mb-3 uppercase tracking-wide"
            style={{ fontSize: `${fontSize.heading}px`, color: colors.primary }}
          >
            Professional Summary
          </h3>
          <p
            className="leading-relaxed"
            style={{ color: colors.text, fontSize: "14px", lineHeight: "1.6" }}
          >
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h3
            className="font-bold mb-4 uppercase tracking-wide"
            style={{ fontSize: `${fontSize.heading}px`, color: colors.primary }}
          >
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-2">
                  <div>
                    <h4
                      className="font-semibold"
                      style={{ fontSize: `${fontSize.subheading}px` }}
                    >
                      {exp.position}
                    </h4>
                    <p
                      className="font-medium"
                      style={{ color: colors.secondary }}
                    >
                      {exp.company} {exp.location && `• ${exp.location}`}
                    </p>
                  </div>
                  <span className="text-sm" style={{ color: colors.secondary }}>
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <ul
                  className="list-disc list-inside space-y-1 ml-2"
                  style={{ color: colors.text }}
                >
                  {exp.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className="leading-relaxed"
                      style={{
                        color: colors.text,
                        fontSize: "13px",
                        lineHeight: "1.5",
                      }}
                    >
                      {desc}
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
        <section className="mb-8">
          <h3
            className="font-bold mb-4 uppercase tracking-wide"
            style={{ fontSize: `${fontSize.heading}px`, color: colors.primary }}
          >
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline">
                <div>
                  <h4
                    className="font-semibold"
                    style={{ fontSize: `${fontSize.subheading}px` }}
                  >
                    {edu.degree} in {edu.field}
                  </h4>
                  <p style={{ color: colors.secondary }}>
                    {edu.institution} {edu.location && `• ${edu.location}`}
                  </p>
                  {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                </div>
                <span className="text-sm" style={{ color: colors.secondary }}>
                  {edu.graduationDate}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-8">
          <h3
            className="font-bold mb-4 uppercase tracking-wide"
            style={{ fontSize: `${fontSize.heading}px`, color: colors.primary }}
          >
            Skills
          </h3>
          <div className="space-y-2">
            {skills.map((skillGroup, idx) => (
              <div key={idx}>
                <span className="font-semibold">{skillGroup.category}: </span>
                <span>{skillGroup.items.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-8">
          <h3
            className="font-bold mb-4 uppercase tracking-wide"
            style={{ fontSize: `${fontSize.heading}px`, color: colors.primary }}
          >
            Certifications
          </h3>
          <ul className="space-y-2">
            {certifications.map((cert) => (
              <li key={cert.id}>
                <span className="font-semibold">{cert.name}</span> -{" "}
                {cert.issuer} ({cert.date})
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Awards & Honors */}
      {awards && awards.length > 0 && (
        <section className="mb-8">
          <h3
            className="font-bold mb-4 uppercase tracking-wide"
            style={{ fontSize: `${fontSize.heading}px`, color: colors.primary }}
          >
            Awards & Honors
          </h3>
          <ul className="space-y-2">
            {awards.map((award, idx) => (
              <li key={idx}>
                <span className="font-semibold">{award.title}</span> -{" "}
                {award.issuer} ({award.date})
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Hobbies & Interests */}
      {hobbies && hobbies.length > 0 && (
        <section>
          <h3
            className="font-bold mb-4 uppercase tracking-wide"
            style={{ fontSize: `${fontSize.heading}px`, color: colors.primary }}
          >
            Hobbies & Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((hobby, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm border"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                {hobby}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
