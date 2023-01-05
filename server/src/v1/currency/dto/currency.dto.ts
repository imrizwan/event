import { IsOptional, IsNotEmpty, IsUppercase, MaxLength, IsBoolean } from 'class-validator';
import { CountryDto } from '../../country/dto/country.dto';
export class CurrencyDto {
    @IsOptional()
    id: number;

    @IsNotEmpty({
        message: 'Name is required',
    })
    name: string;
    
    @IsNotEmpty({
        message: 'Symbol is required',
    })
    symbol: string;
    
    @IsOptional()
    countries: CountryDto[];

    @IsOptional()
    version: number;

    @IsBoolean()
    isDeleted: boolean;
}