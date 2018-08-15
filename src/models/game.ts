export interface GameQueryState {
    game: GameQueryGameIndex;
    location: GameQueryLocationIndex;
}

export interface GameQueryGameIndex {
    [gameKey: string]: GameQueryGameItem | null;
}
export interface GameQueryLocationIndex {
    [locationKey: string]: GameQueryLocationItem | null;
}

export interface GameQueryGameItem {
    gameKey: string;
    location: {
        [locationKey: string]: true,
    };
}
export interface GameQueryLocationItem {
    locationKey: string;
}
