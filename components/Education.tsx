import React from "react";

import { educationData } from "@/data";
import { Button } from "./ui/MovingBorders";

const Education = () => {
  return (
    <div className="py-20 w-full" id="education">
      <h1 className="heading">
        My <span className="text-purple">Education</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {educationData.map((card, index) => (
          <Button
            key={card.id}
            duration={Math.floor(index * 500) + 10000}
            borderRadius="1.75rem"
            
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="bg-white p-2 rounded-full flex justify-center items-center mx-auto">
                <img
                  src={card.image}
                  alt={card.institution}
                  className="w-16 h-16 lg:w-32 lg:h-32 object-cover rounded-full"
                />
              </div>
              <div className="lg:ms-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h1 className="text-xl md:text-2xl font-bold">{card.degree}</h1>
                {/* <h2 className="text-lg md:text-xl font-semibold text-purple-300">
                  {card.program}
                </h2> */}
                <p className="text-lg md:text-xl text-white-100 mt-3 font-bold">{card.program}</p>
                {/* <p className="text-white-100 mt-1 font-semibold">CGPA: {card.cgpa}</p> */}
                <p className="text-white-100 mt-1 font-semibold">{card.date}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Education;
