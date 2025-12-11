import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function MagazineLayout({ data, style }: Props) {
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
      {/* Magazine-style Header */}
      <header className="relative overflow-hidden" style={{ height: "220px" }}>
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${colors.primary}, ${colors.primary} 2px, transparent 2px, transparent 10px)`,
          }}
        />

        <div className="relative z-10 h-full flex items-end p-12">
          <div>
            <div
              className="text-xs uppercase tracking-widest mb-2 font-bold"
              style={{ color: colors.accent }}
            >
              Professional Resume
            </div>
            <h1
              className="font-black text-6xl mb-2 leading-none"
              style={{ color: colors.primary }}
            >
              {personalInfo.name.split(" ")[0]}
            </h1>
            <h1
              className="font-black text-6xl mb-4 leading-none"
              style={{ color: colors.text }}
            >
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </h1>
            <div
              className="inline-block px-4 py-2 text-white font-bold"
              style={{ backgroundColor: colors.primary }}
            >
              {personalInfo.title}
            </div>
          </div>
        </div>

        {/* Decorative corner element */}
        <div
          className="absolute top-0 right-0 w-32 h-32"
          style={{
            backgroundColor: colors.accent,
            clipPath: "polygon(100% 0, 100% 100%, 0 0)",
          }}
        />
      </header>

      {/* Contact Strip */}
      <div
        className="px-12 py-4"
        style={{ backgroundColor: `${colors.primary}10` }}
      >
        <div className="flex justify-between text-sm">
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.location}</span>
        </div>
      </div>

      <div className="p-12">
        {/* Pull Quote Style Summary */}
        {personalInfo.summary && (
          <section className="mb-10">
            <div
              className="border-l-8 pl-6 py-2 italic text-lg leading-relaxed"
              style={{ borderColor: colors.accent, color: colors.secondary }}
            >
              "{personalInfo.summary}"
            </div>
          </section>
        )}

        {/* Three Column Layout */}
        <div className="grid grid-cols-12 gap-8">
          {/* Main Article - Experience */}
          <div className="col-span-8">
            {experience.length > 0 && (
              <section>
                <h2
                  className="text-3xl font-black mb-6 uppercase"
                  style={{ color: colors.primary }}
                >
                  Career Journey
                </h2>
                <div className="space-y-8">
                  {experience.map((exp, idx) => (
                    <article key={exp.id}>
                      {/* Article number */}
                      <div
                        className="inline-block w-12 h-12 rounded-full flex items-center justify-center font-black text-xl text-white mb-3"
                        style={{ backgroundColor: colors.accent }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      <h3 className="text-2xl font-bold mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="font-bold uppercase text-sm"
                          style={{ color: colors.primary }}
                        >
                          {exp.company}
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: colors.secondary }}
                        >
                          {exp.startDate} -{" "}
                          {exp.current ? "Present" : exp.endDate}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {exp.description.map((desc, descIdx) => (
                          <p key={descIdx} className="text-sm leading-relaxed">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="col-span-4">
            {/* Skills Section */}
            {skills.length > 0 && (
              <section className="mb-8">
                <h3
                  className="text-xl font-black mb-4 uppercase"
                  style={{ color: colors.primary }}
                >
                  Expertise
                </h3>
                <div className="space-y-4">
                  {skills.map((skillGroup, idx) => (
                    <div key={idx}>
                      <div
                        className="font-bold text-xs uppercase mb-2 px-2 py-1 inline-block"
                        style={{
                          backgroundColor: colors.accent,
                          color: "white",
                        }}
                      >
                        {skillGroup.category}
                      </div>
                      <div className="space-y-1">
                        {skillGroup.items.map((skill, skillIdx) => (
                          <div
                            key={skillIdx}
                            className="text-sm flex items-center gap-2"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: colors.primary }}
                            />
                            {skill}
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
                  className="text-xl font-black mb-4 uppercase"
                  style={{ color: colors.primary }}
                >
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className="border-l-4 pl-3"
                      style={{ borderColor: colors.accent }}
                    >
                      <div className="font-bold text-sm">{edu.degree}</div>
                      <div
                        className="text-sm"
                        style={{ color: colors.secondary }}
                      >
                        {edu.institution}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: colors.secondary }}
                      >
                        {edu.graduationDate}
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
