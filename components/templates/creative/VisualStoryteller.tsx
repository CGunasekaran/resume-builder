import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function VisualStoryteller({ data, style }: Props) {
  const {
    personalInfo,
    experience,
    education,
    skills,
    projects,
    certifications,
    awards,
    hobbies,
  } = data;
  const { colors, fontSize, fontFamily } = style;

  const icons = {
    email: "✉️",
    phone: "📱",
    location: "📍",
    web: "🌐",
    work: "💼",
    education: "🎓",
    skills: "⚡",
    projects: "🚀",
  };

  return (
    <div
      className="w-[210mm] min-h-[297mm] bg-white shadow-lg"
      style={{ fontFamily: fontFamily, color: colors.text }}
    >
      {/* Story-style Header */}
      <header
        className="relative p-12"
        style={{
          background: `linear-gradient(to bottom, ${colors.primary}15, transparent)`,
        }}
      >
        <div className="flex items-start gap-6">
          {/* Large initial letter */}
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center text-5xl font-black text-white"
            style={{ backgroundColor: colors.primary }}
          >
            {personalInfo.name.charAt(0)}
          </div>

          <div className="flex-1">
            <h1
              className="text-5xl font-black mb-2"
              style={{ color: colors.primary }}
            >
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl mb-4" style={{ color: colors.secondary }}>
              {personalInfo.title}
            </h2>

            {/* Visual contact info */}
            <div className="flex flex-wrap gap-4">
              {personalInfo.email && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-xl">{icons.email}</span>
                  <span>{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-xl">{icons.phone}</span>
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-xl">{icons.location}</span>
                  <span>{personalInfo.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="px-12 pb-12">
        {/* Story intro */}
        {personalInfo.summary && (
          <section className="mb-10">
            <div
              className="relative p-6 rounded-2xl"
              style={{ backgroundColor: `${colors.accent}10` }}
            >
              <div
                className="text-6xl absolute -top-4 -left-2"
                style={{ color: colors.accent }}
              >
                "
              </div>
              <p className="relative z-10 text-lg leading-relaxed italic">
                {personalInfo.summary}
              </p>
            </div>
          </section>
        )}

        {/* Journey/Experience */}
        {experience.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{icons.work}</span>
              <h3
                className="text-3xl font-bold"
                style={{ color: colors.primary }}
              >
                My Journey
              </h3>
            </div>

            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div key={exp.id} className="flex gap-6">
                  {/* Visual timeline */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                      style={{
                        backgroundColor:
                          idx % 2 === 0 ? colors.primary : colors.accent,
                      }}
                    >
                      {exp.startDate.split("-")[0].slice(-2)}
                    </div>
                    {idx !== experience.length - 1 && (
                      <div
                        className="w-1 flex-1 mt-2"
                        style={{ backgroundColor: `${colors.primary}30` }}
                      />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pb-4">
                    <div
                      className="p-6 rounded-xl shadow-sm"
                      style={{ backgroundColor: `${colors.primary}05` }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-xl font-bold mb-1">
                            {exp.position}
                          </h4>
                          <p
                            className="text-lg font-semibold"
                            style={{ color: colors.primary }}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <span
                          className="px-4 py-2 rounded-full text-sm font-bold text-white"
                          style={{ backgroundColor: colors.accent }}
                        >
                          {exp.startDate} - {exp.current ? "Now" : exp.endDate}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((desc, descIdx) => (
                          <li key={descIdx} className="flex items-start gap-3">
                            <span
                              className="text-xl"
                              style={{ color: colors.accent }}
                            >
                              →
                            </span>
                            <span className="text-sm">{desc}</span>
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

        <div className="grid grid-cols-2 gap-8">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{icons.skills}</span>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: colors.primary }}
                >
                  Skills
                </h3>
              </div>
              <div className="space-y-4">
                {skills.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3 py-2 rounded-lg text-sm font-medium"
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
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{icons.education}</span>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: colors.primary }}
                >
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-4 rounded-xl"
                    style={{ backgroundColor: `${colors.accent}10` }}
                  >
                    <h4 className="font-bold mb-1">{edu.degree}</h4>
                    <p className="text-sm mb-1">{edu.field}</p>
                    <p className="text-sm" style={{ color: colors.secondary }}>
                      {edu.institution}
                    </p>
                    <p className="text-xs" style={{ color: colors.secondary }}>
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
  );
}
