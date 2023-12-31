import ApiError from "../../../error/apiError";
import { prisma } from "../../../helpers/prisma.helper";
import type { Prisma, User } from "@prisma/client";
import httpStatus from "http-status";

const select: Prisma.UserSelect = {
  id: true,
  name: true,
  email: true,
  address: true,
  contactNo: true,
  role: true,
  profileImg: true,
  updatedAt: true,
  createdAt: true,
  password: false,
};

const updateUserProfile = async (
  id: string,
  context: Partial<User>
): Promise<User> => {
  const result = await prisma.user.update({
    where: { id },
    data: context,
    select,
  });

  return result;
};

const getAllUsers = async () => {
  const result = await prisma.user.findMany({
    where: {},
    select,
    orderBy: { createdAt: "desc" },
  });
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: { id },
    select,
  });

  if (!result) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Failed to retrieve user data",
      "User doesn't exist"
    );
  }

  return result;
};

const deleteUser = async (id: string) => {
  const result = await prisma.user.delete({
    where: { id },
    select,
  });

  return result;
};

export default {
  getAllUsers,
  getSingleUser,
  updateUserProfile,
  deleteUser,
};
