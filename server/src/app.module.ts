import { Module } from '@nestjs/common';
import { RouterModule, APP_PIPE } from "@nestjs/core"
import { AppController } from './app.controller';
import { CountryModule } from './v1/country/country.module';
import { CityModule } from './v1/city/city.module';
import { CurrencyModule } from './v1/currency/currency.module';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { HttpExceptionFilter } from './common/http-exception.filter';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.development' }),
    DatabaseModule,
    CountryModule,
    CityModule,
    CurrencyModule,
    RouterModule.register([
      {
        path: 'api/v1',
        children: [
          {
            path: 'country',
            module: CountryModule,
          },
          {
            path: 'city',
            module: CityModule,
          },
          {
            path: 'currency',
            module: CurrencyModule,
          }
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: HttpExceptionFilter,
    },
    AppService,
  ],
})
export class AppModule { }
