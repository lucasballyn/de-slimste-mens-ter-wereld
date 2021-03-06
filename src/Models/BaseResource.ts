import {Column, Generated, PrimaryGeneratedColumn} from "typeorm";

export abstract class BaseResource {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Generated("increment")
    number: number;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({nullable: true, type: "timestamp"})
    updatedAt: Date | null;

    @Column({nullable: true, type: "timestamp"})
    deletedAt: Date | null;
}
