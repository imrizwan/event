import { Controller, Get, Post, Body } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from '../../database/entities/country/country.entity';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get('all')
  async findAll(): Promise<Country[]> {
    return this.countryService.findAll();
  }
}