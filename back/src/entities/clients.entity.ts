import { hashSync } from "bcrypt";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import Contacts from "./contacts.entity";


@Entity("clients")
class Clients {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    fullName: string

    @Column()
    email: string

    @Column()
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    hashpassword() {
        this.password = hashSync(this.password, 10) 
    }

    @Column()
    phoneNumber: string

    @Column({nullable: true})
    description: string

    @CreateDateColumn()
    createdAt: Date
    
    @OneToMany(() => Contacts, (contacts) => contacts.client)
    @JoinColumn()
    contacts: Contacts[]
}

export default Clients