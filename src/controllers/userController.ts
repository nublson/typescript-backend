import { Request, Response } from "express";
import api from "../services/api";
import emailService from "../services/EmailService";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

export default {
  async index(req: Request, res: Response) {
    const { data } = await api.get("/users");

    const users = data.map((user: User) => {
      return user;
    });

    return res.json(users);
  },

  async store(req: Request, res: Response) {
    const { name, email } = req.body;

    const response = emailService.sendMail({
      to: { name, email },
      message: { subject: "Account created", body: "Welcome!" },
    });

    res.json({ response });
  },
};
