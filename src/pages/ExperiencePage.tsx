import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import '../global.css';

const experiences = [
  {
    title: "Senior Software Engineer",
    location: "Binus University / Remote",
    timeframe: "2023 - Present",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    description: "Developed and maintained scalable web applications. Led migration of legacy systems, optimized performance by 30%.",
    progress: 90
  },
  {
    title: "Software Engineer",
    location: "Tech Startup Inc.",
    timeframe: "2020 - 2023",
    skills: ["API Design", "SQL", "NoSQL", "Azure"],
    description: "Worked on backend services, database management, and cloud deployments. Mentored junior developers.",
    progress: 75
  },
  {
    title: "Junior Developer",
    location: "Freelance / Internships",
    timeframe: "2018 - 2020",
    skills: ["Frontend Development", "Debugging", "Agile"],
    description: "Assisted in client-side development, learned agile methodology, fixed bugs, and added small features.",
    progress: 60
  }
];

const ExperiencePage: React.FC = () => {
  return (
    <section className="min-h-screen bg-stone-600 text-white pt-24 px-4 md:px-12 max-h-[80vh] overflow-y-auto scrollbar-custom p-4">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 text-lime-300">Experience</h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
