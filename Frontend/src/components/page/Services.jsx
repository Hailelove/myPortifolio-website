// import {
//   Code2,
//   Database,
//   Wrench,
//   Layers,
//   Briefcase,
//   Award,
// } from "lucide-react";
// import Section from "../ui/Section";

// const SERVICES = [
//   {
//     icon: Code2,
//     title: "Web Development",
//     desc: "Modern, responsive websites and SPAs built with React and Next.js.",
//   },
//   {
//     icon: Layers,
//     title: "Mobile App Development",
//     desc: "Cross-platform mobile apps using React Native.",
//   },
//   {
//     icon: Wrench,
//     title: "UI/UX Design",
//     desc: "User-centered interfaces that balance beauty and usability.",
//   },
//   {
//     icon: Database,
//     title: "Database Design",
//     desc: "Optimized schemas for PostgreSQL, MySQL, and MongoDB.",
//   },
//   {
//     icon: Briefcase,
//     title: "API Development",
//     desc: "Robust REST and GraphQL APIs with Node.js, Express, and NestJS.",
//   },
//   {
//     icon: Award,
//     title: "System Analysis",
//     desc: "Architecture, planning, and technical consulting for complex systems.",
//   },
// ];

// export default function Services() {
//   return (
//     <Section id="services" eyebrow="Services" title="What I do">
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {SERVICES.map((service, i) => {
//           const Icon = service.icon;
//           return (
//             <div
//               key={i}
//               className="p-8 rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
//             >
//               <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
//                 <Icon className="h-7 w-7 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold mb-3">{service.title}</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 {service.desc}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </Section>
//   );
// }
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Wrench,
  Layers,
  Briefcase,
  Award,
} from "lucide-react";
import Section from "../ui/Section";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern, responsive websites and SPAs built with React and Next.js.",
  },
  {
    icon: Layers,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps using React Native.",
  },
  {
    icon: Wrench,
    title: "UI/UX Design",
    desc: "User-centered interfaces that balance beauty and usability.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Optimized schemas for PostgreSQL, MySQL, and MongoDB.",
  },
  {
    icon: Briefcase,
    title: "API Development",
    desc: "Robust REST and GraphQL APIs with Node.js, Express, and NestJS.",
  },
  {
    icon: Award,
    title: "System Analysis",
    desc: "Architecture, planning, and technical consulting for complex systems.",
  },
];

export default function Services() {
  return (
    <Section id="services" eyebrow="Services" title="What I do">
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12"
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative p-8 rounded-3xl border border-border bg-card shadow-sm transition-colors hover:border-primary/50 dark:bg-white/5 dark:border-white/10 dark:hover:border-white/30 overflow-hidden"
            >
              {/* Subtle background gradient reveal on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5" />

              <div className="relative z-10">
                {/* Icon Container with color inversion on hover */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 dark:bg-white/10 dark:group-hover:bg-cyan-500">
                  <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground dark:text-cyan-400 dark:group-hover:text-slate-900" />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-cyan-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground dark:text-slate-300 leading-relaxed transition-colors duration-300">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
