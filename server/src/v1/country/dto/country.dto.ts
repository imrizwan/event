import { IsOptional, IsNotEmpty, IsUppercase, MaxLength, IsBoolean } from 'class-validator';
import { CityDto } from '../../city/dto/city.dto';
export class CountryDto {
    @IsOptional()
    id: number;
    @IsNotEmpty({
        message: 'Name is required',
    })
    name: string;

    cities: CityDto[];

    @IsNotEmpty({
        message: 'Code is required',
    })
    @IsUppercase({
        message: 'Country code must be uppercase',
    })
    @MaxLength(2, {
        message: 'Country code must be 2 characters long',
    })
    code: string;
    @IsNotEmpty({
        message: 'Capital is required',
    })
    capital: string;
    @IsNotEmpty({
        message: 'Region is required',
    })
    region: string;
    @IsNotEmpty({
        message: 'Subregion is required',
    })
    subregion: string;
    @IsNotEmpty({
        message: 'Population is required',
    })
    population: number;
    @IsNotEmpty({
        message: 'Area is required',
    })
    area: number;
    @IsNotEmpty({
        message: 'Gini is required',
    })
    gini: number;
    @IsNotEmpty({
        message: 'Native name is required',
    })
    nativeName: string;
    @IsNotEmpty({
        message: 'Numeric code is required',
    })
    numericCode: string;
    @IsNotEmpty({
        message: 'Flag is required',
    })
    flag: string;
    @IsOptional()
    cioc: string;
    @IsNotEmpty({
        message: 'Currencies is required',
    })
    currencies: string;
    @IsNotEmpty({
        message: 'Currency symbol is required',
    })
    currencySymbol: string;
    @IsNotEmpty({
        message: 'Languages is required',
    })
    languages: string;
    @IsNotEmpty({
        message: 'Top level domain is required',
    })
    topLevelDomain: string;
    @IsOptional()
    version: number;
    @IsBoolean()
    isDeleted: boolean;
}