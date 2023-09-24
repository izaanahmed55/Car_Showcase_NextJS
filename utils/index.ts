import { FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const headers = {
        "X-RapidAPI-Key": "900b5361aemsh81f22f46dd12892p1f8eaajsncff36a55d9ad",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    const { manuacturer, year, model, limit, feul } = filters;

    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?
        make=${manuacturer}&year=${year}&model=${model}&limit=${limit}
        &feul_type=${feul}`,
        {
            headers: headers,
        }
    );

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${
        window.location.pathname
    }?${searchParams.toString()}`;

    return newPathname
};
