import { DataSource } from 'typeorm';
import { Country } from '../../database/entities/country/country.entity';

export const countryProviders = [
  {
    provide: 'COUNTRY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Country),
    inject: ['DATA_SOURCE'],
  },
];