// src/data/projects.js
export const projects = [
  {
    id: 1,
    name: "ARTIFY – Creative Artwork Platform",
    image: "https://i.ibb.co.com/Y7jkH7Qx/Screenshot-2026-01-05-173141.png",
    techStack: [
      "React",
      "Firebase Authentication",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "react-awesome-reveal",
      "react-tooltip",
      "Swiper.js",
      "React Icons"
    ],
    description: "ARTIFY একটি অনলাইন আর্ট-শেয়ারিং প্ল্যাটফর্ম যা শিল্পীদের জন্য তৈরি। ব্যবহারকারী এখানে আর্ট আপলোড, প্রদর্শন, অন্যদের গ্যালারি ঘুরে দেখা, লাইক করা এবং যোগাযোগ করতে পারে। SPA হিসেবে React + Firebase + Tailwind CSS + MongoDB + Mongoose ব্যবহার করে তৈরি।",
    liveLink: "https://artify-ef3b9.web.app",
    githubLink: "https://github.com/mdhasanmahamud-dev/Assignment_10_Artify_Client",
    challenges: "Responsive design, SPA behavior, CRUD operations এবং real-time like system implement করা।",
    futurePlans: "Dark/Light mode আরও উন্নত করা, Category-wise filtering এবং UI animations আরও smooth করা।"
  },
  {
    id: 2,
    name: "Digital Life Lessons",
    image: "https://i.ibb.co.com/7t1MGS3W/Screenshot-2026-01-05-173222.png",
    techStack: [
      "React",
      "Tailwind CSS",
      "React Query",
      "React Hook Form",
      "React Icons",
      "Firebase Authentication",
      "Axios",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Admin SDK",
      "Stripe",
      "CORS",
      "dotenv"
    ],
    description: "Users public lessons browse করতে পারবে, favorites save করতে পারবে, inappropriate content report করতে পারবে এবং Stripe payment এর মাধ্যমে premium content access করতে পারবে। Full-stack app with React frontend এবং Node.js + Express + MongoDB backend।",
    liveLink: "https://digital-life-lessons-638c6.web.app",
    githubLink: "https://github.com/mdhasanmahamud-dev/Digital_Life_Lessons_Frontend",
    challenges: "React Query দিয়ে data fetching & caching এবং JWT authentication implement করা। Filtering, sorting এবং search API-driven করা।",
    futurePlans: "Analytics dashboard উন্নত করা, premium membership features আরও flexible করা।"
  },
  {
    id: 3,
    name: "Student Life Toolkit",
    image: "https://i.ibb.co.com/0VRpx5d1/Screenshot-2026-01-05-172954.png",
    techStack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "React Icons",
      "Recharts",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Dotenv"
    ],
    description: "একটি full-stack web application যা student life সহজ করে। Class schedules, budgets, study plans, এবং exam preparation management একটি platform-এ। Smart dashboard দিয়ে overview, quick view of classes, transactions এবং pending goals।",
    liveLink: "https://student-lifetoolkit-client.onrender.com/",
    githubLink: "https://github.com/mdhasanmahamud-dev/Digital_Life_Lessons_Frontend",
    challenges: "Multiple sections integration এবং responsive dashboard UI design করা। Charts/graphs দিয়ে budget tracking implement করা।",
    futurePlans: "Study planner এবং Exam Q&A generator আরও interactive এবং advanced করা।"
  }
];
