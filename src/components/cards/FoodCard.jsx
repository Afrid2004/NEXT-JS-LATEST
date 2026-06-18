import AddToCart from "@/app/foods/AddToCart";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
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
        <AddToCart food={food}></AddToCart>
      </div>
    </div>
  );
};

export default FoodCard;
