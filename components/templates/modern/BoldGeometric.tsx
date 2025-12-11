import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function BoldGeometric({ data, style }: Props) {
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
      {/* Geometric Header with Angled Shape */}
      <div className="relative" style={{ height: "180px" }}>
        {/* Main diagonal background */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(165deg, ${colors.primary} 0%, ${colors.primary} 65%, transparent 65%)`,
          }}
        />
        {/* Accent diagonal */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(170deg, transparent 0%, transparent 60%, ${colors.accent} 60%, ${colors.accent} 63%, transparent 63%)`,
          }}
        />

        <div className="relative z-10 px-12 pt-12 text-white">
          <h1 className="font-black text-4xl mb-2 tracking-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl font-light tracking-wide opacity-95">
            {personalInfo.title}
          </h2>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="px-12 -mt-8 mb-8">
        <div
          className="bg-white shadow-lg rounded-lg p-4 flex flex-wrap gap-4 justify-around text-sm"
          style={{ borderTop: `4px solid ${colors.accent}` }}
        >
          {personalInfo.email && (
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <span style={{ color: colors.primary }}>✉</span>
              </div>
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <span style={{ color: colors.primary }}>☎</span>
              </div>
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <span style={{ color: colors.primary }}>📍</span>
              </div>
              <span>{personalInfo.location}</span>
            </div>
          )}
        </div>
      </div>

      <div className="px-12 pb-12">
        {/* Summary with Geometric Accent */}
        {personalInfo.summary && (
          <section className="mb-8">
            <div className="flex items-start gap-4">
              <div
                className="w-1 h-24 mt-1"
                style={{ backgroundColor: colors.accent }}
              />
              <div className="flex-1">
                <h3
                  className="font-bold text-xl mb-3"
                  style={{ color: colors.primary }}
                >
                  ABOUT ME
                </h3>
                <p className="leading-relaxed">{personalInfo.summary}</p>
              </div>
            </div>
          </section>
        )}

        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-8">
            {/* Experience */}
            {experience.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: colors.primary }}
                  >
                    💼
                  </div>
                  <h3
                    className="font-bold text-2xl"
                    style={{ color: colors.primary }}
                  >
                    EXPERIENCE
                  </h3>
                </div>
                <div className="space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.id} className="relative pl-8">
                      <div
                        className="absolute left-0 top-2 w-4 h-4 rotate-45"
                        style={{ backgroundColor: colors.accent }}
                      />
                      <h4 className="font-bold text-lg">{exp.position}</h4>
                      <p
                        className="font-semibold"
                        style={{ color: colors.secondary }}
                      >
                        {exp.company}
                      </p>
                      <p
                        className="text-sm mb-2"
                        style={{ color: colors.secondary }}
                      >
                        {exp.startDate} -{" "}
                        {exp.current ? "Present" : exp.endDate}
                      </p>
                      <ul className="space-y-1 text-sm">
                        {exp.description.map((desc, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span style={{ color: colors.accent }}>▸</span>
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
            {/* Skills */}
            {skills.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    ⚡
                  </div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: colors.primary }}
                  >
                    SKILLS
                  </h3>
                </div>
                <div className="space-y-4">
                  {skills.map((skillGroup, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-sm mb-2">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="px-3 py-1 text-xs font-medium rounded"
                            style={{
                              backgroundColor: `${colors.primary}15`,
                              color: colors.primary,
                              border: `1px solid ${colors.primary}40`,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {education.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    🎓
                  </div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: colors.primary }}
                  >
                    EDUCATION
                  </h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <h4 className="font-bold text-sm">{edu.degree}</h4>
                      <p
                        className="text-sm"
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

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    📜
                  </div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: colors.primary }}
                  >
                    CERTIFICATIONS
                  </h3>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.id}>
                      <h4 className="font-bold text-sm">{cert.name}</h4>
                      <p
                        className="text-sm"
                        style={{ color: colors.secondary }}
                      >
                        {cert.issuer}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: colors.secondary }}
                      >
                        {cert.date}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Awards & Honors */}
            {awards && awards.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    🏆
                  </div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: colors.primary }}
                  >
                    AWARDS & HONORS
                  </h3>
                </div>
                <div className="space-y-4">
                  {awards.map((award, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-sm">{award.title}</h4>
                      <p
                        className="text-sm"
                        style={{ color: colors.secondary }}
                      >
                        {award.issuer}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: colors.secondary }}
                      >
                        {award.date}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Hobbies & Interests */}
            {hobbies && hobbies.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    🎨
                  </div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: colors.primary }}
                  >
                    INTERESTS
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-sm"
                      style={{
                        backgroundColor: `${colors.accent}20`,
                        color: colors.accent,
                        border: `1px solid ${colors.accent}40`,
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
    </div>
  );
}
