import Reviews from "./Reviews";

//meta data cannot be in client component so we moved it on reviews
export const metadata = {
  title: "Reviews",
  description: "Our dev story app",
};

const ReviewsPage = () => {
  return <Reviews></Reviews>;
};

export default ReviewsPage;
