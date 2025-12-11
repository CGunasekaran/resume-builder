import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function CorporatePro({ data, style }: Props) {
  const {
    personalInfo,
    experience,
    education,
    skills,
    certifications,
    awards,
    hobbies,
  } = data;

  // Corporate blue/gray theme
  const corporateColors = {
    primary: "#1e3a8a",
    secondary: "#64748b",
    accent: "#3b82f6",
    background: "#f8fafc",
  };

  return (
    <div
      className="w-[210mm] min-h-[297mm] bg-white shadow-lg"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Professional Header Bar */}
      <div
        className="h-3"
        style={{ backgroundColor: corporateColors.primary }}
      />

      <div className="px-14 py-10">
        <header className="mb-8">
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: corporateColors.primary }}
          >
            {personalInfo.name}
          </h1>
          <h2
            className="text-xl mb-4"
            style={{ color: corporateColors.secondary }}
          >
            {personalInfo.title}
          </h2>

          <div
            className="grid grid-cols-4 gap-4 p-4 rounded"
            style={{ backgroundColor: corporateColors.background }}
          >
            {personalInfo.email && (
              <div className="text-sm">
                <div
                  className="font-bold mb-1"
                  style={{ color: corporateColors.primary }}
                >
                  Email
                </div>
                <div>{personalInfo.email}</div>
              </div>
            )}
            {personalInfo.phone && (
              <div className="text-sm">
                <div
                  className="font-bold mb-1"
                  style={{ color: corporateColors.primary }}
                >
                  Phone
                </div>
                <div>{personalInfo.phone}</div>
              </div>
            )}
            {personalInfo.location && (
              <div className="text-sm">
                <div
                  className="font-bold mb-1"
                  style={{ color: corporateColors.primary }}
                >
                  Location
                </div>
                <div>{personalInfo.location}</div>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="text-sm">
                <div
                  className="font-bold mb-1"
                  style={{ color: corporateColors.primary }}
                >
                  LinkedIn
                </div>
                <div className="truncate">{personalInfo.linkedin}</div>
              </div>
            )}
          </div>
        </header>

        {/* Professional Summary */}
        {personalInfo.summary && (
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-8 h-1"
                style={{ backgroundColor: corporateColors.primary }}
              />
              <h3
                className="text-lg font-bold uppercase"
                style={{ color: corporateColors.primary }}
              >
                Executive Summary
              </h3>
            </div>
            <p className="leading-relaxed">{personalInfo.summary}</p>
          </section>
        )}

        {/* Key Skills */}
        {skills.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-1"
                style={{ backgroundColor: corporateColors.primary }}
              />
              <h3
                className="text-lg font-bold uppercase"
                style={{ color: corporateColors.primary }}
              >
                Core Competencies
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {skills
                .flatMap((s) => s.items)
                .map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded border-l-4"
                    style={{
                      backgroundColor: corporateColors.background,
                      borderColor: corporateColors.accent,
                    }}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
            </div>
          </section>
        )}

        {/* Professional Experience */}
        {experience.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-1"
                style={{ backgroundColor: corporateColors.primary }}
              />
              <h3
                className="text-lg font-bold uppercase"
                style={{ color: corporateColors.primary }}
              >
                Professional Experience
              </h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold">{exp.position}</h4>
                      <p
                        className="font-semibold"
                        style={{ color: corporateColors.accent }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">
                        {exp.startDate} -{" "}
                        {exp.current ? "Present" : exp.endDate}
                      </p>
                      {exp.location && (
                        <p
                          className="text-sm"
                          style={{ color: corporateColors.secondary }}
                        >
                          {exp.location}
                        </p>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-1 ml-5 list-disc">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="text-sm leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-8">
          {/* Education */}
          {education.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-1"
                  style={{ backgroundColor: corporateColors.primary }}
                />
                <h3
                  className="text-lg font-bold uppercase"
                  style={{ color: corporateColors.primary }}
                >
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-bold">{edu.degree}</h4>
                    <p style={{ color: corporateColors.secondary }}>
                      {edu.field}
                    </p>
                    <p className="text-sm">{edu.institution}</p>
                    <p
                      className="text-sm"
                      style={{ color: corporateColors.secondary }}
                    >
                      {edu.graduationDate}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-1"
                  style={{ backgroundColor: corporateColors.primary }}
                />
                <h3
                  className="text-lg font-bold uppercase"
                  style={{ color: corporateColors.primary }}
                >
                  Certifications
                </h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.id}>
                    <h4 className="font-semibold text-sm">{cert.name}</h4>
                    <p
                      className="text-sm"
                      style={{ color: corporateColors.secondary }}
                    >
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Awards & Honors */}
          {awards && awards.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-1"
                  style={{ backgroundColor: corporateColors.primary }}
                />
                <h3
                  className="text-lg font-bold uppercase"
                  style={{ color: corporateColors.primary }}
                >
                  Awards & Honors
                </h3>
              </div>
              <div className="space-y-3">
                {awards.map((award, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-sm">{award.title}</h4>
                    <p
                      className="text-sm"
                      style={{ color: corporateColors.secondary }}
                    >
                      {award.issuer} • {award.date}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Hobbies & Interests */}
          {hobbies && hobbies.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-1"
                  style={{ backgroundColor: corporateColors.primary }}
                />
                <h3
                  className="text-lg font-bold uppercase"
                  style={{ color: corporateColors.primary }}
                >
                  Interests
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded border text-sm"
                    style={{
                      borderColor: corporateColors.primary,
                      color: corporateColors.primary,
                    }}
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
