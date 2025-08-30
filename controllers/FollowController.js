import asynchandler from "express-async-handler";
import prisma from "../prisma/client.js";

export const getAllFollow = asynchandler(async (req, res) => {
  // Get all follows Data
  const data = await prisma.Follow.findMany();

  // now send all data
  res.status(200).json(data);
});

/**
 * CREATE A NEW FOLLOW
 *
 */
export const createFollow = asynchandler(async (req, res) => {
  // get follower and following
  const { follower, following } = req.body;

  // check user to user
  if (follower == following) {
    return res.status(400).json({ message: "You can't follow yourself" });
  }

  // send data to db
  const data = await prisma.Follow.create({
    data: {
      followerId: follower,
      followingId: following,
    },
  });

  // return data
  res.status(201).json(data);
});
