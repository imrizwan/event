import { Injectable, Inject, Body, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Country } from '../../database/entities/country/country.entity';
import { CountryDto } from './dto/country.dto';
@Injectable()
export class CountryService {
  constructor(
    @Inject('COUNTRY_REPOSITORY')
    private countryRepository: Repository<Country>,
  ) { }

  async findAll(): Promise<Country[]> {
    return this.countryRepository
      .createQueryBuilder()
      .where("isDeleted = :isDeleted", { isDeleted: false })
      .getMany();
  }

  async findById(id: number): Promise<Country> {
    const country = await this.countryRepository
      .createQueryBuilder()
      .where("id = :id", { id: id })
      .andWhere("isDeleted = :isDeleted", { isDeleted: false })
      .getOne();

    if (!country) {
      throw new HttpException('Country not found', HttpStatus.NOT_FOUND);
    }
    return country;
  }

  async deleteById(id: number): Promise<Country | Error> {
    let country = await this.countryRepository
      .createQueryBuilder()
      .where("id = :id", { id: id })
      .getOne();

    if (!country) {
      throw new HttpException('Country not found', HttpStatus.NOT_FOUND);
    }

    country.isDeleted = true;
    country.deletedAt = new Date();
    country.deletedBy = "N/A";
    country.version = country.version + 1;
    await this.countryRepository.save(country);
    return country;
  }

  async addCountry(@Body() country: CountryDto) {
    let data = {
      ...country,
      createdAt: new Date(),
      updatedAt: new Date(),
      isDeleted: false,
      createdBy: "N/A",
      updatedBy: "N/A",
      deletedBy: "N/A",
      version: 1,
    }

    let ans = await this.countryRepository
      .createQueryBuilder()
      .insert()
      .into(Country)
      .values(data)
      .execute();
    return ans;
  }

  async updateCountry(@Body() country: CountryDto) {

    let countryExist = await this.countryRepository
      .createQueryBuilder()
      .where("id = :id", { id: country.id })
      .getOne();

    if (!countryExist) {
      throw new HttpException('Country not found', HttpStatus.NOT_FOUND);
    }

    let data = {
      ...country,
      updatedAt: new Date(),
      updatedBy: "N/A",
      version: countryExist.version + 1,
    }
    let ans = await this.countryRepository
      .createQueryBuilder()
      .update(Country)
      .set(data)
      .where("id = :id", { id: country.id })
      .execute();
    return ans;
  }
}