import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CountryModule } from './v1/country/country.module';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.development' }),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
