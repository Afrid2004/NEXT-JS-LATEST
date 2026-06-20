import Image from "next/image";
import React from "react";
import { FaCheckCircle, FaQuoteLeft } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { RiUserStarLine } from "react-icons/ri";

const StoryDetails = async ({ params }) => {
  const { sid } = await params;

  const stories = [
    {
      id: 1,
      name: "Abdullah Rahman",
      designation: "Frontend Developer",
      company: "TechNova Solutions",
      experience: "3 years",
      skills: ["React", "JavaScript", "Tailwind CSS", "Next.js"],
      story:
        "Abdullah Rahman started his journey into web development during his university years. He was fascinated by how websites could solve real-world problems and improve people's lives. Initially, he learned HTML, CSS, and JavaScript through online tutorials and personal projects. Over time, he expanded his knowledge into modern frontend technologies such as React and Next.js. His first professional role involved maintaining a company website, but he quickly moved on to building complex user interfaces and dashboard applications. Through dedication and continuous learning, Abdullah became known for writing clean and maintainable code. He enjoys collaborating with designers and backend developers to create seamless user experiences. Outside of work, he contributes to open-source projects and mentors beginner developers. His journey demonstrates how persistence and curiosity can transform a simple interest into a rewarding career in technology.",
      about:
        "Abdullah Rahman is a passionate frontend developer who specializes in creating responsive and user-friendly web applications. He has extensive experience with React, Next.js, and modern CSS frameworks. His focus is on building interfaces that are not only visually appealing but also accessible and performant. He believes that great software should be easy to use and enjoyable for users. Abdullah regularly explores new technologies and best practices to improve his skills. He values teamwork, communication, and continuous improvement. In his free time, he enjoys reading technology blogs, experimenting with side projects, and helping aspiring developers learn programming. His professional goal is to become a full-stack architect capable of designing scalable systems from end to end.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Yusuf Karim",
      designation: "Frontend Developer",
      company: "Digital Horizon",
      experience: "4 years",
      skills: ["React", "Redux", "TypeScript", "SCSS"],
      story:
        "Yusuf Karim discovered programming while searching for ways to customize websites. What began as a hobby soon became a professional ambition. After learning the fundamentals of web development, he focused on frontend technologies because he enjoyed creating interactive experiences. During his career, he worked on e-commerce platforms, educational portals, and business management tools. Each project taught him valuable lessons about scalability, performance, and user experience. Yusuf continuously improved his skills through online courses and practical experience. He enjoys solving challenging UI problems and turning complex requirements into intuitive interfaces. His colleagues appreciate his attention to detail and willingness to support team members. Today, Yusuf is recognized as a dependable developer who combines creativity with technical expertise.",
      about:
        "Yusuf Karim is an experienced frontend developer with strong expertise in React and TypeScript. He focuses on creating maintainable codebases and scalable frontend architectures. His approach emphasizes performance optimization and user satisfaction. Yusuf enjoys working in collaborative environments where developers can learn from one another and share ideas. He believes technology should simplify people's lives and make information more accessible. Beyond coding, he likes exploring design systems, studying software architecture, and participating in developer communities. His long-term objective is to lead engineering teams and contribute to impactful digital products.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Ibrahim Hasan",
      designation: "Frontend Developer",
      company: "CodeCraft Labs",
      experience: "2 years",
      skills: ["Vue.js", "JavaScript", "CSS", "Bootstrap"],
      story:
        "Ibrahim Hasan began his development career after building a simple portfolio website for himself. The positive feedback he received encouraged him to explore web technologies more deeply. He spent countless hours learning JavaScript frameworks and practicing through freelance projects. Eventually, he secured a role as a junior frontend developer where he gained hands-on experience working with professional teams. Ibrahim enjoys transforming design concepts into fully functional applications. He values clean code, efficient workflows, and continuous improvement. His dedication helped him quickly progress in his career. Along the way, he learned the importance of communication and problem-solving in software development. He remains enthusiastic about learning new tools and technologies.",
      about:
        "Ibrahim Hasan is a motivated frontend developer who enjoys building modern web interfaces. He specializes in JavaScript and Vue.js while maintaining strong knowledge of responsive design principles. He believes user experience is one of the most important aspects of software development. Ibrahim is committed to lifelong learning and regularly explores emerging frontend trends. Outside of work, he contributes to personal projects and participates in online developer forums. His goal is to grow into a senior engineering role while helping create meaningful digital solutions.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Omar Farooq",
      designation: "Frontend Developer",
      company: "BrightTech",
      experience: "5 years",
      skills: ["Next.js", "React", "GraphQL", "Tailwind CSS"],
      story:
        "Omar Farooq's interest in technology started at a young age when he became curious about how websites functioned. He learned programming through self-study and eventually focused on frontend development. Over the years, he has worked on numerous enterprise applications and customer-facing products. Omar is particularly passionate about performance optimization and accessibility. He enjoys solving difficult technical challenges while maintaining a strong focus on user experience. His professional journey has been shaped by continuous learning and collaboration. Through dedication and perseverance, he has become a respected member of every team he joins.",
      about:
        "Omar Farooq is a frontend developer with expertise in React, Next.js, and GraphQL. He is passionate about creating high-performance applications that provide exceptional user experiences. His development philosophy centers around simplicity, maintainability, and scalability. Omar enjoys mentoring junior developers and sharing knowledge with colleagues. He actively follows industry trends and invests time in learning advanced frontend techniques. His ambition is to contribute to innovative products that positively impact millions of users worldwide.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      name: "Bilal Hossain",
      designation: "Frontend Developer",
      company: "FutureStack",
      experience: "3 years",
      skills: ["React", "Firebase", "JavaScript", "Material UI"],
      story:
        "Bilal Hossain entered the world of software development after discovering a passion for problem-solving. He initially experimented with simple websites before diving deeper into modern frameworks and libraries. Through consistent practice and project work, he developed strong frontend skills. His professional experience includes creating dashboards, portfolio platforms, and business applications. Bilal values code quality and enjoys collaborating with cross-functional teams. He believes every project offers an opportunity to learn something new and improve his craft.",
      about:
        "Bilal Hossain is a frontend developer focused on building reliable and engaging user interfaces. He has experience working with React, Firebase, and modern UI libraries. His attention to detail helps ensure applications are both functional and visually appealing. Bilal enjoys staying up to date with industry developments and applying best practices to his projects. He aims to continue growing as a developer while contributing to innovative digital products.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Tariq Mahmud",
      designation: "Frontend Developer",
      company: "PixelForge",
      experience: "4 years",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      story:
        "Tariq Mahmud developed an interest in web technologies while studying computer science. His curiosity led him to explore frontend development, where he found satisfaction in building interactive interfaces. Through internships and freelance work, Tariq gained practical experience and refined his skills. He enjoys creating products that balance aesthetics and usability. His professional growth has been driven by discipline, adaptability, and a desire to solve meaningful problems.",
      about:
        "Tariq Mahmud is a frontend developer who specializes in modern JavaScript frameworks and responsive design. He enjoys building scalable applications and improving user experiences through thoughtful design and development practices. Tariq values collaboration and believes successful software is created through strong teamwork. His future goals include mastering full-stack development and contributing to large-scale technology projects.",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 7,
      name: "Samiul Islam",
      designation: "Frontend Developer",
      company: "InnovateX",
      experience: "2 years",
      skills: ["JavaScript", "React", "CSS", "Git"],
      story:
        "Samiul Islam's development journey started with curiosity about how websites are built. After learning the basics of HTML and CSS, he gradually moved into JavaScript and React. His dedication helped him secure opportunities to work on real-world projects. Samiul enjoys seeing ideas come to life through code and values the impact technology can have on users. He continues to improve his skills through hands-on experience and personal projects.",
      about:
        "Samiul Islam is an enthusiastic frontend developer with a strong interest in modern web technologies. He enjoys building intuitive interfaces and ensuring users have smooth experiences. His strengths include adaptability, communication, and attention to detail. Samiul is committed to continuous learning and looks forward to expanding his expertise in software engineering.",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 8,
      name: "Mahmud Anwar",
      designation: "Frontend Developer",
      company: "WebNest",
      experience: "6 years",
      skills: ["Angular", "TypeScript", "RxJS", "SCSS"],
      story:
        "Mahmud Anwar has spent years building professional web applications for organizations across various industries. His career began with small freelance projects before transitioning into enterprise software development. He enjoys designing efficient architectures and implementing complex frontend solutions. Throughout his journey, Mahmud has remained committed to learning and adapting to changing technologies.",
      about:
        "Mahmud Anwar is a seasoned frontend developer with expertise in Angular and TypeScript. He values software quality, maintainability, and performance. His experience spans multiple industries, allowing him to understand diverse business requirements. Mahmud enjoys mentoring junior developers and contributing to engineering best practices. His goal is to continue creating impactful digital experiences.",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      id: 9,
      name: "Noman Rashid",
      designation: "Frontend Developer",
      company: "CodeSphere",
      experience: "3 years",
      skills: ["React", "Next.js", "Node.js", "MongoDB"],
      story:
        "Noman Rashid started coding as a hobby and quickly discovered a passion for software development. He focused on frontend technologies because he enjoyed building visual experiences that users interact with daily. Through persistence and project-based learning, he developed strong technical skills and professional confidence. His journey reflects a commitment to growth and continuous improvement.",
      about:
        "Noman Rashid is a frontend developer who enjoys working with modern JavaScript ecosystems. He is passionate about creating scalable applications and delivering excellent user experiences. Noman values teamwork and believes effective communication is essential for successful projects. He continuously seeks opportunities to expand his knowledge and take on new challenges.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 10,
      name: "Zubair Ahmed",
      designation: "Frontend Developer",
      company: "NextWave Tech",
      experience: "5 years",
      skills: ["React", "Next.js", "TypeScript", "Firebase"],
      story:
        "Zubair Ahmed's professional journey began with a fascination for web design and user interaction. Over time, he transitioned into frontend development and mastered modern frameworks and development tools. His work has included startup applications, e-commerce platforms, and business management systems. Zubair enjoys solving technical challenges while maintaining a strong focus on usability and accessibility.",
      about:
        "Zubair Ahmed is a frontend developer with a passion for creating engaging digital experiences. He combines technical expertise with a user-centered mindset to build applications that are both functional and enjoyable. Zubair believes continuous learning is essential in the technology industry and actively explores new tools and methodologies. His long-term ambition is to become a technical leader and contribute to transformative software products.",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];

  const filterdStory = stories.find((story) => story.id == sid);
  if (!filterdStory) {
    return <h2>Story not found!</h2>;
  }
  const {
    id,
    about,
    company,
    name,
    designation,
    experience,
    skills,
    story,
    image,
  } = filterdStory;

  return (
    <div className="my-10">
      <div>
        <div className="flex flex-col gap-4 justify-center items-center mb-10">
          <div className="w-25 h-25 rounded-full p-1 overflow-hidden border-2 border-amber-400">
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-full"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1 className="text-xl flex items-center gap-2 justify-center mb-2">
              {name} <FaCheckCircle className="text-cyan-400" size={16} />
            </h1>
            <p className="flex items-center gap-1 justify-center mb-2">
              <MdWorkOutline className="text-amber-400" />
              {designation} at {company}
            </p>
            <p className="flex items-center gap-1 justify-center">
              <RiUserStarLine className="text-amber-400" />
              {experience} of experience
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap md:flex-nowrap justify-center">
            {skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="px-4 rounded-4xl bg-cyan-400/20 text-cyan-400"
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-gray-900 border border-gray-800 p-5 rounded-2xl">
            <div className="border-l-4 border-gray-800 rounded-xl">
              <div className="pl-5">
                <p className="mb-3">
                  <FaQuoteLeft size={25} />{" "}
                  <span className="text-xl mt-2 block text-cyan-400 font-bold">
                    Developer Story
                  </span>
                </p>
                {story}
              </div>
            </div>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-5 rounded-2xl">
            <div className="border-l-4 border-gray-800 rounded-xl">
              <div className="pl-5">
                <p className="mb-3">
                  <FaQuoteLeft size={25} />{" "}
                  <span className="text-xl mt-2 block text-cyan-400 font-bold">
                    About Developer
                  </span>
                </p>
                {about}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
