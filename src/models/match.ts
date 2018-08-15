export interface MatchQueryState {
    match: MatchQueryMatchIndex;
}

export interface MatchQueryMatchIndex {
    [matchKey: string]: MatchQueryMatchItem | null;
}

export interface MatchQueryMatchItem {
    matchKey: string;
    gameKey: string;
    locationKey: string;
    host: string;
    created: number;
    port: {
        [name: string]: number,
    };
}
