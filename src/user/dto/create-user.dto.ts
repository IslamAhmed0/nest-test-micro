import { IsEmail, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ default: 'a@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ default: '1234' })
  @IsNotEmpty()
  password: string;

  // @ApiProperty({ default: 'amira' })
  // @IsString()
  // name: string;

}
