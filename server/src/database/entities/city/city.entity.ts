import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Country } from '../country/country.entity';
import {
  Length,
} from "class-validator"
@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToOne(type => Country, parent => parent.cities)
  country: Country;

  @Column({ unique: true })
  @Length(2, 2)
  code: string;

  @Column({ unique: true })
  nativeName: string;

  @Column()
  numericCode: string;

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