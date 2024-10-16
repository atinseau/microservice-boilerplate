import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "shared";
import { IUsersService } from "../interfaces/users.service.interface";
import { UserRepository } from "@/users/infrastructure/repositories/user.repository";
import { map } from "rxjs";

@Injectable()
export class UsersService implements IUsersService {

  constructor(
    private readonly userRepository: UserRepository
  ) { }

  getList() {
    return this.userRepository.findAll();
  }

  create(createUserDto: CreateUserDto) {
    return this.userRepository
      .create(createUserDto)
      .pipe(
        map((insertResult) => ({
          id: insertResult.raw as number,
          message: 'User created successfully'
        }))
      )
  }

}