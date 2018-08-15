export interface StatisticQueryState {
    statistic: AnyStatisticState;
}

export type AnyStatisticState =
    Partial<StartStopState> &
    Partial<RoundState> &
    Partial<PlayerContainerState> &
    Partial<TeamContainerState>;

export interface StartStopState {
    start: number | null;
    stop: number | null;
}

export interface RoundState {
    startedRounds: number;
    finishedRounds: number;
}

export function isPlayerContainerState(
    state: AnyStatisticState,
): state is PlayerContainerState {
    return "player" in state;
}

export interface PlayerContainerState {
    player: {
        [playerKey: string]: PlayerModel;
    };
}

export interface PlayerModel {
    playerKey: string;
    uid: string;
    connected: boolean | null;
    name: string;
    statistic: {
        [statisticKey: string]: number;
    };
}

export function isTeamContainerState(
    state: AnyStatisticState,
): state is TeamContainerState {
    return "team" in state;
}

export interface TeamContainerState {
    team: {
        [teamKey: string]: TeamModel;
    };
}

export interface TeamModel {
    teamKey: string;
    name: string;
    statistic: {
        [statisticKey: string]: number;
    };
    player: {
        [playerKey: string]: boolean;
    };
}
