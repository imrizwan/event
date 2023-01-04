import { IsOptional, IsNotEmpty, IsUppercase, MaxLength, IsBoolean } from 'class-validator';
import { CountryDto } from '../../country/dto/country.dto';
export class CityDto {
    @IsOptional()
    id: number;
    @IsNotEmpty()
    country: CountryDto;
    @IsNotEmpty({
        message: 'Name is required',
    })
    name: string;
    @IsNotEmpty({
        message: 'Code is required',
    })
    @IsUppercase({
        message: 'City code must be uppercase',
    })
    @MaxLength(2, {
        message: 'City code must be 2 characters long',
    })
    code: string;
    @IsNotEmpty({
        message: 'Region is required',
    })
    nativeName: string;
    @IsNotEmpty({
        message: 'Numeric code is required',
    })
    numericCode: string;
    @IsOptional()
    version: number;
    @IsBoolean()
    isDeleted: boolean;
}