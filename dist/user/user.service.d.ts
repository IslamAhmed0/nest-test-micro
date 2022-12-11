import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import { UserRepository } from "./repository/user.repository";
export declare class UserService {
    private userRepo;
    constructor(userRepo: UserRepository);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(username: string): Promise<User | any>;
    getByEmail(email: string): Promise<User>;
    findAll(): Promise<User[]>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
