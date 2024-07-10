import x from "../assets/svg/x.svg"
import github from "../assets/svg/github.svg"
import linkedin from "../assets/svg/linkedin.svg"
import instagram from "../assets/svg/instagram.svg"
import blogWebsite from "../assets/works/BlogWebsite.webp"
import luxuryApp from "../assets/works/luxury_app/lp1.webp"
import workHoursTracker from "../assets/works/workHoverTracker.webp"
import todoApp from "../assets/works/todo_app/main_image_for_todo.webp"
import luxuryWeb from "../assets/works/luxury photo & frames/cover.webp"


// Navigation links
export const navLinks = [
  {
    id: "0",
    title: "home",
    url: "top",
  },
  {
    id: "2",
    title: "skills",
    url: "#skills",
  },
  {
    id: "3",
    title: "about",
    url: "#about",
  },
  {
    id: "4",
    title: "works",
    url: "#works",
  },
  {
    id: "5",
    title: "contact",
    url: "#contact",
  },
]

// Hero text Content
export const heroText = ["Hi There, I'm", "Yogesh Gojiya", "Web Developer"]

// About me Content
export const aboutText = `Hi, I'm Yogesh Gojiya, a dedicated web developer with a Bachelor's degree in Computer Applications (BCA). With a strong foundation in both front-end and back-end technologies, I specialize in creating dynamic, responsive, and user-friendly web applications. My journey into web development began out of a deep curiosity for how websites work and a passion for building meaningful digital experiences. Over the years, I have developed a keen eye for detail and a commitment to writing clean, efficient code that meets the highest standards of quality. I am continuously learning and staying updated with the latest industry trends and best practices to ensure my skills remain sharp and relevant. I thrive on collaboration and enjoy working closely with clients to bring their visions to life, ensuring each project is both functional and visually appealing. Outside of coding, I enjoy exploring new technologies and contributing to open-source projects. I'm always open to new opportunities and collaborations, so if you have a project in mind or simply want to connect, feel free to reach out!`


// Projects details and images
export const works = [
  {
    id: "1",
    img: workHoursTracker,
    title: "Work Hours Tracker",
    description: "Developed a website to track daily work hours, including start and end times, with records saved in local storage. Utilizing React and TailwindCSS, the site provides a streamlined interface for efficient time tracking and record keeping.",
    techStack: [
      "React", "Tailwind CSS"
    ],
    link: "https://yogi0808.github.io/Work_Hours_Tracker"
  }, {
    id: "2",
    img: blogWebsite,
    title: "Blog Website",
    description: "Developed a full-stack blog application using the MERN stack (React, Node.js, Express, MongoDB) with JWT authentication.  This interactive platform allows users to create, edit, and delete blog posts. Administrators can manage user accounts through a dedicated dashboard.",
    techStack: [
      "React", "Node.js", "Express", "MongoDB", "Redux"
    ],
    link: "https://github.com/yogi0808/MERN-Blog-Website.git"
  }, {
    id: "3",
    img: todoApp,
    title: "To-Do App",
    description: "Created a feature-rich to-do app with local storage for efficient task management, leveraging Flutter and Dart. The app offers users a seamless experience, allowing them to easily add, track, and manage tasks with the convenience of local data persistence.",
    techStack: [
      "Flutter", "Dart",
    ],
    link: "https://github.com/yogi0808/ToDoApp.git"
  }, {
    id: "4",
    img: luxuryApp,
    title: "Luxury Application",
    description: "Created a robust e-commerce application with a seamless user experience and real-time database integration, leveraging Flutter, Dart, and Firebase. The app offers smooth navigation, efficient product management, and real-time updates for an enhanced shopping experience.",
    techStack: [
      "Flutter", "Dart", "Firebase"
    ],
    link: "#"
  }, {
    id: "5",
    img: luxuryWeb,
    title: "Luxury Photos & frames",
    description: "Developed a dynamic e-commerce platform for selling photos and frames, featuring a user-friendly interface and comprehensive admin panel for efficient management. The platform ensures seamless navigation and efficient product handling, enhancing both user experience and administrative control.",
    techStack: [
      "HTML", "CSS", "JavaScript", "PHP", "MySQL"
    ],
    link: "#"
  }
]

// Social Links with Links and custom ClassName's
export const socialLinks = [
  {
    id: "0",
    title: "Github",
    icon: github,
    classis: "top-3 left-1/2 -translate-x-1/2",
    link: "https://github.com/yogi0808"
  },
  {
    id: "1",
    title: "LinkedIn",
    icon: linkedin,
    classis: "top-1/2 right-3 -translate-y-1/2",
    link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
  },
  {
    id: "2",
    title: "X",
    icon: x,
    classis: "bottom-3 left-1/2 -translate-x-1/2",
    link: "https://x.com/yogi_ahir08"
  },
  {
    id: "3",
    title: "Instagram",
    icon: instagram,
    classis: "top-1/2 left-3 -translate-y-1/2",
    link: "https://www.instagram.com/yogi_ahir_08"
  }
];