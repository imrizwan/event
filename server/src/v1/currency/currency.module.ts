import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { currencyProviders } from './currency.providers';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
@Module({
  imports: [DatabaseModule],
  providers: [...currencyProviders, CurrencyService],
  exports: [CurrencyService],
  controllers: [CurrencyController],
})
export class CurrencyModule {}