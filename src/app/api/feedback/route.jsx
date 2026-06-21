import { connect } from "@/lib/db_config";

const feedbackCollection = connect("feedbacks");

//get all feedback data
export async function GET(request) {
  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
}

//post feedback data
export async function POST(request) {
  // work like request.body
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please enter a message!",
    });
  }

  const newMessage = { message, date: new Date() };

  const result = await feedbackCollection.insertOne(newMessage);
  return Response.json(result);
}

//update feedback data
// export async function POST(request) {
//   // work like request.body
//   const { message } = await request.json();

//   if (!message || typeof message !== "string") {
//     return Response.json({
//       status: 400,
//       message: "Please enter a message!",
//     });
//   }

//   const newMessage = { message, date: new Date() };

//   const result = await feedbackCollection.insertOne(newMessage);
//   return Response.json(result);
// }
