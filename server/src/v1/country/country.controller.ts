import { Controller, Get, Post, Body, HttpCode, Param, Delete, Put } from '@nestjs/common';
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

  @Get(':id')
  public async findById(@Param() params): Promise<Country | Error> {
    const { id } = params;
    return this.countryService.findById(id);
  }
  
  @Delete(':id')
  public async deleteById(@Param() params): Promise<Country | Error> {
    const { id } = params;
    return this.countryService.deleteById(id);
  }

  @Post()
  @HttpCode(201)
  public async addCountry(@Body() body: CountryDto) {
    return this.countryService.addCountry(body);
  }

  @Put()
  @HttpCode(201)
  public async updateCountry(@Body() body: CountryDto) {
    return this.countryService.updateCountry(body);
  }
}