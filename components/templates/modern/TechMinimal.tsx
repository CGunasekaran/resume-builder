import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function TechMinimal({ data, style }: Props) {
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
      className="w-[210mm] min-h-[297mm] bg-white p-14 shadow-lg"
      style={{ fontFamily: "'Courier New', monospace", color: colors.text }}
    >
      {/* Terminal-style header */}
      <header className="mb-8 font-mono">
        <div className="text-sm mb-2" style={{ color: colors.secondary }}>
          $ cat resume.txt
        </div>
        <div className="border-2 p-6" style={{ borderColor: colors.primary }}>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: colors.primary }}
          >
            {personalInfo.name}
          </h1>
          <h2 className="text-lg mb-4" style={{ color: colors.secondary }}>
            &gt; {personalInfo.title}
          </h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {personalInfo.email && (
              <div>
                <span style={{ color: colors.accent }}>email:</span>{" "}
                {personalInfo.email}
              </div>
            )}
            {personalInfo.phone && (
              <div>
                <span style={{ color: colors.accent }}>phone:</span>{" "}
                {personalInfo.phone}
              </div>
            )}
            {personalInfo.location && (
              <div>
                <span style={{ color: colors.accent }}>location:</span>{" "}
                {personalInfo.location}
              </div>
            )}
            {personalInfo.linkedin && (
              <div>
                <span style={{ color: colors.accent }}>linkedin:</span>{" "}
                {personalInfo.linkedin}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-8">
          <h3
            className="text-sm mb-3 font-mono"
            style={{ color: colors.primary }}
          >
            $ ./summary.sh
          </h3>
          <p
            className="pl-4 border-l-4 text-sm leading-relaxed"
            style={{ borderColor: colors.accent }}
          >
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Skills as code blocks */}
      {skills.length > 0 && (
        <section className="mb-8">
          <h3
            className="text-sm mb-3 font-mono"
            style={{ color: colors.primary }}
          >
            $ ls -la ./skills/
          </h3>
          <div
            className="p-4 rounded text-sm"
            style={{ backgroundColor: `${colors.primary}05` }}
          >
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="mb-2">
                <span style={{ color: colors.accent }}>
                  {skillGroup.category}:
                </span>{" "}
                <span style={{ color: colors.secondary }}>
                  [{skillGroup.items.join(", ")}]
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h3
            className="text-sm mb-4 font-mono"
            style={{ color: colors.primary }}
          >
            $ git log --experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={exp.id}
                className="pl-4 border-l-2"
                style={{ borderColor: colors.accent }}
              >
                <div className="text-xs mb-1" style={{ color: colors.accent }}>
                  commit #{experience.length - idx}
                </div>
                <h4 className="font-bold text-base">{exp.position}</h4>
                <p className="text-sm" style={{ color: colors.secondary }}>
                  {exp.company} | {exp.startDate} -{" "}
                  {exp.current ? "Present" : exp.endDate}
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  {exp.description.map((desc, descIdx) => (
                    <li key={descIdx} className="flex gap-2">
                      <span style={{ color: colors.primary }}>-</span>
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
        <section className="mb-8">
          <h3
            className="text-sm mb-4 font-mono"
            style={{ color: colors.primary }}
          >
            $ cat education.json
          </h3>
          <div
            className="p-4 rounded text-sm"
            style={{ backgroundColor: `${colors.primary}05` }}
          >
            {education.map((edu, idx) => (
              <div key={edu.id} className="mb-3">
                <div>
                  <span style={{ color: colors.accent }}>"degree":</span> "
                  {edu.degree}",
                </div>
                <div>
                  <span style={{ color: colors.accent }}>"institution":</span> "
                  {edu.institution}",
                </div>
                <div>
                  <span style={{ color: colors.accent }}>"year":</span> "
                  {edu.graduationDate}"
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <section className="mb-8">
          <h3
            className="text-sm mb-4 font-mono"
            style={{ color: colors.primary }}
          >
            $ ls certifications/
          </h3>
          <div
            className="p-4 rounded text-sm"
            style={{ backgroundColor: `${colors.primary}05` }}
          >
            {certifications.map((cert) => (
              <div key={cert.id} className="mb-3">
                <div>
                  <span style={{ color: colors.accent }}>"name":</span> "
                  {cert.name}",
                </div>
                <div>
                  <span style={{ color: colors.accent }}>"issuer":</span> "
                  {cert.issuer}",
                </div>
                <div>
                  <span style={{ color: colors.accent }}>"date":</span> "
                  {cert.date}"
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Awards & Honors */}
      {awards && awards.length > 0 && (
        <section className="mb-8">
          <h3
            className="text-sm mb-4 font-mono"
            style={{ color: colors.primary }}
          >
            $ cat awards.json
          </h3>
          <div
            className="p-4 rounded text-sm"
            style={{ backgroundColor: `${colors.primary}05` }}
          >
            {awards.map((award, idx) => (
              <div key={idx} className="mb-3">
                <div>
                  <span style={{ color: colors.accent }}>"title":</span> "
                  {award.title}",
                </div>
                <div>
                  <span style={{ color: colors.accent }}>"issuer":</span> "
                  {award.issuer}",
                </div>
                <div>
                  <span style={{ color: colors.accent }}>"date":</span> "
                  {award.date}"
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
            className="text-sm mb-4 font-mono"
            style={{ color: colors.primary }}
          >
            $ echo $INTERESTS
          </h3>
          <div
            className="pl-4 border-l-2"
            style={{ borderColor: colors.accent }}
          >
            <div className="text-sm">
              {hobbies.map((hobby, idx) => (
                <span key={idx}>
                  <span style={{ color: colors.secondary }}>{hobby}</span>
                  {idx < hobbies.length - 1 && (
                    <span style={{ color: colors.accent }}> | </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
