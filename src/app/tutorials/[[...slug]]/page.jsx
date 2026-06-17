import TechnologyDetails from "@/components/TechnologyDetails";
import Link from "next/link";
import React from "react";
import { FaReact, FaVuejs } from "react-icons/fa";
import { RiAngularjsLine, RiNextjsLine } from "react-icons/ri";

const TutorialsPage = async ({ params }) => {
  const { slug } = await params;

  const technologies = [
    {
      slug: "frontend",
      name: "Frontend Development",
      technologies: [
        {
          slug: "react",
          icon: <FaReact size={30} />,
          name: "React JS",
          creator: "Facebook",
          type: "Library",
        },
        {
          slug: "nextjs",
          icon: <RiNextjsLine size={30} />,
          name: "Next.js",
          creator: "Vercel",
          type: "Framework",
        },
        {
          slug: "vuejs",
          icon: <FaVuejs size={30} />,
          name: "Vue.js",
          creator: "Evan You",
          type: "Framework",
        },
        {
          slug: "angular",
          icon: <RiAngularjsLine size={30} />,
          name: "Angular",
          creator: "Google",
          type: "Framework",
        },
      ],
    },
  ];

  // get the last slug from slug array
  // const lastSlug = slug[slug.length - 1];

  // else get slug from array
  const [categorySlug, technologySlug] = slug || [];
  // get cat slug from technologies array
  const catResult = technologies.find((tech) => tech.slug === categorySlug);
  if (!catResult) {
    return <h2>No category found!</h2>;
  }

  if (technologySlug) {
    // get cat slug technologyes from catResult object
    const techResult = catResult.technologies.find(
      (tech) => tech.slug === technologySlug,
    );
    if (!techResult) {
      return <h2>No technology found!</h2>;
    }

    return <TechnologyDetails techResult={techResult}></TechnologyDetails>;
  }

  return (
    <div>
      <div className="my-8">
        <div>
          <div className="mb-7">
            <h1 className="text-3xl font-bold">{catResult.name}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {catResult.technologies.map((tech, index) => {
              return (
                <div key={index} className="bg-gray-800 rounded-2xl p-5">
                  <div className="mb-5 w-17 h-17 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center mx-auto">
                    {tech.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-center">
                      {tech.name}
                    </h2>
                    <Link
                      className="bg-white/20 text-white hover:bg-cyan-400/40 hover:text-cyan-400 px-4 py-2 rounded-4xl text-center"
                      href={`/tutorials/${catResult.slug}/${tech.slug}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;
