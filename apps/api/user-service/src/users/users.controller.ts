import { Body, Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { UsersService } from "./users.service";
import { USERS_SERVICE } from "shared";
import { CreateUserDto } from "./dto/create-user.dto";


@Controller()
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @MessagePattern(USERS_SERVICE.GET_LIST)
  getList() {
    return this.usersService.getList();
  }

  @MessagePattern(USERS_SERVICE.CREATE)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

}