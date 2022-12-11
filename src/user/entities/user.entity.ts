import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, Length } from "class-validator";

@Entity()
export class User {
@PrimaryGeneratedColumn()
@PrimaryGeneratedColumn('increment')
id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password?: string;


}
