import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from '../../database/entities/country/country.entity';
import { CountryDto } from './dto/country.dto';

@Controller()
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get()
  public async findAll(): Promise<Country[]> {
    return this.countryService.findAll();
  }

  @Post()
  @HttpCode(201)
  public async addCountry(@Body() body: CountryDto) {
    return this.countryService.addCountry(body);
  }
}