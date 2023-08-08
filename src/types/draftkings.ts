export interface DraftKingsResponse {
    events: Competition[]
}

export interface Competition {
    id: string
    name: string
    homeTeamName: string
    awayTeamName: string
    startDate: string
    offers: Offer[]
}

export interface Offer {
    id: string
    label: string
    outcomes: Outcome[]
    main: boolean
}

export interface Outcome {
    id: string
    label: string
    line?: string
    oddsAmerican: string
    oddsDecimal: number
    oddsFractional: string
}
