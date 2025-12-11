import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function TwoColumnModern({ data, style }: Props) {
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
      style={{
        fontFamily: fontFamily,
        fontSize: `${fontSize.body}px`,
      }}
    >
      {/* Left Sidebar */}
      <aside
        className="w-[35%] p-8"
        style={{ backgroundColor: colors.primary, color: "#ffffff" }}
      >
        {/* Profile */}
        <div className="mb-8">
          <h1 className="font-bold text-2xl mb-2">{personalInfo.name}</h1>
          <h2 className="text-lg opacity-90 mb-4">{personalInfo.title}</h2>
        </div>

        {/* Contact */}
        <section className="mb-8">
          <h3 className="font-bold text-sm uppercase mb-3 border-b-2 border-white pb-2">
            Contact
          </h3>
          <div className="space-y-2 text-sm">
            {personalInfo.email && (
              <p className="break-words">{personalInfo.email}</p>
            )}
            {personalInfo.phone && <p>{personalInfo.phone}</p>}
            {personalInfo.location && <p>{personalInfo.location}</p>}
            {personalInfo.linkedin && (
              <p className="break-words">{personalInfo.linkedin}</p>
            )}
          </div>
        </section>

        {/* Skills */}
        {skills.length > 0 && (
          <section className="mb-8">
            <h3 className="font-bold text-sm uppercase mb-3 border-b-2 border-white pb-2">
              Skills
            </h3>
            <div className="space-y-3">
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-sm mb-1">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {skillGroup.items.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.25)",
                          color: "#ffffff",
                          fontSize: "11px",
                          fontWeight: "500",
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
            <h3 className="font-bold text-sm uppercase mb-3 border-b-2 border-white pb-2">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="text-sm">
                  <p
                    className="font-semibold"
                    style={{ color: "#ffffff", fontSize: "13px" }}
                  >
                    {edu.degree}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.95)",
                      fontSize: "12px",
                    }}
                  >
                    {edu.field}
                  </p>
                  <p
                    style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px" }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px" }}
                  >
                    {edu.graduationDate}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section className="mb-8">
            <h3 className="font-bold text-sm uppercase mb-3 border-b-2 border-white pb-2">
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.id} className="text-sm">
                  <p className="font-semibold">{cert.name}</p>
                  <p className="text-xs opacity-80">{cert.issuer}</p>
                  <p className="text-xs opacity-80">{cert.date}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Awards & Honors */}
        {awards && awards.length > 0 && (
          <section className="mb-8">
            <h3 className="font-bold text-sm uppercase mb-3 border-b-2 border-white pb-2">
              Awards
            </h3>
            <div className="space-y-3">
              {awards.map((award, idx) => (
                <div key={idx} className="text-sm">
                  <p className="font-semibold">{award.title}</p>
                  <p className="text-xs opacity-80">{award.issuer}</p>
                  <p className="text-xs opacity-80">{award.date}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hobbies & Interests */}
        {hobbies && hobbies.length > 0 && (
          <section>
            <h3 className="font-bold text-sm uppercase mb-3 border-b-2 border-white pb-2">
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.25)",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: "500",
                  }}
                >
                  {hobby}
                </span>
              ))}
            </div>
          </section>
        )}
      </aside>

      {/* Right Content */}
      <main className="w-[65%] p-8" style={{ color: colors.text }}>
        {/* Summary */}
        {personalInfo.summary && (
          <section className="mb-8">
            <h3
              className="font-bold text-lg mb-3 uppercase"
              style={{ color: colors.primary }}
            >
              About Me
            </h3>
            <p
              className="leading-relaxed"
              style={{
                color: colors.text,
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {personalInfo.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h3
              className="font-bold text-lg mb-4 uppercase"
              style={{ color: colors.primary }}
            >
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-6 border-l-2"
                  style={{ borderColor: colors.primary }}
                >
                  <div
                    className="absolute left-0 top-0 w-3 h-3 rounded-full -translate-x-[7px]"
                    style={{ backgroundColor: colors.primary }}
                  />
                  <div className="mb-2">
                    <h4 className="font-bold text-base">{exp.position}</h4>
                    <p
                      className="font-medium"
                      style={{ color: colors.secondary }}
                    >
                      {exp.company}
                    </p>
                    <p className="text-sm" style={{ color: colors.secondary }}>
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </p>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
