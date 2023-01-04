import { Controller, Get, Post, Body, HttpCode, Param, Delete, Put } from '@nestjs/common';
import { CityService } from './city.service';
import { City } from '../../database/entities/city/city.entity';
import { CityDto } from './dto/city.dto';

@Controller()
export class CityController {
  constructor(private countryService: CityService) {}

  @Get()
  public async findAll(): Promise<City[]> {
    return this.countryService.findAll();
  }

  @Get(':id')
  public async findById(@Param() params): Promise<City | Error> {
    const { id } = params;
    return this.countryService.findById(id);
  }
  
  @Delete(':id')
  public async deleteById(@Param() params): Promise<City | Error> {
    const { id } = params;
    return this.countryService.deleteById(id);
  }

  @Post()
  @HttpCode(201)
  public async addCountry(@Body() body: CityDto) {
    return this.countryService.addCountry(body);
  }

  @Put()
  @HttpCode(201)
  public async updateCountry(@Body() body: CityDto) {
    return this.countryService.updateCountry(body);
  }
}