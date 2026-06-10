import Section from "../ui/Section";

const EXPERIENCE = [
  {
    role: " Full-Stack Developer",
    company: "#",
    time: "2023 — Present",
    desc: "Lead development of scalable SaaS platforms serving 50k+ users. Architect REST/GraphQL APIs, mentor junior devs, and drive code quality.",
  },
  {
    role: "Full-Stack Developer",
    company: "#",
    time: "#",
    desc: "Built modular React frontends and Node.js microservices. Improved page load times by 60% and shipped 12+ production features.",
  },
  {
    role: "Software Engineer",
    company: "#",
    time: "2019 — 2021",
    desc: "Developed school and inventory management systems used by 20+ institutions across the region.",
  },
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="My career journey">
      <div className="space-y-10">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-border pb-10 last:border-0 last:pb-0"
          >
            <div className="md:w-1/4 flex-shrink-0 text-sm text-muted-foreground font-medium mt-1">
              {exp.time}
            </div>
            <div>
              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <p className="text-primary font-semibold mb-4 text-lg">
                {exp.company}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
