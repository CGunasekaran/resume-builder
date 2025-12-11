import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function MinimalistElite({ data, style }: Props) {
  const {
    personalInfo,
    experience,
    education,
    skills,
    certifications,
    projects,
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
      {/* Ultra-minimal header */}
      <header className="px-16 pt-16 pb-8">
        <h1
          className="font-light tracking-tight mb-1"
          style={{
            fontSize: `${fontSize.name + 4}px`,
            letterSpacing: "-0.02em",
          }}
        >
          {personalInfo.name}
        </h1>
        <p
          className="font-light mb-6"
          style={{
            fontSize: `${fontSize.heading - 2}px`,
            color: colors.secondary,
            letterSpacing: "0.05em",
          }}
        >
          {personalInfo.title}
        </p>

        {/* Contact - minimal dots separator */}
        <div
          className="flex flex-wrap gap-4 text-xs"
          style={{ color: colors.secondary }}
        >
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && (
            <>
              <span>·</span>
              <span>{personalInfo.phone}</span>
            </>
          )}
          {personalInfo.location && (
            <>
              <span>·</span>
              <span>{personalInfo.location}</span>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              <span>·</span>
              <span>{personalInfo.linkedin}</span>
            </>
          )}
        </div>
      </header>

      <div className="px-16 pb-16">
        {/* Thin divider line */}
        <div
          className="w-12 h-px mb-8"
          style={{ backgroundColor: colors.primary }}
        />

        {/* Summary - if exists */}
        {personalInfo.summary && (
          <section className="mb-12">
            <p
              className="leading-relaxed max-w-3xl"
              style={{ color: colors.secondary }}
            >
              {personalInfo.summary}
            </p>
          </section>
        )}

        {/* Two-column layout for content */}
        <div className="grid grid-cols-12 gap-12">
          {/* Main content - 8 columns */}
          <div className="col-span-8 space-y-10">
            {/* Experience */}
            {experience.length > 0 && (
              <section>
                <h2
                  className="text-xs uppercase tracking-widest mb-6 font-medium"
                  style={{ color: colors.primary, letterSpacing: "0.15em" }}
                >
                  Experience
                </h2>
                <div className="space-y-8">
                  {experience.map((exp) => (
                    <div key={exp.id}>
                      <div className="mb-3">
                        <h3 className="font-semibold text-base mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-baseline gap-3 text-sm">
                          <span style={{ color: colors.secondary }}>
                            {exp.company}
                          </span>
                          <span
                            className="text-xs"
                            style={{ color: colors.secondary }}
                          >
                            {exp.startDate} —{" "}
                            {exp.current ? "Present" : exp.endDate}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((desc, idx) => (
                          <li
                            key={idx}
                            className="text-sm leading-relaxed pl-4 relative"
                            style={{ color: colors.secondary }}
                          >
                            <span
                              className="absolute left-0 top-2"
                              style={{ color: colors.primary }}
                            >
                              —
                            </span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {projects && projects.length > 0 && (
              <section>
                <h2
                  className="text-xs uppercase tracking-widest mb-6 font-medium"
                  style={{ color: colors.primary, letterSpacing: "0.15em" }}
                >
                  Selected Projects
                </h2>
                <div className="space-y-6">
                  {projects.map((project) => (
                    <div key={project.id}>
                      <h3 className="font-semibold text-base mb-2">
                        {project.name}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-2"
                        style={{ color: colors.secondary }}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-0 py-0"
                            style={{ color: colors.primary }}
                          >
                            {tech}
                            {idx < project.technologies.length - 1 && " ·"}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar - 4 columns */}
          <div className="col-span-4 space-y-10">
            {/* Skills */}
            {skills.length > 0 && (
              <section>
                <h2
                  className="text-xs uppercase tracking-widest mb-4 font-medium"
                  style={{ color: colors.primary, letterSpacing: "0.15em" }}
                >
                  Skills
                </h2>
                <div className="space-y-4">
                  {skills.map((skillGroup, idx) => (
                    <div key={idx}>
                      <h3
                        className="text-xs font-semibold mb-2"
                        style={{ color: colors.text }}
                      >
                        {skillGroup.category}
                      </h3>
                      <div className="space-y-1">
                        {skillGroup.items.map((skill, skillIdx) => (
                          <div
                            key={skillIdx}
                            className="text-sm"
                            style={{ color: colors.secondary }}
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
                <h2
                  className="text-xs uppercase tracking-widest mb-4 font-medium"
                  style={{ color: colors.primary, letterSpacing: "0.15em" }}
                >
                  Education
                </h2>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <h3 className="font-semibold text-sm mb-1">
                        {edu.degree}
                      </h3>
                      <p
                        className="text-sm mb-1"
                        style={{ color: colors.secondary }}
                      >
                        {edu.field}
                      </p>
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
                      {edu.gpa && (
                        <p
                          className="text-xs mt-1"
                          style={{ color: colors.secondary }}
                        >
                          GPA: {edu.gpa}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
              <section>
                <h2
                  className="text-xs uppercase tracking-widest mb-4 font-medium"
                  style={{ color: colors.primary, letterSpacing: "0.15em" }}
                >
                  Certifications
                </h2>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.id}>
                      <h3 className="font-semibold text-sm mb-1">
                        {cert.name}
                      </h3>
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
          </div>
        </div>
      </div>

      {/* Minimalist footer line */}
      <div className="px-16 pb-8">
        <div
          className="w-full h-px"
          style={{ backgroundColor: `${colors.primary}30` }}
        />
      </div>
    </div>
  );
}
