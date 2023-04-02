import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import Clients from "./clients.entity";


@Entity("contacts")
class Contacts {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    fullName: string

    @Column()
    email: string

    @Column()
    phoneNumber: string

    @Column({nullable: true})
    description: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => Clients, (clients) => clients.id, {
        onDelete: "CASCADE"
    })
    @Column({name: "clientId"})
    client: string
}

export default Contacts