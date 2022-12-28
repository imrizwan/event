import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Country } from '../../database/entities/country/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @Inject('COUNTRY_REPOSITORY')
    private countryRepository: Repository<Country>,
  ) { }

  async findAll(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  async addCountry(country: Country) {
    let ans = await this.countryRepository
      .createQueryBuilder()
      .insert()
      .into(Country)
      .values(country)
      .execute();
    return ans;
  }
}