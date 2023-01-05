import { DataSource } from 'typeorm';
import { Country } from './entities/country/country.entity';
import { City } from './entities/city/city.entity';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return new Promise<DataSource>((resolve, reject) => {
        try {
          const dataSource = new DataSource({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [Country, City],
            synchronize: true,
          });

          dataSource.initialize()
            .then(() => {
              resolve(dataSource);
            })
            .catch((error) => {
              reject("Error connecting to database");
            });
        } catch (error) {
          reject("Error connecting to database");
        }
      })
    },
  },
];