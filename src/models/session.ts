export interface SessionQueryState {
    sessions: SessionQuerySessionItem[];
}

export interface SessionQuerySessionItem {
    id: string;
    image: string;
    location: string;
    host: string;
    created: number;
    port: {
        [name: string]: number,
    };
}
