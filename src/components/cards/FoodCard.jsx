import AddToCart from "@/app/foods/AddToCart";
import Link from "next/link";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <div className="p-4">
        <div className="relative aspect-4/3 mb-3">
          <img
            src={food.foodImg}
            alt={food.title}
            className="object-cover w-full rounded-lg"
          />
        </div>
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-lg font-bold line-clamp-1">{food.title}</h2>
          <span className="text-lg font-bold text-green-600 shrink-0">
            TK. {food.price}
          </span>
        </div>

        <p className="text-sm text-gray-500 mb-4">Category: {food.category}</p>
        <div className="flex items-center gap-2">
          <Link
            href={`/foods/details/${food.id}`}
            className="py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition w-full text-center"
          >
            Details
          </Link>
          <AddToCart food={food}></AddToCart>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
