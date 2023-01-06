import { Injectable, Inject, Body, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Currency } from '../../database/entities/currency/currency.entity';
import { CurrencyDto } from './dto/currency.dto';
@Injectable()
export class CurrencyService {
  constructor(
    @Inject('CURRENCY_REPOSITORY')
    private currencyRepository: Repository<Currency>,
  ) { }

  async findAll(): Promise<Currency[]> {
    try {
      return this.currencyRepository
        .createQueryBuilder('currency')
        // .innerJoinAndSelect('currency.countries', 'id')
        .where("currency.isDeleted = :isDeleted", { isDeleted: false })
        .getMany();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findById(id: number): Promise<Currency> {
    try {
      const currency = await this.currencyRepository
        .createQueryBuilder('currency')
        // .innerJoinAndSelect('currency.countries', 'id')
        .where("currency.id = :id", { id: id })
        .andWhere("currency.isDeleted = :isDeleted", { isDeleted: false })
        .getOne();

      if (!currency) {
        throw new HttpException('Currency not found', HttpStatus.NOT_FOUND);
      }
      return currency;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteById(id: number): Promise<Currency | Error> {
    try {
      let currency = await this.currencyRepository
        .createQueryBuilder()
        .where("id = :id", { id: id })
        .getOne();

      if (!currency) {
        throw new HttpException('Currency not found', HttpStatus.NOT_FOUND);
      }

      currency.isDeleted = true;
      currency.deletedAt = new Date();
      currency.deletedBy = "N/A";
      currency.version = currency.version + 1;
      await this.currencyRepository.save(currency);
      return currency;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async addCurrency(@Body() currency: CurrencyDto) {
    try {
      let data = {
        ...currency,
        createdAt: new Date(),
        updatedAt: new Date(),
        isDeleted: false,
        createdBy: "N/A",
        updatedBy: "N/A",
        deletedBy: "N/A",
        version: 1,
      }

      let ans = await this.currencyRepository
        .createQueryBuilder()
        .insert()
        .into(Currency)
        .values(data)
        .execute();
      return ans;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateCurrency(@Body() currency: CurrencyDto) {

    try {
      let currencyExist = await this.currencyRepository
        .createQueryBuilder()
        .where("id = :id", { id: currency.id })
        .getOne();

      if (!currencyExist) {
        throw new HttpException('Currency not found', HttpStatus.NOT_FOUND);
      }

      let data = {
        ...currency,
        updatedAt: new Date(),
        updatedBy: "N/A",
        version: currencyExist.version + 1,
      }

      let ans = await this.currencyRepository
        .createQueryBuilder()
        .update(Currency)
        .set(data)
        .where("id = :id", { id: currency.id })
        .execute();
      return ans;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}