import { Controller, Get, Post, Body, HttpCode, Param, Delete, Put } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { Currency } from '../../database/entities/currency/currency.entity';
import { CurrencyDto } from './dto/currency.dto';

@Controller()
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  @Get()
  public async findAll(): Promise<Currency[]> {
    return this.currencyService.findAll();
  }

  @Get(':id')
  public async findById(@Param() params): Promise<Currency | Error> {
    const { id } = params;
    return this.currencyService.findById(id);
  }
  
  @Delete(':id')
  public async deleteById(@Param() params): Promise<Currency | Error> {
    const { id } = params;
    return this.currencyService.deleteById(id);
  }

  @Post()
  @HttpCode(201)
  public async addCurrency(@Body() body: CurrencyDto) {
    return this.currencyService.addCurrency(body);
  }

  @Put()
  @HttpCode(201)
  public async updateCurrency(@Body() body: CurrencyDto) {
    return this.currencyService.updateCurrency(body);
  }
}