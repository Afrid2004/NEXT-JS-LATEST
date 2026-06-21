import { connect } from "@/lib/db_config";
import { ObjectId } from "mongodb";

const feedbackCollection = connect("feedbacks");

//get specefic feedback
export async function GET(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.findOne(query);
  return Response.json(result);
}

//update specefic feedback
export async function PATCH(request, { params }) {
  const { id } = await params;
  // get data from user
  const { message } = await request.json();
  // validate the id
  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "please send the correct _id",
    });
  }
  // validate the message
  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please enter a message!",
    });
  }

  const filter = { _id: new ObjectId(id) };
  const updatedDoc = {
    $set: {
      message: message,
    },
  };
  // update the data
  const result = await feedbackCollection.updateOne(filter, updatedDoc);
  return Response.json(result);
}

//delete specific feedback
export async function DELETE(request, { params }) {
  const { id } = await params;
  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "Please enter correct _id",
    });
  }
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.deleteOne(query);
  return Response.json(result);
}
