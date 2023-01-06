import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany, JoinColumn, JoinTable } from 'typeorm';
import { Country } from "../country/country.entity";

@Entity()
export class Currency {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ unique: true })
    symbol: string;

    @ManyToMany(type => Country, parent => parent.currencies)
    // @JoinColumn({ name: 'countries', referencedColumnName: 'id' })
    @JoinTable()
    countries: Country[];

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    deletedAt: Date;

    @Column({ default: false })
    isDeleted: boolean;

    @Column({ default: null, nullable: true })
    createdBy: string;

    @Column({ default: null, nullable: true })
    updatedBy: string;

    @Column({ default: null, nullable: true })
    deletedBy: string;

    @Column({ default: 1 })
    version: number;
}