import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function CompactEfficient({ data, style }: Props) {
  const {
    personalInfo,
    experience,
    education,
    skills,
    certifications,
    awards,
    hobbies,
  } = data;
  const { colors } = style;

  return (
    <div
      className="w-[210mm] min-h-[297mm] bg-white p-10 shadow-lg"
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "10pt",
        lineHeight: "1.4",
      }}
    >
      {/* Compact Header */}
      <header className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1
              className="text-3xl font-bold mb-1"
              style={{ color: colors.primary }}
            >
              {personalInfo.name}
            </h1>
            <h2 className="text-lg mb-2" style={{ color: colors.secondary }}>
              {personalInfo.title}
            </h2>
          </div>
          <div className="text-right text-sm">
            {personalInfo.email && <div>{personalInfo.email}</div>}
            {personalInfo.phone && <div>{personalInfo.phone}</div>}
            {personalInfo.location && <div>{personalInfo.location}</div>}
          </div>
        </div>
        <div
          className="h-0.5 mt-2"
          style={{ backgroundColor: colors.primary }}
        />
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Sidebar */}
        <div className="space-y-5">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h3
                className="text-sm font-bold uppercase mb-2 pb-1 border-b"
                style={{ color: colors.primary, borderColor: colors.primary }}
              >
                Skills
              </h3>
              <div className="space-y-2">
                {skills.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-xs mb-1">
                      {skillGroup.category}
                    </h4>
                    <div className="text-xs space-y-0.5">
                      {skillGroup.items.map((skill, skillIdx) => (
                        <div key={skillIdx}>• {skill}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h3
                className="text-sm font-bold uppercase mb-2 pb-1 border-b"
                style={{ color: colors.primary, borderColor: colors.primary }}
              >
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id} className="text-xs">
                    <div className="font-bold">{edu.degree}</div>
                    <div>{edu.field}</div>
                    <div style={{ color: colors.secondary }}>
                      {edu.institution}
                    </div>
                    <div style={{ color: colors.secondary }}>
                      {edu.graduationDate}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <section className="mb-4">
              <h3
                className="text-sm font-bold uppercase mb-2 pb-1 border-b"
                style={{ color: colors.primary, borderColor: colors.primary }}
              >
                Certifications
              </h3>
              <div className="space-y-2 text-xs">
                {certifications.map((cert) => (
                  <div key={cert.id}>
                    <div className="font-bold">{cert.name}</div>
                    <div style={{ color: colors.secondary }}>
                      {cert.issuer} • {cert.date}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Awards & Honors */}
          {awards && awards.length > 0 && (
            <section className="mb-4">
              <h3
                className="text-sm font-bold uppercase mb-2 pb-1 border-b"
                style={{ color: colors.primary, borderColor: colors.primary }}
              >
                Awards
              </h3>
              <div className="space-y-2 text-xs">
                {awards.map((award, idx) => (
                  <div key={idx}>
                    <div className="font-bold">{award.title}</div>
                    <div style={{ color: colors.secondary }}>
                      {award.issuer} • {award.date}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Hobbies & Interests */}
          {hobbies && hobbies.length > 0 && (
            <section>
              <h3
                className="text-sm font-bold uppercase mb-2 pb-1 border-b"
                style={{ color: colors.primary, borderColor: colors.primary }}
              >
                Interests
              </h3>
              <div className="flex flex-wrap gap-1 text-xs">
                {hobbies.map((hobby, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded text-white"
                    style={{ backgroundColor: colors.primary }}
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column - Main Content */}
        <div className="col-span-2 space-y-5">
          {/* Summary */}
          {personalInfo.summary && (
            <section>
              <h3
                className="text-sm font-bold uppercase mb-2 pb-1 border-b"
                style={{ color: colors.primary, borderColor: colors.primary }}
              >
                Summary
              </h3>
              <p className="text-xs leading-relaxed">{personalInfo.summary}</p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h3
                className="text-sm font-bold uppercase mb-2 pb-1 border-b"
                style={{ color: colors.primary, borderColor: colors.primary }}
              >
                Professional Experience
              </h3>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-sm">{exp.position}</h4>
                      <span
                        className="text-xs"
                        style={{ color: colors.secondary }}
                      >
                        {exp.startDate} -{" "}
                        {exp.current ? "Present" : exp.endDate}
                      </span>
                    </div>
                    <div
                      className="font-semibold text-xs mb-1"
                      style={{ color: colors.primary }}
                    >
                      {exp.company}
                    </div>
                    <ul className="text-xs space-y-0.5 ml-3">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="list-disc">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
