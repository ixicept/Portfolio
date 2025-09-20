import React from "react"
import bookSingle from "../assets/book-single.webp"
import bookDouble from "../assets/book-double.webp"
import arrowLeft from "../assets/left-arrow.webp"
import arrowRight from "../assets/right-arrow.webp"

type ExperienceBookProps = {
    page: number
    totalPages: number
    onPrev: () => void
    onNext: () => void
    children?: React.ReactNode
}

const ExperienceBook: React.FC<ExperienceBookProps> = ({
    page,
    totalPages,
    onPrev,
    onNext,
    children
}) => {
    const isDouble = page > 1
    const bookImg = isDouble ? bookDouble : bookSingle

    return (
        <div className="relative flex justify-center items-center mt-24">
            <img
                src={bookImg}
                alt="Minecraft Book"
                className="w-[320px] sm:w-[500px] object-contain drop-shadow-lg"
            />

            <div className="absolute top-11 right-14 text-stone-950 text-sm sm:text-xl select-none">
                Page {page} of {totalPages}
            </div>

            <div
                className={`absolute text-stone-800 tracking-wide leading-relaxed ${
                    isDouble
                        ? "flex w-[480px] sm:w-[760px] justify-between px-8 text-left top-24"
                        : "w-[240px] sm:w-[380px] left-1/2 -translate-x-1/2 px-2 text-left top-24"
                }`}
            >
                {children}
            </div>

            {page > 1 && (
                <button
                    onClick={onPrev}
                    className="absolute bottom-8 left-8 hover:scale-110 transition-transform"
                >
                    <img src={arrowLeft} alt="Previous" className="w-10 sm:w-14 md:w-16" />
                </button>
            )}

            <button
                onClick={onNext}
                className="absolute bottom-8 right-8 hover:scale-110 transition-transform"
            >
                <img src={arrowRight} alt="Next" className="w-10 sm:w-14 md:w-16" />
            </button>
        </div>
    )
}

export default ExperienceBook
