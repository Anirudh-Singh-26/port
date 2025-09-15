import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Java", image: "java.svg", width: 90, height: 100 },
];

export const FRONTEND_SKILL = [
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 70, height: 70 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 70, height: 70 },
  { skill_name: "Material UI", image: "mui.png", width: 70, height: 70 },
  { skill_name: "Bootstrap", image: "bootstrap.svg", width: 70, height: 70 },
];

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 60, height: 60 },
  { skill_name: "MySQL", image: "mysql.png", width: 60, height: 60 }, // added
  { skill_name: "REST API", image: "api.png", width: 70, height: 70 },
  { skill_name: "JWT", image: "jwt.png", width: 70, height: 70 },
  { skill_name: "Mongoose", image: "mongoose.svg", width: 90, height: 100 },
];


export const FULLSTACK_SKILL = [
  {
    skill_name: "API Integration",
    image: "local-area-network.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Authentication",
    image: "auth.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Deployment",
    image: "upload.png",
    width: 70,
    height: 70,
  },
];


export const OTHER_SKILL = [
  { skill_name: "Git", image: "icons8-git.svg", width: 70, height: 70 },
  { skill_name: "GitHub", image: "github-mark.svg", width: 70, height: 70 },
  { skill_name: "VS Code", image: "vscode.svg", width: 70, height: 70 },
  { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
  {
    skill_name: "Postman",
    image: "postman-logo-orange-stacked.svg",
    width: 70,
    height: 70,
  },
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  {
    skill_name: "Razor Pay",
    image: "razorpay.svg",
    width: 120,
    height: 100,
    
  },
];

export const SOCIALS = [
  { name: "Instagram", icon: RxInstagramLogo, link: "https://instagram.com" },
  { name: "Facebook", icon: FaFacebook, link: "https://facebook.com" },
  { name: "Twitter", icon: RxTwitterLogo, link: "https://twitter.com" },
];

export const PROJECTS = [
  {
    title: "🛒 Tekisky Mart – The Future of eCommerce",
    image: "/projects/project-1.webp",
    link: "https://tekiskymart.com/",
  },
  {
    title: "Tekisky – The Future of Tech",
    image: "/projects/project-2.webp",
    link: "https://tekisky.com/",
  },
  {
    title: "Speedline Auto Parts – The Future of Auto Parts",
    image: "/projects/project-3.webp",
    link: "https://speedlineautoparts.netlify.app/",
  },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [{ name: "GitHub", icon: RxGithubLogo, link: "https://github.com" }],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/abdul-raheman-389597281/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:arrahmanofficial9@gmail.com",
      },
    ],
  },
];

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
];
