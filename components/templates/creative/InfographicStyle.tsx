import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function InfographicStyle({ data, style }: Props) {
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
      style={{ fontFamily: fontFamily, color: colors.text }}
    >
      {/* Top Bar with Stats */}
      <div
        className="h-3"
        style={{
          background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.accent} 50%, ${colors.secondary} 100%)`,
        }}
      />

      <div className="p-12">
        {/* Header with Circle Avatar */}
        <header className="flex items-start gap-8 mb-10">
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-black text-white flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
            }}
          >
            {personalInfo.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>

          <div className="flex-1">
            <h1
              className="text-4xl font-black mb-2"
              style={{ color: colors.primary }}
            >
              {personalInfo.name}
            </h1>
            <h2 className="text-xl mb-4" style={{ color: colors.secondary }}>
              {personalInfo.title}
            </h2>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {personalInfo.email && (
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: colors.primary }}
                  >
                    EMAIL
                  </div>
                  <div className="text-xs">{personalInfo.email}</div>
                </div>
              )}
              {personalInfo.phone && (
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${colors.accent}10` }}
                >
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: colors.accent }}
                  >
                    PHONE
                  </div>
                  <div className="text-xs">{personalInfo.phone}</div>
                </div>
              )}
              {personalInfo.location && (
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${colors.secondary}10` }}
                >
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: colors.secondary }}
                  >
                    LOCATION
                  </div>
                  <div className="text-xs">{personalInfo.location}</div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Summary Card */}
        {personalInfo.summary && (
          <section className="mb-8">
            <div
              className="p-6 rounded-xl relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}15, ${colors.accent}15)`,
              }}
            >
              <div className="relative z-10">
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ color: colors.primary }}
                >
                  📊 PROFESSIONAL SUMMARY
                </h3>
                <p className="leading-relaxed">{personalInfo.summary}</p>
              </div>
            </div>
          </section>
        )}

        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-8">
            {/* Experience Timeline */}
            {experience.length > 0 && (
              <section>
                <h3
                  className="font-bold text-2xl mb-6 flex items-center gap-3"
                  style={{ color: colors.primary }}
                >
                  <span className="text-3xl">💼</span>
                  WORK EXPERIENCE
                </h3>

                <div className="space-y-6">
                  {experience.map((exp, idx) => (
                    <div key={exp.id} className="relative">
                      {/* Connection line */}
                      {idx !== experience.length - 1 && (
                        <div
                          className="absolute left-8 top-16 bottom-0 w-1"
                          style={{
                            background: `linear-gradient(180deg, ${colors.primary}, ${colors.accent})`,
                          }}
                        />
                      )}

                      <div className="flex gap-4">
                        {/* Year Badge */}
                        <div className="flex-shrink-0">
                          <div
                            className="w-16 h-16 rounded-full flex flex-col items-center justify-center text-white font-bold border-4 border-white shadow-lg"
                            style={{ backgroundColor: colors.primary }}
                          >
                            <div className="text-xs">20</div>
                            <div className="text-lg leading-none">
                              {exp.startDate.split("-")[0].slice(-2)}
                            </div>
                          </div>
                        </div>

                        {/* Content Card */}
                        <div
                          className="flex-1 p-4 rounded-lg shadow-sm"
                          style={{ backgroundColor: `${colors.primary}05` }}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-bold text-lg">
                                {exp.position}
                              </h4>
                              <p
                                className="font-semibold"
                                style={{ color: colors.primary }}
                              >
                                {exp.company}
                              </p>
                            </div>
                            <span
                              className="px-3 py-1 rounded-full text-xs font-bold text-white"
                              style={{ backgroundColor: colors.accent }}
                            >
                              {exp.startDate} -{" "}
                              {exp.current ? "Now" : exp.endDate}
                            </span>
                          </div>
                          <ul className="space-y-1 text-sm">
                            {exp.description.map((desc, descIdx) => (
                              <li
                                key={descIdx}
                                className="flex items-start gap-2"
                              >
                                <span style={{ color: colors.accent }}>●</span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar with Visual Elements */}
          <div className="space-y-6">
            {/* Skills with Progress Bars */}
            {skills.length > 0 && (
              <section>
                <h3
                  className="font-bold text-xl mb-4 flex items-center gap-2"
                  style={{ color: colors.primary }}
                >
                  <span>⚡</span> SKILLS
                </h3>
                <div className="space-y-4">
                  {skills.map((skillGroup, idx) => (
                    <div key={idx}>
                      <h4
                        className="text-xs font-bold uppercase mb-2 px-2 py-1 inline-block rounded"
                        style={{
                          backgroundColor: `${colors.accent}20`,
                          color: colors.accent,
                        }}
                      >
                        {skillGroup.category}
                      </h4>
                      <div className="space-y-2">
                        {skillGroup.items.map((skill, skillIdx) => (
                          <div key={skillIdx}>
                            <div className="text-xs mb-1">{skill}</div>
                            <div
                              className="h-1.5 rounded-full overflow-hidden"
                              style={{ backgroundColor: `${colors.primary}20` }}
                            >
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${85 + Math.random() * 15}%`,
                                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education Cards */}
            {education.length > 0 && (
              <section>
                <h3
                  className="font-bold text-xl mb-4 flex items-center gap-2"
                  style={{ color: colors.primary }}
                >
                  <span>🎓</span> EDUCATION
                </h3>
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-4 rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}10, ${colors.accent}10)`,
                      }}
                    >
                      <div
                        className="text-xs font-bold mb-1"
                        style={{ color: colors.accent }}
                      >
                        {edu.graduationDate}
                      </div>
                      <div className="font-bold text-sm">{edu.degree}</div>
                      <div
                        className="text-xs"
                        style={{ color: colors.secondary }}
                      >
                        {edu.institution}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
