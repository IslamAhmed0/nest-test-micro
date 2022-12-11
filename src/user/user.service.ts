import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { UserRepository } from "./repository/user.repository";

@Injectable()
export class UserService {
  constructor(
             private userRepo:UserRepository
  ) {
  }
  async create(createUserDto: CreateUserDto) {

    const hashPassword= bcrypt.hash(createUserDto.password,10)
    createUserDto.password=await hashPassword;
    const newUser= await this.userRepo.create(createUserDto);
    return await this.userRepo.save(createUserDto);
   return newUser;
  }


  async findOne(username: string): Promise<User | any> {
    return this.userRepo.findOne({
      where:{username:username}
    })
  }

  async getByEmail(email:string){
    return this.userRepo.findOne({
      where:{email:email}
    })
  }

  findAll() {
   // return `This action returns all user`;
    return this.userRepo.find({})
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
