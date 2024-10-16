import { IUsersService } from "@/users/domain/interfaces/users.service.interface";
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "shared";

@Injectable()
export class UserApplicationUseCase {

  constructor(
    private readonly userService: IUsersService
  ) {}

  createUser(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  getList() {
    return this.userService.getList()
  }

}