import { Injectable, Inject, Body, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { City } from '../../database/entities/city/city.entity';
import { CityDto } from './dto/city.dto';
@Injectable()
export class CityService {
  constructor(
    @Inject('CITY_REPOSITORY')
    private cityRepository: Repository<City>,
  ) { }

  async findAll(): Promise<City[]> {
    try {
      return this.cityRepository
        .createQueryBuilder('city')
        .innerJoinAndSelect('city.countryId', 'id')
        .where("city.isDeleted = :isDeleted", { isDeleted: false })
        .getMany();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findById(id: number): Promise<City> {
    try {
      const city = await this.cityRepository
        .createQueryBuilder('city')
        .innerJoinAndSelect('city.countryId', 'id')
        .where("city.id = :id", { id: id })
        .andWhere("city.isDeleted = :isDeleted", { isDeleted: false })
        .getOne();

      if (!city) {
        throw new HttpException('City not found', HttpStatus.NOT_FOUND);
      }
      return city;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteById(id: number): Promise<City | Error> {
    try {
      let city = await this.cityRepository
        .createQueryBuilder()
        .where("id = :id", { id: id })
        .getOne();

      if (!city) {
        throw new HttpException('City not found', HttpStatus.NOT_FOUND);
      }

      city.isDeleted = true;
      city.deletedAt = new Date();
      city.deletedBy = "N/A";
      city.version = city.version + 1;
      await this.cityRepository.save(city);
      return city;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async addCity(@Body() city: CityDto) {
    try {
      let data = {
        ...city,
        createdAt: new Date(),
        updatedAt: new Date(),
        isDeleted: false,
        createdBy: "N/A",
        updatedBy: "N/A",
        deletedBy: "N/A",
        version: 1,
      }

      let ans = await this.cityRepository
        .createQueryBuilder()
        .insert()
        .into(City)
        .values(data)
        .execute();
      return ans;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateCity(@Body() city: CityDto) {

    try {
      let cityExist = await this.cityRepository
        .createQueryBuilder()
        .where("id = :id", { id: city.id })
        .getOne();

      if (!cityExist) {
        throw new HttpException('City not found', HttpStatus.NOT_FOUND);
      }

      let data = {
        ...city,
        updatedAt: new Date(),
        updatedBy: "N/A",
        version: cityExist.version + 1,
      }

      let ans = await this.cityRepository
        .createQueryBuilder()
        .update(City)
        .set(data)
        .where("id = :id", { id: city.id })
        .execute();
      return ans;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}