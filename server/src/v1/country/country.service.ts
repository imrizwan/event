import { Injectable, Inject, Body } from '@nestjs/common';
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
    return this.countryRepository.find();
  }

  async addCountry(@Body() country: CountryDto) {
    console.log(country)

    let ans = await this.countryRepository
      .createQueryBuilder()
      .insert()
      .into(Country)
      .values(country)
      .execute();
    return country;
  }
}