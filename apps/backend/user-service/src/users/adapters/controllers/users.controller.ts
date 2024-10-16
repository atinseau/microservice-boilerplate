import { UserApplicationUseCase } from "@/users/application/usecases/user-application.usecases";
import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto, USERS_SERVICE } from "shared";

@Controller()
export class UsersController {

  constructor(private readonly userApplicationUseCase: UserApplicationUseCase) {}

  @MessagePattern(USERS_SERVICE.GET_LIST)
  getList() {
    return this.userApplicationUseCase.getList();
  }

  @MessagePattern(USERS_SERVICE.CREATE)
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userApplicationUseCase.createUser(createUserDto)
  }

}