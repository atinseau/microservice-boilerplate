import { UserCreateResponse } from "@/users/domain/types/user-create-response.type"
import { CreateUserDto } from "shared"
import { UserGetListResponse } from "../types/user-get-list-response.type"

export abstract class IUsersService {
  abstract getList(): UserGetListResponse
  abstract create(createUserDto: CreateUserDto): UserCreateResponse
}