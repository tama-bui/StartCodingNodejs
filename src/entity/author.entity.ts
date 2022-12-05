import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Book } from "./book.entity";
import { Field, ID, ObjectType } from "type-graphql";
import { isDeepStrictEqual } from "util";
import { title } from "process";

@ObjectType()
@Entity()
export class Author {

    @Field()
    @PrimaryGeneratedColumn()
    id!: number

    @Field(()=>String)
    @Column()
    fullName!: string

    @Field(()=>[Book], {nullable:true})
    @OneToMany(()=>Book, book=>book.author,{nullable:true})
    books!:Book[]

    @Field(()=>String)
    @CreateDateColumn({type: 'timestamp'})
    createdAt!:string
}
