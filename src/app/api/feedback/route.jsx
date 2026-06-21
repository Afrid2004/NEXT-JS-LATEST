import { connect } from "@/lib/db_config";
import { revalidatePath } from "next/cache";

const feedbackCollection = connect("feedbacks");

//get all feedback data
export async function GET(request) {
  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
}

//post feedback data
export async function POST(request) {
  // work like request.body
  const body = await request.json();

  const message = body.message;

  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please enter a message!",
    });
  }

  const newMessage = { message, date: new Date() };

  const result = await feedbackCollection.insertOne(newMessage);
  // refresh
  revalidatePath("/feedbacks");
  return Response.json(result);
}
