import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {

  private readonly users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: 'password' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', password: 'password' },
    { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com', password: 'password' },
  ];

  getList() {
    return this.users;
  }

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto)
  }

}