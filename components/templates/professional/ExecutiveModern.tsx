import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function ExecutiveModern({ data, style }: Props) {
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
      {/* Elegant Header */}
      <header
        className="px-16 pt-16 pb-8 border-b-4"
        style={{ borderColor: colors.primary }}
      >
        <h1
          className="text-5xl font-bold mb-3 tracking-tight"
          style={{ color: colors.primary }}
        >
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl mb-6" style={{ color: colors.secondary }}>
          {personalInfo.title}
        </h2>

        <div className="flex gap-8 text-sm">
          {personalInfo.email && (
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors.primary }}
              />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors.primary }}
              />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors.primary }}
              />
              <span>{personalInfo.location}</span>
            </div>
          )}
        </div>
      </header>

      <div className="px-16 py-10">
        {/* Executive Summary */}
        {personalInfo.summary && (
          <section className="mb-12">
            <h3
              className="text-sm uppercase tracking-widest mb-4 font-bold"
              style={{ color: colors.primary }}
            >
              Executive Profile
            </h3>
            <p
              className="text-lg leading-relaxed"
              style={{ color: colors.text }}
            >
              {personalInfo.summary}
            </p>
          </section>
        )}

        {/* Core Competencies */}
        {skills.length > 0 && (
          <section className="mb-12">
            <h3
              className="text-sm uppercase tracking-widest mb-6 font-bold"
              style={{ color: colors.primary }}
            >
              Core Competencies
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {skills
                .flatMap((s) => s.items)
                .map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div
                      className="w-1.5 h-1.5 rotate-45"
                      style={{ backgroundColor: colors.primary }}
                    />
                    <span>{skill}</span>
                  </div>
                ))}
            </div>
          </section>
        )}

        {/* Professional Experience */}
        {experience.length > 0 && (
          <section className="mb-12">
            <h3
              className="text-sm uppercase tracking-widest mb-6 font-bold"
              style={{ color: colors.primary }}
            >
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-3">
                    <div>
                      <h4 className="text-xl font-bold mb-1">{exp.position}</h4>
                      <p
                        className="text-lg font-semibold"
                        style={{ color: colors.secondary }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className="font-semibold"
                        style={{ color: colors.primary }}
                      >
                        {exp.startDate} -{" "}
                        {exp.current ? "Present" : exp.endDate}
                      </p>
                      {exp.location && (
                        <p
                          className="text-sm"
                          style={{ color: colors.secondary }}
                        >
                          {exp.location}
                        </p>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: colors.primary }}
                        />
                        <span className="leading-relaxed">{desc}</span>
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
          <section>
            <h3
              className="text-sm uppercase tracking-widest mb-6 font-bold"
              style={{ color: colors.primary }}
            >
              Education
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h4 className="font-bold text-lg">{edu.degree}</h4>
                  <p
                    className="font-semibold"
                    style={{ color: colors.secondary }}
                  >
                    {edu.field}
                  </p>
                  <p style={{ color: colors.secondary }}>{edu.institution}</p>
                  <p className="text-sm" style={{ color: colors.secondary }}>
                    {edu.graduationDate}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
