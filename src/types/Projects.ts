export type ProjectData = {
  Project: {
    projectImg: string;
    projectName: string;
    projectDesc: string;
  };
  ProjectInfo: {
    year: string;
    role: string;
  };
  projectSource: {
    live?: string;
    github?: string;
  };
};

export const projects: ProjectData[] = [
  {
    Project: {
      projectImg: "/assets/projects/portfolio.png",
      projectName: "Portfolio",
      projectDesc: "This project is a personal portfolio website designed to showcase my skills, projects, and professional experience. Developed using modern web technologies, the portfolio aims to provide a visually appealing and user-friendly interface to highlight my work and achievements.",
    },
    ProjectInfo: {
      year: "2024",
      role: "Front End Developer",
    },
    projectSource: {
      live: "",
      github: "https://github.com/patrickMaureal/portfolio",
    }
  },
  {
    Project: {
      projectImg: "/assets/projects/mao-tuburan.png",
      projectName: "Integrated Asset Management System",
      projectDesc: "This project involves the development of a web-based portal for managing assets for an Agriculture Office. The portal is being developed as a freelance project for a student client as part of their capstone project. The primary goal of the portal is to streamline and enhance the management of agricultural assets, ensuring efficient tracking, utilization, and reporting of resources.",
    },
    ProjectInfo: {
      year: "2024",
      role: "Full Stack Developer",
    },
    projectSource: {
      github: "https://github.com/patrickMaureal/integrated-asset-management-system",
    }
  },
  {
    Project: {
      projectImg: "/assets/projects/danao-wordpress.png",
      projectName: "Danao City Landing Page",
      projectDesc: "The Danao City Landing Page is a web-based project designed to provide information and resources about Danao City. This project is developed using WordPress, aiming to deliver a user-friendly, informative, and visually appealing platform for residents and visitors.",
    },
    ProjectInfo: {
      year: "2023",
      role: "Wordpress Developer",
    },
    projectSource: {
      live: "https://danaocity.gov.ph/",
    }
  },
  {
    Project: {
      projectImg: "/assets/projects/islet.png",
      projectName: "ISLET Connect Portal",
      projectDesc: "The ISLET Connect Portal is a sophisticated web-based platform designed to streamline and enhance various administrative and operational processes within our organization. Leveraging the power and flexibility of the Laravel framework, this portal aims to provide a seamless user experience while ensuring robust functionality and security.",
    },
    ProjectInfo: {
      year: "2023",
      role: "Full Stack Developer",
    },
    projectSource: {
      live: "https://isletconnect.com",
    }
  },
  {
    Project: {
      projectImg: "/assets/projects/lakat.png",
      projectName: "Lakat Booking System",
      projectDesc: "The Lakat Booking System is a web-based portal designed to manage and streamline the process of booking accommodations for a resort. This project is being developed as a freelance assignment for a student client as part of their Computer System Project. Utilizing the Laravel framework, the system aims to provide a user-friendly, efficient, and secure platform for both guests and resort staff.",
    },
    ProjectInfo: {
      year: "2023",
      role: "Full Stack Developer",
    },
    projectSource: {
      github: "https://github.com/patrickMaureal/lakat-booking-system",
    }
  },
];
