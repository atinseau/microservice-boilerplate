import { CreateUserDto } from "shared";

export function getFullName(createUserDto: CreateUserDto) {
  return `${createUserDto.firstName} ${createUserDto.lastName}`
}