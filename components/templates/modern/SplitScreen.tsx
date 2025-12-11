import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function SplitScreen({ data, style }: Props) {
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
      className="w-[210mm] min-h-[297mm] bg-white flex shadow-lg"
      style={{ fontFamily: fontFamily }}
    >
      {/* Left Half - Dark */}
      <div
        className="w-1/2 p-12 text-white"
        style={{ backgroundColor: colors.primary }}
      >
        {/* Profile */}
        <div className="mb-10">
          <div className="w-32 h-32 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-5xl font-black mb-6">
            {personalInfo.name.charAt(0)}
          </div>
          <h1 className="text-4xl font-black mb-2 leading-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl font-light opacity-90">
            {personalInfo.title}
          </h2>
        </div>

        {/* Contact */}
        <section className="mb-10">
          <h3 className="text-sm uppercase tracking-wider mb-4 font-bold opacity-70">
            Contact
          </h3>
          <div className="space-y-3 text-sm">
            {personalInfo.email && (
              <div className="flex items-start gap-3">
                <span className="opacity-70">📧</span>
                <span className="break-words">{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-start gap-3">
                <span className="opacity-70">📱</span>
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-start gap-3">
                <span className="opacity-70">📍</span>
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-start gap-3">
                <span className="opacity-70">💼</span>
                <span className="break-words">{personalInfo.linkedin}</span>
              </div>
            )}
          </div>
        </section>

        {/* Skills */}
        {skills.length > 0 && (
          <section className="mb-10">
            <h3 className="text-sm uppercase tracking-wider mb-4 font-bold opacity-70">
              Skills & Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h4 className="font-bold mb-2 text-sm">
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, skillIdx) => (
                      <div key={skillIdx} className="flex items-center gap-2">
                        <div className="flex-1">
                          <div className="text-sm mb-1">{skill}</div>
                          <div className="h-1 bg-white bg-opacity-20 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-white rounded-full"
                              style={{ width: `${80 + Math.random() * 20}%` }}
                            />
                          </div>
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
            <h3 className="text-sm uppercase tracking-wider mb-4 font-bold opacity-70">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="font-bold">{edu.degree}</div>
                  <div className="text-sm opacity-90">{edu.field}</div>
                  <div className="text-sm opacity-75">{edu.institution}</div>
                  <div className="text-xs opacity-60 mt-1">
                    {edu.graduationDate}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Right Half - Light */}
      <div className="w-1/2 p-12" style={{ color: colors.text }}>
        {/* Summary */}
        {personalInfo.summary && (
          <section className="mb-10">
            <h3
              className="text-xl font-bold mb-4 uppercase tracking-wide"
              style={{ color: colors.primary }}
            >
              Profile
            </h3>
            <p className="leading-relaxed" style={{ color: colors.secondary }}>
              {personalInfo.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h3
              className="text-xl font-bold mb-6 uppercase tracking-wide"
              style={{ color: colors.primary }}
            >
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="mb-3">
                    <h4 className="text-lg font-bold">{exp.position}</h4>
                    <p
                      className="font-semibold"
                      style={{ color: colors.primary }}
                    >
                      {exp.company}
                    </p>
                    <p className="text-sm" style={{ color: colors.secondary }}>
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-sm">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: colors.primary }}
                        />
                        <span style={{ color: colors.secondary }}>{desc}</span>
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
  );
}
