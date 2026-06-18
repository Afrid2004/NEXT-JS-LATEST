"use client";

const FoodCartCard = ({ cart }) => {
  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-md overflow-hidden w-full max-w-sm">
      <div className="p-4 space-y-2">
        <div className="flex gap-3 mb-3">
          <div className="relative w-20 h-20 shrink-0">
            <img
              src={cart.foodImg}
              alt={cart.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold line-clamp-1">{cart.title}</h2>
            <p className="text-green-500 font-semibold">TK. {cart.price}</p>
            <p className="text-sm text-gray-400">Category: {cart.category}</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <button className="w-full py-2 rounded-lg bg-red-600 hover:bg-red-700 transition">
            Delete
          </button>

          <button className="w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCartCard;
