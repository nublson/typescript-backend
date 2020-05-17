import { Request, Response } from "express";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

export default {
  async index(req: Request, res: Response) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = data.map((user: User) => {
      return user;
    });

    return res.json(users);
  },
};
