import { Controller, Request, Post, UseGuards, Get, Req, Body } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from "../../guard/local-auth.guard";
import { ApiTags } from "@nestjs/swagger";

@Controller('auth')
@ApiTags("user")

export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login (@Req() req) {
    return this.authService.login(req.user);
  }


  @Post('register')
  async register(@Request() req) {
    //return this.authService.register(req);
  }

}