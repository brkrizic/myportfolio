
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import MyDiploma from "./components/MyDiploma";
import Projects from "./components/Projects";
import About from "./components/About";

import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiSpringboot,
  SiExpress,
  SiFramer,
  SiPostman,
} from "react-icons/si";
import { ProjectType, Skill } from "./components/constants/ProjectType";



export default function Home() {

  const aboutText = `I’m a passionate full-stack developer who loves building clean, interactive, and modern applications. 
        I work with technologies like React, TypeScript, Redux, and Tailwind CSS, and I’ve delivered full-stack projects using Express.js and Spring Boot. 
        I enjoy creating intuitive user experiences and learning advanced concepts in the React ecosystem. 
        My focus is on writing maintainable, efficient code while continuously improving my skills.`;

  const skills: Skill[] = [
    { name: "React", icon: <SiReact className="text-sky-400" />, level: 90, label: "Advanced" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: 85, label: "Advanced" },
    { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 75, label: "Intermediate" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" />, level: 80, label: "Advanced" },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" />, level: 65, label: "Intermediate" },
    { name: "Express.js", icon: <SiExpress className="text-white" />, level: 70, label: "Intermediate" },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-400" />, level: 60, label: "Intermediate" },
    { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: 75, label: "Intermediate" },
  ];
  // Projects data
  const projects: ProjectType[] = [
    {
      title: "Web-Shop",
      tech: ["React", "JavaScript", "Redux", "React Router", "REST API", "Express.js"],
      description:
        "Full-stack e-commerce project with routing, global state, authentication, and REST API backend integration.",
      link: "https://github.com/brkrizic/e-commerce",
      status: "In Progress",
      platform: "Web"
    },
    {
      title: "Blog App",
      tech: ["React", "TypeScript", "Redux", "REST API", "Spring Boot"],
      description:
        "Advanced blog app using React portals and TypeScript with Spring Boot backend.",
      link: "https://github.com/brkrizic/blogApp",
      status: "In Progress",
      platform: "Web"
    },
    {
      title: "TradeTrackr",
      icon: "/logo/tradetrackricon.png",
      tech: ["React", "TypeScript", "SQLITE"],
      description: "TradeTrackr is a mobile trading journal app designed to help traders of all levels track and analyze their trades.",
      //link: "https://github.com/brkrizic/TradeTrackr",
      privacyPolicyPath: "/tradeTrackr/privacy-policy",
      downloadLink: "/downloads/TradeTrackr.apk",
      status: "Early Access",
      redditLink: "https://www.reddit.com/r/TradeTrackr2025/",
      platform: "Android"
    },
    {
      title: "JobReady",
      tech: ["React", "TypeScript"],
      description:
        "JobReady is a web app to organize and track job applications. Users can build professional CVs, log applications, and monitor progress.",
      link: "https://job-ready-bk.vercel.app",
      status: "Early Access",
      platform: "Web"
    },
  ];


  return (
      <section className="text-center py-24 pt-[120px]">
        <h1 className="text-3xl font-bold mb-6 inline-block text-white">
          Hi, I'm <span className="text-sky-400">Bruno</span> — a Web, Desktop, and Mobile App Developer
        </h1>
        <p className="text-gray-400 leading-relaxed">
          I craft modern, responsive, and high-performance applications with clean code and great user experience.
        </p>

        <div className="space-y-90">
          <About text={aboutText}/>
          <Skills skills={skills}/>
          <Projects projects={projects}/>
          <Contact />
          <MyDiploma />
        </div>
      </section>
  );
}
