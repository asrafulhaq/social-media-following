import asynchandler from "express-async-handler";
import prisma from "../prisma/client.js";

/**
 * GET ALL USERS DATA
 * @method GET  /api/v1/user
 */
export const getAllUsers = asynchandler(async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

/**
 * GET ALL USERS DATA
 * @method GET  /api/v1/user
 */
export const createUser = asynchandler(async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
  });
  res.status(200).json(user);
});

export const getUserProfile = asynchandler(async (req, res) => {
  // get user profile ID
  const { id } = req.params;

  // now get single user profile data
  const data = await prisma.user.findUnique({
    where: { id },
    include: {
      onosoronKari: { include: { following: true } },
      onosoronKori: { include: { follower: true } },
    },
  });

  // send response
  res.status(200).json(data);
});
