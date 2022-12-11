import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {UserService} from "../user/user.service";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
      private userService: UserService,
      private  jwtService:JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
        const matchPassword=await bcrypt.compare(pass,user.password);
        if (user && matchPassword) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = {
            username: user.username,
            sub: user.userId
        };
        return {
            token: this.jwtService.sign(payload),
        };
    }
}