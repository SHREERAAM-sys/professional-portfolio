"use client";

import React, { useRef } from 'react';
import { Grid2, Card, CardContent, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/data'; // Import the updated skills data

type Skill = {
  name: string;
  icon: string;
};

const Skills: React.FC = () => {
  // Create a ref for the grid container
  const ref = useRef(null);

  // Check if the element is in view
  const isInView = useInView(ref, { once: true });

  // Type assertion to let TypeScript know that each entry of skills is of type Skill
  const allSkills: Skill[] = Object.values(skills).flat() as Skill[];

  return (
    <div className="py-20 w-full flex flex-col items-center">
      <h1 className="heading text-center">
        My <span className="text-purple">Skills</span>
      </h1>

      <div className="w-full mt-12">
        <Grid2 container spacing={4} justifyContent="center" ref={ref}>
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 150,
              }}
              className="flex justify-center"
            >
              <Card
                sx={{
                  minWidth: 120,
                  backgroundColor: 'rgb(0 3 25 / 1)', // Specific dark background color
                  boxShadow: '0px 0px 18px rgba(203, 172, 249, 0.2)', // Light purple shadow
                  borderRadius: '12px', // Rounded edges
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' }, // Slight scaling on hover
                }}
              >
                <CardContent className="flex flex-col items-center p-4">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-14 w-14" // Slightly increase the size
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    align="center"
                    className="mt-3 text-sm font-semibold text-white" // Increase the size of text and ensure it is visible
                  >
                    {skill.name}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Grid2>
      </div>
    </div>
  );
};

export default Skills;
