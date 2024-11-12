import { Request, response, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";

const registrerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });
  res.send(responseUser);
};

export { loginCtrl, registrerCtrl };
