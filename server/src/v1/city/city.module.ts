import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { cityProviders } from './city.providers';
import { CityService } from './city.service';
import { CityController } from './city.controller';
@Module({
  imports: [DatabaseModule],
  providers: [...cityProviders, CityService],
  exports: [CityService],
  controllers: [CityController],
})
export class CityModule {}