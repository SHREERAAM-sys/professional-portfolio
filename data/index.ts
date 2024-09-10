
export const navItems = [
    { name: "Education", link: "#education" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
    
  ];


  export const smallScreenNavItems = [
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
    
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Community Connect",
      des: "A platform that enhances community engagement by streamlining activity management",
      img: "/community-connect.webp",
      iconLists: ["/java.svg", "/spring-boot.svg", "/thymeleaf.svg", "/bootstrap.svg", "/hibernate.svg", "/mysql.svg"],
      link: "https://github.com/SHREERAAM-sys/Community-Connect",
    },
    {
      id: 2,
      title: "Google Cloud Platform Infrastructure",
      des: "Architected a secure, scalable infrastructure on GCP with Terraform",
      img: "/gcp-terraform.webp",
      iconLists: ["/terraform.svg", "/gcp.svg", "/bash.svg", "/git_logo.svg"],
      link: "https://github.com/ShreeCloud/tf-gcp-infra",
    },
    {
      id: 3,
      title: "Tasty Trails",
      des: "A surplus food sharing platform helpful to reduces food waste",
      img: "/tasty-trails.webp",
      iconLists: ["/re.svg", "/redux.svg","/exp.svg","/ts.svg", "/sass.svg", "/mongo.svg"],
      link: "https://github.com/shreeraam-ramachandran/Tasty-Trails",
    },
    {
      id: 4,
      title: "Notifier",
      des: "A Java full-stack MVC application with personalized notebooks and notes management",
      img: "/notes.webp",
      iconLists: ["/java.svg", "/jsp.svg", "/maven.svg", "/bootstrap.svg","/hibernate.svg",  "/mysql.svg"],
      link: "https://github.com/SHREERAAM-sys/Notes-Making",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "I highly recommend Shreeraam for his outstanding contributions in our product architecture. His dedication and hard work are evident in his ability to quickly grasp new concepts and technologies, consistently delivering high-quality work within tight deadlines.",
      name: "Baskar Govindan",
      title: "Leadership Staff @ Zoho Corporation",
      img: "/test-baskar-govindh.jpeg",
      linkedinURL:"https://in.linkedin.com/in/baskar-govindan-088506a1",
    }, 
  ];


  export const skills = {
    Java: [
      
      { name: 'Java', icon: 'java.svg' },
      { name: 'Spring Boot', icon: '/spring-boot.svg' },
      { name: 'Hibernate', icon: '/hibernate.svg' },
      { name: 'JUnit5', icon: '/junit5.svg' },
      
      
    ],
    JavaScript: [
      { name: 'JavaScript', icon: '/js.svg' },
      { name: 'React', icon: '/re.svg' },
      { name: 'NextJS', icon: '/next.svg' },
      // { name: 'Redux', icon: '/redux.svg' },
      { name: 'ExpressJS', icon: '/exp.svg' },
      
      
      // { name: 'Tailwind CSS', icon: '/tailwind.svg' },
    ],
  
    DevOps: [
      { name: 'AWS', icon: '/aws.svg' },
      { name: 'GCP', icon: '/gcp.svg' },
      { name: 'Terraform', icon: '/terraform.svg' },
      { name: 'Packer', icon: '/packer.svg' },
      { name: 'Linux', icon: '/linux.svg' },
      { name: 'Git', icon: '/git_logo.svg' },
      
      
    ],

    Basic:[
      { name: 'HTML', icon: '/html.svg' },
      { name: 'Sass', icon: '/sass.svg' },
    ],
    Python:[
      { name: 'Python', icon: '/python.svg' },
    ],
    
    
    Database: [
      { name: 'MySQL', icon: '/mysql.svg' },
      { name: 'MongoDB', icon: '/mongo.svg' },
    ],
   
  };
  
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  

  export const workExperience = [
    {
      id: 1,
      title: "Technical Staff (Software Engineer)",
      company: "Zoho Corporation",
      date: "January 2022 - August 2023",
      sections: [
        {
          heading: "Identity 360 Product",
          ref: "https://www.manageengine.com/identity-360/",
          desc: [
            "Orchestrated the design of application schemas and class diagrams, leading to a more efficient product development cycle by adhering to the Software Development Life Cycle (SDLC). This strategic approach resulted in a 25% reduction in development time and optimized overall development efficiency",
            "Developed a comprehensive Sync Engine framework that significantly enhanced object management. This framework extended the product's functionality to integrate seamlessly with external directories such as Azure, Slack, and Active Directory, thereby improving the product's capabilities by 50%",
            "Engineered a concurrent synchronization solution that cut sync time by 40%. This approach streamlined the process by allowing multiple objects to sync simultaneously, improving data consistency. The enhanced efficiency boosted performance across directories like Azure, Slack, and Active Directory",
            "Mentored junior developers by providing clear guidance on tasks, accelerating their completion and fostering skill development, which boosted team productivity and cohesion",          
          ]
        },
        {
          heading: "Active Directory Manager Plus Product",
          ref:"https://www.manageengine.com/products/ad-manager/",
          desc: [
            "Enhanced the user interface using Ember.js to facilitate the integration of third-party products. This improvement led to a 25% boost in the overall user experience, making the product more versatile and user-friendly",
            "Implemented dynamic parameters restriction to bolster API security. This strategic enhancement resulted in a 30% increase in security, effectively safeguarding data and improving access control mechanisms",
            "Streamlined support owner activities by developing a more efficient system for managing customer sessions. This initiative led to a 40% reduction in critical issues and enhanced customer satisfaction",
            "Directed a thorough product feature validation and bug-fixing process. This rigorous approach contributed to a 20% reduction in release timelines, ensuring that new features were delivered faster and with higher quality",
          ]
        }
      ],
      thumbnail: "/zoho.svg",
    },
    {
      id: 2,
      title: "Application Development Analyst",
      company: "Accenture",
      date: "August 2021 - December 2021",
      sections: [
        {
          heading: undefined,
          ref: undefined,
          desc: [
            "Oversaw the development of a real-time inventory tracking system designed to streamline supply chain operations. This project involved integrating Spring Boot microservices to manage vendors and materials efficiently",
            "Enhanced product capabilities by 25% through the implementation of Spring Boot microservices for vendor and material management, significantly optimizing stock-level management and procurement processes",
            "Utilized Spring MVC to implement and refine vendor procurement processes, resulting in more efficient stock-level management and improved overall system performance",
          ]
        }
      ],
      thumbnail: "/accenture.svg",
    }
  ];

  export const educationData = [
    {
        id: 1,
        degree: "Master of Science",
        program: "Information Systems",
        institution: "Northeastern University",
        date: "Expected May 2025",
        image: "/northeastern.png", // Path to the university logo or image
        cgpa: "3.6/4.0",
    },
    {
        id: 2,
        degree: "Bachelor of Engineering",
        program: "Computer Science and Engineering",
        institution: "Sri Sairam Engineering College – Anna University",
        date: "May 2021",
        image: "/sairam.png", // Path to the university logo or image
        cgpa: "8.3/10",
    }
];

  
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/SHREERAAM-sys",
    },
    
    {
      id: 2,
      img: "/leetcode.svg",
      link:"https://leetcode.com/u/SHREERAAM/",
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/shreeraamr",
    },
  ];

  

