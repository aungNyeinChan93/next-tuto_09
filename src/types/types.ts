
export type Movie = {
    id: string;
    name: string;
    description: string;
    genre: string;
    image?: string | null;
    releaseDate?: Date | null;
    rating?: number | null;
    createdAt?: Date;
    updatedAt?: Date;
};


