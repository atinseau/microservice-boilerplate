import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { delay, from, map } from "rxjs";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "shared";
import { UserMapper } from "@/users/adapters/mappers/user.mapper";


@Injectable()
export class UserRepository {

  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) { }

  findAll() {
    return from(this.userRepository.find())
      .pipe(
        map((users) => users.map(UserMapper.toDomain))
      )
  }

  create(createUserDto: CreateUserDto) {
    return from(this.userRepository.insert({
      email: createUserDto.email,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      password: createUserDto.password
    }))
  }

}