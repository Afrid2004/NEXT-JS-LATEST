import Link from "next/link";
import React from "react";

// static site generation (SSG)
export function generateStaticParams() {
  return [{ id: "52923" }, { id: "52902" }, { id: "53028" }];
}

//generate dynamic metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  const food = await getFoodDetails(id);

  return {
    title: food.title,
    keywords: ["Next.js", "React", "JavaScript"],
    authors: [{ name: "Afrid", url: "https://faisalafrid.vercel.app" }],
    openGraph: {
      title: food.title,
      description: "Our dev story app",
      url: "https://my-next-js-latest.vercel.app/",
      siteName: "Dev Story",
      images: [
        {
          url: food.foodImg,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

const getFoodDetails = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const data = await res.json();
  return data.details;
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;
  const food = await getFoodDetails(id);
  return (
    <div>
      <div className="w-full mx-auto my-5">
        <div className="grid grid-cols-2 gap-5 bg-gray-900 border border-gray-800 p-5 rounded-2xl">
          {/* Image */}
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <img
              src={food.foodImg}
              alt={food.title}
              fill
              className="object-cover w-full"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <span className="bg-cyan-600 text-white px-3 py-1 rounded-full w-fit text-sm mb-3">
              {food.category}
            </span>

            <h1 className="text-4xl font-bold mb-4">{food.title}</h1>

            <p className="text-gray-400 mb-2">Origin: {food.area}</p>

            <p className="text-3xl font-bold text-green-500 mb-6">
              TK. {food.price}
            </p>

            <div className="flex flex-col gap-4">
              <button className="px-6 w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition text-center">
                Add To Cart
              </button>

              <a
                href={food.video}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 w-full text-center py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
              >
                Watch Video
              </a>
            </div>

            <Link
              className="bg-white/20 mt-5 text-white hover:bg-cyan-400/40 hover:text-cyan-400 px-4 py-2 rounded-4xl text-center w-fit"
              href="../"
            >
              Back to All Foods
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
