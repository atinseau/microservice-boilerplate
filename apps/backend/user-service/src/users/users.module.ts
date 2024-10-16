import { Module } from "@nestjs/common";
import { UsersService } from "./domain/services/users.service";
import { UsersController } from "./adapters/controllers/users.controller";
import { UserApplicationUseCase } from "./application/usecases/user-application.usecases";
import { IUsersService } from "./domain/interfaces/users.service.interface";
import { UserRepository } from "./infrastructure/repositories/user.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./infrastructure/entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity
    ])
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: IUsersService,
      useClass: UsersService
    },
    UserApplicationUseCase,
    UserRepository
  ]
})
export class UsersModule { }