import UserModel from "../models/user.model";

export const getUsers = async () => {
  const res = await UserModel.find().select("-password");
  return res;
};
