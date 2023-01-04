import { DataSource } from 'typeorm';
import { City } from '../../database/entities/city/city.entity'

export const cityProviders = [
  {
    provide: 'CITY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(City),
    inject: ['DATA_SOURCE'],
  },
];