"use client";

import { cn } from "@/lib/utils";
import { once } from "events";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated.current) {
        hasAnimated.current = true; // Set ref to true after animation is triggered
        animate(
          "span",
          {
            display: "inline-block",
            opacity: 1,
            width: "fit-content",
          },
          {
            duration: 0.3,
            delay: stagger(0.1),
            ease: "easeInOut",
          }
        );
      }
    }, [  isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-purple",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

// export const TypewriterEffectSmooth = ({
//   words,
//   className,
//   cursorClassName,
// }: {
//   words: {
//     text: string;
//     className?: string;
//   }[];
//   className?: string;
//   cursorClassName?: string;
// }) => {
//   // split text inside of words into array of characters
//   const wordsArray = words.map((word) => {
//     return {
//       ...word,
//       text: word.text.split(""),
//     };
//   });
//   const renderWords = () => {
//     return (
//       <div>
//         {wordsArray.map((word, idx) => {
//           return (
//             <div key={`word-${idx}`} className="inline-block">
//               {word.text.map((char, index) => (
//                 <span
//                   key={`char-${index}`}
//                   className={cn(`dark:text-white text-black `, word.className)}
//                 >
//                   {char}
//                 </span>
//               ))}
//               &nbsp;
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <div className={cn("flex space-x-1 my-6", className)}>
//       <motion.div
//         className="overflow-hidden pb-2"
//         initial={{
//           width: "0%",
//         }}
//         whileInView={{
//           width: "fit-content",
//         }}
//         transition={{
//           duration: 2,
//           ease: "linear",
//           delay: 1,
//         }}
//       >
//         <div
//           className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-3xl font-bold"
//           style={{
//             whiteSpace: "nowrap",
//           }}
//         >
//           {renderWords()}{" "}
//         </div>{" "}
//       </motion.div>
//       <motion.span
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//         }}
//         transition={{
//           duration: 0.8,

//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className={cn(
//           "block rounded-sm w-[4px]  h-2 sm:h-6 xl:h-8 bg-purple",
//           cursorClassName
//         )}
//       ></motion.span>
//     </div>
//   );
// };

//with use effect
// export const TypewriterEffectSmooth = ({
//   words,
//   className,
//   cursorClassName,
// }: {
//   words: {
//     text: string;
//     className?: string;
//   }[];
//   className?: string;
//   cursorClassName?: string;
// }) => {
//   // Split text inside of words into an array of characters
//   const wordsArray = words.map((word) => {
//     return {
//       ...word,
//       text: word.text.split(""),
//     };
//   });

//   const [scope, animate] = useAnimate();
//   const isInView = useInView(scope);
//   const hasAnimated = useRef(false);

//   useEffect(() => {
//     if (isInView && !hasAnimated.current) {
//       hasAnimated.current = true; // Set ref to true after animation is triggered
//       animate(
//         ".char",
//         {
//           opacity: 1,
//         },
//         {
//           duration: 2, // Duration of the entire text fade-in
//           ease: "easeInOut", // Smooth easing function
//         }
//       );
//     }
//   }, [isInView, animate]);

//   const renderWords = () => {
//     return (
//       <div ref={scope}>
//         {wordsArray.map((word, idx) => {
//           return (
//             <div key={`word-${idx}`} className="inline-block">
//               {word.text.map((char, index) => (
//                 <span
//                   key={`char-${index}`}
//                   className={cn(
//                     `char dark:text-white text-black opacity-0`,
//                     word.className
//                   )}
//                 >
//                   {char}
//                 </span>
//               ))}
//               &nbsp;
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <div className={cn("flex space-x-1 my-6", className)}>
//       <motion.div
//         className="overflow-hidden pb-2"
//         initial={{
//           width: "0%",
//         }}
//         whileInView={{
//           width: "fit-content",
//         }}
//         transition={{
//           duration: 2,
//           ease: "linear",
//           delay: 1,
//         }}
//       >
//         <div
//           className="text-xs sm:text-base md:text-xl lg:text-2xl xl:text-2xl font-bold"
//           style={{
//             whiteSpace: "nowrap",
//           }}
//         >
//           {renderWords()}
//         </div>
//       </motion.div>
//       <motion.span
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className={cn(
//           "block rounded-sm bg-purple",
//           "w-[2px] h-[13px]", // Default for small screens
//           "sm:w-[3px] sm:h-4", // Small screens
//           "md:w-[4px] md:h-6", // Medium screens
//           "lg:w-[4px] lg:h-6", // Large screens
//           "xl:w-[4px] xl:h-7", // Extra-large screens
//           cursorClassName
//         )}
//       ></motion.span>
//     </div>
//   );
// };


export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Split text inside of words into an array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {once: true});
  
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true; // Set ref to true after animation is triggered
      animate(
        ".char",
        {
          opacity: 1,
        },
        {
          duration: 2, // Duration of the entire text fade-in
          ease: "easeInOut", // Smooth easing function
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(
                    `char dark:text-white text-black opacity-0`,
                    word.className
                  )}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6 ", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text-2xl xl:text-2xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm bg-purple",
          "w-[2px] h-[13px]", // Default for small screens
          "sm:w-[3px] sm:h-4", // Small screens
          "md:w-[4px] md:h-6", // Medium screens
          "lg:w-[4px] lg:h-6", // Large screens
          "xl:w-[4px] xl:h-7", // Extra-large screens
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};