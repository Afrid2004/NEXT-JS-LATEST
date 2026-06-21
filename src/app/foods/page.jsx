import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import Cart from "./Cart";
import SearchFood from "./SearchFood";
import Link from "next/link";

// server side rendering (ssr rendering)
const getAllFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    //after 10s new data will display randomly
    { next: { revalidate: 10 } },
  );
  const data = await res.json();
  // for lading screen tesing used promise
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return data.foods;
};

const FoodCorner = async ({ searchParams }) => {
  // generate search value from server
  const { search = "" } = await searchParams;
  const allFoods = await getAllFoods(search);
  return (
    <div className="my-5">
      <div>
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Food Corner</h1>
          <div className="flex items-center gap-1">
            <Link
              className="bg-white/20 text-white hover:bg-cyan-400/40 hover:text-cyan-400 px-4 py-2 rounded-4xl text-center"
              href="../reviews"
            >
              Food Reviews
            </Link>
            <Link
              className="bg-white/20 text-white hover:bg-cyan-400/40 hover:text-cyan-400 px-4 py-2 rounded-4xl text-center"
              href="../feedbacks"
            >
              Feedbacks
            </Link>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-9">
              <div className="flex items-center gap-2 justify-between  mb-5">
                <h2 className="text-2xl font-bold">
                  Total{" "}
                  <span className="text-amber-400">{allFoods.length}</span>{" "}
                  foods found
                </h2>
                <div className="w-full max-w-sm">
                  <SearchFood></SearchFood>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5">
                {allFoods.map((food) => (
                  <FoodCard food={food} key={food.id}></FoodCard>
                ))}
              </div>
            </div>
            <div className="col-span-3">
              <Cart></Cart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCorner;
