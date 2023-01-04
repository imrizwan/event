import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { City } from "../city/city.entity";
import {
  Length,
} from "class-validator"
@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  @Length(2, 2)
  code: string;

  @OneToMany(type => City, child => child.country)
  cities: City[];

  @Column({ unique: true })
  capital: string;

  @Column()
  region: string;

  @Column()
  subregion: string;

  @Column()
  population: number;

  @Column()
  area: number;

  @Column()
  gini: number;

  @Column({ unique: true })
  nativeName: string;

  @Column()
  numericCode: string;

  @Column({ unique: true })
  flag: string;

  @Column({ nullable: true })
  cioc: string;

  @Column()
  currencies: string;

  @Column()
  currencySymbol: string;

  @Column()
  languages: string;

  @Column()
  topLevelDomain: string;

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