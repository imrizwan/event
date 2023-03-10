import { Controller, Get, Post, Body, HttpCode, Param, Delete, Put } from '@nestjs/common';
import { CityService } from './city.service';
import { City } from '../../database/entities/city/city.entity';
import { CityDto } from './dto/city.dto';

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