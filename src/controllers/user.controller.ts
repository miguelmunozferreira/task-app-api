import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExtend } from "../interfaces/requestextend.interface";
import * as UserService from "../services/user.service";

const getUsersCtrl = async (req: RequestExtend, res: Response) => {
  try {
    console.log(req.user);
    const responseUsers = await UserService.getUsers();
    res.send(responseUsers);
  } catch (e) {
    handleHttp(res, "ERROR_GET_USERS");
  }
};

export { getUsersCtrl };
