import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function GradientModern({ data, style }: Props) {
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
      {/* Gradient Header */}
      <header
        className="p-12 text-white relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
        }}
      >
        {/* Gradient overlay patterns */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, white 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          <h1 className="text-5xl font-black mb-3">{personalInfo.name}</h1>
          <h2 className="text-2xl font-light mb-6 opacity-95">
            {personalInfo.title}
          </h2>

          <div className="flex gap-6 text-sm">
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  ✉
                </div>
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  ☎
                </div>
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  📍
                </div>
                <span>{personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="p-12">
        {/* Summary */}
        {personalInfo.summary && (
          <section className="mb-10">
            <div
              className="p-6 rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}10 0%, ${colors.accent}10 100%)`,
              }}
            >
              <p className="leading-relaxed text-lg">{personalInfo.summary}</p>
            </div>
          </section>
        )}

        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-8">
            {/* Experience */}
            {experience.length > 0 && (
              <section>
                <h3
                  className="text-3xl font-bold mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Experience
                </h3>
                <div className="space-y-6">
                  {experience.map((exp, idx) => (
                    <div key={exp.id} className="relative pl-6">
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                        style={{
                          background: `linear-gradient(180deg, ${colors.primary}, ${colors.accent})`,
                        }}
                      />
                      <h4 className="text-xl font-bold mb-1">{exp.position}</h4>
                      <p
                        className="font-semibold mb-2"
                        style={{ color: colors.primary }}
                      >
                        {exp.company}
                      </p>
                      <p
                        className="text-sm mb-3"
                        style={{ color: colors.secondary }}
                      >
                        {exp.startDate} -{" "}
                        {exp.current ? "Present" : exp.endDate}
                      </p>
                      <ul className="space-y-1 text-sm">
                        {exp.description.map((desc, descIdx) => (
                          <li key={descIdx} className="flex gap-2">
                            <span style={{ color: colors.accent }}>●</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills with gradient progress */}
            {skills.length > 0 && (
              <section>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Skills
                </h3>
                <div className="space-y-4">
                  {skills.map((skillGroup, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-sm mb-3">
                        {skillGroup.category}
                      </h4>
                      <div className="space-y-2">
                        {skillGroup.items.map((skill, skillIdx) => (
                          <div key={skillIdx}>
                            <div className="text-xs mb-1">{skill}</div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
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

            {/* Education */}
            {education.length > 0 && (
              <section>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-4 rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}10, ${colors.accent}10)`,
                      }}
                    >
                      <h4 className="font-bold text-sm mb-1">{edu.degree}</h4>
                      <p className="text-sm mb-1">{edu.field}</p>
                      <p
                        className="text-xs"
                        style={{ color: colors.secondary }}
                      >
                        {edu.institution}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: colors.secondary }}
                      >
                        {edu.graduationDate}
                      </p>
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
