export interface Property {
    id: string;
    type: string;
    bedrooms: number;
    price: number;
    tenure: string;
    description: string;
    location: string;
    picture: string;
    url: string;
    added: {
        month: string;
        day: number;
        year: number;
    };
}