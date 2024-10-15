import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { ClientProxyFactory, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";
import { USERS_SERVICE_NAME } from "shared";


@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: USERS_SERVICE_NAME,
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            port: configService.get<number>('USER_SERVICE_PORT'),
          }
        });
      },
      inject: [ConfigService],
    }
  ]
})
export class UsersModule { }