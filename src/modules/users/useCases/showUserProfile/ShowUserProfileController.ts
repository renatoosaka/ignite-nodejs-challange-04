import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      return response.json(this.showUserProfileUseCase.execute({ user_id }));
    } catch (error) {
      if (error.message === "User not found") {
        return response.status(404).json({ error: error.message });
      }
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}

export { ShowUserProfileController };
