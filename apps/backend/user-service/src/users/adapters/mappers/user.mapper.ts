import { User } from "@/users/domain/entities/user.entity";
import { UserEntity } from "@/users/infrastructure/entities/user.entity";

export class UserMapper {

  static toDomain(userEntity: UserEntity) {
    return new User(
      userEntity.id,
      userEntity.firstName,
      userEntity.lastName,
      userEntity.email,
      userEntity.password
    )
  }

}