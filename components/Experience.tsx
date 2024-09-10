
"use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { workExperience } from "@/data"; // Adjust the import path accordingly

const Experience = () => {
  return (
    <div className="relative py-20 pt-24" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className="justify-center relative my-16">
        <VerticalTimeline animate={true} lineColor="#ffffff">
          {workExperience.map((experience) => (
            <VerticalTimelineElement
              key={experience.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#000319',
                color: '#fff',
                borderRadius: '10px',
                border: '2px solid #cbacf9',
              }}
              contentArrowStyle={{ borderRight: '7px solid #333' }}
              date={experience.date}
              dateClassName="bg-purple-600 text-white py-1 px-3 rounded-full"
              iconStyle={{ background: '#ffffff', color: '#fff' }}
              icon={
                <img
                  src={experience.thumbnail}
                  alt={experience.company}
                  style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                />
              }
              visible={true}
            >
              <h3 className="text-white text-[22px] font-bold text-center mb-1">{experience.title}</h3>
              <p className="text-[16px] font-semibold text-purple text-center" style={{ margin: 0 }}>
                {experience.company}
              </p>
              {experience.sections.map((section, index) => (
                <div key={index} className="mt-5">
                  {section.heading && (
                    <h4 className="text-white text-center my-5 text-[17px] font-semibold">
                      <a 
                        href= {section.ref}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple hover:underline cursor-pointer font-semibold transition duration-300 ease-in-out transform hover:scale-105"
                      >
                      {section.heading}
                      </a>
                      
                    </h4>
                  )}
                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    {section.desc.map((item, idx) => (
                      <li key={idx} className="text-white-200 text-[14px] pl-1 tracking-wider">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;


