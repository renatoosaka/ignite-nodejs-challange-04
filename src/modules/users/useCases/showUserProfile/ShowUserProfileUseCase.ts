import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    if (!this.usersRepository.findById(user_id)) {
      throw new Error("User not found");
    }

    return this.usersRepository.findById(user_id);
  }
}

export { ShowUserProfileUseCase };
