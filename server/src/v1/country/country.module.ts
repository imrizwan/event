import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { countryProviders } from './country.providers';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
@Module({
  imports: [DatabaseModule],
  providers: [...countryProviders, CountryService],
  exports: [CountryService],
  controllers: [CountryController],
})
export class CountryModule {}