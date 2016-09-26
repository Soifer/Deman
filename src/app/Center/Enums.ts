export enum VodServices {
    genre = 1,
    program = 2,
    season = 3,
    episode = 4
}
export enum ApiControllers {
    GenreController = VodServices.genre,
    ProgramController = VodServices.program,
    SeasonController = VodServices.season,
    EpisodeController = VodServices.episode
}