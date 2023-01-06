import { DataSource } from 'typeorm';
import { Country } from './entities/country/country.entity';
import { City } from './entities/city/city.entity';
import { Currency } from './entities/currency/currency.entity';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      try {
        const dataSource = new DataSource({
          type: 'mysql',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          entities: [Country, City, Currency],
          synchronize: true,
        });

        return dataSource.initialize()
      } catch (error) {
        console.log("Error connecting to database", error);
      }
    },
  },
];