import React, { useState } from "react"
import ExperienceBook from "../components/ExperienceBook"
// import bgLibrary from "../assets/library-bg.jpg"

const experiences = [
  {
    title: "Junior Laboratory Assistant",
    location: "BINUS University",
    timeframe: "Feb 2024 - Agt 2024",
    description: "Description of first experience and skills learned."
  },
   {
    title: "Junior Laboratory Assistant",
    location: "BINUS University",
    timeframe: "2023 - Present",
    description: "Description of first experience and skills learned."
  },
  {
    title: "Experience 3",
    location: "Location 3",
    timeframe: "2018 - 2020",
    description: "Description of third experience."
  }
]

const ExperiencePage: React.FC = () => {
  const [page, setPage] = useState(0)
  const totalPages = experiences.length
  const current = experiences[page]

  const nextPage = () => setPage((p) => (p + 1 < totalPages ? p + 1 : p))
  const prevPage = () => setPage((p) => (p - 1 >= 0 ? p - 1 : p))

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center"
      // style={{ backgroundImage: `url(${bgLibrary})` }}
    >
      <ExperienceBook
        page={page + 1}
        totalPages={totalPages}
        onPrev={prevPage}
        onNext={nextPage}
      >
        <div>
          <h2 className="font-semibold mb-1 text-3xl">{current.title}</h2>
          <p className="opacity-80 text-base">
            {current.location} • {current.timeframe}
          </p>
          <p className="mt-2 text-xl">{current.description}</p>
        </div>
      </ExperienceBook>
    </div>
  )
}

export default ExperiencePage
