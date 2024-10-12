import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from 'shared'
import { EnvDto } from './common/dto/env.dto';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => validate(EnvDto, config)
    })
  ],
})
export class AppModule { }
