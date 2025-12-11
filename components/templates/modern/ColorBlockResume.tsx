import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function ColorBlockResume({ data, style }: Props) {
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
      className="w-[210mm] min-h-[297mm] bg-white shadow-lg"
      style={{ fontFamily: fontFamily }}
    >
      {/* Color Block Header */}
      <div className="grid grid-cols-4 h-4">
        <div style={{ backgroundColor: colors.primary }} />
        <div style={{ backgroundColor: colors.accent }} />
        <div style={{ backgroundColor: colors.secondary }} />
        <div style={{ backgroundColor: colors.primary }} />
      </div>

      <div className="p-12">
        <header className="mb-10">
          <div
            className="inline-block px-6 py-3 mb-4"
            style={{ backgroundColor: colors.primary }}
          >
            <h1 className="text-4xl font-black text-white">
              {personalInfo.name}
            </h1>
          </div>
          <h2 className="text-2xl ml-6" style={{ color: colors.secondary }}>
            {personalInfo.title}
          </h2>
        </header>

        {/* Contact in colored boxes */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          {personalInfo.email && (
            <div
              className="p-4 text-white"
              style={{ backgroundColor: colors.primary }}
            >
              <div className="text-xs mb-1 opacity-80">Email</div>
              <div className="text-sm font-semibold truncate">
                {personalInfo.email}
              </div>
            </div>
          )}
          {personalInfo.phone && (
            <div
              className="p-4 text-white"
              style={{ backgroundColor: colors.accent }}
            >
              <div className="text-xs mb-1 opacity-80">Phone</div>
              <div className="text-sm font-semibold">{personalInfo.phone}</div>
            </div>
          )}
          {personalInfo.location && (
            <div
              className="p-4 text-white"
              style={{ backgroundColor: colors.secondary }}
            >
              <div className="text-xs mb-1 opacity-80">Location</div>
              <div className="text-sm font-semibold">
                {personalInfo.location}
              </div>
            </div>
          )}
          {personalInfo.linkedin && (
            <div
              className="p-4 text-white"
              style={{ backgroundColor: colors.primary }}
            >
              <div className="text-xs mb-1 opacity-80">LinkedIn</div>
              <div className="text-sm font-semibold truncate">
                {personalInfo.linkedin}
              </div>
            </div>
          )}
        </div>

        {/* Summary */}
        {personalInfo.summary && (
          <section className="mb-10">
            <div className="flex gap-4">
              <div
                className="w-2 h-auto"
                style={{ backgroundColor: colors.accent }}
              />
              <div className="flex-1">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: colors.primary }}
                >
                  PROFILE
                </h3>
                <p className="leading-relaxed">{personalInfo.summary}</p>
              </div>
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-10">
            <div className="flex gap-4">
              <div
                className="w-2 h-auto"
                style={{ backgroundColor: colors.primary }}
              />
              <div className="flex-1">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: colors.primary }}
                >
                  EXPERIENCE
                </h3>
                <div className="space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.id}>
                      <div
                        className="inline-block px-4 py-1 mb-2"
                        style={{ backgroundColor: `${colors.accent}20` }}
                      >
                        <span
                          className="font-bold"
                          style={{ color: colors.accent }}
                        >
                          {exp.startDate} -{" "}
                          {exp.current ? "Present" : exp.endDate}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold">{exp.position}</h4>
                      <p
                        className="font-semibold mb-2"
                        style={{ color: colors.secondary }}
                      >
                        {exp.company}
                      </p>
                      <ul className="space-y-1 text-sm">
                        {exp.description.map((desc, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span style={{ color: colors.primary }}>▪</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-8">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <div className="flex gap-4">
                <div
                  className="w-2 h-auto"
                  style={{ backgroundColor: colors.accent }}
                />
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: colors.primary }}
                  >
                    SKILLS
                  </h3>
                  <div className="space-y-3">
                    {skills.map((skillGroup, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-sm mb-2">
                          {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIdx) => (
                            <span
                              key={skillIdx}
                              className="px-3 py-1 text-xs font-medium"
                              style={{
                                backgroundColor: `${colors.primary}15`,
                                color: colors.primary,
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <div className="flex gap-4">
                <div
                  className="w-2 h-auto"
                  style={{ backgroundColor: colors.secondary }}
                />
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: colors.primary }}
                  >
                    EDUCATION
                  </h3>
                  <div className="space-y-4">
                    {education.map((edu) => (
                      <div key={edu.id}>
                        <h4 className="font-bold">{edu.degree}</h4>
                        <p style={{ color: colors.secondary }}>
                          {edu.institution}
                        </p>
                        <p
                          className="text-sm"
                          style={{ color: colors.secondary }}
                        >
                          {edu.graduationDate}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
