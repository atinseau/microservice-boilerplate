import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { EnvDto } from "./common/dto/env.dto";
import { validate } from "shared";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'user.db',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => validate(EnvDto, config)
    }),
    UsersModule
  ]
})
export class AppModule {}