import { IsEmail, IsNotEmpty, IsUppercase, MaxLength } from 'class-validator';

export class CountryDto {
    name: string;

    @IsUppercase({
        message: 'Country code must be uppercase',
    })
    @MaxLength(2, {
        message: 'Country code must be 2 characters long',
    })
    code: string;
    capital: string;
    region: string;
    subregion: string;
    population: number;
    area: number;
    gini: number;
    nativeName: string;
    numericCode: string;
    flag: string;
    cioc: string;
    currencies: string;
    languages: string;
    borders: string;
    topLevelDomain: string;
}