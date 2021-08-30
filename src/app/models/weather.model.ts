export interface Weather {
    description: string;
    code: number;
    temp: {
        current: number,
        max: number,
        min: number
    },
    windSpeed: number,
    humidity: number,
    sunrise: Date,
    sunset: Date,
    icon: string,
    hours: {
        description: string,
        icon: string,
        temp: number
    }[]
}