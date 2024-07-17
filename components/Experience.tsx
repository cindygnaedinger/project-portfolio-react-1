import React from "react";
import { Button } from "./ui/MovingBorders";
import { workExperience } from "@/data";
import MagicButton from "./ui/MagicButton";
import { IoDownload } from "react-icons/io5";

const Experience = () => {
  return (
    <div
      id="experience"
      className="py-20 flex flex-col items-center justify-center"
    >
      <h1 className="heading">
        My
        <span className="text-purple"> work experience</span>
      </h1>
      <a href="./resume_CindyGnaedinger.pdf" download>
        <MagicButton
          title="Download my Resume"
          icon={<IoDownload />}
          position="right"
        />
      </a>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(16,4,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(16,4,29,1) 0%, rgba(24,9,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
