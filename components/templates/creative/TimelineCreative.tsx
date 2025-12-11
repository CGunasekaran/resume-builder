import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function TimelineCreative({ data, style }: Props) {
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
      {/* Compact Header */}
      <header className="px-12 pt-12 pb-6">
        <h1
          className="text-5xl font-bold mb-2"
          style={{ color: colors.primary }}
        >
          {personalInfo.name}
        </h1>
        <p className="text-xl mb-4" style={{ color: colors.secondary }}>
          {personalInfo.title}
        </p>
        <div className="flex gap-4 text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
        </div>
      </header>

      {/* Horizontal Timeline */}
      <div className="px-12 mb-8">
        {personalInfo.summary && (
          <p
            className="mb-8 text-sm leading-relaxed"
            style={{ color: colors.secondary }}
          >
            {personalInfo.summary}
          </p>
        )}

        {/* Career Timeline */}
        {experience.length > 0 && (
          <section className="mb-10">
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: colors.primary }}
            >
              Career Timeline
            </h3>

            {/* Timeline bar */}
            <div className="relative">
              <div
                className="absolute top-8 left-0 right-0 h-1"
                style={{ backgroundColor: `${colors.primary}30` }}
              />

              <div className="relative flex justify-between">
                {experience.map((exp, idx) => (
                  <div key={exp.id} className="relative flex-1 px-2">
                    {/* Timeline node */}
                    <div className="flex flex-col items-center mb-4">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg"
                        style={{
                          backgroundColor:
                            idx % 2 === 0 ? colors.primary : colors.accent,
                        }}
                      >
                        {exp.startDate.split("-")[0]}
                      </div>
                      <div
                        className="w-0.5 h-12 mt-2"
                        style={{ backgroundColor: colors.primary }}
                      />
                    </div>

                    {/* Experience card */}
                    <div
                      className="p-4 rounded-lg shadow-sm text-center"
                      style={{
                        backgroundColor: `${
                          idx % 2 === 0 ? colors.primary : colors.accent
                        }10`,
                      }}
                    >
                      <h4 className="font-bold text-sm mb-1">{exp.position}</h4>
                      <p
                        className="text-xs mb-2"
                        style={{ color: colors.secondary }}
                      >
                        {exp.company}
                      </p>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: colors.primary }}
                      >
                        {exp.startDate} - {exp.current ? "Now" : exp.endDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed descriptions below */}
              <div className="mt-8 space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <h4 className="font-bold mb-2">
                      {exp.position} - {exp.company}
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span style={{ color: colors.primary }}>•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom section */}
        <div className="grid grid-cols-2 gap-8 mt-8">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: colors.primary }}
              >
                Skills
              </h3>
              <div className="space-y-3">
                {skills.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-sm mb-2">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3 py-1 text-xs rounded-full"
                          style={{
                            backgroundColor: `${colors.primary}20`,
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
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: colors.primary }}
              >
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-bold">{edu.degree}</h4>
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
