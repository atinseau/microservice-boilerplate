import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  firstName: string

  @Column('text')
  lastName: string

  @Column('text')
  email: string

  @Column()
  password: string

}