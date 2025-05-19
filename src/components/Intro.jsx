import React from "react";
import meet from "/assets/meet.jpg";

function Intro() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-normal pt-20 pb-6 md:gap-28">
            {/* Text Section */}
            <div className="flex flex-col text-left">
                <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Meet Patel</h1>
                <p className="text-base md:text-xl mb-3 font-medium">Software & Data Engineer</p>
                <p className="text-sm max-w-xl mb-6 font-medium text-stone-500 dark:text-stone-400">
                    Hey there! I'm a third-year Computer Science student at McMaster University, passionate about all things data, from engineering pipelines to uncovering insights through analytics. I'm big on solving complex problems, especially when it involves cloud tech (AWS, GCP) or machine learning. I am always looking for opportunities to enhance my skills and gain practical industry experience. <br></br><br></br>Currently looking for a 2026 Winter Internship in areas such as Software Engineering, Data Engineering and AI/ML, let's connect!
                </p>
            </div>
            <img
                src={meet} // Replace with actual image path
                alt="Meet Patel"
                className="w-60 h-60 rounded-full object-cover flex-shrink-0"
            />

        </div>
    );
}

export default Intro;