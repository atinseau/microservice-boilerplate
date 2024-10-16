import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from 'shared'
import { EnvDto } from './common/dto/env.dto';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => validate(EnvDto, config)
    }),
    UsersModule,
  ],
})
export class AppModule { }
