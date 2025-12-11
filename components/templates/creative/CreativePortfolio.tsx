import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function CreativePortfolio({ data, style }: Props) {
  const {
    personalInfo,
    experience,
    education,
    skills,
    certifications,
    projects,
    awards,
    hobbies,
  } = data;
  const { colors, fontSize, fontFamily } = style;

  return (
    <div
      className="w-[210mm] min-h-[297mm] bg-white shadow-lg"
      style={{
        fontFamily: fontFamily,
        fontSize: `${fontSize.body}px`,
        color: colors.text,
      }}
    >
      {/* Creative Header with Gradient */}
      <header
        className="relative p-12 pb-16"
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
          color: "#ffffff",
        }}
      >
        <div className="relative z-10">
          <div className="inline-block mb-4">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              {personalInfo.name.charAt(0)}
            </div>
          </div>
          <h1
            className="font-black mb-2 leading-tight"
            style={{ fontSize: `${fontSize.name}px` }}
          >
            {personalInfo.name}
          </h1>
          <h2
            className="text-xl font-light tracking-wide mb-6"
            style={{ opacity: 0.95 }}
          >
            {personalInfo.title}
          </h2>
          <div className="flex flex-wrap gap-6 text-sm font-light">
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {personalInfo.email}
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {personalInfo.phone}
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {personalInfo.location}
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                {personalInfo.website}
              </div>
            )}
          </div>
        </div>

        {/* Decorative circles */}
        <div
          className="absolute top-10 right-10 w-32 h-32 rounded-full"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        />
        <div
          className="absolute bottom-5 right-32 w-20 h-20 rounded-full"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        />
      </header>

      <div className="px-12 py-8">
        {/* Summary with Creative Box */}
        {personalInfo.summary && (
          <section className="mb-10">
            <div
              className="p-6 rounded-lg relative overflow-hidden"
              style={{
                backgroundColor: `${colors.primary}10`,
                borderLeft: `4px solid ${colors.primary}`,
              }}
            >
              <p className="leading-relaxed text-base italic">
                "{personalInfo.summary}"
              </p>
            </div>
          </section>
        )}

        <div className="grid grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="col-span-2 space-y-8">
            {/* Experience with Timeline */}
            {experience.length > 0 && (
              <section>
                <h3
                  className="font-bold text-2xl mb-6 flex items-center gap-3"
                  style={{ color: colors.primary }}
                >
                  <div
                    className="w-2 h-8 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                  />
                  Professional Journey
                </h3>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={exp.id} className="relative">
                      {/* Timeline connector */}
                      {index !== experience.length - 1 && (
                        <div
                          className="absolute left-6 top-12 bottom-0 w-0.5"
                          style={{ backgroundColor: `${colors.primary}30` }}
                        />
                      )}

                      <div className="flex gap-4">
                        {/* Timeline dot */}
                        <div className="flex-shrink-0 mt-1">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                            style={{
                              backgroundColor: `${colors.primary}20`,
                              color: colors.primary,
                            }}
                          >
                            {exp.startDate.split("-")[0].slice(-2)}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-bold text-lg">
                                {exp.position}
                              </h4>
                              <p
                                className="font-semibold"
                                style={{ color: colors.secondary }}
                              >
                                {exp.company}
                              </p>
                            </div>
                            <span
                              className="text-sm px-3 py-1 rounded-full"
                              style={{
                                backgroundColor: `${colors.accent}20`,
                                color: colors.accent,
                              }}
                            >
                              {exp.startDate} -{" "}
                              {exp.current ? "Present" : exp.endDate}
                            </span>
                          </div>
                          <ul className="space-y-2 mt-3">
                            {exp.description.map((desc, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span
                                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: colors.primary }}
                                />
                                <span className="text-sm leading-relaxed">
                                  {desc}
                                </span>
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

            {/* Projects */}
            {projects && projects.length > 0 && (
              <section>
                <h3
                  className="font-bold text-2xl mb-6 flex items-center gap-3"
                  style={{ color: colors.primary }}
                >
                  <div
                    className="w-2 h-8 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                  />
                  Featured Projects
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="p-4 rounded-lg border-2 hover:shadow-md transition-shadow"
                      style={{ borderColor: `${colors.primary}30` }}
                    >
                      <h4 className="font-bold text-base mb-2">
                        {project.name}
                      </h4>
                      <p className="text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded"
                            style={{
                              backgroundColor: `${colors.accent}15`,
                              color: colors.accent,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-8">
            {/* Skills with Progress-like design */}
            {skills.length > 0 && (
              <section>
                <h3
                  className="font-bold text-xl mb-4"
                  style={{ color: colors.primary }}
                >
                  Expertise
                </h3>
                <div className="space-y-4">
                  {skills.map((skillGroup, idx) => (
                    <div key={idx}>
                      <h4
                        className="font-semibold text-sm mb-2"
                        style={{ color: colors.secondary }}
                      >
                        {skillGroup.category}
                      </h4>
                      <div className="space-y-2">
                        {skillGroup.items.map((skill, skillIdx) => (
                          <div
                            key={skillIdx}
                            className="px-3 py-2 rounded text-sm font-medium"
                            style={{
                              backgroundColor: `${colors.primary}10`,
                              borderLeft: `3px solid ${colors.primary}`,
                            }}
                          >
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
                  className="font-bold text-xl mb-4"
                  style={{ color: colors.primary }}
                >
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: `${colors.accent}10` }}
                    >
                      <div
                        className="text-xs font-semibold mb-1"
                        style={{ color: colors.accent }}
                      >
                        {edu.graduationDate}
                      </div>
                      <h4 className="font-bold text-sm mb-1">{edu.degree}</h4>
                      <p
                        className="text-sm"
                        style={{ color: colors.secondary }}
                      >
                        {edu.institution}
                      </p>
                      {edu.gpa && (
                        <p className="text-xs mt-1">GPA: {edu.gpa}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <section className="mb-8">
                <h3
                  className="font-bold text-xl mb-4"
                  style={{ color: colors.primary }}
                >
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="border-l-3 pl-3"
                      style={{ borderColor: colors.accent }}
                    >
                      <h4 className="font-semibold text-sm">{cert.name}</h4>
                      <p
                        className="text-xs"
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
                <h3
                  className="font-bold text-xl mb-4"
                  style={{ color: colors.primary }}
                >
                  Awards & Honors
                </h3>
                <div className="space-y-3">
                  {awards.map((award, idx) => (
                    <div
                      key={idx}
                      className="border-l-3 pl-3"
                      style={{ borderColor: colors.accent }}
                    >
                      <h4 className="font-semibold text-sm">{award.title}</h4>
                      <p
                        className="text-xs"
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
                <h3
                  className="font-bold text-xl mb-4"
                  style={{ color: colors.primary }}
                >
                  Hobbies & Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-2 rounded-full text-sm text-white"
                      style={{ backgroundColor: colors.accent }}
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
