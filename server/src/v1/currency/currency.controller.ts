import { Controller, Get, Post, Body, HttpCode, Param, Delete, Put } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { Currency } from '../../database/entities/currency/currency.entity';
import { CurrencyDto } from './dto/currency.dto';

@Controller()
export class CityController {
  constructor(private cityService: CityService) {}

  @Get()
  public async findAll(): Promise<City[]> {
    return this.cityService.findAll();
  }

  @Get(':id')
  public async findById(@Param() params): Promise<City | Error> {
    const { id } = params;
    return this.cityService.findById(id);
  }
  
  @Delete(':id')
  public async deleteById(@Param() params): Promise<City | Error> {
    const { id } = params;
    return this.cityService.deleteById(id);
  }

  @Post()
  @HttpCode(201)
  public async addCity(@Body() body: CityDto) {
    return this.cityService.addCity(body);
  }

  @Put()
  @HttpCode(201)
  public async updateCity(@Body() body: CityDto) {
    return this.cityService.updateCity(body);
  }
}