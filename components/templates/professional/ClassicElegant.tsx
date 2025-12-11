import { ResumeData, StyleConfig } from "@/lib/types/resume";

interface Props {
  data: ResumeData;
  style: StyleConfig;
}

export default function ClassicElegant({ data, style }: Props) {
  const {
    personalInfo,
    experience,
    education,
    skills,
    certifications,
    awards,
    hobbies,
  } = data;
  const { colors } = style;

  return (
    <div
      className="w-[210mm] min-h-[297mm] bg-white p-16 shadow-lg"
      style={{ fontFamily: "Georgia, serif", color: "#2c3e50" }}
    >
      {/* Traditional Header */}
      <header className="text-center mb-8 pb-6 border-b-2 border-gray-800">
        <h1 className="text-4xl mb-2 tracking-wide" style={{ fontWeight: 400 }}>
          {personalInfo.name}
        </h1>
        <p className="text-lg italic mb-4" style={{ color: colors.secondary }}>
          {personalInfo.title}
        </p>
        <div className="flex justify-center gap-4 text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>◆</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>◆</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </header>

      {/* Professional Summary */}
      {personalInfo.summary && (
        <section className="mb-8">
          <h2 className="text-xl mb-3 pb-1 border-b border-gray-400">
            Professional Summary
          </h2>
          <p className="text-justify leading-relaxed">{personalInfo.summary}</p>
        </section>
      )}

      {/* Professional Experience */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl mb-4 pb-1 border-b border-gray-400">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.position}</h3>
                    <p className="italic">{exp.company}</p>
                  </div>
                  <p className="text-sm">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </p>
                </div>
                <ul className="list-none space-y-1 ml-4">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="relative pl-4">
                      <span className="absolute left-0">–</span>
                      {desc}
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
        <section className="mb-8">
          <h2 className="text-xl mb-4 pb-1 border-b border-gray-400">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between">
                <div>
                  <h3 className="font-semibold">
                    {edu.degree}, {edu.field}
                  </h3>
                  <p className="italic">{edu.institution}</p>
                  {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                </div>
                <p className="text-sm">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl mb-4 pb-1 border-b border-gray-400">
            Skills & Competencies
          </h2>
          <div className="space-y-2">
            {skills.map((skillGroup, idx) => (
              <p key={idx}>
                <span className="font-semibold">{skillGroup.category}:</span>{" "}
                {skillGroup.items.join(", ")}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl mb-4 pb-1 border-b border-gray-400">
            Professional Certifications
          </h2>
          <ul className="space-y-2">
            {certifications.map((cert) => (
              <li key={cert.id}>
                <span className="font-semibold">{cert.name}</span>,{" "}
                {cert.issuer} ({cert.date})
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Awards & Honors */}
      {awards && awards.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl mb-4 pb-1 border-b border-gray-400">
            Awards & Honors
          </h2>
          <ul className="space-y-2">
            {awards.map((award, idx) => (
              <li key={idx}>
                <span className="font-semibold">{award.title}</span>,{" "}
                {award.issuer} ({award.date})
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Hobbies & Interests */}
      {hobbies && hobbies.length > 0 && (
        <section>
          <h2 className="text-xl mb-4 pb-1 border-b border-gray-400">
            Hobbies & Interests
          </h2>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby, idx) => (
              <span
                key={idx}
                className="text-gray-700 bg-gray-100 px-3 py-1 rounded"
              >
                {hobby}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
