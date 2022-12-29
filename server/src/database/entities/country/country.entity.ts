import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
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

  @Column()
  nativeName: string;

  @Column()
  numericCode: string;

  @Column()
  flag: string;

  @Column()
  cioc: string;

  @Column()
  currencies: string;

  @Column()
  languages: string;

  @Column()
  borders: string;

  @Column()
  topLevelDomain: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;

  @Column()
  isDeleted: boolean;

  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;

  @Column()
  deletedBy: string;

  @Column()
  version: number;
}