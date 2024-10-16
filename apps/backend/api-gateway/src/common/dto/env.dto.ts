import { IsNumber, Max, Min } from 'class-validator'

export class EnvDto {
  @IsNumber()
  @Min(0)
  @Max(65535)
  PORT: number

  @IsNumber()
  @Min(0)
  @Max(65535)
  USER_SERVICE_PORT: number
}