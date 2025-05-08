import type { Project } from "./components/Project Showcase/ProjectShowcase";
import coinVoyageImage from "/coin-voyage.png";
import infinteScrollImage from "/infiniteScroll.png";
import taskManagerImage from "/image.png";

export const experiences = [
  {
    position: "React Developer Intern",
    company: "Simform Solutions",
    location: "Ahmedabad, India",
    duration: "Jan 2020 - Present",
    responsibilities: [
      "Developed interactive UI components using React.js, enhancing user experience across multiple application features",
      "Participated in code reviews and adopted best practices for clean, maintainable code",
      "Gained experience with version control using Git in a team environment",
      "Worked with REST APIs to fetch and display dynamic data in frontend components",
    ],
    technologies: [
      "Git",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
    ],
  },
  {
    position: "Full Stack Developer Intern",
    company: "Sabeena Digital Media Agency.",
    location: "Remote",
    duration: "May 2024 - July 2024",
    responsibilities: [
      "Lead the development of responsive web applications using React",
      "Worked closely with a talented team on various projects.",
      "Implemented CI/CD pipelines for frontend deployments",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Coin Voyage",
    description:
      "A 2 player game where players Collect as many coins as possible! The player with the highest score at the end wins.",
    technologies: ["HTML", "CSS", "TypeScript"],
    imageUrl: coinVoyageImage,
    liveUrl: "https://grand-pudding-9f6346.netlify.app/",
    codeUrl: "https://github.com/Raja-Simform/Coin-Voyage",
  },
  {
    id: "2",
    title: "Postagram",
    description:
      "CRUD application that allows users to create, read, update, and delete posts, with an infinite scroll feature.",
    technologies: ["HTML", "CSS", "TypeScript"],
    imageUrl: infinteScrollImage,
    liveUrl: "https://loquacious-lily-4682df.netlify.app/",
    codeUrl: "https://github.com/mohitpuri-codes/CRUD---infinite-scroll-posts",
  },
  {
    id: "3",
    title: "Project Management Application",
    description:
      "A project management application that allows users to create, read, update, and delete projects and add task to each project.",
    technologies: ["React", "TypeScript"],
    imageUrl: taskManagerImage,
    liveUrl: "https://project-management-theta-two.vercel.app/",
    codeUrl: "https://github.com/mohitpuri-codes/project-management",
  },
];
