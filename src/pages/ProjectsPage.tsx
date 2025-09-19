import React, { useState } from 'react';

const ProjectsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional');

  return (
    <section id="projects" className="min-h-screen bg-stone-500 text-white p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 text-lime-300">Projects</h2>
        <div className="mb-8">
          <button
            className={`px-6 py-3 rounded-t-lg text-xl font-semibold ${
              activeTab === 'professional' ? 'bg-stone-700 text-lime-300' : 'bg-stone-600 text-gray-300 hover:text-white'
            }`}
            onClick={() => setActiveTab('professional')}
          >
            Professional
          </button>
          <button
            className={`px-6 py-3 rounded-t-lg text-xl font-semibold ${
              activeTab === 'personal' ? 'bg-stone-700 text-lime-300' : 'bg-stone-600 text-gray-300 hover:text-white'
            }`}
            onClick={() => setActiveTab('personal')}
          >
            Personal
          </button>
        </div>

        <div className="bg-stone-700 bg-opacity-75 p-8 rounded-lg shadow-lg min-h-[50vh]">
          {activeTab === 'professional' && (
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-lime-200">Professional Projects</h3>
              <p className="text-lg">
                Placeholder for professional projects. Details about client work, team projects, and industry solutions will go here.
              </p>
              {/* Add more professional project details here */}
            </div>
          )}
          {activeTab === 'personal' && (
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-lime-200">Personal Projects</h3>
              <p className="text-lg">
                Placeholder for personal projects. This section will showcase side projects, open-source contributions, and personal learning endeavors.
              </p>
              {/* Add more personal project details here */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;