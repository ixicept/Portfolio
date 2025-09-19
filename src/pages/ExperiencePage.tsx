import React from 'react';

const ExperiencePage: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen bg-stone-600 text-white p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 text-lime-300">Experience</h2>
        <div className="max-h-[70vh] overflow-y-auto bg-stone-700 bg-opacity-75 p-6 rounded-lg shadow-lg">
          <div className="mb-8 text-left">
            <h3 className="text-3xl font-semibold mb-2 text-lime-200">Year 2023 - Present: Senior Software Engineer</h3>
            <p className="text-lg">
              Developed and maintained scalable web applications using React, Node.js, and TypeScript.
              Implemented new features, optimized performance, and collaborated with cross-functional teams.
              Led the migration of legacy systems to modern architectures, resulting in a 30% improvement in system efficiency.
            </p>
          </div>
          <div className="mb-8 text-left">
            <h3 className="text-3xl font-semibold mb-2 text-lime-200">Year 2020 - 2023: Software Engineer</h3>
            <p className="text-lg">
              Contributed to the development of various software projects, focusing on backend services and API design.
              Gained expertise in database management (SQL, NoSQL) and cloud platforms (AWS, Azure).
              Participated in code reviews and mentored junior developers.
            </p>
          </div>
          <div className="mb-8 text-left">
            <h3 className="text-3xl font-semibold mb-2 text-lime-200">Year 2018 - 2020: Junior Developer</h3>
            <p className="text-lg">
              Assisted in the development of client-side applications, learning fundamental programming concepts and best practices.
              Worked on bug fixes, feature enhancements, and documentation.
              Gained initial exposure to agile development methodologies.
            </p>
          </div>
          <div className="mb-8 text-left">
            <h3 className="text-3xl font-semibold mb-2 text-lime-200">Year 2016 - 2018: Internship</h3>
            <p className="text-lg">
              Gained practical experience in software development through various projects.
              Learned about version control, testing, and deployment processes.
              Collaborated with senior developers on small-scale tasks.
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-3xl font-semibold mb-2 text-lime-200">Year 2012 - 2016: University Studies</h3>
            <p className="text-lg">
              Completed a Bachelor's degree in Computer Science, focusing on algorithms, data structures, and software engineering principles.
              Participated in several academic projects, including a final year project on distributed systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;