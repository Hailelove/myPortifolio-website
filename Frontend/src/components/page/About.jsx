import Section from "../ui/Section";

export default function About() {
  return (
    <Section id="#about" eyebrow="About" title="A bit about me">
      <p className="text-muted-foreground max-w-2xl text-lg">
        Full-Stack Developer specializing in modern web applications using the
        MERN stack. Passionate about building scalable solutions, solving
        real-world problems, and continuously learning emerging technologies to
        create impactful digital experiences.
      </p>
    </Section>
  );
}
