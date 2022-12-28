import { Dropdown } from "../../components";
import { IData } from '../../interfaces';
// interface Currency {
//     id: number;
//     name: string;
//     symbol: string;
//     rate: number;
//     country: string;
//     countryCode: string;
// }

const currencies = [
    {
        id: 1,
        name: "USD",
        symbol: "$",
        rate: 1.0,
        country: "United States",
        countryCode: "US",
    },
    {
        id: 2,
        name: "EUR",
        symbol: "€",
        rate: 0.9,
        country: "Eurozone",
        countryCode: "EU",
    },
    {
        id: 3,
        name: "GBP",
        symbol: "£",
        rate: 0.8,
        country: "United Kingdom",
        countryCode: "UK",
    },
    {
        id: 4,
        name: "CAD",
        symbol: "C$",
        rate: 1.3,
        country: "Canada",
        countryCode: "CA",
    },
    {
        id: 5,
        name: "AUD",
        symbol: "A$",
        rate: 1.4,
        country: "Australia",
        countryCode: "AU",
    },
    {
        id: 6,
        name: "JPY",
        symbol: "¥",
        rate: 110.0,
        country: "Japan",
        countryCode: "JP",
    },
    {
        id: 7,
        name: "CNY",
        symbol: "CN¥",
        rate: 6.5,
        country: "China",
        countryCode: "CN",
    },
    {
        id: 8,
        name: "INR",
        symbol: "₹",
        rate: 70.0,
        country: "India",
        countryCode: "IN",
    },
    {
        id: 9,
        name: "RUB",
        symbol: "₽",
        rate: 70.0,
        country: "Russia",
        countryCode: "RU",
    },
    {
        id: 10,
        name: "KRW",
        symbol: "₩",
        rate: 1100.0,
        country: "South Korea",
        countryCode: "KR",
    },
    {
        id: 11,
        name: "BRL",
        symbol: "R$",
        rate: 5.0,
        country: "Brazil",
        countryCode: "BR",
    },
    {
        id: 12,
        name: "AED",
        symbol: "د.إ",
        rate: 3.67,
        country: "United Arab Emirates",
        countryCode: "AE",
    }
]

const TopNavBar = () => {

    const onClick = (e: React.MouseEvent<HTMLElement>, data: IData) => {
        console.log('clicked', data);
    }


    return (
        <nav className="fixed top-0 left-0 right-0 z-20 bg-gray-900">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <div className="text-white font-bold text-xl">Logo</div>
                <div className="flex items-center">
                    <div className="text-white mr-3">Home</div>
                    <div className="text-white mr-3">About</div>
                    <div className="text-white mr-3">
                        <Dropdown data={currencies} onClick={onClick} />
                    </div>
                </div>
            </div>
        </nav>

    )
}
export default TopNavBar; 