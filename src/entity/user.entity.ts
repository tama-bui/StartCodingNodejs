import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { Author } from "./author.entity";
import { Field, ID, ObjectType } from "type-graphql";
import { query } from "express";
 
@ObjectType()
@Entity()
export class User {
 
    @Field()
    @PrimaryGeneratedColumn()
    id!: number
 
    @Field()
    @Column()
    fullName!: string
 
   
    @Field()
    @Column()
    email!: string
   
   
    @Field()
    @Column()
    password!: string
 
    @Field()
    @CreateDateColumn({type: 'timestamp'})
    createdAt!:string
 
}
