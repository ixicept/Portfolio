import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
    title: string;
    location: string;
    timeframe: string;
    skills: string[];
    description: string;
    progress?: number; 
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, location, timeframe, skills, description, progress }) => {
    return (
        <motion.div
            className="bg-stone-700 p-6 rounded-xl shadow-lg mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="text-2xl font-bold text-lime-300">{title}</h3>
            <div className="text-gray-200 text-sm mb-2">
                {location} | {timeframe}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill, idx) => (
                    <span key={idx} className="bg-lime-300 text-stone-900 px-2 py-1 rounded text-xs font-medium">
                        {skill}
                    </span>
                ))}
            </div>

            <p className="text-gray-200">{description}</p>

            {progress !== undefined && (
                <div className="mt-4 bg-stone-600 rounded-full h-2">
                    <div
                        className="bg-lime-300 h-2 rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}
        </motion.div>
    );
};

export default ExperienceCard;
