import { Controller, Request, Post, UseGuards, Get, Req, Body } from "@nestjs/common";
import { AuthService } from './auth.service';
import { JwtAuthGuard } from "./jwt.auth";
import { LoginUserDto } from "../dto/login-user.dto";
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login (@Req() req) {
    //return this.authService.login(req.user);
  }


  @Post('register')
  async register(@Request() req) {
    //return this.authService.register(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}