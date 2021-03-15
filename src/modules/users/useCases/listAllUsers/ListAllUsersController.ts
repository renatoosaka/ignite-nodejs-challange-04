import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      return response.json(
        this.listAllUsersUseCase.execute({ user_id: user_id as string })
      );
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}

export { ListAllUsersController };
