import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  angular,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  tripguide,
  threejs,
  Ww,
  Pretty,
  dantist,
  edo,
  sabi,
  telus,
  fiver,
  makerLogo,
  easy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "angular",
    icon: angular,
  },
];

const experiences = [
  {
    title: "Frontend  Developer",
    company_name: "Makers",
    icon: makerLogo,
    iconBg: "#E6DEDD",
    date: "February 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack  Developer ",
    company_name: " Freelance",
    icon: fiver,
    iconBg: "#E6DEDD",
    date: "April 2023 - May 2023",
    points: [
      "working with backends development using Node.js as well as using databases MongoDB,SQL.",
      "creation of websites of varying complexity for business.",
      "client side development using React, Angular libraries.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Easy QR menu",
    icon: easy,
    iconBg: "#E6DEDD",
    date: "June 2023 - September 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    //image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    //image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dental clinic",
    description:
      "my first project when I became a freelancer this project is a dental clinic and the clinic itself is located in Kigali in Rwanda and this site also contains all the data about the clinic",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
    ],
    image: dantist,
    source_code_link: "https://github.com/emirlan0706/dental_clinic_project",
  },
  {
    name: "Pretty-shop",
    description:
      "Pretty Shop is a website for selling furniture and accessories, one of the first projects I made",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: Pretty,
    source_code_link: "https://github.com/emirlan0706/pretty_shop_react_app_v2",
  },
  {
    name: "Colab",
    description:
      "my collaboration with freelancer Ted to create a website using the Next.js technology stack",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: Ww,
    source_code_link: "https://github.com/emirlan0706/store_app_colab",
  },
];

export { services, technologies, experiences, testimonials, projects };
