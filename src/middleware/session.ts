import { Response, NextFunction, request } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExtend } from "../interfaces/requestextend.interface";

const checkJwt = (req: RequestExtend, res: Response, next: NextFunction) => {
  try {
    const jwtUser = req.headers.authorization || null;
    const jwt = jwtUser?.split(" ").pop();
    const idUser = verifyToken(`${jwt}`);
    if (idUser) {
      req.user = idUser;
      next();
    } else {
      res.status(403);
    }
  } catch (error) {
    res.status(403).send("SESSION INVALID");
  }
};

export { checkJwt };
