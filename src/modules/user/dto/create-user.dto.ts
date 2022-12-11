import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ default: 'a@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ default: '1234' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ default: 'islam' })
  @IsString()
  name: string;

}
