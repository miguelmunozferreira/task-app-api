import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

interface RequestExtend extends Request {
  user?: string | JwtPayload;
}

export { RequestExtend };
