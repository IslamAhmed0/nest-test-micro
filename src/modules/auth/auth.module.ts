import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import {UserModule} from "../user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: "islam",
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers:[AuthController],
  providers: [AuthService, LocalStrategy,JwtStrategy],
})
export class AuthModule {}
