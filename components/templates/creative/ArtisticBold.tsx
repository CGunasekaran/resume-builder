import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function ArtisticBold({ data, style }: Props) {
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
      className="w-[210mm] min-h-[297mm] bg-white shadow-lg overflow-hidden"
      style={{ fontFamily: fontFamily }}
    >
      {/* Bold Artistic Header */}
      <header
        className="relative p-12 pb-16"
        style={{ backgroundColor: colors.primary }}
      >
        {/* Large decorative elements */}
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20"
          style={{ backgroundColor: colors.accent }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-20"
          style={{ backgroundColor: "white" }}
        />

        <div className="relative z-10">
          <div className="text-white mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 rounded-full bg-white" />
              <div className="w-3 h-3 rounded-full bg-white opacity-70" />
              <div className="w-3 h-3 rounded-full bg-white opacity-40" />
            </div>

            <h1 className="text-7xl font-black mb-4 leading-none">
              {personalInfo.name.split(" ")[0]}
            </h1>
            <h1 className="text-7xl font-black mb-6 leading-none opacity-80">
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </h1>

            <div
              className="inline-block px-6 py-3 text-2xl font-bold"
              style={{ backgroundColor: colors.accent }}
            >
              {personalInfo.title}
            </div>
          </div>
        </div>
      </header>

      {/* Overlapping contact section */}
      <div className="px-12 -mt-8 relative z-20 mb-8">
        <div className="bg-white shadow-2xl rounded-2xl p-6 grid grid-cols-2 gap-4">
          {personalInfo.email && (
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                style={{ backgroundColor: colors.accent }}
              >
                @
              </div>
              <div>
                <div
                  className="text-xs font-bold"
                  style={{ color: colors.secondary }}
                >
                  EMAIL
                </div>
                <div className="text-sm">{personalInfo.email}</div>
              </div>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                style={{ backgroundColor: colors.primary }}
              >
                ☎
              </div>
              <div>
                <div
                  className="text-xs font-bold"
                  style={{ color: colors.secondary }}
                >
                  PHONE
                </div>
                <div className="text-sm">{personalInfo.phone}</div>
              </div>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                style={{ backgroundColor: colors.accent }}
              >
                📍
              </div>
              <div>
                <div
                  className="text-xs font-bold"
                  style={{ color: colors.secondary }}
                >
                  LOCATION
                </div>
                <div className="text-sm">{personalInfo.location}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-12 pb-12">
        {/* Summary with bold styling */}
        {personalInfo.summary && (
          <section className="mb-10">
            <div
              className="text-6xl font-black mb-4 opacity-10"
              style={{ color: colors.primary }}
            >
              "
            </div>
            <p className="text-xl leading-relaxed italic -mt-12 pl-8">
              {personalInfo.summary}
            </p>
          </section>
        )}

        <div className="grid grid-cols-3 gap-8">
          {/* Experience - 2 columns */}
          <div className="col-span-2 space-y-8">
            {experience.length > 0 && (
              <section>
                <h2
                  className="text-4xl font-black mb-6"
                  style={{ color: colors.primary }}
                >
                  EXPERIENCE
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, idx) => (
                    <div key={exp.id} className="relative pl-8">
                      <div
                        className="absolute left-0 top-0 text-5xl font-black opacity-10"
                        style={{ color: colors.accent }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-1">
                          {exp.position}
                        </h3>
                        <p
                          className="text-lg mb-2"
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
                        <ul className="space-y-2">
                          {exp.description.map((desc, descIdx) => (
                            <li key={descIdx} className="flex gap-3">
                              <span
                                className="text-xl font-bold"
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
                <h2
                  className="text-2xl font-black mb-4"
                  style={{ color: colors.primary }}
                >
                  SKILLS
                </h2>
                <div className="space-y-4">
                  {skills.map((skillGroup, idx) => (
                    <div key={idx}>
                      <h3
                        className="text-xs font-bold uppercase mb-2"
                        style={{ color: colors.accent }}
                      >
                        {skillGroup.category}
                      </h3>
                      <div className="space-y-1">
                        {skillGroup.items.map((skill, skillIdx) => (
                          <div key={skillIdx} className="text-sm">
                            • {skill}
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
                <h2
                  className="text-2xl font-black mb-4"
                  style={{ color: colors.primary }}
                >
                  EDUCATION
                </h2>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <h3 className="font-bold text-sm">{edu.degree}</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}
