export interface BovadaResponse {
    path: Path[]
    events: Competition[]
}

export interface Path {
    id: string
    link: string
    description: string
    type: string
    sportCode: string
    order: number
    leaf: boolean
    current: boolean
}

export interface Competition {
    id: string
    description: string
    type: string
    link: string
    status: string
    sport: string
    startTime: number
    live: boolean
    awayTeamFirst: boolean
    denySameGame: string
    teaserAllowed: boolean
    competitionId: string
    notes: string
    numMarkets: number
    lastModified: number
    competitors: Competitor[]
    displayGroups: DisplayGroup[]
}

export interface Competitor {
    id: string
    name: string
    home: boolean
}

export interface DisplayGroup {
    id: string
    description: string
    defaultType: boolean
    alternateType: boolean
    markets: Market[]
    order: number
}

export interface Market {
    id: string
    descriptionKey: string
    description: string
    key: string
    marketTypeId: string
    status: string
    singleOnly: boolean
    notes: string
    period: Period
    outcomes: Outcome[]
}

export interface Period {
    id: string
    description: string
    abbreviation: string
    live: boolean
    main: boolean
}

export interface Outcome {
    id: string
    description: string
    status: string
    type: string
    competitorId?: string
    price: Price
}

export interface Price {
    id: string
    handicap?: string
    american: string
    decimal: string
    fractional: string
    malay: string
    indonesian: string
    hongkong: string
}
