import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { Author } from "./author.entity";
import { Field, ID, ObjectType } from "type-graphql";
import { query } from "express";

@ObjectType()
@Entity()
export class Book {

    @Field()
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()
    title!: string

    @Field(()=>Author)
    @ManyToOne(()=> Author, author=>author.books)
    author!:number

    @Field()
    @CreateDateColumn({type: 'timestamp'})
    createdAt!:string

}
