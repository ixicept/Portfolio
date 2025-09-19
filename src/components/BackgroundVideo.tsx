import React, { useEffect, useState } from "react";

const videos = {
    morning: "../src/assets/morning.mov",
    evening: "../src/assets/evening.mov",
    afternoon: "../src/assets/afternoon.mov",
    night: "../src/assets/night.mov",
};

const transitions = {
    toMorning: "../src/assets/transition1.mov",
    eveningToNight: "../src/assets/transition2.mov",
    nightToMorning: "../src/assets/transition3.mov",
};

const getTimeOfDay = (hour: number, minute: number) => {
    if (hour >= 5 && hour < 12) return "morning";
    if (hour >= 12 && hour < 18) return "afternoon";
    if (hour == 17 && minute >= 59) return "evening";
    return "night";
};

type BackgroundVideoProps = {
    onLoaded?: () => void;
};

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ onLoaded }) => {
    const [timeOfDay, setTimeOfDay] = useState(
        getTimeOfDay(new Date().getHours(), new Date().getMinutes())
    );
    const [videoSrc, setVideoSrc] = useState(videos[timeOfDay as keyof typeof videos]);
    const [isTransition, setIsTransition] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const hour = new Date().getHours();
            const minute = new Date().getMinutes();
            const newTime = getTimeOfDay(hour, minute);

            if (newTime !== timeOfDay && !isTransition) {
                if (timeOfDay === "night" && newTime === "morning") {
                    playTransition("nightToMorning", newTime);
                } else if (timeOfDay === "evening" && newTime === "night") {
                    playTransition("eveningToNight", newTime);
                } else if (newTime === "morning") {
                    playTransition("toMorning", newTime);
                } else {
                    setVideoSrc(videos[newTime as keyof typeof videos]);
                    setTimeOfDay(newTime);
                }
            }
        }, 60 * 1000);

        return () => clearInterval(interval);
    },);

    const playTransition = (transitionKey: keyof typeof transitions, nextTime: string) => {
        setIsTransition(true);
        setVideoSrc(transitions[transitionKey]);
        const video = document.getElementById("bg-video") as HTMLVideoElement;

        if (video) {
            video.onended = () => {
                setIsTransition(false);
                setVideoSrc(videos[nextTime as keyof typeof videos]);
                setTimeOfDay(nextTime);
            };
        }
    };

    return (
        <video
            id="bg-video"
            key={videoSrc}
            src={videoSrc}
            autoPlay
            muted
            loop={!isTransition}
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={onLoaded}  
        />
    );
};

export default BackgroundVideo;
