export interface EspnResponse {
    app: App
    ads: Ads2
    analytics: Analytics4
    routing: Routing
    page: Page
    request: Request
    viewport: Viewport
    user: User
  }
  
  export interface App {
    uid: string
    mode: string
    apiEnv: string
    envName: string
    cdnPath: string
    allowMocks: boolean
    mockDataPort: number
    excludePageCSS: boolean
    assets: Assets
    device: string
    modifier: string
    edition: Edition
    flags: Flags
    tms: Tms
    toodles: Toodles
    requestHeaders: RequestHeaders
    featureGating: FeatureGating
    frameAncestors: string[]
    searchConfig: SearchConfig
    serveStale: string[]
    abScr: string
    footer: Footer
    fastcastConfig: FastcastConfig2
    exitConfig: ExitConfig2[]
    debug: Debug
    baseURL: string
    userab: string
  }
  
  export interface Assets {
    chunks: string[]
    entries: string[]
    css: string[]
  }
  
  export interface Edition {
    bindProviderToOneID: boolean
    country: string
    language: string
    domain: string
    site: string
    siteId: string
    editionKey: string
    localEditionKey: string
    host: string
    config: Config
    https: boolean
    showGetTVProvider: boolean
    translations: Translations
  }
  
  export interface Config {
    editionSettings: EditionSettings
    navId: string
    suggestedSportsId: string
    dictionarySection: string
    javaLocale: JavaLocale
    dateTime: DateTime
    numberFormat: NumberFormat
    temperature: Temperature
    outbrain: Outbrain
    analytics: Analytics
    omniture: Omniture
    chartBeat: ChartBeat
    ads: Ads
    partnerModules: PartnerModules
    sportBranding: SportBranding[]
    siteLogo: SiteLogo
    fantasy: Fantasy
    meta: Meta
    watch: Watch
    appDetails: AppDetails
    shop: Shop
    sportReplacements: SportReplacements
    sportConfigs: SportConfigs
    uriRewrites: UriRewrites
    betting: Betting
    tickets: Tickets
    player: Player
    supportsMobilePlaylist: boolean
    supportsObscuredAdSkipping: boolean
    espnPlusEnabled: boolean
    showFavorites: boolean
    showMobileScoresLink: boolean
    favoriteSportsManagement: boolean
    showInsider: boolean
    showWatch: boolean
    watchVodCountry: string
    allowContextualMenu: boolean
    showCategory: boolean
    hideCategoryLinks: number[]
    categorySettings: CategorySettings
    hasNewsletter: boolean
    showFCContent: boolean
    showCricInfoContent: boolean
    cookieConsent: boolean
    scDeepLinking: boolean
    allowShortUrl: boolean
    allowPrintUrl: boolean
    allowUserAccountManagement: boolean
    nowFeed: boolean
    searchUrl: string
    gameSettings: GameSettings
    fallback: Fallback
    editionAlert: EditionAlert
    feeds: Feeds
    tier2NavIds: Tier2NavIds
    tier3NavIds: Tier3NavIds
    latestVideoCollectionId: number
    videoAutoStart: VideoAutoStart
    useMongo: boolean
    activeSite: boolean
    footer: number
    countries: Country[]
    scoreboardQuickLinksIds: ScoreboardQuickLinksIds
    disneyId: DisneyId
    huluPromo: HuluPromo
    exitConfigId: number
    showWhereToWatch: boolean
    bamSDKConfig: BamSdkconfig
    taboola: Taboola
  }
  
  export interface EditionSettings {
    key: string
    site: string
    language: string
    country: string
    domain: string
    editionSiteId: string
    https: boolean
    showPremVideoAds: boolean
  }
  
  export interface JavaLocale {
    language: string
    region: string
  }
  
  export interface DateTime {
    gmstrp_start: string
    gmstrp_end: string
    range_start: string
    range_end: string
    range_start_long: string
    range_end_long: string
    long: string
    medium: string
    short: string
    timeFormat: string
    firstDayOfWeek: string
    timeZone: string
    timeZoneBucket: string
    defaultFormat: string
    scheduleFormat: string
    scoreboardFormat: string
    scoreboardGameTime: string
    timeZoneString: string
    "ddd, M/D": string
    "MMM D": string
    displayTimeZone: boolean
    age: Age
  }
  
  export interface Age {
    seconds: string
    minutes: string
    hours: string
    days: string
  }
  
  export interface NumberFormat {
    long: string
    short: string
    currency: string
    percent: string
  }
  
  export interface Temperature {
    scale: string
    symbol: string
  }
  
  export interface Outbrain {
    enabled: boolean
    template: string
    desktop: Desktop
    mobile: Mobile
    video: Video
    recap: Recap
  }
  
  export interface Desktop {
    compliantId: string
    nonCompliantId: string
  }
  
  export interface Mobile {
    compliantId: string
    nonCompliantId: string
  }
  
  export interface Video {
    desktop: Desktop2
    mobile: Mobile2
  }
  
  export interface Desktop2 {
    compliantId: string
  }
  
  export interface Mobile2 {
    compliantId: string
  }
  
  export interface Recap {
    desktop: Desktop3
    mobile: Mobile3
  }
  
  export interface Desktop3 {
    compliantId: string
    nonCompliantId: string
  }
  
  export interface Mobile3 {
    compliantId: string
    nonCompliantId: string
  }
  
  export interface Analytics {
    site: string
  }
  
  export interface Omniture {
    enabled: boolean
  }
  
  export interface ChartBeat {
    enabled: boolean
  }
  
  export interface Ads {
    disabled: boolean
    disableAdRequestOnBackgroundedVideo: boolean
    partnerAd: boolean
    "dev-config": number
    "qa-config": number
    "prod-config": number
  }
  
  export interface PartnerModules {
    global: boolean
    nba: boolean
    womenbb: boolean
    golf: boolean
    endurance: boolean
    horse: boolean
    nascar: boolean
  }
  
  export interface SportBranding {
    sport: string
    image: string
    url?: string
  }
  
  export interface SiteLogo {
    cls: string
    featurePhone: FeaturePhone
  }
  
  export interface FeaturePhone {
    name: string
    width: number
    height: number
  }
  
  export interface Fantasy {
    enabled: boolean
  }
  
  export interface Meta {
    seoCountryOverride: boolean
    titleBranding: string
    description: string
    schema: Schema
    defaultMetaImage: string
    social: Social
  }
  
  export interface Schema {
    name: string
  }
  
  export interface Social {
    twitter: Twitter
    facebook: Facebook
  }
  
  export interface Twitter {
    twitterId: string
    card: string
    site: string
    language: string
  }
  
  export interface Facebook {
    id: string
    og_site_name: string
    locale: string
  }
  
  export interface Watch {
    bindProviderToOneID: boolean
    meta: Meta2
    showGetTVProvider: boolean
    supportsWatchEducation: boolean
    supportsVenu: boolean
  }
  
  export interface Meta2 {
    titleBranding: string
  }
  
  export interface AppDetails {
    ios: Ios
    android: Android
  }
  
  export interface Ios {
    id: string
    name: string
    deepLinkUrl: string
    deepLinkUrlScheme: string
  }
  
  export interface Android {
    id: string
    name: string
    deepLinkUrl: string
    deepLinkUrlScheme: string
  }
  
  export interface Shop {
    enabled: boolean
    customAd: boolean
  }
  
  export interface SportReplacements {}
  
  export interface SportConfigs {
    soccer: Soccer
  }
  
  export interface Soccer {
    defaultLeague: string
    competitionsConfig: number
  }
  
  export interface UriRewrites {
    urls: Urls
    roots: Roots
    pathSegments: PathSegments
    paramKeys: ParamKeys
    paramValues: ParamValues
  }
  
  export interface Urls {
    toEdition: ToEdition
    toEnglish: ToEnglish
  }
  
  export interface ToEdition {}
  
  export interface ToEnglish {}
  
  export interface Roots {
    toEdition: ToEdition2
    toEnglish: ToEnglish2
  }
  
  export interface ToEdition2 {
    "/horse/": string
    "/nascar/": string
    "/ncaa/": string
    "/ncb/": string
    "/ncf/": string
    "/oly/": string
    "/rpm/": string
    "/womenbb/": string
    "/flb/": string
    "/fba/": string
    "/ffl/": string
    "/fhl/": string
  }
  
  export interface ToEnglish2 {
    "/oly/summer/gymnastics/": string
    "/oly/summer/cycling/": string
    "/racing/nascar/": string
    "/racing/": string
    "/college-football/": string
    "/college-football/rumors": string
    "/mens-college-basketball/": string
    "/mens-college-basketball/rumors": string
    "/womens-college-basketball/": string
    "/womens-basketball/": string
    "/olympics/": string
    "/cycling/": string
    "/figure-skating/": string
    "/college-sports/": string
    "/gymnastics/": string
    "/skiing/": string
    "/horse-racing/": string
    "/sports/womenbb/": string
    "/sports/horse/": string
    "/sports/endurance/": string
    "/losangeles/": string
    "/newyork/": string
    "/espn/onenacion/": string
    "/fantasy/baseball/": string
    "/fantasy/basketball/": string
    "/fantasy/football/": string
    "/fantasy/hockey/": string
  }
  
  export interface PathSegments {}
  
  export interface ParamKeys {}
  
  export interface ParamValues {}
  
  export interface Betting {
    enabled: boolean
    game: Game
    fightcenter: Fightcenter
    incontent: boolean
    provider: string
    providerLong: string
    providerAnalytics: string
    providerShort: string
    providerId: string
    providerPriority: number
    providerAltText: string
    attribution: Attribution
    schedule: Schedule
  }
  
  export interface Game {
    enabled: boolean
  }
  
  export interface Fightcenter {
    enabled: boolean
  }
  
  export interface Attribution {
    provider: string
    providerLogo: string
    providerLogoDark: string
    providerLink: string
    oddsAttrLogo: string
    darkAttrLogo: string
    miniLogo: string
    miniDarkLogo: string
    geoWhitelist: string[]
  }
  
  export interface Schedule {
    enabled: boolean
    showHeaderLogo: boolean
  }
  
  export interface Tickets {
    enabled: boolean
    provider: string
    baseUrl: string
    callToAction: string
    trackSection: string
  }
  
  export interface Player {
    supportsFantasy: boolean
  }
  
  export interface CategorySettings {
    leagues: boolean
    athletes: boolean
    teams: boolean
    tags: boolean
  }
  
  export interface GameSettings {
    topEventsId: number
    promotedSoccerLeaguesCeId: number
    showBroadcast: boolean
  }
  
  export interface Fallback {
    football: string
    cricket: string
  }
  
  export interface EditionAlert {
    enabled: boolean
    text: string
  }
  
  export interface Feeds {
    googlenews: Googlenews
  }
  
  export interface Googlenews {
    allowedContentTypes: string[]
  }
  
  export interface Tier2NavIds {
    afl: number
    "all-stars": number
    analytics: number
    athletics: number
    "aussies-in-action": number
    badminton: number
    basketball: number
    "body-issue": number
    boston: number
    boxing: number
    btsport: number
    caribbean: number
    chalk: number
    chess: number
    chicago: number
    cleveland: number
    "commonwealth-games": number
    cricket: number
    cycling: number
    dallas: number
    darts: number
    doubletruck: number
    endurance: number
    espnplus: number
    "espn-caponecup": number
    "espn/caponecup": number
    "espn/citizenship": number
    esports: number
    espys: number
    f1: number
    fantasy: number
    fba: number
    ffl: number
    fhl: number
    "field-hockey": number
    flb: number
    freekick: number
    ghana: string
    golf: number
    horse: number
    "indy-car": number
    insider: number
    jayski: number
    kabaddi: number
    league: League
    "little-league-world-series": number
    live: number
    "live-event": number
    "live-game": number
    "los-angeles": number
    "mens-golf": number
    "mens-tennis": number
    milwaukee: number
    mlb: number
    "mlb/beisbolexperience": number
    "mlb/mlb-draft": number
    mma: number
    "mma/bellator": number
    "mma/ufc": number
    motogp: number
    nascar: number
    nba: number
    "nba-development": number
    "nba/nba-free-agency": number
    "nba/stephen-curry": number
    "nba/world-of-woj": number
    nbl: number
    ncaa: number
    ncaaw: number
    ncb: number
    "ncb/ncaa-tournament": number
    ncf: number
    "ncf/cotton-bowl": number
    "ncf/fiesta-bowl": number
    "ncf/orange-bowl": number
    "ncf/peach-bowl": number
    "ncf/playoff": number
    "ncf/rose-bowl": number
    "ncf/sugar-bowl": number
    "ncf/weekday-walkthrough": number
    ncw: number
    netball: number
    "new-york": number
    nfl: number
    "xfl/schedule": number
    "nfl/nfl-free-agency": number
    nhl: number
    nigeria: string
    nrl: number
    oly: number
    "oly/summer/2016": number
    "oly/summer/archery": number
    "oly/summer/athletics": number
    "oly/summer/badminton": number
    "oly/summer/basketball": number
    "oly/summer/boxing": number
    "oly/summer/canoe": number
    "oly/summer/cycling": number
    "oly/summer/equestrian": number
    "oly/summer/fencing": number
    "oly/summer/field-hockey": number
    "oly/summer/golf": number
    "oly/summer/gymnastics": number
    "oly/summer/handball": number
    "oly/summer/judo": number
    "oly/summer/modern-pentathlon": number
    "oly/summer/rowing": number
    "oly/summer/rugby": number
    "oly/summer/sailing": number
    "oly/summer/shooting": number
    "oly/summer/soccer": number
    "oly/summer/swimming": number
    "oly/summer/table-tennis": number
    "oly/summer/taekwondo": number
    "oly/summer/tennis": number
    "oly/summer/triathlon": number
    "oly/summer/volleyball": number
    "oly/summer/water-polo": number
    "oly/summer/weightlifting": number
    "oly/summer/wrestling": number
    "oly/winter/alpine-skiing": number
    "oly/winter/biathlon": number
    "oly/winter/bobsled": number
    "oly/winter/cross-country-skiing": number
    "oly/winter/curling": number
    "oly/winter/figure-skating": number
    "oly/winter/freestyle-skiing": number
    "oly/winter/ice-hockey": number
    "oly/winter/luge": number
    "oly/winter/nordic-combined": number
    "oly/winter/skeleton": number
    "oly/winter/ski-jumping": number
    "oly/winter/snowboarding": number
    "oly/winter/speedskating": number
    recruitingbb: number
    recruitingfb: number
    rpm: number
    rugby: number
    shooting: number
    snooker: number
    soccer: number
    "soccer/espninn": number
    southafrica: string
    specialolympics: number
    sportsnation: number
    tennis: number
    "v8-supercars": number
    watch: number
    wnba: number
    womenbb: number
    "womens-golf": number
    "womens-tennis": number
    "world-baseball-classic": number
    wrestling: number
    wwe: number
  }
  
  export interface League {
    soccer: number
    ncf: number
    "college-football": number
    cricket: number
  }
  
  export interface Tier3NavIds {
    clubhouse: Clubhouse
    "caribbean-series": number
    collegescoreboardindex: number
    doubletruck: number
    draftcast: number
    "nba-summer-league": number
    "world-baseball-classic": number
  }
  
  export interface Clubhouse {
    nba: number
    wnba: number
    mlb: number
    "mens-college-basketball": number
    "womens-college-basketball": number
    soccer: number
    nfl: number
    "college-football": number
    cricket: number
    rugby: number
    nhl: number
  }
  
  export interface VideoAutoStart {
    index: boolean
    scoreboard: boolean
  }
  
  export interface Country {
    name: string
    "country-code": string
    showHreflang: boolean
  }
  
  export interface ScoreboardQuickLinksIds {
    mlb: number
    nba: number
    ncaaf: number
    ncaam: number
    ncaaw: number
    nfl: number
  }
  
  export interface DisneyId {
    loginMethod: string
  }
  
  export interface HuluPromo {
    supportedEventStates: SupportedEventStates
    supportedLeagues: SupportedLeagues
    supportedNetworks: string[]
    gamepackage: Gamepackage
    scoreboard: Scoreboard
  }
  
  export interface SupportedEventStates {
    pre: boolean
    in: boolean
  }
  
  export interface SupportedLeagues {
    nfl: boolean
    "college-football": boolean
  }
  
  export interface Gamepackage {
    link: string
    icon: string
    text: string
    iconAlt: string
  }
  
  export interface Scoreboard {
    link: string
    mobileText: string
    text: string
    icon: string
  }
  
  export interface BamSdkconfig {
    application: Application
    clientId: string
    clientApiKeyMap: ClientApiKeyMap
  }
  
  export interface Application {
    name: string
    id: string
    version: string
  }
  
  export interface ClientApiKeyMap {
    prod: string
    fallback: string
  }
  
  export interface Taboola {
    network: string
    webviewNetwork: string
    mode: string
    type: string
    targetType: string
    "right-rail": RightRail
    pageTypeOverrides: PageTypeOverrides
  }
  
  export interface RightRail {
    type: string
    mode: string
    targetType: string
  }
  
  export interface PageTypeOverrides {
    article: Article
    preview: Preview
    recap: Recap2
    gamepackage: Gamepackage2
    longform: Longform
    clubhouse: Clubhouse2
    stats: Stats
  }
  
  export interface Article {
    mode: string
    webviewMode: string
    type: string
    targetType: string
  }
  
  export interface Preview {
    mode: string
    webviewMode: string
    type: string
    targetType: string
  }
  
  export interface Recap2 {
    mode: string
    webviewMode: string
    type: string
    targetType: string
  }
  
  export interface Gamepackage2 {
    mode: string
    webviewMode: string
    type: string
    targetType: string
  }
  
  export interface Longform {
    mode: string
    type: string
    targetType: string
  }
  
  export interface Clubhouse2 {
    mode: string
    type: string
    targetType: string
  }
  
  export interface Stats {
    mode: string
    type: string
    targetType: string
  }
  
  export interface Translations {
    basketball: string
    conference: string
    constructors: string
    d2: string
    d3: string
    division: string
    drivers: string
    expanded: string
    "fbs-i-a": string
    "fcs-i-aa": string
    filters: string
    glossaryCaption: string
    preseasonCaption: string
    league: string
    noGamesScheduled: string
    overall: string
    playoff: string
    points: string
    pre: string
    reg: string
    reset: string
    seasonFilter: string
    seasontypeFilter: string
    schedule: string
    standings: string
    submit: string
    "vs-division": string
    "wild-card": string
    "lineup.title_%{teamName}_%{seasonYear}": string
    "lineup.desc_%{teamName}": string
    "lineup.keywords_%{teamName}_%{leagueName}": string
    "depth.title_%{teamName}_%{seasonYear}": string
    termsOfUsePrivacy: string
    moreFromESPN: string
    cancel: string
    "meta.title.team.stats_%{league}_%{seasonType}_%{tab}_%{teamFullName}_%{year}": string
    "player.FullRoster": string
    "cw.userEducation.notEntitled.title": string
    "linescore.hits.short": string
    "web.stream.picker.entity": string
    "also.available.on": string
    "schedule.at": string
    "meta.description.schedule.tennis_%{league}_%{site}_%{year}": string
    "meta.title.schedule_%{league}_%{site}_%{slugName}_%{year}": string
    "meta.description.gamepackage.game.post_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{teamOneScore}_%{teamTwoScore}_%{date}": string
    "watch.auth.code.description": string
    "competition.type.semifinal.text.nhl": string
    "pageTitle.leagueTeamStats_%{league}_%{season}": string
    "meta.description.standings.college_%{conferenceType}_%{league}_%{site}_%{year}": string
    "meta.description.stats_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "preferences.sport_labels.1100": string
    "preferences.sport_labels.1106": string
    "preferences.sport_labels.1107": string
    women: string
    "teamStroke.note": string
    insiderSubscription: string
    "watch.activate.input": string
    "cw.userEducation.loggedOut.title": string
    "player.nfl.league.links.draft": string
    "meta.description.team.splits_%{league}_%{site}_%{tab}_%{teamFullName}_%{year}": string
    "meta.description.schedule_%{league}_%{site}_%{year}": string
    "soccer.icon.halftime": string
    BPG: string
    "pageTitle.stat.turnovers": string
    avgBlocks: string
    "player.nhl.league.links.scores": string
    comments: string
    "pitcher.throws.right": string
    "meta.description.stats.team_%{league}_%{seasonType}_%{site}_%{year}": string
    "meta.description.player.batvspitch_%{league}_%{playerName}_%{position}_%{site}_%{teamName}_%{year}": string
    "preferences.sport_labels.3700": string
    "app.base.live": string
    "possessionTimeSecondsPerGame.description": string
    gamesPlayed: string
    "links.event.game.desktop.href.cricket": string
    "qbr.ncaaf.note.all-time.best-seasons": string
    "competition.type.semifinal.text.nhl.2021": string
    "app.base.streams": string
    "web.dtc.trial-text": string
    "qbr.all-time.seasons.post": string
    "pageTitle.Scoreboard_%{leagueOrSport}": string
    "meta.title.schedule_%{endDate}_%{league}_%{site}_%{slugName}_%{startDate}_%{weekNumber}_%{year}": string
    "meta.title.watch.player_%{videoTitle}_%{watchBranding}": string
    enter: string
    "All Halfs": string
    "soccer.icon.end-regular-time": string
    "linescore.runs.short": string
    "game.loss.abbrev": string
    "rankings.all": string
    "favoritesmgmt.emptySearchPlayer_upd": string
    thingsHaveChanged: string
    "soccer.icon.goal": string
    "possessionTimeSecondsPerGame.displayName": string
    "competition.type.semifinal.text.nba": string
    "pageTitle.mlb.leagueTeamStats_%{league}_%{complement}_%{season}_%{postTitle}": string
    "bracket.banner.text.mlb": string
    "meta.description.schedule.soccer_%{date}_%{league}_%{site}_%{year}": string
    "position.manager": string
    "title.season_%{season}": string
    "app.messages.searchHint": string
    "pageTitle.collegeleagues.leagueTeamStats_%{league}_%{season}_%{conference}_%{sport}": string
    "football.qualifyNotes.passing": string
    "meta.description.player.stats.hockey_%{league}_%{playerName}_%{position}_%{seasonType}_%{site}_%{teamName}": string
    "pageHeading.pageType.scoreboard": string
    "linescore.winner.icon": string
    "watch.meta.clickToViewOptions": string
    "playerStats.NBAqualifyNote.FT.post": string
    internationals: string
    "meta.description.scoreboard.tennis_%{season}": string
    "watch.success.footer.espn.link": string
    "preferences.sport_labels.1000": string
    "shortLabel.win": string
    "meta.description.gamepackage.video_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "watch.schedule.dropdownLabel.sports": string
    "meta.title.player.gamelog.baseball_%{category}_%{league}_%{playerName}_%{site}_%{year}": string
    thereAreNoEventsByDisplayNameByDate: string
    "meta.title.team.stats_%{league}_%{seasonType}_%{site}_%{split}_%{teamFullName}_%{year}": string
    "watch.manage.textField.label": string
    "meta.description.watch.player_%{airDate}_%{videoTitle}_%{watchBranding}": string
    "meta.title.soccer.competitions": string
    "meta.description.stats.team_%{league}_%{seasonType}_%{site}_%{statType}_%{year}": string
    "tennis.men": string
    "player.nba.league.links.powerrankings": string
    favmgmtMyTeams: string
    "meta.description.standings.in-season-tournament_%{league}_%{seasonType}_%{site}_%{standingType}_%{year}": string
    "bettingOdds.promo.presentedBy.hollandcasino": string
    "pageTitle.soccer.teamsPages_%{pageName}_%{leagueName}_%{view}_%{season}": string
    "meta.description.qbr.college-football.season_%{league}_%{siteName}": string
    "meta.description.scoreboard.tournament.tennis_%{name}_%{season}_%{site}": string
    "leaderboard.sortable.table.link_%{ariaLabel}_%{ariaSort}": string
    "stat.golf.totalEvents.description": string
    "meta.title.player.gamelog.soccer_%{league}_%{playerName}_%{site}_%{year}": string
    "meta.description.schedule.soccer_%{site}_%{year}": string
    "soccer.substitution.on": string
    "game.note.tied.aggregate_%{score}": string
    "watch.toast.payUpdate.heading": string
    "meta.title.player.overview.mma_%{league}_%{playerName}_%{site}_%{weight}": string
    "meta.description.team.stats.hockey_%{league}_%{seasonType}_%{site}_%{tab}_%{teamFullName}_%{year}": string
    "meta.description.player.stats.mma_%{league}_%{playerName}_%{site}": string
    "favorites.followMiniCards.follow": string
    "golf.schedule.title.liv_%{season}": string
    "meta.description.watch.player_%{airDate}_%{channel}_%{league}_%{videoTitle}_%{watchBranding}": string
    "gameStrip.laps": string
    "schedule.vs": string
    "meta.description.teams_%{league}_%{site}_%{year}": string
    "meta.title.nba-development.standings_%{season}_%{league}": string
    favmgmtMyFavorites: string
    "meta.title.schedule_%{endDate}_%{league}_%{seasonType}_%{site}_%{slugName}_%{startDate}_%{weekNumber}_%{year}": string
    removedFromYourFavorites: string
    "nhl.schedule.eplus_blackout_disclaimer": string
    "meta.description.gamepackage.game.in_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}": string
    "meta.title.player.bio.mma_%{league}_%{playerName}_%{site}": string
    "meta.description.watch.schedule.replay_%{watchBranding}": string
    "meta.description.gamepackage.game.pre_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "meta.description.leaderboard.coverage_%{tournamentName}_%{tour}": string
    "meta.title.stats.team.football.college-football_%{league}_%{seasonType}_%{site}_%{statType}_%{tab}_%{year}": string
    "cw.userEducation.entitled.button": string
    "preferences.sport_labels.3580": string
    "meta.description.scoreboard_%{conference}_%{league}_%{seasonType}_%{site}_%{week}_%{year}": string
    "web.dtc.monthly-cost": string
    "player.nba.league.links.schedule": string
    "meta.description.watch.offers_%{watchBranding}": string
    "pageHeading.leagueName.college.college-baseball": string
    "filter.mobile.filters": string
    "app.api.browse.player.conferences": string
    "pageTitle.stat.passing": string
    "meta.title.teams_%{league}_%{site}_%{slugName}": string
    "preferences.sport_labels.3520": string
    "odds.league.title_%{league}_%{week}": string
    "favorites.tooManyTeamsToAdd": string
    "watch.provider.raptor.venu.text": string
    "tableTitle.stat.defensePassing": string
    eur: string
    "meta.title.schedule.soccer_%{league}_%{site}_%{year}": string
    "meta.description.player.cricket.news_%{playerName}_%{branding}": string
    "player.nhl.team.links.roster": string
    "ncf.pageTitle_%{league}_%{rankingsFor}_%{week}_%{year}": string
    "meta.description.gamepackage.matchup_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "meta.title.watch.schedule.replay_%{site}_%{watchBranding}": string
    favmgmtMyPlayers: string
    "pageTitle.collegeleagues.leagueTeamStats_%{league}_%{season}_%{complement}": string
    "bracket.banner.text.nba.2": string
    "bracket.banner.text.nba.1": string
    "meta.description.player.news_%{league}_%{playerName}_%{position}_%{site}_%{teamName}": string
    "meta.description.rankings_%{league}_%{site}_%{week}_%{year}": string
    "watch.stream.subheader": string
    "player.nfl.league.links.standings": string
    "pageTitle.leaguePlayerStats_%{league}_%{season}": string
    "draftcast.selectionMade": string
    videoSettingsAutoStart: string
    "meta.title.powerIndex.predictions.mens-college-basketball_%{siteName}": string
    "pageTitle.leagueStats_%{leagueName}_%{season}": string
    "tableTitle.leagueTeamStats_%{pageTitle}_%{view}_%{complement}": string
    "feedback.disclaimer": string
    "game.overtimeLosses.abbrev": string
    "pageTitle.stat.defenseRushing": string
    "app.error.video.unavailable": string
    "mixed.doubles": string
    fbs: string
    "player.Fantasy.Sport.Baseball": string
    "meta.description.watch.roadblock_%{showTitle}_%{watchBranding}": string
    fcs: string
    "world-baseball-classic": string
    "meta.description.stats.player.golf_%{league}_%{site}_%{sort}_%{year}": string
    "meta.description.stats.soccer_%{league}_%{site}_%{year}": string
    "bracket.championshipBanner.secondaryText_%{name}": string
    "defending.champion": string
    "meta.description.team.fixtures.soccer_%{league}_%{site}_%{teamFullName}_%{teamShortName}_%{year}": string
    "competition.type.semifinal.text.mlb": string
    "cuento.paywall.espn.compareplans.select": string
    "game.note.win.goalsAway_%{teamName}": string
    scoring: string
    "meta.title.gamepackage.fightcenter_%{site}": string
    "meta.description.gamepackage.boxscore.post.football_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "ncf.playoff.rankings": string
    "watch.roadblock.title": string
    "tennis.rankings.caption": string
    pgapresus: string
    "odds.league.title_%{league}": string
    alert: string
    "meta.description.gamepackage.match.post_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{teamOneScore}_%{teamTwoScore}_%{date}": string
    "meta.description.nba.standings_%{seasonDisplay}_%{league}_%{siteName}": string
    "meta.title.gamepackage.matchstats_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "linescore.errors.short": string
    "meta.title.team.stats_%{league}_%{seasonType}_%{site}_%{teamFullName}_%{year}": string
    "bettingOdds.promo.globalSBLink.hollandcasino": string
    "player.Fantasy.Available": string
    videoDockingDisabled: string
    "meta.title.scoreboard_%{date}_%{league}_%{site}_%{year}": string
    rushing: string
    "scorecard.header.score": string
    no: string
    "player.league.quicklinks": string
    "player.womens-college-basketball.league.links.schedule": string
    "nav.arialabel.homepage": string
    "search.noFilterResults": string
    "race.pits": string
    "pageHeading.college_%{leagueAbbrev}_%{pageType}_%{leagueName}": string
    sports: string
    "meta.description.wbbc.standings_%{season}": string
    "meta.title.scoreboard.tournament.tennis_%{competitionType}_%{name}_%{season}_%{site}": string
    "qbr.season.post_%{season}": string
    "web.stream.picker.get.package": string
    "meta.title.standings.soccer_%{league}_%{site}_%{year}": string
    "watch.auth.code.placeholder": string
    "contextual.menu.resume": string
    "meta.title.player.stats_%{league}_%{playerName}_%{position}_%{seasonType}_%{site}_%{teamName}": string
    "pageHeading.leagueName.college.short.womens-college-basketball": string
    accountInformation: string
    "pageTitle.stat.kicking": string
    staties: string
    "meta.description.team.stats.baseball.mlb.batting_%{league}_%{seasonType}_%{site}_%{tab}_%{teamFullName}_%{year}": string
    "app.base.teams": string
    "meta.title.wheretowatch_%{league}_%{site}": string
    "draftcast.previousPick": string
    "college football": string
    "nfl.hiRush": string
    "scoreboard.away": string
    "meta.description.watch.roadblock_%{showTitle}_%{site}_%{watchBranding}": string
    "meta.title.rankings_%{league}_%{site}_%{year}": string
    "meta.description.stats.hockey_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "tennis.schedule.title_%{gender}_%{sport}_%{season}": string
    "preferences.sport_labels.2040": string
    "opponent.abbrev": string
    "meta.title.rankings.golf_%{league}_%{site}_%{year}": string
    "watch.auth.code.subdescription": string
    "soccer.icon.goal---volley": string
    "meta.description.player.cricket.stats_%{playerName}_%{branding}": string
    "meta.description.scores.baseball.tour_%{league}_%{sport}_%{site}": string
    "on base": string
    "watch.schedule.live": string
    "pageTitle.stat.offenseTotal": string
    "meta.description.stats.soccer.scoring_%{league}_%{site}_%{tab}_%{year}": string
    "pageTitle.collegeleagues.leagueTeamStats_%{league}_%{season}_%{conference}": string
    "draftcast.emptyNews": string
    "soccer.icon.shot-off-target": string
    "competition.type.round-of-16.text.mlb": string
    addfavorite: string
    "meta.title.team.stats.soccer_%{league}_%{selected}_%{site}_%{soccerLeague}_%{tab}_%{teamFullName}_%{year}": string
    "pageHeading.pageType.scoreboard.tournament.tennis_%{name}_%{season}": string
    "meta.title.scoreboard.tennis_%{site}": string
    "app.iap.Manage": string
    fieldingStats: string
    "meta.title.player.news.mma_%{league}_%{playerName}_%{site}": string
    "pageHeading.leagueName.college.mens-college-hockey": string
    "meta.title.xfl.standings_%{season}": string
    createAccount: string
    "meta.title.player.advancedstats_%{league}_%{playerName}_%{site}_%{year}": string
    "meta.title.gamepackage.matchup_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "meta.league.world-baseball-classic": string
    "hitting_%{teamName}": string
    "meta.title.qbr.college-football.weekly_%{league}_%{season}_%{siteName}": string
    "player.mens-college-basketball.league.links.schedule": string
    "meta.title.schedule_%{endDate}_%{league}_%{seasonType}_%{site}_%{startDate}_%{weekNumber}_%{year}": string
    "player.mma.links.scores": string
    pastResults: string
    "player.Fantasy.Sport.Mens.Basketball": string
    "meta.description.stats_%{league}_%{seasonType}_%{site}_%{statType}_%{tab}_%{year}": string
    "meta.title.gamepackage.recap_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}_%{teamOneScore}_%{teamTwoScore}": string
    "playerStats.WNBAqualifyNote.3P": string
    avgTurnovers: string
    "watch.roadblock.launchmessage": string
    "meta.description.rankings_%{league}_%{site}_%{year}": string
    "web.dtc.callout.text": string
    "bettingOdds.schedule.promo.text.tabbetting": string
    "meta.title.schedule.soccer_%{site}_%{year}": string
    "meta.title.player.splits_%{category}_%{league}_%{playerName}_%{site}_%{year}": string
    goaltending: string
    "meta.description.gamepackage.mma.pre_%{site}_%{fightName}_%{venue}_%{city}_%{date}": string
    "standings.footerCaption.nbl": string
    "qbr.weekly.best-games.post_%{season}": string
    "tc.view.text": string
    futureEvents: string
    "meta.title.player.bio.golf_%{league}_%{playerName}_%{site}": string
    attendance: string
    "meta.title.gamepackage.circuit_%{league}_%{site}_%{seasonYear}_%{raceName}_%{circuitName}": string
    "competition.type.qualify.text.nhl": string
    "meta.description.stats.team_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    interest_ads: string
    "watch.provider.searchTvProvider": string
    "meta.title.qbr.all-time_%{league}_%{siteName}": string
    "betting.see.more_%{league}": string
    "meta.title.gamepackage.race.in_%{league}_%{site}_%{seasonYear}_%{raceName}": string
    "app.w2w.tooltip.header": string
    "watch.stream.paySuccess.text": string
    "meta.description.scoreboard_%{league}_%{seasonType}_%{site}_%{week}_%{year}": string
    "meta.description.schedule_%{conference}_%{league}_%{site}_%{slugName}_%{year}": string
    "watch.provider.raptor.callout": string
    manageSettingInPersonalSettings: string
    "meta.description.transactions_%{league}_%{site}_%{year}": string
    "favoritesmgmt.emptySearch_upd": string
    "meta.description.powerIndex_%{league}_%{powerIndex}_%{site}_%{year}": string
    "tableTitle.qbr_%{complement}": string
    "meta.title.player.splits_%{league}_%{playerName}_%{site}_%{teamName}_%{year}": string
    "watch.activate.success": string
    "pageTitle.Scoreboard.soccer": string
    "meta.description.gamepackage.fightcenter_%{league}_%{site}_%{eventName}_%{venueName}_%{cityName}_%{date}": string
    "meta.title.contributor_%{contributorName}": string
    "meta.description.stats.soccer.performance_%{league}_%{site}_%{tab}_%{year}": string
    "soccer.icon.foul": string
    opponent: string
    "draftcast.predraftAnalysisHeadline": string
    "meta.description.transfers.soccer_%{league}_%{site}": string
    "meta.title.stats.team_%{league}_%{seasonType}_%{site}_%{statType}_%{year}": string
    team_transactions: string
    "tableTitle.leaderStats.leagueStats_%{columnName}": string
    "meta.description.powerIndex_%{conference}_%{league}_%{powerIndex}_%{site}_%{view}_%{year}": string
    "pageTitle.teamStats_%{teamName}_%{season}_%{seasonType}": string
    "meta.description.stats.football_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "espn.analytics.disclaimer.href.womens-college-basketball": string
    "meta.description.team.transactions_%{league}_%{site}_%{teamFullName}_%{teamShortName}_%{year}": string
    "watch.subscribe.heading": string
    "app.base.listenLive": string
    "pageTitle.golf.players.stats_%{season}": string
    "pageTitle.leagueTeamStatsNflDowns_%{league}_%{season}_%{complement}": string
    "app.settings.subscriptions.account": string
    "playerStats.NBAqualifyNote.FG.reg": string
    "betting.see.more.futures_%{league}": string
    "favoritesmgmt.autoSort": string
    "meta.description.watch.collections_%{bucketTitle}_%{watchBranding}": string
    "meta.title.scoreboard.soccer_%{league}_%{site}_%{year}": string
    "day.sunday.medium": string
    "player.NoData": string
    "draftcast.pickIsIn": string
    "meta.title.watch.roadblock_%{showTitle}_%{site}_%{watchBranding}": string
    "player.Time": string
    "meta.description.player.stats.soccer_%{league}_%{playerName}_%{position}_%{site}_%{teamName}": string
    differential: string
    "Team Stats_%{leagueName}": string
    "baseball.leaguePlayerStats.qualified_pitching_note": string
    "watch.schedule.allSports": string
    "meta.title.gamepackage.game.canceled_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "gameStrip.flag": string
    "soccer.jersey_%{playerName}_%{jerseyNumber}": string
    "qbr.ncaaf.note.all-time.general": string
    "meta.description.team.roster.football_%{league}_%{site}_%{teamName}_%{year}": string
    avgThreePointFieldGoalsAttempted: string
    "player.college-football.league.links.recruiting": string
    "competition.type.final.text.nhl": string
    "meta.title.qbr.season_%{league}_%{season}_%{siteName}": string
    "bracket.championshipBanner.secondaryText.soccer": string
    "meta.title.stats_%{league}_%{seasonType}_%{site}_%{statType}_%{tab}_%{year}": string
    "meta.title.stats.basketball.womens-college-basketball_%{conference}_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "cw.userEducation.loggedOut.text": string
    "watch.stream.paySuccess": string
    "player.Fantasy.Sport.Hockey": string
    "competition.type.final.text.nba": string
    "web.stream.picker.get": string
    "meta.description.wheretowatch_%{date}_%{site}": string
    "web.stream.picker.upcoming.on": string
    "preferences.sport_labels.1300": string
    "location.weather": string
    "meta.title.stats.player_%{conference}_%{league}_%{seasonType}_%{site}_%{year}": string
    "not.report.available": string
    "schedule.v": string
    today: string
    "meta.title.search.resultsStr_%{branding}": string
    superbowl: string
    "preferences.sport_labels.3949": string
    "favoritesmgmt.manualSortSelected": string
    "preferences.sport_labels.3918": string
    "preferences.sport_labels.3914": string
    "leaderboard.sortable.table.link_%{ariaLabel}_%{roundIndex}_%{ariaSort}": string
    "bettingBanner.action": string
    "meta.title.gamepackage.matchup_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}_%{teamOneScore}_%{teamTwoScore}": string
    "preferences.sport_labels.3920": string
    "onefeed.draftNow": string
    "meta.title.player.results_%{playerName}_%{branding}": string
    "app.stream.picker.header": string
    "cw.userEducation.entitled.title": string
    "meta.title.team.transfers.soccer_%{league}_%{site}_%{teamFullName}_%{year}": string
    "leaderboard.sortable.table.link_%{ariaLabel}_%{roundIndex}": string
    "draftcast.rank": string
    "cricinfo.footerText": string
    "womens.doubles": string
    "cw.userEducation.notEntitled.button": string
    "app.w2w.quickLinks_%{name}": string
    "totalPenaltyYardsPerGame.abbreviation": string
    "meta.description.team.depth.football_%{league}_%{seasonType}_%{site}_%{teamFullName}_%{teamShortName}_%{year}": string
    "favorites.draftingNow": string
    "meta.title.stats.player.basketball.mens-college-basketball_%{conference}_%{league}_%{seasonType}_%{site}_%{year}": string
    "competition.type.quarterfinal.text.wnba": string
    "bettingOdds.promo.footer": string
    "pageTitle.Schedule.byLeague_%{sportOrLeague}": string
    "meta.description.futures_%{league}_%{leagueType}_%{provider}_%{site}_%{year}": string
    "meta.title.standings_%{league}_%{seasonType}_%{site}_%{year}": string
    "soccer.icon.red-card": string
    "pageTitle.tennis.rankings_%{season}_%{gender}_%{tour}_%{sport}": string
    "favoritesmgmt.followed": string
    "qbr.ncaaf.note.all-time.best-games": string
    "meta.description.gamepackage.race.post_%{league}_%{site}_%{seasonYear}_%{raceName}_%{date}_%{winnerName}_%{winnerTeam}": string
    "onefeed.insider.manage": string
    "meta.title.gamepackage.game.post_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}_%{teamOneScore}_%{teamTwoScore}": string
    "pageHeading.leagueName.college.short.mens-college-basketball": string
    "meta.description.nbl.standings": string
    goaltender: string
    avgAssists: string
    viewall: string
    "bettingOdds.promo.details": string
    "pageTitle.leagueStats.golf_%{tour}_%{pagetype}_%{season}": string
    "meta.title.player.overview_%{league}_%{playerName}_%{position}_%{site}_%{teamName}_%{year}": string
    "meta.title.powerIndex_%{league}_%{powerIndex}_%{site}_%{year}": string
    "meta.title.scoreboard.soccer_%{date}_%{league}_%{site}_%{soccerLeague}_%{year}": string
    "scorecard.label.double": string
    "bpi.projections.note.extend": string
    "league.mobile.filters": string
    "espnplus.billing.banner.grace.paypal": string
    "meta.title.stats.player.basketball.womens-college-basketball_%{conference}_%{league}_%{seasonType}_%{site}_%{year}": string
    skating: string
    "competition.type.round-of-16.text.nba": string
    "race.sessions": string
    "meta.title.schedule_%{date}_%{league}_%{site}_%{year}": string
    "meta.description.team.stats.baseball.mlb.batting_%{league}_%{seasonType}_%{selected}_%{site}_%{tab}_%{teamFullName}_%{year}": string
    "watch.stream.success": string
    "competition.type.round-of-16.text.nhl": string
    "meta.title.schedule_%{endDate}_%{league}_%{site}_%{startDate}_%{weekNumber}_%{year}": string
    "pageTitle.stat.defenseTotal": string
    "meta.description.team.stats_%{league}_%{seasonType}_%{site}_%{teamFullName}_%{year}": string
    "meta.league.caribbean-series": string
    "preferences.sport_labels.1200": string
    "pageTitle.stat.receiving": string
    "meta.title.tennis.schedule_%{sport}_%{gender}_%{season}_%{siteName}": string
    "baseball.periodPrefix.top": string
    "meta.description.gamepackage.match.canceled_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "meta.title.watch.player_%{airDate}_%{channel}_%{eventType}_%{league}_%{streamType}_%{videoTitle}_%{watchBranding}": string
    "player.wnba.team.links.roster": string
    "meta.description.gamepackage.boxscore.post.baseball_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "playerStats.WNBAqualifyNote.FT": string
    "playerStats.WNBAqualifyNote.FG": string
    "tableTitle.leagueTeamStats.college_%{stat}_%{complement}": string
    "meta.title.team.fixtures.soccer_%{league}_%{site}_%{teamFullName}_%{year}": string
    "meta.description.standings_%{league}_%{seasonType}_%{site}_%{standingType}_%{year}": string
    "No Previous Meetings.soccer_gamepackage": string
    "player.mma.links.schedule": string
    disableVideoDockingPermanently: string
    "player.soccer.gamelog.pageTitle": string
    "fpi.efficiencies.note": string
    "nav.search.label": string
    "hockey.shot.chart": string
    "meta.description.powerIndex_%{conference}_%{league}_%{powerIndex}_%{site}_%{year}": string
    favmgmtMyContributors: string
    "description.scores.tennis": string
    "meta.description.powerIndex_%{league}_%{powerIndex}_%{site}_%{view}_%{year}": string
    "baseball.qualified_batting_note": string
    "pageTitle.futures_%{league}": string
    "bettingOdds.promo.text": string
    "gameStrip.raceWinner": string
    "app.onboarding.messaging.maxItems.message": string
    "favoritesmgmt.suggestedLeagues": string
    "meta.title.stats.player.golf_%{league}_%{site}_%{year}": string
    "pageTitle.Calender_%{sportOrLeague}": string
    "keywords.scores.college_%{league}_%{sport}": string
    "meta.title.team.stats.soccer_%{league}_%{site}_%{soccerLeague}_%{tab}_%{teamFullName}_%{year}": string
    "meta.description.gamepackage.matchstats_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "cw.userEducation.notEntitled.text": string
    "stat.golf.gainedPoints.description": string
    "competition.type.final.text.mlb": string
    "wnba.standings.footerCaption": string
    "player.womens-college-basketball.team.links.roster": string
    "meta.description.gamepackage.lineups_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "video.footer": string
    "pageTitle.teamStats_%{pageName}_%{teamName}": string
    "soccer.icon.yellow-card": string
    "tableTitle.leagueTeamStats.college.defense_%{stat}_%{complement}": string
    "meta.title.qbr.college-football.weekly_%{conference}_%{season}_%{siteName}": string
    "cw.userEducation.entitled.text": string
    welcometext: string
    "video.nowPlaying.text": string
    "preferences.sport_labels.5501": string
    "meta.title.powerIndex_%{conference}_%{league}_%{powerIndex}_%{site}_%{year}": string
    "meta.title.expertpicks_%{league}_%{season}_%{siteName}": string
    "stat.tie.abbreviation": string
    "mlb.teamroster.thw": string
    "meta.description.big4.transactions_%{siteName}_%{league}": string
    "latest.videos_%{sportOrLeague}": string
    "totalPenaltyYardsPerGame.description": string
    "stance.abbrev.unknown": string
    "less.than.one.min": string
    pitcher: string
    "meta.title.player.bio_%{league}_%{playerName}_%{position}_%{site}_%{teamName}_%{year}": string
    "schedule.soccer.header": string
    signIn: string
    "meta.description.qbr.college-football.weekly_%{league}_%{siteName}_%{season}": string
    "web.dtc.callout.mlb": string
    "watch.toast.payUpdate.text": string
    "scorecard.header.hole": string
    "meta.title.gamepackage.matchstats_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}_%{teamOneScore}_%{teamTwoScore}": string
    "app.error.video.playback.message": string
    "video.messages.geoRestricted": string
    "meta.description.wheretowatch_%{league}_%{site}": string
    "meta.description.stats.baseball_%{conference}_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "meta.title.player.batvspitch_%{league}_%{oppTeam}_%{playerName}_%{position}_%{site}_%{teamName}_%{year}": string
    "meta.title.scoreboard.football.college-football_%{conference}_%{league}_%{site}_%{year}": string
    "meta.description.standings_%{league}_%{site}_%{year}": string
    "espnplus.billing.banner.hold.heading": string
    "seasontype.mobile.filters": string
    "stat.golf.name.abbreviation": string
    "Pitch Count": string
    "description.scores.college_%{league}_%{sport}": string
    "preferences.sport_labels.5454": string
    "mma.match": string
    "stance.abbrev.open": string
    "watch.provider.raptor.login.text": string
    "leaderboard.autoupdate": string
    "scorecard.header.yards": string
    "racing.view.full.commentary": string
    "shop.allItems": string
    "scoreboard.no.plays": string
    "player.nhl.team.links.stats": string
    "meta.description.xfl.standings_%{season}": string
    "competition.type.standard.text.nba": string
    "meta.description.f1.standings_%{season}": string
    "playerStats.WNBAqualifyNote.AST": string
    "submit.mobile.filters": string
    "player.womens-college-basketball.league.links.ranking": string
    "meta.description.schedule_%{conference}_%{endDate}_%{league}_%{seasonType}_%{site}_%{slugName}_%{startDate}_%{weekNumber}_%{year}": string
    "pageHeading.leagueName.college.college-softball": string
    "app.error.suppFeed.noData.title": string
    "meta.title.rankings_%{league}_%{poll}_%{site}_%{week}_%{year}": string
    suplemental_policy: string
    "competition.type.standard.text.nhl": string
    "favoritesmgmt.suggestedHeader": string
    "meta.description.qbr.college-football.season_%{conference}_%{siteName}": string
    "pageHeading.pageType.standings_%{league}_%{season}": string
    "app.error.video.playback.blackout.message": string
    baseball: string
    "meta.description.team.schedule_%{league}_%{site}_%{teamFullName}_%{teamShortName}_%{year}": string
    "meta.description.gamepackage.game.postponed_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "watch.meta.title.manage": string
    "contextual.menu.start_from_beginning": string
    men: string
    "player.Switcher.allAssociations": string
    "total yards": string
    "pageTitle.leagueStatsCollege_%{leagueName}_%{season}_%{conference}": string
    "golf.rankings.h1_%{year}": string
    "tableTitle.stat.downs": string
    "watch.activating.heading": string
    "watch.provider.error": string
    "player.wnba.league.links.schedule": string
    "playerStats.WNBAqualifyNote.BLK": string
    "meta.title.gamepackage.lineups_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "tennis.women": string
    "soccer.standings": string
    skatersStats: string
    "meta.title.qbr.college-football.all-time_%{league}_%{siteName}": string
    "meta.description.scoreboard.tournament.tennis_%{competitionType}_%{name}_%{season}_%{site}": string
    "soccer.icon.shot-on-target": string
    "meta.description.schedule_%{endDate}_%{league}_%{site}_%{startDate}_%{weekNumber}_%{year}": string
    "web.dtc.callout.nhl": string
    "meta.description.schedule_%{endDate}_%{league}_%{site}_%{slugName}_%{startDate}_%{weekNumber}_%{year}": string
    "meta.description.teams_%{league}_%{site}_%{slugName}_%{year}": string
    "meta.title.stats.soccer.discipline_%{league}_%{site}_%{tab}_%{year}": string
    "meta.title.gamepackage_%{teamOneShortName}_%{teamTwoShortName}_%{date}_%{partial}_%{league}_%{site}": string
    "bettingOdds.promo.title": string
    "player.Fantasy.Stat.LastSevenShort": string
    "player.Status": string
    "nav.submenu.label": string
    "ncaa.teamSchedule.hiPoints": string
    "feedback.returnToForm_%{title}": string
    "bettingOdds.schedule.promo.text.bet365": string
    "golf.rankings.caption": string
    "player.Fantasy.Trade": string
    "watch.provider.signOut": string
    "espnplus.billing.banner.cta": string
    "meta.title.qbr.college-football.season_%{conference}_%{season}_%{siteName}": string
    "favoritesmgmt.searchResults": string
    "meta.description.watch.player_%{airDate}_%{channel}_%{eventType}_%{league}_%{videoTitle}_%{watchBranding}": string
    "player.Fantasy.Upsell.Join": string
    "player.Fantasy.Owner": string
    "player.Fantasy.Stat.PosRkShort": string
    "meta.description.watch.series_%{showTitle}_%{watchBranding}": string
    "draftcast.emptyTable": string
    "position.pitcher.name": string
    "player.SwitchPlayer": string
    "meta.description.player.batvspitch_%{league}_%{oppTeam}_%{playerName}_%{position}_%{site}_%{teamName}_%{year}": string
    "competition.type.standard.text.mlb": string
    "meta.description.gamepackage.race_%{league}_%{site}_%{seasonYear}_%{raceName}_%{date}": string
    "meta.description.gamepackage.fightcenter_%{league}_%{site}_%{year}": string
    "meta.description.wheretowatch_%{date}_%{league}_%{site}": string
    "watch.stream.buttonText": string
    "meta.title.standings.college_%{league}_%{site}_%{year}": string
    "player.wnba.team.links.stats": string
    "meta.title.scoreboard_%{conference}_%{league}_%{seasonType}_%{site}_%{week}_%{year}": string
    "meta.title.qbr.college-football.all-time_%{conference}_%{siteName}": string
    "meta.description.player.scorecards.golf_%{league}_%{playerName}_%{site}_%{tournament}_%{year}": string
    "pageHeading.leagueName.college.college-football.mobile": string
    "Team Leaders_%{season}": string
    "meta.description.team.results_%{league}_%{site}_%{teamFullName}_%{year}": string
    "player.college-football.team.links.stats": string
    "meta.description.team.stats.baseball_%{league}_%{seasonType}_%{tab}_%{teamFullName}_%{year}": string
    "meta.title.stats.team_%{league}_%{seasonType}_%{site}_%{year}": string
    "day.tuesday.medium": string
    "meta.description.team.fixtures.soccer_%{competitionName}_%{league}_%{site}_%{teamFullName}_%{teamShortName}_%{year}": string
    "meta.title.player.news_%{league}_%{playerName}_%{site}": string
    MPG: string
    "player.birthdate": string
    "team.cup": string
    "pageTitle.leaguePlayerStats_%{league}_%{season}_%{complement}": string
    skaters: string
    ntw: string
    "meta.description.soccer.squad_%{teamName}": string
    "watch.activate.moreInfo.purchased": string
    "title.scores.tennis": string
    punting: string
    "bettingOdds.schedule.promo.header.espnbet": string
    "pageTitle.leagueTeamStatsNflDowns_%{league}_%{season}_%{complement}_%{postTitle}": string
    "meta.title.team.fixtures.soccer_%{competitionName}_%{league}_%{site}_%{teamFullName}_%{year}": string
    "betting.looking.for_%{league}": string
    search: string
    "meta.description.standings.generic_%{league}_%{site}_%{year}": string
    goals_scored: string
    "player.wnba.team.links.schedule": string
    "meta.description.gamepackage.game.in_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    team_statistics: string
    "stat.golf.avgPoints.abbreviation": string
    "meta.title.scoreboard.football.college-football_%{conference}_%{league}_%{seasonType}_%{site}_%{week}_%{year}": string
    "golf.schedule.title.pga_%{season}": string
    "player.mens-college-basketball.team.links.stats": string
    "pop-out": string
    top_assists: string
    "description.scores.nbl": string
    "meta.description.team.roster.hockey_%{league}_%{site}_%{teamName}_%{year}": string
    "player.college-football.team.links.roster": string
    "meta.title.stats.soccer_%{league}_%{site}_%{year}": string
    "stance.abbrev.orthodox": string
    "meta.title.team.stats_%{league}_%{site}_%{teamFullName}_%{year}": string
    "baseball.leaguePlayerStats.qualified_batting_note": string
    "meta.title.qbr.weekly_%{league}_%{season}_%{siteName}": string
    "meta.title.collegeindex.rankings": string
    "injuries.team.page.title_%{team}": string
    "draftcast.endOfDraft": string
    "contextual.menu.play": string
    "game.atvs.versus": string
    "shortLabel.lose": string
    "meta.description.player.overview_%{league}_%{playerName}_%{position}_%{site}_%{teamName}_%{year}": string
    "meta.title.player.batvspitch_%{league}_%{playerName}_%{position}_%{site}_%{teamName}_%{year}": string
    "stat.golf.totalEvents.abbreviation": string
    "scorecard.header.in": string
    "meta.description.rankings.golf_%{league}_%{site}_%{year}": string
    "app.stream.picker.authenticated": string
    "contextual.menu.watch_live": string
    "watch.meta.description.manage": string
    "postseason.ufl.week_1": string
    "postseason.ufl.week_2": string
    "On Deck": string
    "meta.title.watch.film_%{showTitle}_%{site}_%{watchBranding}": string
    "standingsTableKey_%{header}_%{league}_%{season}": string
    "scorecard.label.bogey": string
    "womens.singles": string
    "meta.description.watch.player_%{airDate}_%{channel}_%{eventType}_%{league}_%{streamType}_%{videoTitle}_%{watchBranding}": string
    goaliesStats: string
    "pageHeading.pageType.bracket_%{eventName}_%{season}": string
    "watch.activate.moreInfo.helpCenter.link": string
    "preferences.sport_labels.2020": string
    "meta.title.wheretowatch_%{site}": string
    "preferences.sport_labels.2030": string
    "meta.title.collegesportslanding.scoreboard_%{league}_%{site}": string
    "preferences.sport_labels.2000": string
    "meta.title.big4.transactions_%{league}_%{siteName}": string
    "pageTitle.stat.defenseReceiving": string
    "title.scores.ncaa_%{conference}": string
    "preferences.sport_labels.3321": string
    "preferences.sport_labels.3323": string
    "note.qbr.blog.link": string
    "reset.mobile.filters": string
    remove: string
    "preferences.sport_labels.3301": string
    "tableTitle.stat.returning": string
    "stat.golf.avgPoints.description": string
    "meta.description.player.cricket.overview_%{playerName}_%{playerLastName}_%{branding}": string
    pga: string
    competitions: string
    "favoritesmgmt.noFantasyTeams": string
    "dropdown.leagues.default.soccer": string
    "hand.abbrev": string
    standingsTable: string
    "fpi.projections.note.extend": string
    "share.twitter.basketball.matchup.predictor_%{team1}_%{team1Chance}_%{team2}_%{date}": string
    "meta.description.stats_%{conference}_%{league}_%{position}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "title.scores.ncaa.isConference_%{conference}": string
    "meta.description.team_%{league}_%{site}_%{teamFullName}_%{year}": string
    "meta.description.qbr.all-time_%{league}_%{siteName}": string
    "espn.analytics.disclaimer.href.college-football": string
    "hsb.accessibility.skipContent": string
    "meta.title.gamepackage.fightcenter.post_%{league}_%{site}_%{eventName}": string
    "full.dailyLines_%{league}": string
    "meta.title.schedule.football.ncaaf_%{endDate}_%{league}_%{site}_%{startDate}_%{weekNumber}_%{year}": string
    "mma.shortstop.title": string
    "playerStats.NBAqualifyNote.FG.post": string
    "scorecard.header.total": string
    "tableTitle.leagueTeamStatsNfl_%{stat}_%{complement}": string
    footerLinks: string
    "meta.description.player.stats.baseball_%{category}_%{league}_%{playerName}_%{position}_%{site}_%{teamName}": string
    "feedback.email": string
    "gameStrip.currentLap": string
    "college-football": string
    heliumdown: string
    pts: string
    "meta.title.scoreboard_%{league}_%{site}_%{year}": string
    "meta.description.stats.golf_%{league}_%{site}_%{year}": string
    "meta.description.standings_%{league}_%{leagueType}_%{seasonType}_%{site}_%{year}": string
    "web.dtc.callout.text.mlb": string
    "watch.provider.noresults": string
    "player.Rd": string
    "playerStats.WNBAqualifyNote": string
    playoff_machine: string
    "meta.description.gamepackage.recap_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "showing.for_%{text}": string
    freeThrowPct: string
    favmgmtMyLeagues: string
    "meta.title.scoreboard_%{conference}_%{league}_%{site}_%{year}": string
    "search.label": string
    manage_privacy: string
    "watch.provider.raptor.activation": string
    "scoreboard.no.matches_%{type}": string
    "pageTitle.Schedule.allLeagues_%{sportOrLeague}": string
    "news.emptyState": string
    "meta.title.teams.soccer_%{league}_%{site}": string
    "watch.provider.error.title": string
    "watch.auth.code.error": string
    "meta.description.watch.schedule_%{watchBranding}": string
    "mens-olympics-golf": string
    "gameStrip.watch": string
    coach_name: string
    "meta.description.gamepackage.boxscore.in.basketball_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "meta.description.nba-development.standings_%{seasonDisplay}_%{league}_%{siteName}": string
    "pageTitle.leagueStats_%{leagueName}_%{season}_%{postTitle}": string
    "tc.play.text": string
    "scorecard.label.eagle": string
    "player.wnba.league.links.standings": string
    "favoritesmgmt.suggestedTeams": string
    "meta.title.transfers.soccer_%{league}_%{site}": string
    "watch.provider.troubleSigningIn": string
    "player.college-football.league.links.scoreboard": string
    "meta.description.player.cricket.matches_%{playerName}_%{branding}": string
    "espnplus.billing.banner.hold.iap_%{providerName}": string
    "meta.description.team.stats.baseball_%{league}_%{seasonType}_%{site}_%{split}_%{tab}_%{teamFullName}_%{year}": string
    "meta.title.schedule.tnf_%{league}_%{site}_%{year}": string
    "watch.player.feeds.title": string
    "search.seo.description": string
    battingStats: string
    "competition.type.semifinal.text.wnba": string
    "meta.title.schedule.snf_%{league}_%{site}_%{year}": string
    "web.dtc.callout.text.nhl": string
    "meta.description.stats.basketball_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "qbr.season.reg_%{season}": string
    "baseball.periodPrefix.bottom": string
    squad: string
    "playerStats.NBAqualifyNote.3P.reg": string
    "meta.description.watch.schedule.upcoming_%{watchBranding}": string
    manageFavoritesSignIn: string
    "NBA Development League": string
    avgSteals: string
    "stat.draws.abbreviation": string
    "stat.golf.rank.abbreviation": string
    "favoritesmgmt.favoriteEntity": string
    "pageTitle.soccer.teamsPages_%{pageName}_%{teamName}": string
    "meta.description.gamepackage.circuit_%{league}_%{site}_%{seasonYear}_%{raceName}_%{circuitName}_%{city}_%{country}": string
    "preferences.sport_labels.3170": string
    "collegeLanding.title_%{subPage}": string
    "watch.roadblock.customerCareLink": string
    "meta.title.standings_%{league}_%{seasonType}_%{site}_%{standingType}_%{year}": string
    "qbr.ncaaf.note.weekly": string
    "pageTitle.soccer.competition": string
    "watch.success.footer.espn.linkText": string
    score: string
    "meta.description.stats.player.baseball_%{conference}_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "meta.title.player.cricket.bio_%{playerName}_%{branding}": string
    "meta.description.stats_%{conference}_%{league}_%{seasonType}_%{site}_%{statType}_%{tab}_%{year}": string
    "pageTitle.college.leagues_%{conference}_%{league}_%{pageType}_%{season}": string
    "meta.description.team.depth_%{league}_%{seasonType}_%{site}_%{teamFullName}_%{teamShortName}_%{year}": string
    "watch.espn.logo.alt.text": string
    "outfields players": string
    "meta.title.standings_%{league}_%{site}_%{year}": string
    "video.headline": string
    "transaction.no.team": string
    "meta.description.player.news.golf_%{league}_%{playerName}_%{site}": string
    "player.Fantasy.Sport.Womens.Basketball": string
    "favorites.tooManyLeaguesToAdd": string
    "pageTitle.powerIndex.predictions.mens-college-basketball": string
    "nav.arialabel.homepage_%{title}": string
    "watch.schedule.allNetworks": string
    "return.Date": string
    "weight.abbrev": string
    "playoff.results": string
    avgPoints: string
    "watch.provider.raptor.provider": string
    "meta.title.player.gamelog_%{league}_%{playerName}_%{site}_%{year}": string
    "season.week_%{number}": string
    "watch.stream.success.text": string
    "meta.description.team.stats.basketball_%{league}_%{seasonType}_%{site}_%{split}_%{teamFullName}_%{year}": string
    "app.stream.picker.linear.auth.error": string
    "meta.title.gamepackage_%{teamOneShortName}_%{teamTwoShortName}_%{date}_%{partial}_%{teamOneScore}_%{teamTwoScore}_%{league}_%{site}": string
    "player.wnba.league.links.scores": string
    "in-season-tournament": string
    "nfl.hiRec": string
    "cuento.paywall.espn.article.unlock": string
    suggested: string
    "draftcast.teamNews_%{teamName}": string
    "watch.meta.description_%{pageName}": string
    "nba.teamSchedule.hiAssists": string
    "feedback.name": string
    "watch.activate.footer.customerCare": string
    "mlb.teamSchedule.buttons.half.1": string
    "mlb.teamSchedule.buttons.half.2": string
    "pageTitle.teamSplits_%{pageName}_%{teamName}_%{season}": string
    "meta.title.scores.baseball.tour_%{league}_%{sport}_%{site}": string
    "meta.description.player.splits_%{league}_%{playerName}_%{site}_%{teamName}_%{year}": string
    kicking: string
    "Pitching leaders": string
    "meta.title.teams_%{conference}_%{league}_%{site}_%{slugName}": string
    "meta.title.player.stats_%{category}_%{league}_%{playerName}_%{position}_%{site}_%{teamName}": string
    "meta.description.gamepackage.mma.post_%{site}_%{fightName}_%{venue}_%{city}_%{date}": string
    "player.nba.team.links.depthchart": string
    "pageTitle.nfl.transactions_%{league}_%{season}": string
    "pageTitle.powerIndex.ncaam_%{season}_%{conference}": string
    "meta.description.player.bio_%{league}_%{playerName}_%{position}_%{site}_%{teamName}_%{year}": string
    "position.abbrev": string
    "pageHeading.leagueName.college.short.college-football": string
    "meta.title.gamepackage.commentary_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}_%{teamOneScore}_%{teamTwoScore}": string
    move: string
    addFavorites: string
    "meta.title.gamepackage.boxscore_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "stat.golf.lostPoints.abbreviation": string
    "pageHeading.pageType.schedule": string
    "player.TradedFrom_%{prvTm}_to_%{currTm}": string
    "bettingOdds.schedule.promo.header.tabbetting": string
    "meta.title.teams_%{sportOrLeague}": string
    "NBA-DEVELOPMENT": string
    "meta.description.odds_%{league}_%{site}": string
    "watch.schedule.dropdownLabel.leagues": string
    "bettingOdds.promo.globalSBLink.bet365": string
    "watch.activate.heading": string
    ukIreland: string
    "meta.title.schedule_%{date}_%{league}_%{site}_%{slugName}_%{year}": string
    "meta.description.schedule.mma_%{league}_%{site}_%{year}": string
    "meta.title.gamepackage.game.pre_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "F T Result": string
    football: string
    standalonePaywallLink: string
    "player.Fantasy.Sport.Football": string
    "meta.title.schedule.soccer_%{date}_%{league}_%{site}_%{year}": string
    "pageTitle.leagueTeamStats_%{league}_%{season}_%{complement}_%{postTitle}": string
    "watch.schedule.message.empty_%{otherTabs1}_%{otherTabs2}_%{selectedTab}": string
    "meta.title.powerIndex.predictions.nba_%{siteName}": string
    "meta.description.team.stats.soccer.scoring_%{league}_%{selected}_%{site}_%{soccerLeague}_%{tab}_%{teamFullName}_%{year}": string
    "meta.title.team.stats.baseball_%{league}_%{seasonType}_%{selected}_%{site}_%{tab}_%{teamFullName}_%{year}": string
    addSomeForQuickAccess: string
    "v.schedule": string
    "meta.title.gamepackage.match.canceled_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "meta.title.stats.soccer.scoring_%{league}_%{site}_%{tab}_%{year}": string
    "pageTitle.college.leaguePlayerStats_%{sport}_%{season}_%{complement}_%{conference}": string
    "meta.description.gamepackage.boxscore.in.football_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "watch.manage.heading": string
    RPG: string
    "watch.player.footerButton": string
    "stat.golf.rank.description": string
    "meta.title.player.cricket.stats_%{playerName}_%{branding}": string
    "meta.title.tennis.history_%{gender}_%{sport}_%{sitename}": string
    "meta.description.contributor.shortstop_%{contributorName}": string
    "meta.title.gamepackage.match.post_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}_%{teamOneScore}_%{teamTwoScore}": string
    "player.mma.links.rankings": string
    "espn-plus.subscription": string
    "watch.nhltv.logo.alt.text": string
    "description.scores.ncb_%{conference}_%{leagueName}": string
    "meta.description.futures_%{league}_%{leagueType}_%{site}_%{year}": string
    "meta.description.transfers.soccer_%{league}_%{site}_%{soccerLeague}_%{year}": string
    "meta.description.standings_%{league}_%{seasonType}_%{site}_%{year}": string
    "postseason.college-football.week_1": string
    avgFieldGoalsAttempted: string
    passing: string
    "rankings.note.atp": string
    "meta.description.watch.film_%{showTitle}_%{watchBranding}": string
    "watch.auth.code.button": string
    "player.FightingStyle": string
    "tableTitle.view.defense": string
    "qbr.all-time.games.post": string
    nationalchampion: string
    "meta.title.watch.schedule.replay_%{airDate}_%{site}_%{watchBranding}": string
    "feedMgr.login": string
    "player.FullSquad": string
    tbd: string
    "meta.title.stats.soccer.performance_%{league}_%{site}_%{tab}_%{year}": string
    "meta.title.watch.catalog_%{entityName}_%{site}_%{watchBranding}": string
    "meta.description.player.bio.golf_%{league}_%{playerName}_%{site}": string
    "meta.title.qbr.college-football.season_%{league}_%{season}_%{siteName}": string
    "playerStats.ncaamqualifyNote": string
    "nfl.rookie.abbrev": string
    "Number.abbreviation": string
    "meta.description.watch.schedule.upcoming_%{airDate}_%{watchBranding}": string
    "bettingOdds.promo.terms": string
    "soccer.standings.title_%{league}": string
    "meta.description.leaderboard_%{tournamentName}_%{tour}": string
    "nav.hamburger.label": string
    "watch.activate.buttonText": string
    tweet: string
    "player.mens-college-basketball.league.links.scoreboard": string
    avgRebounds: string
    "watch.provider.raptor.subscriber": string
    "Defensive leaders": string
    "meta.title.team.roster_%{league}_%{site}_%{teamName}_%{year}": string
    "meta.description.team.stats.soccer.performance_%{league}_%{selected}_%{site}_%{soccerLeague}_%{tab}_%{teamFullName}_%{year}": string
    SPG: string
    yellow_cards: string
    "onefeed.draft": string
    southAmerica: string
    red_cards: string
    "meta.description.scoreboard_%{date}_%{league}_%{site}_%{year}": string
    "gameStrip.session": string
    TRIDBL: string
    totals: string
    "watch.provider.search": string
    "meta.title.player.splits_%{league}_%{playerName}_%{site}_%{teamName}": string
    "app.error.video.playback.event.upcoming.title": string
    "pageTitle.powerIndex_%{league}_%{sport}_%{season}": string
    "bpi.projections.note.extend.nba": string
    "draftcast.postdraftAnalysisHeadline": string
    "meta.description.team.schedule_%{league}_%{seasonType}_%{site}_%{teamFullName}_%{teamShortName}_%{year}": string
    privacy_policy: string
    do_not_sell: string
    "meta.description.team.stats.baseball.mlb.pitching_%{league}_%{seasonType}_%{site}_%{tab}_%{teamFullName}_%{year}": string
    "pageTitle.qbr_%{league}_%{complement}": string
    "meta.description.stats.soccer.discipline_%{league}_%{site}_%{tab}_%{year}": string
    "watch.stream.textField.label": string
    "bettingOdds.promo.noOdds.tabbetting": string
    "ncf.title_%{abbrev}_%{rankings}_%{sport}": string
    "qbr.ncaaf.note.season": string
    "meta.title.team.squad.soccer_%{league}_%{site}_%{teamName}_%{year}": string
    "pageTitle.Scores_%{leagueOrSport}": string
    thisWeekEvents: string
    "pageTitle.soccer.teamsPages_%{pageName}_%{teamName}_%{view}": string
    "mens.singles": string
    subscribe: string
    "bettingOdds.promo.header": string
    "app.stream.picker.online.auth.error": string
    "meta.description.qbr.season_%{league}_%{siteName}": string
    "watch.activate.additionalSupport.text": string
    "search.accessibility.foundResults_%{query}": string
    "pageTitle.Schedule_%{seasonType}_%{sportOrLeague}": string
    "pageTitle.leagueTeamStats_%{league}_%{complement}_%{season}": string
    "playerStats.NBAqualifyNote.FT.reg": string
    "playerStats.ncaamqualifyNote.FT": string
    "meta.description.team.stats.football_%{league}_%{seasonType}_%{site}_%{tab}_%{teamFullName}_%{year}": string
    "player.nfl.team.links.stats": string
    "meta.title.team.roster.football_%{league}_%{site}_%{teamName}_%{year}": string
    avgFreeThrowsAttempted: string
    "nav.more-options.label": string
    "watch.meta.timeleft": string
    "watch.auth.code.title": string
    "meta.description.watch.player_%{airDate}_%{channel}_%{league}_%{streamType}_%{videoTitle}_%{watchBranding}": string
    "video.messages.deviceRestricted": string
    "qbr.notes.best-games": string
    "player.Fantasy.Stat.PctOwned": string
    "netAvgPuntYardsPerGame.description": string
    "player.Fantasy.Stat.DftRk": string
    "message.leaguemanager": string
    "player.SwitchFighter": string
    "meta.description.schedule_%{endDate}_%{league}_%{seasonType}_%{site}_%{startDate}_%{weekNumber}_%{year}": string
    "meta.title.stats.golf_%{league}_%{site}_%{year}": string
    "pageTitle.collegeleagues.leagueTeamStats_%{league}_%{season}_%{complement}_%{conference}_%{sport}": string
    topCompetitions: string
    "app.base.login.new": string
    "pageTitle.college.leaguePlayerStats_%{sport}_%{season}_%{complement}": string
    "web.dtc.upsell.href.eplus": string
    "meta.title.watch.browse_%{site}_%{watchBranding}": string
    "meta.description.team.stats.football.college-football_%{league}_%{site}_%{tab}_%{teamFullName}_%{year}": string
    "watch.provider.raptor.venu.subscriber": string
    "playerStats.ncaamqualifyNote.FG": string
    "meta.title.scoreboard.soccer_%{league}_%{site}_%{soccerLeague}_%{year}": string
    "meta.description.qbr.college-football.all-time_%{conference}_%{siteName}": string
    "pageTitle.Schedule_%{sportOrLeague}": string
    "meta.description.qbr.college-football.weekly_%{conference}_%{siteName}_%{season}": string
    "onefeed.scheduleDraft": string
    "Batting leaders": string
    "player.Fantasy.PlayStreak": string
    "title.scores_%{sport}": string
    "watch.mlbtv.logo.alt.text": string
    "stat.golf.name.description": string
    "netAvgPuntYardsPerGame.displayName": string
    "player.mens-college-basketball.league.links.ranking": string
    "meta.description.team.stats.baseball.mlb.fielding_%{league}_%{seasonType}_%{site}_%{tab}_%{teamFullName}_%{year}": string
    "description.scores.xfl": string
    "pageTitle.college.leagues.allConferences_%{league}_%{pageType}_%{season}": string
    "player.Fantasy.Bench": string
    "meta.title.stats_%{conference}_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "watch.activate.footer.customerCare.link": string
    "soccer.substitution.off": string
    "pageTitle.stat.punting": string
    "dis-bundle.plans": string
    welcomeToESPN: string
    "player.nba.league.links.scores": string
    "web.dtc.upsell.header.text.neutralsite.pre_%{away}_%{home}": string
    "watch.player.menu.logout_%{providerName}": string
    "golf.schedule.title_%{tour}_%{season}": string
    "meta.description.scoreboard.soccer_%{date}_%{league}_%{site}_%{soccerLeague}_%{year}": string
    "player.mma.links.champions": string
    "soccer.icon.substitution": string
    "player.AcquiredBy": string
    "feedback.submit": string
    "caribbean-series": string
    "meta.description.watch.film_%{showTitle}_%{subHeadline}_%{watchBranding}": string
    "pageTitle.leaguePlayerStats_%{league}_%{season}_%{seasontype}": string
    "tableTitle.leaderStats.leagueStats_%{columnName}_%{complement}": string
    "qbr.weekly.post_%{season}": string
    "espn.analytics.disclaimer.href.mens-college-basketball": string
    special: string
    "meta.title.stats.team_%{league}_%{seasonType}_%{site}_%{statType}_%{tab}_%{year}": string
    "qbr.notes.best-seasons": string
    lpga: string
    "meta.description.watch.schedule.replay_%{airDate}_%{watchBranding}": string
    "app.stream.picker.choose.tv.provider": string
    "meta.description.player.stats.baseball_%{league}_%{playerName}_%{position}_%{site}_%{teamName}": string
    "meta.description.injuries_%{league}_%{site}_%{year}": string
    "meta.description.gamepackage.match.pre_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "espnplus.billing.banner.hold.paypal": string
    "player.nfl.team.links.depthchart": string
    "preferences.sport_labels.8367": string
    "meta.description.gamepackage.game.canceled_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "preferences.sport_labels.8374": string
    "preferences.sport_labels.8373": string
    "preferences.sport_labels.8372": string
    "video.header.control.volume": string
    playerStatsTitle: string
    "Loss in Playoff": string
    "field_goals_yards_%{range}": string
    "preferences.sport_labels.8300": string
    "meta.description.schedule.soccer_%{league}_%{site}_%{year}": string
    "preferences.sport_labels.8309": string
    race: string
    "preferences.sport_labels.8319": string
    "preferences.sport_labels.8318": string
    "meta.description.watch.player_%{airDate}_%{channel}_%{streamType}_%{videoTitle}_%{watchBranding}": string
    "meta.title.leaderboard_%{tournament}_%{tour}_%{season}": string
    worldseries: string
    "meta.description.player.cricket.overview_%{playerName}_%{branding}": string
    "meta.title.player.scorecards.golf_%{league}_%{playerName}_%{site}_%{tournament}_%{year}": string
    "draftcast.shareText_%{pick}_%{round}_%{team}_%{player}_%{href}": string
    receiving: string
    "not.recap.available": string
    "watch.player.unsupportedBrowser_%{browserName}": string
    "meta.description.stats.player.golf_%{league}_%{site}_%{year}": string
    "web.stream.picker.default.package": string
    "meta.title.scoreboard.football.college-football_%{league}_%{site}_%{year}": string
    "tableTitle.leagueTeamStatsNflTotal_%{view}_%{complement}": string
    "meta.title.player.cricket.news_%{playerName}_%{branding}": string
    "meta.description.player.gamelog.soccer_%{league}_%{playerName}_%{position}_%{site}_%{teamName}_%{year}": string
    soccer: string
    "meta.description.standings.soccer_%{league}_%{site}_%{year}": string
    "COLLEGE-FOOTBALL": string
    "playerStats.ncaamqualifyNote.3P": string
    videoSettings: string
    "favorites.tooManyPlayersToAdd": string
    usaMexicoCONCACAF: string
    "meta.title.odds_%{league}_%{site}": string
    "meta.title.scoreboard.tournament.tennis_%{name}_%{season}_%{site}": string
    "watch.provider.webview.login.text": string
    "meta.description.stats.player.basketball.womens-college-basketball_%{conference}_%{league}_%{seasonType}_%{site}_%{year}": string
    "watch.schedule.tabLabel.videoState": string
    "meta.title.stats.player_%{conference}_%{league}_%{seasonType}_%{site}_%{statType}_%{year}": string
    "meta.title.gamepackage.fightcenter.in_%{league}_%{site}_%{eventName}": string
    "meta.description.schedule_%{endDate}_%{league}_%{seasonType}_%{site}_%{slugName}_%{startDate}_%{weekNumber}_%{year}": string
    "meta.description.gamepackage.boxscore.in.baseball_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "meta.description.player.gamelog.baseball_%{category}_%{league}_%{playerName}_%{site}_%{teamName}_%{year}": string
    Position: string
    "draftcast.emptyPositionTable": string
    "meta.description.player.stats.football_%{league}_%{playerName}_%{position}_%{seasonType}_%{site}_%{teamName}": string
    "watch.espnplus.logo.alt.text": string
    "watch.toast.payUpdate.mobileText": string
    "meta.title.schedule.golf_%{league}_%{site}_%{year}": string
    "watch.schedule.filterLabel": string
    "NBA-DEVELOPMENT Showcase Cup Standings": string
    "gloves.abbrev": string
    "meta.title.standings.in-season-tournament_%{league}_%{seasonType}_%{site}_%{standingType}_%{year}": string
    "tableTitle.stat.receiving": string
    "pageTitle.leagueStatsCollege_%{leagueName}_%{season}": string
    "meta.title.stats.team_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "game.played.neutral.location": string
    "meta.description.watch.catalog_%{showTitle}_%{watchBranding}": string
    "pageHeading.leagueName.college.womens-college-hockey": string
    "favorites.carousel.espnapp.link": string
    "not.commentary.available": string
    "favoritesmgmt.confirmRemoveFavorite": string
    "pageTitle.leagueTeamStats_%{league}_%{season}_%{postTitle}": string
    "injuries.league.title_%{league}": string
    "meta.title.gamepackage.fightcenter_%{league}_%{site}_%{year}": string
    "sfb.userEducation.tooltip": string
    "favoritesmgmt.noFoundFor": string
    email: string
    "golf.meta.rankings.title_%{year}_%{site}": string
    "pageHeading.leagueName.college.womens-college-basketball": string
    "nav.more-sports.label": string
    childrens_policy: string
    "driveChart.winper": string
    "meta.title.team.schedule_%{league}_%{site}_%{teamFullName}_%{year}": string
    "title.scores_%{sport}_%{sportLabel}": string
    depth: string
    "qbr.all-time.games.reg": string
    "meta.description.player.stats.hockey_%{league}_%{playerName}_%{position}_%{site}_%{teamName}": string
    "meta.title.standings_%{league}_%{leagueType}_%{seasonType}_%{site}_%{standingType}_%{year}": string
    terms_of_use: string
    "meta.title.gamepackage.race.pre_%{league}_%{site}_%{seasonYear}_%{raceName}": string
    noTeamsInFavorites: string
    "ncaa.teamSchedule.hiRebounds": string
    "watch.roadblock.downloadmessage": string
    "meta.title.scoreboard_%{league}_%{seasonType}_%{site}_%{week}_%{year}": string
    "session.qualifyingAbbr": string
    "pageTitle.stat.defensePassing": string
    "watch.error.no.events": string
    "nba.teamSchedule.hiPoints": string
    "player.Fantasy.Stat.LastSeven": string
    "app.base.watch": string
    "football.qualifyNotes.receiving": string
    "Offensive leaders": string
    "mma.td": string
    "meta.title.team_%{league}_%{site}_%{teamFullName}": string
    batting: string
    "meta.title.transfers.soccer_%{league}_%{site}_%{soccerLeague}": string
    "meta.title.gamepackage.match_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "meta.title.player.stats_%{league}_%{playerName}_%{position}_%{site}_%{teamName}": string
    "nba.teamSchedule.hiRebounds": string
    offense: string
    "draftcast.onTheClock": string
    "meta.title.schedule.mnf_%{league}_%{site}_%{year}": string
    nflBye: string
    "draftcast.roundNotStartedYet_%{round}": string
    "player.college-football.league.links.schedule": string
    "player.AllPlayer": string
    "espnplus.billing.banner.grace.heading": string
    "rankings.note.wta": string
    "bettingBanner.tagLine": string
    "pageTitle.leagueTeamStats_%{league}_%{complement}_%{season}_%{postTitle}": string
    "meta.title.team.stats_%{league}_%{seasonType}_%{split}_%{tab}_%{teamFullName}_%{year}": string
    "meta.description.stats_%{league}_%{position}_%{seasonType}_%{site}_%{year}": string
    "link.text.standings.soccer": string
    "shop.logoLabel": string
    "age.desc": string
    "Money Line": string
    "app.base.watchLive": string
    defense: string
    viewAllResultsBySearchTerm: string
    "pageTitle.college.leagues_%{conference}_%{sport}_%{pageType}_%{season}": string
    nationals: string
    "pageTitle.espnu.rankings_%{league}": string
    yes: string
    "meta.description.schedule.mnf_%{league}_%{site}_%{year}": string
    "pageHeading.pageType.scoreboard.tennis.2": string
    "pageHeading.pageType.scoreboard.tennis.1": string
    "pageHeading.pageType.scoreboard.tennis.6": string
    "pageHeading.pageType.scoreboard.tennis.5": string
    "pageHeading.pageType.scoreboard.tennis.4": string
    "pageHeading.pageType.scoreboard.tennis.3": string
    "teamStats.defense.note": string
    "meta.title.watch.player_%{airDate}_%{eventType}_%{league}_%{videoTitle}_%{watchBranding}": string
    "meta.title.watch.collections_%{bucketTitle}_%{site}_%{watchBranding}": string
    "meta.title.stats.player.baseball_%{conference}_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "day.saturday.medium": string
    "meta.description.watch.player_%{airDate}_%{channel}_%{eventType}_%{videoTitle}_%{watchBranding}": string
    "Hole Playoff Results_%{holes}": string
    "meta.description.team.stats.hockey_%{league}_%{seasonType}_%{site}_%{split}_%{tab}_%{teamFullName}_%{year}": string
    "player.college-football.league.links.ranking": string
    addFavoritesContent: string
    "espn-plus.subscriptions": string
    "pageTitle.leagueStats_%{leagueName}_%{season}_%{conference}": string
    "meta.title.powerIndex_%{conference}_%{league}_%{powerIndex}_%{site}_%{view}_%{year}": string
    "meta.description.gamepackage.report.post.soccer_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "share.twitter.football.matchup.predictor_%{team1}_%{team1Chance}_%{team2}_%{date}": string
    "column.winLoss.description.fpi": string
    fielding: string
    "meta.description.collegesportslanding.scoreboard_%{league}_%{site}": string
    "meta.description.player.cricket.bio_%{playerName}_%{branding}": string
    "tableTitle.leaguePlayerStats_%{view}_%{complement}": string
    "pageTitle.leagueStats_%{leagueName}_%{season}_%{conference}_%{postTitle}": string
    avgFreeThrowsMade: string
    "soccer.substitution_%{playerOn}_%{playerOff}": string
    "pageTitle.college.leaguePlayerStats_%{sport}_%{season}": string
    resize: string
    "player.splitsUpdatedNightly": string
    "meta.title.player.overview.golf_%{country}_%{league}_%{playerName}_%{site}": string
    fieldGoalPct: string
    "watch.schedule.upcoming": string
    "meta.description.gamepackage.preview_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "meta.description.watch.player_%{airDate}_%{channel}_%{videoTitle}_%{watchBranding}": string
    "app.watch.error.stream-limiting-violation": string
    "defending champ": string
    "meta.description.stats.player.basketball.mens-college-basketball_%{conference}_%{league}_%{seasonType}_%{site}_%{year}": string
    "football.qualifyNotes.rushing": string
    "watch.success.footer.customerCare.link": string
    "defenseGamecast_%{team}": string
    "watch.back": string
    "meta.description.futures.conference_%{league}_%{leagueType}_%{provider}_%{site}_%{year}": string
    "draftcast.bestAvailable": string
    "stat.wins.abbreviation": string
    "hsb.accessibility.skipNav": string
    "meta.title.teams_%{league}_%{site}": string
    "player.womens-college-basketball.team.links.stats": string
    "meta.title.player.cricket.matches_%{playerName}_%{branding}": string
    "nfl.qualifyNotes.passing.qbr": string
    "preseason.week_1": string
    "soccer.icon.goal---free-kick": string
    avgThreePointFieldGoalsMade: string
    "meta.title.watch.offers_%{site}_%{watchBranding}": string
    "meta.title.team.stats.football.college-football_%{league}_%{site}_%{tab}_%{teamFullName}_%{year}": string
    "qbr.notes.weekly-leaders": string
    "pageTitle.mlb.leagueTeamStats_%{league}_%{complement}_%{season}": string
    "bettingOdds.schedule.promo.header.hollandcasino": string
    "pageTitle.teamsPages_%{pageName}_%{teamName}_%{season}": string
    "watch.activate.moreInfo.text": string
    "player.allStarDenotation": string
    "app.base.watchListenLive": string
    "golf.meta.rankings.description_%{site}": string
    "meta.description.team.squad.soccer_%{competition}_%{league}_%{site}_%{teamName}_%{year}": string
    "stat.golf.lostPoints.description": string
    "pageTitle.collegeleagues.leagueTeamStats_%{league}_%{season}_%{complement}_%{conference}": string
    "betting.see.more.on_%{providerName}": string
    "bettingOdds.promo.globalSBLink.hollandBetting": string
    "qbr.all-time.seasons.reg": string
    "meta.description.expertpicks_%{league}_%{siteName}": string
    signOut: string
    "meta.title.team.injuries_%{league}_%{site}_%{teamFullName}": string
    "player.bio.careerHighlights.moduleTitle": string
    close: string
    avgDefensiveRebounds: string
    "netAvgPuntYardsPerGame.abbreviation": string
    addMoreFavorites: string
    "meta.title.watch.roadblock_%{showTitle}_%{watchBranding}": string
    "cricket.atVs": string
    "competition.type.quarterfinal.text.nhl": string
    "mens.doubles": string
    "player.careerStatsUpdatedNightly": string
    undo: string
    "meta.title.player.news.golf_%{league}_%{playerName}_%{site}": string
    "pageHeading.leagueName.college.womens-college-basketball.mobile": string
    "playerStats.NBAqualifyNote.3P.post": string
    "collegeLanding.title_%{subPage}_%{leagueOrSport}": string
    "meta.title.gamepackage.game.in_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "app.base.replay": string
    "player.mens-college-basketball.team.links.roster": string
    "meta.description.team.squad.soccer_%{league}_%{site}_%{teamName}_%{year}": string
    "watch.provider.chooseTvProvider": string
    "Batting # 1": string
    "Batting # 4": string
    "Batting # 5": string
    "Batting # 2": string
    "Batting # 3": string
    "Batting # 8": string
    "Batting # 9": string
    "Batting # 6": string
    "Batting # 7": string
    "meta.description.transfers.soccer_%{league}_%{site}_%{soccerLeague}": string
    "meta.description.player.stats.football_%{league}_%{playerName}_%{position}_%{site}_%{teamName}": string
    "shop.freeShipping": string
    "playerStats.WNBAqualifyNote.STL": string
    "app.stream.picker.purchased": string
    "links.team.clubhouse.desktop.href.cricket": string
    "ncf.rankingsFor": string
    "watch.meta.upNext": string
    "meta.description.qbr.college-football.all-time_%{league}_%{siteName}": string
    "ncf.pageDescription_%{league}_%{week}_%{year}": string
    "favoritesmgmt.noESPNSubscription": string
    "meta.title.watch.player_%{airDate}_%{videoTitle}_%{watchBranding}": string
    "football.qualifyNotes.returning": string
    "espn.analytics.disclaimer.href.wnba": string
    "meta.description.contributor_%{contributorName}": string
    DBLDBL: string
    turnovers: string
    show: string
    "meta.title.powerIndex_%{league}_%{powerIndex}_%{site}_%{view}_%{year}": string
    "meta.title.standings_%{league}_%{leagueType}_%{seasonType}_%{site}_%{year}": string
    "player.nba.team.links.schedule": string
    "possessionTimeSecondsPerGame.abbreviation": string
    "meta.title.futures_%{league}_%{leagueType}_%{site}_%{year}": string
    "game.note.win.aggregate_%{teamName}_%{score}": string
    "meta.title.watch.home_%{watchBranding}": string
    redesignWelcomeText: string
    "title.scores.xfl": string
    "player.league.quicklinks.soccer": string
    "meta.description.scoreboard_%{league}_%{site}_%{year}": string
    "soccer.icon.goal---header": string
    "player.team.quicklinks": string
    "meta.description.team.stats.baseball_%{league}_%{seasonType}_%{site}_%{tab}_%{teamFullName}_%{year}": string
    "competition.type.quarterfinal.text.nba": string
    "player.bio.biography.moduleTitle": string
    "over/under.abbrev": string
    "meta.title.gamepackage.playbyplay_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "meta.title.gamepackage.video_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}_%{teamOneScore}_%{teamTwoScore}": string
    "meta.title.schedule.football.ncaaf_%{league}_%{site}_%{year}": string
    "watch.roadblock.customerCareLabel": string
    "hockey.leaguePlayerStats.qualified_goaltending_note": string
    "meta.title.watch.player_%{eventCalendarPage}_%{videoTitle}_%{watchBranding}": string
    "meta.title.gamepackage.results_%{league}_%{site}_%{seasonYear}_%{raceName}": string
    nielsen_measurement: string
    "season.mobile.filters": string
    "shop.buyLabel": string
    "meta.description.bracket_%{league}_%{season}_%{site}": string
    "qbr.all-time.seasons.off": string
    team_roster: string
    "watch.success.login": string
    "app.espn.analytics.disclaimer": string
    "competition.type.quarterfinal.text.mlb": string
    "bettingOdds.promo.presby": string
    "meta.description.schedule_%{date}_%{league}_%{site}_%{year}": string
    "stat.losses.abbreviation": string
    hide: string
    "meta.title.team.stats_%{league}_%{seasonType}_%{site}_%{split}_%{tab}_%{teamFullName}_%{year}": string
    "nav.user.label": string
    NEXT_WEEK: string
    "player.mlb.stats.dataAttribution": string
    total: string
    "bettingOdds.promo.presentedBy.tabbetting": string
    "meta.description.nhl.teams": string
    "meta.title.player.stats.golf_%{league}_%{playerName}_%{site}_%{year}": string
    "description.Schedule._%{sportLabel}": string
    "app.api.watch.button.note": string
    "pageTitle.teamStats_%{pageName}_%{teamName}_%{season}_%{seasonType}": string
    confirm: string
    tie_breaking_procedure: string
    "meta.description.team.stats.soccer.discipline_%{league}_%{selected}_%{site}_%{soccerLeague}_%{tab}_%{teamFullName}_%{year}": string
    "ncaa.teamSchedule.hiAssists": string
    avgOffensiveRebounds: string
    "pageTitle.leaguePlayerStats_%{league}_%{season}_%{seasontype}_%{complement}": string
    "player.nfl.league.links.schedule": string
    "player.stats.homeAway": string
    "title.scores.ncb_%{conference}_%{leagueName}": string
    "pageHeading.pageType.scoreboard.tennis": string
    "bpi.projections.note.extend.wnba": string
    "tableTitle.stat.offenseTotal": string
    "video.header.control.captions": string
    "meta.title.player.splits_%{league}_%{playerName}_%{site}_%{year}": string
    "meta.description.player.overview.mma_%{country}_%{league}_%{playerName}_%{site}": string
    "meta.title.watch.series_%{showTitle}_%{site}_%{watchBranding}": string
    "meta.title.transactions_%{league}_%{site}_%{year}": string
    "draftcast.needs": string
    activateInsider: string
    "favorites.followMiniCards.following": string
    favmgmtMySubscriptions: string
    "watch.schedule.replay": string
    "video.next.text": string
    "meta.title.gamepackage.commentary_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "meta.title.gamepackage.boxscore_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}_%{teamOneScore}_%{teamTwoScore}": string
    "soccer.icon.offside": string
    "meta.title.stats.player_%{league}_%{seasonType}_%{site}_%{statType}_%{year}": string
    "stat.golf.gainedPoints.abbreviation": string
    "watch.activate.subheader": string
    "conference_%{conferenceName}": string
    "meta.title.schedule_%{conference}_%{date}_%{league}_%{site}_%{slugName}_%{year}": string
    "meta.description.wheretowatch_%{site}": string
    "player.nhl.league.links.schedule": string
    "height.abbrev": string
    "watch.activate.success.text": string
    "meta.title.scoreboard.tennis.4_%{site}": string
    "favoritesmgmt.suggestedHeaderReset": string
    "meta.description.scoreboard.soccer_%{date}_%{league}_%{site}_%{year}": string
    "meta.description.schedule_%{date}_%{league}_%{site}_%{slugName}_%{year}": string
    "meta.title.gamepackage.race.post_%{league}_%{site}_%{seasonYear}_%{raceName}": string
    "player.stats.wonLost": string
    "meta.description.gamepackage.fightcenter.post_%{league}_%{site}_%{eventName}_%{venueName}_%{cityName}_%{date}": string
    "espnplus.billing.banner.hold.credit_%{cardName}_%{lastFour}": string
    "preferences.sport_labels.200": string
    TOPG: string
    "pageTitle.stat.defenseDowns": string
    "pageTitle.tennis.history_%{gender}": string
    "meta.description.stats.basketball.mens-college-basketball_%{conference}_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "session.freePracticeAbbr": string
    "contextual.menu.restart": string
    "bettingOdds.schedule.promo.header.bet365": string
    "meta.description.watch.player_%{airDate}_%{channel}_%{eventCalendarPage}_%{league}_%{videoTitle}_%{watchBranding}": string
    "espnplus.billing.banner.grace.iap_%{providerName}": string
    "meta.description.player.matches_%{playerName}_%{teamName}_%{branding}_%{playerPos}": string
    "meta.title.schedule_%{conference}_%{endDate}_%{league}_%{seasonType}_%{site}_%{slugName}_%{startDate}_%{weekNumber}_%{year}": string
    "meta.description.gamepackage.boxscore.in.hockey_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "playerStats.WNBAqualifyNote.REB": string
    "competition.type.final.text.wnba": string
    footerLabel: string
    "pageTitle.teamsPages_%{pageName}_%{teamName}": string
    "meta.title.team.squad.soccer_%{competition}_%{league}_%{site}_%{teamName}_%{year}": string
    "SOCCER.TEAM.STATS.GAMESPLAYED": string
    "web.dtc.upsell.header.text.neutralsite_%{away}_%{home}": string
    "favoritesmgmt.noSuggestedFavorites": string
    "postseason.nfl.team.schedule.weekabbr_5": string
    "postseason.nfl.team.schedule.weekabbr_4": string
    "postseason.nfl.team.schedule.weekabbr_3": string
    "postseason.nfl.team.schedule.weekabbr_2": string
    "postseason.nfl.team.schedule.weekabbr_1": string
    "pageHeading.college_%{leagueAbbrev}_%{pageType}_%{leagueName}_%{conference}": string
    "pageTitle.powerIndex.ncaam_%{season}": string
    "meta.title.schedule_%{league}_%{site}_%{year}": string
    "playerStats.ncaawqualifyNote.3P": string
    "no.team.stats": string
    "game.tieAlt.abbrev": string
    "favoritesmgmt.unfollowed": string
    "game.note.win.penalties_%{teamName}_%{score}": string
    "meta.title.stats_%{conference}_%{league}_%{position}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "meta.title.player.history.mma_%{league}_%{playerName}_%{site}": string
    "playerStats.NBAqualifyNote.post": string
    team_leaders: string
    "web.base.alreadySubscribed": string
    "pageTitle.teamStats_%{pageName}_%{teamName}_%{season}": string
    "soccer.icon.penalty---scored": string
    "tableTitle.stat.defenseReceiving": string
    "meta.title.team.splits_%{league}_%{site}_%{tab}_%{teamFullName}_%{year}": string
    "scorecard.label.birdie": string
    "espn.analytics.disclaimer.href.mlb": string
    "feedback.title_%{title}": string
    "meta.description.player.gamelog_%{league}_%{playerName}_%{site}_%{teamName}_%{year}": string
    "meta.description.futures.conference_%{league}_%{leagueType}_%{site}_%{year}": string
    "meta.description.team.roster.baseball_%{league}_%{site}_%{teamName}_%{year}": string
    "cuento.paywall.espn.generic.error": string
    threePointFieldGoalPct: string
    "favoritesmgmt.alertType": string
    "app.watch.blackout": string
    "meta.title.schedule.mma_%{league}_%{site}_%{year}": string
    "picks.league.title_%{league}_%{week}": string
    "web.stream.picker.upcoming": string
    "shot.chart.nhl": string
    reactivate: string
    "pageTitle.teamStats_%{teamName}_%{season}": string
    "pitching_%{teamName}": string
    "meta.title.stats_%{league}_%{seasonType}_%{site}_%{year}": string
    "watch.provider.dontSeeProvider": string
    avgFieldGoalsMade: string
    "bettingOdds.promo.globalSBLink.tabbetting": string
    "playerStats.NBAqualifyNote.reg": string
    "mma.fight.victory_%{victoryMode}": string
    "meta.description.scoreboard.soccer_%{league}_%{site}_%{soccerLeague}_%{year}": string
    "basketball.shot.chart": string
    "description.scores.ncaa_%{conference}": string
    "meta.title.stats.basketball.mens-college-basketball_%{conference}_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "player.womens-college-basketball.league.links.scoreboard": string
    "meta.description.stats.basketball.womens-college-basketball_%{conference}_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "1 Days Rest": string
    manageMy: string
    "meta.title.player.stats.mma_%{league}_%{playerName}_%{site}": string
    "onefeed.suggested": string
    "favoritesmgmt.noAddedFavoritesTo": string
    "meta.description.stats.team_%{league}_%{seasonType}_%{site}_%{statType}_%{tab}_%{year}": string
    "player.bio.careerHistory.moduleTitle": string
    "watch.activate.error.pairCode": string
    "boxscore.note.nba": string
    "watch.activate.footer.espn.linkText": string
    hockey: string
    "stat.golf.totalPoints.description": string
    "champions-tour": string
    "meta.title.stats_%{conference}_%{league}_%{seasonType}_%{site}_%{statType}_%{tab}_%{year}": string
    "meta.title.gamepackage.video_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "womens-olympics-golf": string
    newsletters: string
    "espnplus.billing.banner.subheading.default": string
    "age.abbrev": string
    "tableTitle.stat.defenseTotal": string
    "player.Fantasy.Stat.PosRk": string
    "mma.schedule.vs": string
    "app.api.upsell.button.ppv": string
    "meta.title.watch.schedule.upcoming_%{site}_%{watchBranding}": string
    "pageTitle.stat.returning": string
    "meta.description.schedule.soccer_%{league}_%{year}": string
    "pageHeading.leagueName.college.mens-college-basketball": string
    "meta.title.gamepackage.game.postponed_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "draftcast.nextPick": string
    "tickets.link.external": string
    "watch.activate.moreInfo.additionalSupport.link": string
    "stance.abbrev.switch": string
    "race.pit": string
    "injuries.dropdown.label_%{league}": string
    connectedfacebook: string
    "app.base.listen": string
    "meta.title.team.depth_%{league}_%{seasonType}_%{site}_%{teamFullName}_%{year}": string
    "share.twitter.baseball.matchup.predictor_%{team1}_%{team1Chance}_%{team2}_%{date}": string
    "totalPenaltyYardsPerGame.displayName": string
    "qbr.notes.general": string
    "pageTitle.big4.transactions_%{league}": string
    "baseball.qualified_pitching_note": string
    "player.nhl.league.links.standings": string
    "game.number_%{num}": string
    "meta.description.mlb.standings_%{seasonDisplay}_%{metaTitle}": string
    "meta.description.player.bio.mma_%{league}_%{playerName}_%{site}": string
    "meta.description.watch.browse_%{watchBranding}": string
    "meta.description.qbr.weekly_%{league}_%{siteName}_%{season}": string
    "meta.description.team.stats.soccer_%{league}_%{site}_%{soccerLeague}_%{tab}_%{teamFullName}_%{year}": string
    "leaderboard.autoupdate.link": string
    "preferences.sport_labels.1700": string
    "meta.title.bracket_%{league}_%{season}_%{site}": string
    pitchingStats: string
    "pageTitle.college.leaguePlayerStats_%{sport}_%{season}_%{conference}": string
    "feedback.message": string
    "player.Fantasy.Upsell.Create": string
    "player.Fantasy.Edit": string
    "pageTitle.powerIndex.ncaaf_%{season}_%{conference}": string
    "meta.title.gamepackage.preview_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "espn.analytics.disclaimer.href.nfl": string
    "meta.description.schedule.golf_%{league}_%{site}_%{year}": string
    "meta.description.player.overview.golf_%{country}_%{league}_%{playerName}_%{site}": string
    "day.wednesday.medium": string
    "web.stream.picker.error.message": string
    "tableTitle.view.offense": string
    "player.nfl.league.links.scores": string
    "search.events": string
    "game.win.abbrev": string
    "position.batter.name": string
    "espn.analytics.disclaimer.href.nba": string
    "give.feedback": string
    "watch.activate.footer.espn.link": string
    LAST_WEEK: string
    "favorites.streakLabel": string
    "preferences.sport_labels.300": string
    "meta.league.olympics-baseball": string
    "meta.description.gamepackage.playbyplay_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "watch.success.login.text": string
    "meta.title.stats_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "golf.standings.title_%{tournament}": string
    "watch.manage.subheader": string
    "scorecard.header.par": string
    "note.qbr.blog.label": string
    "defending.champions": string
    "meta.title.injuries_%{league}_%{site}_%{year}": string
    "qbr.weekly.best-games.reg_%{season}": string
    "preferences.sport_labels.1650": string
    "preferences.sport_labels.1652": string
    "golf.schedule.title.anwa_%{season}": string
    "ncaaf.fcs.footerNote": string
    avgFouls: string
    "meta.description.watch.home_%{watchBranding}": string
    edit: string
    "meta.title.team.results_%{competition}_%{league}_%{site}_%{teamFullName}_%{year}": string
    "meta.description.player.stats.basketball_%{league}_%{playerName}_%{position}_%{site}_%{teamName}": string
    "meta.title.stats.player_%{league}_%{seasonType}_%{site}_%{year}": string
    "meta.description.powerIndex.predictions.mens-college-basketball_%{siteName}": string
    "scorecard.header.out": string
    "search.bar.placeholder": string
    "tableTitle.stat.punting": string
    favmgmtMyFantasy: string
    "draftcast.bestFit": string
    "player.nba.team.links.stats": string
    batterUnavailable: string
    "player.nba.league.links.standings": string
    "meta.title.player.cricket.overview_%{playerName}_%{branding}": string
    "meta.description.player.splits_%{league}_%{playerName}_%{site}_%{teamName}": string
    "bettingOdds.promo.button": string
    "page.gridcolumn.label_%{pageType}": string
    "meta.description.cbws.standings_%{season}": string
    "meta.description.gamepackage.match.in_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    league_stats: string
    "tableTitle.stat.rushing": string
    "fpi.projections.note": string
    "pageTitle.powerIndex.predictions.nba": string
    "player.Switcher.Top10": string
    "leaderboard.sortable.table.link": string
    "game.uncontested.abbrev": string
    "preferences.sport_labels.640": string
    "tableTitle.stat.passing": string
    "not.preview.available": string
    "meta.title.stats.football.college-football_%{conference}_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "preferences.sport_labels.660": string
    "cw.userEducation.loggedOut.button": string
    "preferences.sport_labels.650": string
    "pageTitle.powerIndex.ncaaf_%{season}": string
    "preferences.sport_labels.600": string
    "preferences.sport_labels.606": string
    teamStats: string
    "nfl.hiPass": string
    "meta.description.team.injuries_%{league}_%{site}_%{teamFullName}_%{year}": string
    "web.dtc.upsell.header.text_%{away}_%{home}": string
    "tableTitle.stat.defenseRushing": string
    "day.thursday.medium": string
    "meta.description.player.splits_%{category}_%{league}_%{playerName}_%{site}_%{year}": string
    "title.scores.nbl": string
    "meta.title.scoreboard.tennis.1_%{site}": string
    time_of_possession: string
    "watch.activate.additionalSupport.link": string
    "pageTitle.stat.rushing": string
    "shortLabel.tie": string
    "day.friday.medium": string
    "mens-college-basketball": string
    inprogress: string
    "competition.type.standard.text.wnba": string
    "favoritesmgmt.noFavorites": string
    california_policy: string
    "meta.title.watch.schedule.upcoming_%{airDate}_%{site}_%{watchBranding}": string
    "meta.description.team.results_%{competition}_%{league}_%{site}_%{teamFullName}_%{year}": string
    "meta.description.scoreboard.soccer_%{league}_%{site}_%{year}": string
    "preferences.sport_labels.69": string
    "espnplus.billing.banner.grace.credit_%{cardName}_%{lastFour}": string
    "meta.description.schedule_%{league}_%{site}_%{slugName}_%{year}": string
    "pageTitle.stat.downs": string
    "shop.logo": string
    "meta.description.rankings.tennis._%{league}_%{site}_%{year}": string
    "watch.roadblock.message": string
    "preferences.sport_labels.90": string
    "meta.description.player.history.mma_%{league}_%{playerName}_%{site}_%{weight}": string
    "womens college basketball": string
    "player.dataAttribution": string
    "meta.description.watch.originals_%{watchBranding}": string
    "meta.description.gamepackage.fightcenter_%{site}": string
    "meta.title.gamepackage.match.postponed_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}": string
    "favoritesmgmt.confirmHideFavorite": string
    favoriteadded: string
    "stat.golf.totalPoints.abbreviation": string
    "search.topResults": string
    "day.monday.medium": string
    "preferences.sport_labels.700": string
    "cricinfo.search.label": string
    "favorites.maxSelected": string
    "preferences.sport_labels.10": string
    "preferences.sport_labels.28": string
    "preferences.sport_labels.23": string
    "meta.description.schedule.tnf_%{league}_%{site}_%{year}": string
    "preferences.sport_labels.35": string
    "preferences.sport_labels.33": string
    "meta.title.watch.originals_%{site}_%{watchBranding}": string
    "meta.description.team.roster.basketball_%{league}_%{site}_%{teamName}_%{year}": string
    "preferences.sport_labels.46": string
    "preferences.sport_labels.41": string
    "preferences.sport_labels.59": string
    "preferences.sport_labels.54": string
    "description.scores_%{sport}_%{sportLabel}": string
    "watch.schedule.dropdownLabel.networks": string
    "player.Decision": string
    "meta.title.watch.schedule_%{site}_%{watchBranding}": string
    "meta.description.stats.player.football.college-football_%{conference}_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "meta.title.rankings_%{league}_%{site}_%{week}_%{year}": string
    "postseason.nfl.week_1": string
    "postseason.nfl.week_2": string
    "postseason.nfl.week_3": string
    "meta.title.scoreboard.football.college-football_%{league}_%{seasonType}_%{site}_%{week}_%{year}": string
    "watch.provider.raptor.login": string
    "bettingOdds.schedule.promo.text.hollandcasino": string
    "watch.schedule.table.summary": string
    "preferences.sport_labels.8098": string
    "meta.title.scoreboard.tennis.6_%{site}": string
    "web.stream.picker.subscribed.package": string
    connectfacebook: string
    "mma.player.result": string
    "racing.commentary": string
    all_leagues: string
    "game.note.advance.goalsAway_%{teamName}": string
    "bracket.championshipBanner.secondaryText": string
    downs: string
    "meta.title.scoreboard.tennis.2_%{site}": string
    "gameStrip.startsIn": string
    "meta.description.player.stats.golf_%{league}_%{playerName}_%{site}_%{year}": string
    "fpi.efficiencies.note.extend": string
    "meta.description.gamepackage.boxscore.post.hockey_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "meta.description.teams.soccer_%{league}_%{site}_%{year}": string
    "competition.type.round-of-16.text.wnba": string
    "gameStrip.lap": string
    "meta.title.team.stats_%{league}_%{seasonType}_%{site}_%{tab}_%{teamFullName}_%{year}": string
    "favoritesmgmt.unfollow": string
    "player.bio.debutLastMatch.moduleTitle": string
    "pageTitle.leagueTeamStats_%{league}_%{season}_%{complement}": string
    "meta.title.schedule.tennis_%{league}_%{site}_%{year}": string
    "Defending Champion": string
    "meta.title.wheretowatch_%{date}_%{site}": string
    "meta.description.stats_%{conference}_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "meta.description.player.splits_%{league}_%{playerName}_%{site}_%{year}": string
    "meta.description.watch.series_%{showTitle}_%{subHeadline}_%{watchBranding}": string
    "pageHeading.leagueName.college.college-football": string
    "feedback.messageArea": string
    "lines.data.attribution_v2": string
    "tableTitle.stat.kicking": string
    ESPN_in_spanish: string
    "meta.description.gamepackage.boxscore.post.basketball_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "meta.title.watch.player_%{airDate}_%{league}_%{videoTitle}_%{watchBranding}": string
    "qbr.weekly.reg_%{season}": string
    pga2: string
    "meta.description.nhl.standings_%{seasonDisplay}_%{metaTitle}": string
    "nav.grid.label": string
    "womens-college-basketball": string
    "meta.title.schedule_%{conference}_%{league}_%{site}_%{slugName}_%{year}": string
    register: string
    "pageTitle.Scoreboard.soccer_%{league}": string
    add: string
    "watch.roadblock.buttontext": string
    "player.defStatsNotOfficial": string
    "boxscore.note.nhl": string
    "preferences.sport_labels.851": string
    "preferences.sport_labels.850": string
    "pageTitle.college.football.view_%{league}_%{view}_%{pageType}_%{season}": string
    total_goals: string
    "soccer.icon.corner-kick": string
    "video.header.control.play.pause": string
    "NBA-SUMMER-LEAGUE": string
    "shop.logoLink": string
    pgaryderus: string
    "football.qualifyNotes.kicking": string
    "player.stats.homeNeutral": string
    "pageTitle.collegeleagues.leagueTeamStats_%{league}_%{season}_%{complement}_%{sport}": string
    "meta.title.gamepackage.lineups_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}_%{teamOneScore}_%{teamTwoScore}": string
    "mens college basketball": string
    "meta.title.team.results_%{league}_%{site}_%{teamFullName}_%{year}": string
    nbafinals: string
    "watch.meta.title_%{pageName}": string
    "web.stream.picker.button.note": string
    "match.number_%{num}": string
    "meta.title.wheretowatch_%{date}_%{league}_%{site}": string
    "meta.title.stats_%{league}_%{position}_%{seasonType}_%{site}_%{year}": string
    "app.stream.picker.logged.tv.provider": string
    "more_teams_%{leagueName}": string
    "meta.title.scoreboard.tennis.5_%{site}": string
    "player.college-football.team.links.schedule": string
    "feedback.commentaryFeedback": string
    "meta.title.team.schedule_%{league}_%{seasonType}_%{site}_%{teamFullName}_%{year}": string
    "watch.success.footer.customerCare": string
    "meta.title.gamepackage.report_%{league}_%{site}_%{seasonYear}_%{raceName}": string
    "contextual.menu.go_to_series": string
    editionsmgmtEditions: string
    "meta.title.scoreboard.soccer_%{date}_%{league}_%{site}_%{year}": string
    "title.scores.college_%{league}_%{sport}": string
    "widget.title_%{widgetName}_%{year}": string
    "web.dtc.upsell.header.text.pre_%{away}_%{home}": string
    "player.Class": string
    "meta.description.powerIndex.predictions.nba_%{siteName}": string
    "session.race": string
    "title.scores.ncb.isConference_%{conference}_%{leagueName}": string
    "football.qualifyNotes.punting": string
    "pitcher.throws.left": string
    "preferences.sport_labels.900": string
    "pageHeading.leagueName.college.mens-college-basketball.mobile": string
    "year.mobile.filters": string
    "tableTitle.stat.defenseDowns": string
    "meta.title.scoreboard.tennis.3_%{site}": string
    "preferences.sport_labels.760": string
    "meta.description.standings_%{league}_%{leagueType}_%{seasonType}_%{site}_%{standingType}_%{year}": string
    "meta.description.gamepackage.commentary_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "meta.description.soccer.competition": string
    pitching: string
    "preferences.sport_labels.781": string
    "meta.title.gamepackage.report.post.soccer_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}_%{teamOneScore}_%{teamTwoScore}": string
    "preferences.sport_labels.770": string
    "preferences.sport_labels.775": string
    "preferences.sport_labels.776": string
    "race.result": string
    "scoreboard.home": string
    "meta.description.gamepackage.match.postponed_%{league}_%{site}_%{teamOneDisplayName}_%{teamTwoDisplayName}_%{date}": string
    "preferences.sport_labels.720": string
    "player.nfl.team.links.schedule": string
    "meta.title.stats.player.football.college-football_%{conference}_%{league}_%{seasonType}_%{site}_%{tab}_%{year}": string
    "preferences.sport_labels.715": string
    "meta.title.standings.generic_%{league}_%{site}_%{year}": string
    "preferences.sport_labels.740": string
    "preferences.sport_labels.745": string
    "player.nhl.team.links.schedule": string
    "meta.description.soccer.standings_%{league}_%{season}": string
    "meta.description.schedule_%{conference}_%{date}_%{league}_%{site}_%{slugName}_%{year}": string
    "postseason.xfl.week_3": string
    "postseason.xfl.week_2": string
    "postseason.xfl.week_1": string
    "meta.description.teams_%{conference}_%{league}_%{site}_%{slugName}_%{year}": string
    "preferences.sport_labels.730": string
    "meta.description.player.advancedstats_%{league}_%{playerName}_%{position}_%{site}_%{teamFullName}": string
    "meta.title.gamepackage.fightcenter.pre_%{league}_%{site}_%{eventName}": string
    "to_be_determined.abbrev": string
    "meta.description.team.transfers.soccer_%{league}_%{site}_%{teamFullName}_%{year}": string
    "watch.schedule.locked": string
    "tableTitle.leaguePlayerStatsGolf": string
    "meta.title.gamepackage.playbyplay_%{league}_%{site}_%{teamOneShortName}_%{teamTwoShortName}_%{date}_%{teamOneScore}_%{teamTwoScore}": string
    "meta.title.watch.default_%{pageName}_%{watchBranding}": string
    "tableTitle.leagueTeamStats_%{view}_%{complement}": string
    "stance.abbrev.south": string
    "tableTitle.stat.turnovers": string
    "nba.standings.footerCaption": string
    "search.noResults.display": string
    footerText: string
    APG: string
    "nhl.teamSchedule.wlotl": string
    "player.mens-college-basketball.team.links.schedule": string
    "contextual.menu.remove": string
    "watch.appstore.alt.text": string
    "NBA-DEVELOPMENT Standings": string
    "meta.description.watch.catalog_%{showTitle}_%{subHeadline}_%{watchBranding}": string
    "watch.manage.buttonText": string
    "meta.description.schedule.snf_%{league}_%{site}_%{year}": string
    "meta.description.scoreboard_%{conference}_%{league}_%{site}_%{year}": string
    "pageTitle.collegeleagues.leagueTeamStats_%{league}_%{season}": string
    "player.womens-college-basketball.team.links.schedule": string
    "meta.title.contributor.shortstop_%{headline}": string
    "meta.title.watch.espnplus_%{site}_%{watchBranding}": string
    playerStats: string
    stanleycup: string
    "preseason.week_%{number}": string
    "game.tie.abbrev": string
    bye: string
    "mma.schedule.title_%{sport}_%{schedule}_%{date}": string
    "search.noResults.found_%{query}": string
    "preferences.sport_labels.800": string
    "meta.title.standings.college_%{conferenceType}_%{league}_%{site}_%{year}": string
    "meta.title.team.transactions_%{league}_%{site}_%{teamFullName}_%{teamShortName}_%{year}": string
    "meta.title.transfers.soccer_%{league}_%{site}_%{soccerLeague}_%{year}": string
    "meta.description.watch.espnplus_%{site}_%{watchBranding}": string
    "meta.title.stats.player.golf_%{league}_%{site}_%{sort}_%{year}": string
    "leaderboard.sortable.table.link_%{ariaLabel}": string
    "bettingOdds.promo.globalSBLink.caliente": string
    "meta.description.nfl.standings_%{seasonDisplay}_%{metaTitle}": string
    favorites: string
    "qbr.notes.season-leaders": string
    "meta.description.gamepackage.results_%{league}_%{site}_%{seasonYear}_%{raceName}": string
    "player.PreviouslyWith": string
    "meta.description.player.news.mma_%{league}_%{playerName}_%{site}": string
  }
  
  export interface Flags {
    ads: boolean
    athLnks: boolean
    browserSdk: boolean
    nav: boolean
    hsb: boolean
    anltcs: boolean
    otbrn: boolean
    qaAPI: boolean
    sbAPI: boolean
    localAPI: boolean
    internalAPI: boolean
    previewAPI: boolean
    gmStrp: boolean
    evtLnks: boolean
    exLnks: boolean
    rmLnscr: boolean
    rtCol: boolean
    srchOrg: string
    tier3Nv: boolean
    tmLnks: boolean
    footer: boolean
    video: boolean
  }
  
  export interface Tms {
    enabled: boolean
    env: string
    tag: string
    tagNS: string
    emitEvent: string
    loadScript: boolean
    loadAsync: boolean
    cmpLoaded: boolean
    ready: boolean
  }
  
  export interface Toodles {}
  
  export interface RequestHeaders {
    host: string
    "x-real-ip": string
    "x-forwarded-for": string
    "x-forwarded-proto": string
    "x-proxy-timestamp": string
    "x-forwarded-port": string
    "x-amzn-trace-id": string
    "cloudfront-is-desktop-viewer": string
    "cloudfront-is-mobile-viewer": string
    "cloudfront-viewer-asn": string
    "cloudfront-is-smarttv-viewer": string
    "user-agent": string
    via: string
    "x-amz-cf-id": string
    "cloudfront-viewer-country": string
    "cloudfront-is-tablet-viewer": string
    accept: string
    "cloudfront-forwarded-proto": string
    "x-scheme": string
    traceparent: string
    "x-original-uri": string
    "x-original-proto": string
    "x-environment": string
    "x-hash": string
    "x-region": string
    "x-connectionspeed": string
    "x-country": string
    "x-edition-view": string
    "x-userab": string
    "x-edition": string
    "x-device": string
    "x-vary": string
    "x-dtcauth": string
    "x-uri": string
    "x-ha-backend": string
    "x-route": string
    "x-debug": string
    "x-varnish-route": string
    "x-stale-enabled": string
    "accept-encoding": string
    "if-modified-since": string
    "x-varnish": string
    tracestate: string
    newrelic: string
  }
  
  export interface FeatureGating {
    enableGPLiveOdds: boolean
    enableGraceHold: boolean
    enablePillMetadata: boolean
    w2w: boolean
    w2wSkeletonUI: boolean
    refetchWatchSubscriptions: boolean
    exploreTiles: boolean
    deferAdobePass: boolean
    watchButtonV2: boolean
    bettingOdds: boolean
    contentReactions: boolean
    disableUSBettingAds: boolean
    enableGameblockOddsStrip: boolean
    enableScoresDrawerOddsStrip: boolean
    fittVodPlayer: boolean
    "mens-college-basketball-bracket-fc": boolean
    "womens-college-basketball-bracket-fc": boolean
    continueWatching: boolean
    mobilePlaylist: boolean
    startFromBeginning: boolean
    oddsStrip: boolean
    oneIDV4: boolean
    playerFollowing: boolean
    contributorFollowing: boolean
    siteBroadcast: boolean
    browerDeprecation: boolean
    gateFavorites: boolean
    newSearchVersion: boolean
    enableFastcast: boolean
    hudsonPlayer: boolean
    geoFooter: boolean
    activeSportsSiteAPI: boolean
    usPrivacy: boolean
    hudsonPAL: boolean
    olyResultsGPWebview: boolean
    showTaboolaSportIndex: boolean
    showTaboolaArticle: boolean
    draftArticleDeeplinks: boolean
    enableGameBreaksOnWebview: boolean
    enableLeaderboardWatchRow: boolean
    enableVisionEvents: boolean
    drm: boolean
    useLatestPaywall: boolean
    enableMagnite: boolean
    deflateZips: boolean
    enablePWA: boolean
    disableBet365: boolean
    enableMarketplace: boolean
    enableGamecastSponsoredAd: boolean
    enableHuluPromo: boolean
    enableScoreboardPromo: boolean
    enableCarouselPromo: boolean
    enableWatchHeaderVideoPromo: boolean
    disableAmp: boolean
    enableFlagship: boolean
    enableVenu: boolean
    enableHighVolumeRow: boolean
    fittRoutes: boolean
    enableCBHLTest: boolean
    enableMyBetsModuleIndex: boolean
    enableMyBetsSettingsOverlay: boolean
  }
  
  export interface SearchConfig {
    qa: Qa
    prod: Prod
  }
  
  export interface Qa {
    site_espn: string[]
    "editionorigin_espn-en_watch": string[]
    "edition_espn-es-mx": string[]
    site_espncricinfo: string[]
  }
  
  export interface Prod {
    site_espn: string[]
    "editionorigin_espn-en_watch": string[]
    site_espncricinfo: string[]
  }
  
  export interface Footer {
    ad: Ad
    prebid: Prebid
    taboola: Taboola6
    videoAd: VideoAd
    videoOOVAd: VideoOovad
    frameAncestors: string[]
    search: Search
    tms: Tms2
    serveStale: string[]
    ab: Ab
    footer: Footer2[]
    copyright: string
    disclaimers: string[]
    fastcastConfig: FastcastConfig
    exitConfig: ExitConfig[]
  }
  
  export interface Ad {
    network: string
    base: string
    kvps: Kvp[]
    kvpsEspnPlus: KvpsEspnPlu[]
    selector: string
    override: Override
    webviewOverride: WebviewOverride
    sizes: Sizes
    bettingOnlySizes: BettingOnlySizes
    sizesEspnPlus: SizesEspnPlus
    whitelistEspnPlus: string[]
    breakpoints: Breakpoints
    supportDynamicPageLoad: boolean
    delayInPageAdSlots: boolean
    refreshOnBreakpointChange: boolean
    dynamicKeyValues: DynamicKeyValues
    id: number
    disabled: string
    incontentPositions: IncontentPositions
    load: Load
    preBidConfig: PreBidConfig
    videoAdConfig: VideoAdConfig
    taboolaConfig: TaboolaConfig
    videoOOVAdConfig: VideoOovadConfig
  }
  
  export interface Kvp {
    name: string
    value: string
  }
  
  export interface KvpsEspnPlu {
    name: string
    value: string
  }
  
  export interface Override {
    banner: Banner
  }
  
  export interface Banner {
    conversation: string
    game: string
    index: string
    lineups: string
    match: string
    preview: string
    scoreboard: string
    fightcenter: string
  }
  
  export interface WebviewOverride {
    banner: Banner2
  }
  
  export interface Banner2 {
    standings: string
    "team/stats": string
    roster: string
    "nba/stats": string
    "nfl/stats": string
    "cfb/stats": string
    "mlb/stats": string
    "ncb/rankings": string
    "ncaaw/rankings": string
    "cfb/rankings": string
  }
  
  export interface Sizes {
    overlay: Overlay
    banner: Banner3
    "banner-index": BannerIndex
    "banner-scoreboard": BannerScoreboard
    "banner-webview": BannerWebview
    incontent: Incontent
    "incontent-betting": IncontentBetting
    incontent2: Incontent2
    incontentstrip: Incontentstrip
    wallpaper: Wallpaper
    incontentstrip2: Incontentstrip2
    midpage: Midpage
    presby: Presby
    nlbetting: Nlbetting
    nlbettingschedule: Nlbettingschedule
    presentedbylogo: Presentedbylogo
    instream: Instream
    exclusions: Exclusions
    native: Native
    "native-betting": NativeBetting
    gamecast: Gamecast
  }
  
  export interface Overlay {
    defaultSize: number[]
    mappings: Mapping[]
  }
  
  export interface Mapping {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Banner3 {
    defaultSize: number[]
    mappings: Mapping2[]
    pbjs: Pbjs
  }
  
  export interface Mapping2 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface BannerIndex {
    defaultSize: number[]
    includedCountries: string[]
    excludedProfile: string[]
    excludedSize: string[]
    mappings: Mapping3[]
    pbjs: Pbjs2
  }
  
  export interface Mapping3 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs2 {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface BannerScoreboard {
    defaultSize: number[]
    includedCountries: string[]
    excludedSize: string[]
    mappings: Mapping4[]
    pbjs: Pbjs3
  }
  
  export interface Mapping4 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs3 {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface BannerWebview {
    defaultSize: number[]
    includedCountries: string[]
    excludedSize: string[]
    mappings: Mapping5[]
    pbjs: Pbjs4
  }
  
  export interface Mapping5 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs4 {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface Incontent {
    defaultSize: number[]
    mappings: Mapping6[]
  }
  
  export interface Mapping6 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface IncontentBetting {
    defaultSize: number[]
    mappings: Mapping7[]
  }
  
  export interface Mapping7 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Incontent2 {
    defaultSize: number[]
    mappings: Mapping8[]
  }
  
  export interface Mapping8 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Incontentstrip {
    defaultSize: number[]
    mappings: Mapping9[]
  }
  
  export interface Mapping9 {
    viewport: number[]
    slot: number[]
  }
  
  export interface Wallpaper {
    defaultSize: number[]
    mappings: Mapping10[]
  }
  
  export interface Mapping10 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Incontentstrip2 {
    defaultSize: number[]
    mappings: Mapping11[]
  }
  
  export interface Mapping11 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Midpage {
    defaultSize: number[]
    mappings: Mapping12[]
  }
  
  export interface Mapping12 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Presby {
    defaultSize: number[]
    mappings: Mapping13[]
  }
  
  export interface Mapping13 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Nlbetting {
    defaultSize: number[]
    mappings: Mapping14[]
  }
  
  export interface Mapping14 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Nlbettingschedule {
    defaultSize: number[]
    mappings: Mapping15[]
  }
  
  export interface Mapping15 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Presentedbylogo {
    defaultSize: number[]
    mappings: Mapping16[]
  }
  
  export interface Mapping16 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Instream {
    defaultSize: number[]
    mappings: Mapping17[]
  }
  
  export interface Mapping17 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Exclusions {
    defaultSize: number[]
    mappings: Mapping18[]
  }
  
  export interface Mapping18 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Native {
    defaultSize: string
    mappings: Mapping19[]
  }
  
  export interface Mapping19 {
    viewport: number[]
    slot: string[]
  }
  
  export interface NativeBetting {
    defaultSize: string
    mappings: Mapping20[]
  }
  
  export interface Mapping20 {
    viewport: number[]
    slot: string[]
  }
  
  export interface Gamecast {
    defaultSize: number[]
    mappings: Mapping21[]
  }
  
  export interface Mapping21 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface BettingOnlySizes {
    "incontent-betting": IncontentBetting2
    "native-betting": NativeBetting2
  }
  
  export interface IncontentBetting2 {
    defaultSize: number[]
    mappings: Mapping22[]
  }
  
  export interface Mapping22 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface NativeBetting2 {
    defaultSize: string
    mappings: Mapping23[]
  }
  
  export interface Mapping23 {
    viewport: number[]
    slot: string[]
  }
  
  export interface SizesEspnPlus {
    banner: Banner4
    "banner-index": BannerIndex2
    "banner-scoreboard": BannerScoreboard2
    "native-betting": NativeBetting3
    incontent: Incontent3
    "incontent-betting": IncontentBetting3
    gamecast: Gamecast2
    instream: Instream2
  }
  
  export interface Banner4 {
    defaultSize: number[]
    mappings: Mapping24[]
    pbjs: Pbjs5
  }
  
  export interface Mapping24 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs5 {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface BannerIndex2 {
    defaultSize: number[]
    includedCountries: string[]
    excludedProfile: string[]
    excludedSize: string[]
    mappings: Mapping25[]
    pbjs: Pbjs6
  }
  
  export interface Mapping25 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs6 {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface BannerScoreboard2 {
    defaultSize: number[]
    includedCountries: string[]
    excludedSize: string[]
    mappings: Mapping26[]
    pbjs: Pbjs7
  }
  
  export interface Mapping26 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs7 {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface NativeBetting3 {
    defaultSize: string
    mappings: Mapping27[]
  }
  
  export interface Mapping27 {
    viewport: number[]
    slot: string[]
  }
  
  export interface Incontent3 {
    defaultSize: number[]
    mappings: Mapping28[]
  }
  
  export interface Mapping28 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface IncontentBetting3 {
    defaultSize: number[]
    mappings: Mapping29[]
  }
  
  export interface Mapping29 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Gamecast2 {
    defaultSize: number[]
    mappings: Mapping30[]
  }
  
  export interface Mapping30 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Instream2 {
    defaultSize: number[]
    mappings: Mapping31[]
  }
  
  export interface Mapping31 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Breakpoints {
    xl: number[]
    l: number[]
    m: number[]
    s: number[]
  }
  
  export interface DynamicKeyValues {
    profile: Profile
  }
  
  export interface Profile {
    key: string
  }
  
  export interface IncontentPositions {
    defaults: Defaults
    index: Index
  }
  
  export interface Defaults {
    favorites: number
    now: number
    news: number
  }
  
  export interface Index {
    top: Top
    nfl: Nfl
  }
  
  export interface Top {
    favorites: number
  }
  
  export interface Nfl {}
  
  export interface Load {
    defaults: Defaults2
    frontpage: Frontpage
    story: Story
    index: Index2
    scoreboard: Scoreboard2
    standings: Standings
    schedule: Schedule2
  }
  
  export interface Defaults2 {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface Frontpage {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface Story {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface Index2 {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface Scoreboard2 {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface Standings {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface Schedule2 {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface PreBidConfig {
    timeout: number
    usePreBid: boolean
    EUROPE_EXCLUSIONS: string[]
    REGION_MAP: RegionMap
    rubicon: Rubicon
    aol: Aol
    appnexus: Appnexus
    trustx: Trustx
    ix: Ix
  }
  
  export interface RegionMap {
    AF: string
    AL: string
    DZ: string
    AS: string
    AD: string
    AO: string
    AI: string
    AQ: string
    AG: string
    AR: string
    AM: string
    AW: string
    AU: string
    AT: string
    AZ: string
    BH: string
    BD: string
    BB: string
    BY: string
    BE: string
    BZ: string
    BJ: string
    BM: string
    BT: string
    BO: string
    BA: string
    BW: string
    BV: string
    BR: string
    IO: string
    VG: string
    BN: string
    BG: string
    BF: string
    BI: string
    KH: string
    CM: string
    CA: string
    CV: string
    BQ: string
    KY: string
    CF: string
    TD: string
    CL: string
    CN: string
    CX: string
    CC: string
    CO: string
    KM: string
    CK: string
    CR: string
    CI: string
    HR: string
    CW: string
    CY: string
    CZ: string
    CD: string
    DK: string
    DJ: string
    DM: string
    DO: string
    EC: string
    EG: string
    SV: string
    GQ: string
    ER: string
    EE: string
    ET: string
    FK: string
    FO: string
    FM: string
    FJ: string
    FI: string
    FR: string
    GF: string
    PF: string
    TF: string
    GA: string
    GE: string
    DE: string
    GH: string
    GI: string
    GR: string
    GL: string
    GD: string
    GP: string
    GU: string
    GT: string
    GG: string
    GN: string
    GW: string
    GY: string
    HT: string
    HM: string
    HN: string
    HK: string
    HU: string
    IS: string
    IN: string
    ID: string
    IQ: string
    IE: string
    IL: string
    IT: string
    JM: string
    JP: string
    JE: string
    JO: string
    KZ: string
    KE: string
    KI: string
    XK: string
    KW: string
    KG: string
    LA: string
    LV: string
    LB: string
    LS: string
    LR: string
    LY: string
    LI: string
    LT: string
    LU: string
    MO: string
    MK: string
    MG: string
    MW: string
    MY: string
    MV: string
    ML: string
    MT: string
    MH: string
    MQ: string
    MR: string
    MU: string
    YT: string
    MX: string
    MD: string
    MC: string
    MN: string
    ME: string
    MS: string
    MA: string
    MZ: string
    MM: string
    NA: string
    NR: string
    NP: string
    NL: string
    NC: string
    NZ: string
    NI: string
    NE: string
    NG: string
    NU: string
    NF: string
    MP: string
    NO: string
    OM: string
    PK: string
    PW: string
    PS: string
    PA: string
    PG: string
    PY: string
    PE: string
    PH: string
    PN: string
    PL: string
    PT: string
    PR: string
    QA: string
    RE: string
    RO: string
    RU: string
    RW: string
    SH: string
    KN: string
    LC: string
    PM: string
    VC: string
    WS: string
    SM: string
    ST: string
    SA: string
    SN: string
    RS: string
    SC: string
    SL: string
    SG: string
    SX: string
    SK: string
    SI: string
    SB: string
    SO: string
    ZA: string
    GS: string
    KR: string
    ES: string
    LK: string
    SR: string
    SJ: string
    SZ: string
    SE: string
    CH: string
    TW: string
    TJ: string
    TZ: string
    TH: string
    BS: string
    GM: string
    TL: string
    TG: string
    TK: string
    TO: string
    TT: string
    TN: string
    TR: string
    TM: string
    TC: string
    TV: string
    VI: string
    UG: string
    UA: string
    AE: string
    GB: string
    US: string
    UM: string
    UY: string
    UZ: string
    VU: string
    VA: string
    VE: string
    VN: string
    WF: string
    EH: string
    YE: string
    ZM: string
    ZW: string
  }
  
  export interface Rubicon {
    accountId: number
    desktop: Desktop4
    mobile: Mobile4
  }
  
  export interface Desktop4 {
    zoneId: number
    siteId: number
  }
  
  export interface Mobile4 {
    zoneId: number
    siteId: number
  }
  
  export interface Aol {
    networkId: string
    incontent: number[]
    banner: Banner5
  }
  
  export interface Banner5 {
    desktop: number[]
    mobile: number[]
  }
  
  export interface Appnexus {
    incontent: Incontent4
    banner: Banner6
  }
  
  export interface Incontent4 {
    US: number
    APAC: number
    BR: number
    CA: number
    EMEA: number
    IS: number
    LATAM: number
    ANZ: number
  }
  
  export interface Banner6 {
    US: number
    APAC: number
    BR: number
    CA: number
    EMEA: number
    IS: number
    LATAM: number
    ANZ: number
  }
  
  export interface Trustx {
    incontent: number
    banner: number
  }
  
  export interface Ix {
    siteId: string
  }
  
  export interface VideoAdConfig {
    qa: Qa2
    prod: Prod2
  }
  
  export interface Qa2 {
    google: boolean
    network: number
    cms: number
    showPremVideoAds: boolean
    allowAdSkip: boolean
    useNewUI: boolean
    iphoneplaysinline: boolean
    disallowAdSkipByEdition: string[]
    disableOnBackgroundedVideoEditions: string[]
  }
  
  export interface Prod2 {
    google: boolean
    network: number
    cms: number
    showPremVideoAds: boolean
    allowAdSkip: boolean
    useNewUI: boolean
    iphoneplaysinline: boolean
    disallowAdSkipByEdition: any[]
  }
  
  export interface TaboolaConfig {
    local: Local
    sandbox: Sandbox
    qa: Qa3
    prod: Prod3
  }
  
  export interface Local {
    taboola: Taboola2
    outbrain: Outbrain2
  }
  
  export interface Taboola2 {
    show: boolean
  }
  
  export interface Outbrain2 {
    show: boolean
  }
  
  export interface Sandbox {
    taboola: Taboola3
    outbrain: Outbrain3
  }
  
  export interface Taboola3 {
    show: boolean
  }
  
  export interface Outbrain3 {
    show: boolean
  }
  
  export interface Qa3 {
    taboola: Taboola4
    outbrain: Outbrain4
  }
  
  export interface Taboola4 {
    show: boolean
  }
  
  export interface Outbrain4 {
    show: boolean
  }
  
  export interface Prod3 {
    taboola: Taboola5
    outbrain: Outbrain5
  }
  
  export interface Taboola5 {
    show: boolean
  }
  
  export interface Outbrain5 {
    show: boolean
  }
  
  export interface VideoOovadConfig {
    Note: string
    Storage: string
  }
  
  export interface Prebid {
    timeout: number
    usePreBid: boolean
    EUROPE_EXCLUSIONS: string[]
    REGION_MAP: RegionMap2
    rubicon: Rubicon2
    aol: Aol2
    appnexus: Appnexus2
    trustx: Trustx2
    ix: Ix2
  }
  
  export interface RegionMap2 {
    AF: string
    AL: string
    DZ: string
    AS: string
    AD: string
    AO: string
    AI: string
    AQ: string
    AG: string
    AR: string
    AM: string
    AW: string
    AU: string
    AT: string
    AZ: string
    BH: string
    BD: string
    BB: string
    BY: string
    BE: string
    BZ: string
    BJ: string
    BM: string
    BT: string
    BO: string
    BA: string
    BW: string
    BV: string
    BR: string
    IO: string
    VG: string
    BN: string
    BG: string
    BF: string
    BI: string
    KH: string
    CM: string
    CA: string
    CV: string
    BQ: string
    KY: string
    CF: string
    TD: string
    CL: string
    CN: string
    CX: string
    CC: string
    CO: string
    KM: string
    CK: string
    CR: string
    CI: string
    HR: string
    CW: string
    CY: string
    CZ: string
    CD: string
    DK: string
    DJ: string
    DM: string
    DO: string
    EC: string
    EG: string
    SV: string
    GQ: string
    ER: string
    EE: string
    ET: string
    FK: string
    FO: string
    FM: string
    FJ: string
    FI: string
    FR: string
    GF: string
    PF: string
    TF: string
    GA: string
    GE: string
    DE: string
    GH: string
    GI: string
    GR: string
    GL: string
    GD: string
    GP: string
    GU: string
    GT: string
    GG: string
    GN: string
    GW: string
    GY: string
    HT: string
    HM: string
    HN: string
    HK: string
    HU: string
    IS: string
    IN: string
    ID: string
    IQ: string
    IE: string
    IL: string
    IT: string
    JM: string
    JP: string
    JE: string
    JO: string
    KZ: string
    KE: string
    KI: string
    XK: string
    KW: string
    KG: string
    LA: string
    LV: string
    LB: string
    LS: string
    LR: string
    LY: string
    LI: string
    LT: string
    LU: string
    MO: string
    MK: string
    MG: string
    MW: string
    MY: string
    MV: string
    ML: string
    MT: string
    MH: string
    MQ: string
    MR: string
    MU: string
    YT: string
    MX: string
    MD: string
    MC: string
    MN: string
    ME: string
    MS: string
    MA: string
    MZ: string
    MM: string
    NA: string
    NR: string
    NP: string
    NL: string
    NC: string
    NZ: string
    NI: string
    NE: string
    NG: string
    NU: string
    NF: string
    MP: string
    NO: string
    OM: string
    PK: string
    PW: string
    PS: string
    PA: string
    PG: string
    PY: string
    PE: string
    PH: string
    PN: string
    PL: string
    PT: string
    PR: string
    QA: string
    RE: string
    RO: string
    RU: string
    RW: string
    SH: string
    KN: string
    LC: string
    PM: string
    VC: string
    WS: string
    SM: string
    ST: string
    SA: string
    SN: string
    RS: string
    SC: string
    SL: string
    SG: string
    SX: string
    SK: string
    SI: string
    SB: string
    SO: string
    ZA: string
    GS: string
    KR: string
    ES: string
    LK: string
    SR: string
    SJ: string
    SZ: string
    SE: string
    CH: string
    TW: string
    TJ: string
    TZ: string
    TH: string
    BS: string
    GM: string
    TL: string
    TG: string
    TK: string
    TO: string
    TT: string
    TN: string
    TR: string
    TM: string
    TC: string
    TV: string
    VI: string
    UG: string
    UA: string
    AE: string
    GB: string
    US: string
    UM: string
    UY: string
    UZ: string
    VU: string
    VA: string
    VE: string
    VN: string
    WF: string
    EH: string
    YE: string
    ZM: string
    ZW: string
  }
  
  export interface Rubicon2 {
    accountId: number
    desktop: Desktop5
    mobile: Mobile5
  }
  
  export interface Desktop5 {
    zoneId: number
    siteId: number
  }
  
  export interface Mobile5 {
    zoneId: number
    siteId: number
  }
  
  export interface Aol2 {
    networkId: string
    incontent: number[]
    banner: Banner7
  }
  
  export interface Banner7 {
    desktop: number[]
    mobile: number[]
  }
  
  export interface Appnexus2 {
    incontent: Incontent5
    banner: Banner8
  }
  
  export interface Incontent5 {
    US: number
    APAC: number
    BR: number
    CA: number
    EMEA: number
    IS: number
    LATAM: number
    ANZ: number
  }
  
  export interface Banner8 {
    US: number
    APAC: number
    BR: number
    CA: number
    EMEA: number
    IS: number
    LATAM: number
    ANZ: number
  }
  
  export interface Trustx2 {
    incontent: number
    banner: number
  }
  
  export interface Ix2 {
    siteId: string
  }
  
  export interface Taboola6 {
    local: Local2
    sandbox: Sandbox2
    qa: Qa4
    prod: Prod4
  }
  
  export interface Local2 {
    taboola: Taboola7
    outbrain: Outbrain6
  }
  
  export interface Taboola7 {
    show: boolean
  }
  
  export interface Outbrain6 {
    show: boolean
  }
  
  export interface Sandbox2 {
    taboola: Taboola8
    outbrain: Outbrain7
  }
  
  export interface Taboola8 {
    show: boolean
  }
  
  export interface Outbrain7 {
    show: boolean
  }
  
  export interface Qa4 {
    taboola: Taboola9
    outbrain: Outbrain8
  }
  
  export interface Taboola9 {
    show: boolean
  }
  
  export interface Outbrain8 {
    show: boolean
  }
  
  export interface Prod4 {
    taboola: Taboola10
    outbrain: Outbrain9
  }
  
  export interface Taboola10 {
    show: boolean
  }
  
  export interface Outbrain9 {
    show: boolean
  }
  
  export interface VideoAd {
    qa: Qa5
    prod: Prod5
  }
  
  export interface Qa5 {
    google: boolean
    network: number
    cms: number
    showPremVideoAds: boolean
    allowAdSkip: boolean
    useNewUI: boolean
    iphoneplaysinline: boolean
    disallowAdSkipByEdition: string[]
    disableOnBackgroundedVideoEditions: string[]
  }
  
  export interface Prod5 {
    google: boolean
    network: number
    cms: number
    showPremVideoAds: boolean
    allowAdSkip: boolean
    useNewUI: boolean
    iphoneplaysinline: boolean
    disallowAdSkipByEdition: any[]
  }
  
  export interface VideoOovad {
    Note: string
    Storage: string
  }
  
  export interface Search {
    qa: Qa6
    prod: Prod6
  }
  
  export interface Qa6 {
    site_espn: string[]
    "editionorigin_espn-en_watch": string[]
    "edition_espn-es-mx": string[]
    site_espncricinfo: string[]
  }
  
  export interface Prod6 {
    site_espn: string[]
    "editionorigin_espn-en_watch": string[]
    site_espncricinfo: string[]
  }
  
  export interface Tms2 {
    local: Local3
    sandbox: Sandbox3
    qa: Qa7
    prod: Prod7
  }
  
  export interface Local3 {
    vendor: string
    scriptTag: string
    ns: string
    enabled: boolean
  }
  
  export interface Sandbox3 {
    vendor: string
    scriptTag: string
    ns: string
    enabled: boolean
  }
  
  export interface Qa7 {
    vendor: string
    scriptTag: string
    ns: string
    enabled: boolean
  }
  
  export interface Prod7 {
    vendor: string
    scriptTag: string
    ns: string
    enabled: boolean
  }
  
  export interface Ab {
    local: Local4
    qa: Qa8
    prod: Prod8
  }
  
  export interface Local4 {
    target: Target
    optimizely: Optimizely
    fastcast: Fastcast
  }
  
  export interface Target {
    enabled: boolean
    script: string
    placements: Placement[]
  }
  
  export interface Placement {
    site: string
    regexp: string
    flag: boolean
  }
  
  export interface Optimizely {
    enabled: boolean
    oldscript: string
    script: string
    placements: any[]
  }
  
  export interface Fastcast {
    enabled: boolean
    script: string
    placements: Placements
  }
  
  export interface Placements {
    "/nba/index": string
    "/nfl/index": string
    "/mlb/index": string
    "^/.+$": string
  }
  
  export interface Qa8 {
    target: Target2
    optimizely: Optimizely2
    fastcast: Fastcast2
  }
  
  export interface Target2 {
    enabled: boolean
    script: string
    placements: Placement2[]
  }
  
  export interface Placement2 {
    site: string
    regexp: string
    flag: boolean
  }
  
  export interface Optimizely2 {
    enabled: boolean
    oldscript: string
    script: string
    placements: any[]
  }
  
  export interface Fastcast2 {
    enabled: boolean
    script: string
    placements: Placements2
  }
  
  export interface Placements2 {
    "/nba/index": string
    "/ncf/index": string
    "^/.+$": string
  }
  
  export interface Prod8 {
    target: Target3
    optimizely: Optimizely3
    fastcast: Fastcast3
  }
  
  export interface Target3 {
    enabled: boolean
    script: string
    placements: Placement3[]
  }
  
  export interface Placement3 {
    site: string
    regexp: string
    flag: boolean
  }
  
  export interface Optimizely3 {
    enabled: boolean
    oldscript: string
    script: string
    placements: any[]
  }
  
  export interface Fastcast3 {
    enabled: boolean
    script: string
    placements: Placements3
  }
  
  export interface Placements3 {
    "/nba/index": string
    "/ncf/index": string
    "^/.+$": string
  }
  
  export interface Footer2 {
    label: string
    href: string
    className?: string
  }
  
  export interface FastcastConfig {
    enableGPLiveOdds: EnableGpliveOdds
    enableGraceHold: EnableGraceHold
    enablePillMetadata: EnablePillMetadata
    w2w: W2w
    w2wSkeletonUI: W2wSkeletonUi
    refetchWatchSubscriptions: RefetchWatchSubscriptions
    exploreTiles: ExploreTiles
    deferAdobePass: DeferAdobePass
    watchButtonV2: WatchButtonV2
    bettingOdds: BettingOdds
    contentReactions: ContentReactions
    disableUSBettingAds: DisableUsbettingAds
    enableGameblockOddsStrip: EnableGameblockOddsStrip
    enableScoresDrawerOddsStrip: EnableScoresDrawerOddsStrip
    fittVodPlayer: FittVodPlayer
    "mens-college-basketball-bracket-fc": MensCollegeBasketballBracketFc
    "womens-college-basketball-bracket-fc": WomensCollegeBasketballBracketFc
    continueWatching: ContinueWatching
    mobilePlaylist: MobilePlaylist
    startFromBeginning: StartFromBeginning
    oddsStrip: OddsStrip
    oneIDV4: OneIdv4
    playerFollowing: PlayerFollowing
    contributorFollowing: ContributorFollowing
    siteBroadcast: SiteBroadcast
    browerDeprecation: BrowerDeprecation
    gateFavorites: GateFavorites
    newSearchVersion: NewSearchVersion
    enableFastcast: EnableFastcast
    hudsonPlayer: HudsonPlayer
    geoFooter: GeoFooter
    activeSportsSiteAPI: ActiveSportsSiteApi
    usPrivacy: UsPrivacy
    hudsonPAL: HudsonPal
    olyResultsGPWebview: OlyResultsGpwebview
    showTaboolaSportIndex: ShowTaboolaSportIndex
    showTaboolaArticle: ShowTaboolaArticle
    draftArticleDeeplinks: DraftArticleDeeplinks
    enableGameBreaksOnWebview: EnableGameBreaksOnWebview
    enableLeaderboardWatchRow: EnableLeaderboardWatchRow
    enableVisionEvents: EnableVisionEvents
    drm: Drm
    useLatestPaywall: UseLatestPaywall
    enableMagnite: EnableMagnite
    deflateZips: DeflateZips
    enablePWA: EnablePwa
    disableBet365: DisableBet365
    enableMarketplace: EnableMarketplace
    enableGamecastSponsoredAd: EnableGamecastSponsoredAd
    enableHuluPromo: EnableHuluPromo
    enableScoreboardPromo: EnableScoreboardPromo
    enableCarouselPromo: EnableCarouselPromo
    enableWatchHeaderVideoPromo: EnableWatchHeaderVideoPromo
    disableAmp: DisableAmp
    enableFlagship: EnableFlagship
    enableVenu: EnableVenu
    enableHighVolumeRow: EnableHighVolumeRow
    maxFastcastGames: number
    fittRoutes: FittRoutes
    enableCBHLTest: EnableCbhltest
    enableMyBetsModuleIndex: EnableMyBetsModuleIndex
    enableMyBetsSettingsOverlay: EnableMyBetsSettingsOverlay
  }
  
  export interface EnableGpliveOdds {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableGraceHold {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnablePillMetadata {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface W2w {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface W2wSkeletonUi {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface RefetchWatchSubscriptions {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface ExploreTiles {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface DeferAdobePass {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface WatchButtonV2 {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface BettingOdds {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface ContentReactions {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface DisableUsbettingAds {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableGameblockOddsStrip {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableScoresDrawerOddsStrip {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface FittVodPlayer {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface MensCollegeBasketballBracketFc {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface WomensCollegeBasketballBracketFc {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface ContinueWatching {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface MobilePlaylist {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface StartFromBeginning {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface OddsStrip {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface OneIdv4 {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface PlayerFollowing {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface ContributorFollowing {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface SiteBroadcast {
    edition: string
    config: Config2
  }
  
  export interface Config2 {
    startDate: string
    endDate: string
    prod: boolean
    qa: boolean
    sandbox: boolean
    local: boolean
    en: En
    pt: Pt
    es: Es
  }
  
  export interface En {
    active: boolean
    buttonText: string
    href: string
    message: string
  }
  
  export interface Pt {
    active: boolean
    buttonText: string
    href: string
    message: string
  }
  
  export interface Es {
    active: boolean
    buttonText: string
    href: string
    message: string
  }
  
  export interface BrowerDeprecation {
    browser: string
    active: boolean
  }
  
  export interface GateFavorites {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface NewSearchVersion {
    prod: boolean
    qa: boolean
    sandbox: boolean
    local: boolean
  }
  
  export interface EnableFastcast {
    prod: boolean
    qa: boolean
    sandbox: boolean
    local: boolean
  }
  
  export interface HudsonPlayer {
    qa: boolean
    prod: boolean
    local: boolean
  }
  
  export interface GeoFooter {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface ActiveSportsSiteApi {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface UsPrivacy {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface HudsonPal {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface OlyResultsGpwebview {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface ShowTaboolaSportIndex {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface ShowTaboolaArticle {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface DraftArticleDeeplinks {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableGameBreaksOnWebview {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableLeaderboardWatchRow {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableVisionEvents {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface Drm {
    countries: string
  }
  
  export interface UseLatestPaywall {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableMagnite {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface DeflateZips {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnablePwa {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface DisableBet365 {
    prod: boolean
    qa: boolean
    sandbox: boolean
    local: boolean
  }
  
  export interface EnableMarketplace {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableGamecastSponsoredAd {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableHuluPromo {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableScoreboardPromo {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableCarouselPromo {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableWatchHeaderVideoPromo {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface DisableAmp {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableFlagship {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableVenu {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableHighVolumeRow {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface FittRoutes {
    local: string[]
    sandbox: string[]
    qa: string[]
    prod: string[]
  }
  
  export interface EnableCbhltest {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableMyBetsModuleIndex {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface EnableMyBetsSettingsOverlay {
    local: boolean
    sandbox: boolean
    qa: boolean
    prod: boolean
  }
  
  export interface ExitConfig {
    key: string
    hrefPatterns: string[]
    analytics: Analytics2
    accessibilityLabelButton: string
    accessibilityLabelCheckbox: string
    continueLogo: string
    continueLogoDark: string
    continueText: string
    headingFantasyApp: string
    heading: string
    logo: Logo
    primaryText: string
    primaryTextMobile: string
    remember: Remember
    webviewType: string
  }
  
  export interface Analytics2 {
    pageName: string
    section: string
    league: string
    sport: string
    contentType: string
  }
  
  export interface Logo {
    light: string
    dark: string
    alt: string
  }
  
  export interface Remember {
    analyticsKey: string
    text: string
    ttl: number
  }
  
  export interface FastcastConfig2 {
    maxFastcastGames: number
  }
  
  export interface ExitConfig2 {
    key: string
    hrefPatterns: string[]
    analytics: Analytics3
    accessibilityLabelButton: string
    accessibilityLabelCheckbox: string
    continueLogo: string
    continueLogoDark: string
    continueText: string
    headingFantasyApp: string
    heading: string
    logo: Logo2
    primaryText: string
    primaryTextMobile: string
    remember: Remember2
    webviewType: string
  }
  
  export interface Analytics3 {
    pageName: string
    section: string
    league: string
    sport: string
    contentType: string
  }
  
  export interface Logo2 {
    light: string
    dark: string
    alt: string
  }
  
  export interface Remember2 {
    analyticsKey: string
    text: string
    ttl: number
  }
  
  export interface Debug {
    on: boolean
  }
  
  export interface Ads2 {
    network: string
    base: string
    kvps: Kvp2[]
    kvpsEspnPlus: KvpsEspnPlu2[]
    selector: string
    override: Override2
    webviewOverride: WebviewOverride2
    sizes: Sizes2
    bettingOnlySizes: BettingOnlySizes2
    sizesEspnPlus: SizesEspnPlus2
    whitelistEspnPlus: string[]
    breakpoints: Breakpoints2
    supportDynamicPageLoad: boolean
    delayInPageAdSlots: boolean
    refreshOnBreakpointChange: boolean
    dynamicKeyValues: DynamicKeyValues2
    id: number
    disabled: string
    incontentPositions: IncontentPositions2
    load: Load2
    preBidConfig: PreBidConfig2
    videoAdConfig: VideoAdConfig2
    taboolaConfig: TaboolaConfig2
    videoOOVAdConfig: VideoOovadConfig2
  }
  
  export interface Kvp2 {
    name: string
    value: string
  }
  
  export interface KvpsEspnPlu2 {
    name: string
    value: string
  }
  
  export interface Override2 {
    banner: Banner9
  }
  
  export interface Banner9 {
    conversation: string
    game: string
    index: string
    lineups: string
    match: string
    preview: string
    scoreboard: string
    fightcenter: string
  }
  
  export interface WebviewOverride2 {
    banner: Banner10
  }
  
  export interface Banner10 {
    standings: string
    "team/stats": string
    roster: string
    "nba/stats": string
    "nfl/stats": string
    "cfb/stats": string
    "mlb/stats": string
    "ncb/rankings": string
    "ncaaw/rankings": string
    "cfb/rankings": string
  }
  
  export interface Sizes2 {
    overlay: Overlay2
    banner: Banner11
    "banner-index": BannerIndex3
    "banner-scoreboard": BannerScoreboard3
    "banner-webview": BannerWebview2
    incontent: Incontent6
    "incontent-betting": IncontentBetting4
    incontent2: Incontent22
    incontentstrip: Incontentstrip3
    wallpaper: Wallpaper2
    incontentstrip2: Incontentstrip22
    midpage: Midpage2
    presby: Presby2
    nlbetting: Nlbetting2
    nlbettingschedule: Nlbettingschedule2
    presentedbylogo: Presentedbylogo2
    instream: Instream3
    exclusions: Exclusions2
    native: Native2
    "native-betting": NativeBetting4
    gamecast: Gamecast3
  }
  
  export interface Overlay2 {
    defaultSize: number[]
    mappings: Mapping32[]
  }
  
  export interface Mapping32 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Banner11 {
    defaultSize: number[]
    mappings: Mapping33[]
    pbjs: Pbjs8
  }
  
  export interface Mapping33 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs8 {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface BannerIndex3 {
    defaultSize: number[]
    includedCountries: string[]
    excludedProfile: string[]
    excludedSize: string[]
    mappings: Mapping34[]
    pbjs: Pbjs9
  }
  
  export interface Mapping34 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs9 {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface BannerScoreboard3 {
    defaultSize: number[]
    includedCountries: string[]
    excludedSize: string[]
    mappings: Mapping35[]
    pbjs: Pbjs10
  }
  
  export interface Mapping35 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs10 {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface BannerWebview2 {
    defaultSize: number[]
    includedCountries: string[]
    excludedSize: string[]
    mappings: Mapping36[]
    pbjs: Pbjs11
  }
  
  export interface Mapping36 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs11 {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface Incontent6 {
    defaultSize: number[]
    mappings: Mapping37[]
  }
  
  export interface Mapping37 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface IncontentBetting4 {
    defaultSize: number[]
    mappings: Mapping38[]
  }
  
  export interface Mapping38 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Incontent22 {
    defaultSize: number[]
    mappings: Mapping39[]
  }
  
  export interface Mapping39 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Incontentstrip3 {
    defaultSize: number[]
    mappings: Mapping40[]
  }
  
  export interface Mapping40 {
    viewport: number[]
    slot: number[]
  }
  
  export interface Wallpaper2 {
    defaultSize: number[]
    mappings: Mapping41[]
  }
  
  export interface Mapping41 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Incontentstrip22 {
    defaultSize: number[]
    mappings: Mapping42[]
  }
  
  export interface Mapping42 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Midpage2 {
    defaultSize: number[]
    mappings: Mapping43[]
  }
  
  export interface Mapping43 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Presby2 {
    defaultSize: number[]
    mappings: Mapping44[]
  }
  
  export interface Mapping44 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Nlbetting2 {
    defaultSize: number[]
    mappings: Mapping45[]
  }
  
  export interface Mapping45 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Nlbettingschedule2 {
    defaultSize: number[]
    mappings: Mapping46[]
  }
  
  export interface Mapping46 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Presentedbylogo2 {
    defaultSize: number[]
    mappings: Mapping47[]
  }
  
  export interface Mapping47 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Instream3 {
    defaultSize: number[]
    mappings: Mapping48[]
  }
  
  export interface Mapping48 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Exclusions2 {
    defaultSize: number[]
    mappings: Mapping49[]
  }
  
  export interface Mapping49 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Native2 {
    defaultSize: string
    mappings: Mapping50[]
  }
  
  export interface Mapping50 {
    viewport: number[]
    slot: string[]
  }
  
  export interface NativeBetting4 {
    defaultSize: string
    mappings: Mapping51[]
  }
  
  export interface Mapping51 {
    viewport: number[]
    slot: string[]
  }
  
  export interface Gamecast3 {
    defaultSize: number[]
    mappings: Mapping52[]
  }
  
  export interface Mapping52 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface BettingOnlySizes2 {
    "incontent-betting": IncontentBetting5
    "native-betting": NativeBetting5
  }
  
  export interface IncontentBetting5 {
    defaultSize: number[]
    mappings: Mapping53[]
  }
  
  export interface Mapping53 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface NativeBetting5 {
    defaultSize: string
    mappings: Mapping54[]
  }
  
  export interface Mapping54 {
    viewport: number[]
    slot: string[]
  }
  
  export interface SizesEspnPlus2 {
    banner: Banner12
    "banner-index": BannerIndex4
    "banner-scoreboard": BannerScoreboard4
    "native-betting": NativeBetting6
    incontent: Incontent7
    "incontent-betting": IncontentBetting6
    gamecast: Gamecast4
    instream: Instream4
  }
  
  export interface Banner12 {
    defaultSize: number[]
    mappings: Mapping55[]
    pbjs: Pbjs12
  }
  
  export interface Mapping55 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs12 {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface BannerIndex4 {
    defaultSize: number[]
    includedCountries: string[]
    excludedProfile: string[]
    excludedSize: string[]
    mappings: Mapping56[]
    pbjs: Pbjs13
  }
  
  export interface Mapping56 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs13 {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface BannerScoreboard4 {
    defaultSize: number[]
    includedCountries: string[]
    excludedSize: string[]
    mappings: Mapping57[]
    pbjs: Pbjs14
  }
  
  export interface Mapping57 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Pbjs14 {
    xl: number[][]
    l: number[][]
    m: number[][]
    s: number[][]
  }
  
  export interface NativeBetting6 {
    defaultSize: string
    mappings: Mapping58[]
  }
  
  export interface Mapping58 {
    viewport: number[]
    slot: string[]
  }
  
  export interface Incontent7 {
    defaultSize: number[]
    mappings: Mapping59[]
  }
  
  export interface Mapping59 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface IncontentBetting6 {
    defaultSize: number[]
    mappings: Mapping60[]
  }
  
  export interface Mapping60 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Gamecast4 {
    defaultSize: number[]
    mappings: Mapping61[]
  }
  
  export interface Mapping61 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Instream4 {
    defaultSize: number[]
    mappings: Mapping62[]
  }
  
  export interface Mapping62 {
    viewport: number[]
    slot: number[][]
  }
  
  export interface Breakpoints2 {
    xl: number[]
    l: number[]
    m: number[]
    s: number[]
  }
  
  export interface DynamicKeyValues2 {
    profile: Profile2
  }
  
  export interface Profile2 {
    key: string
  }
  
  export interface IncontentPositions2 {
    defaults: Defaults3
    index: Index3
  }
  
  export interface Defaults3 {
    favorites: number
    now: number
    news: number
  }
  
  export interface Index3 {
    top: Top2
    nfl: Nfl2
  }
  
  export interface Top2 {
    favorites: number
  }
  
  export interface Nfl2 {}
  
  export interface Load2 {
    defaults: Defaults4
    frontpage: Frontpage2
    story: Story2
    index: Index4
    scoreboard: Scoreboard3
    standings: Standings2
    schedule: Schedule3
  }
  
  export interface Defaults4 {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface Frontpage2 {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface Story2 {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface Index4 {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface Scoreboard3 {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface Standings2 {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface Schedule3 {
    desktop: string
    mobile: string
    tablet: string
  }
  
  export interface PreBidConfig2 {
    timeout: number
    usePreBid: boolean
    EUROPE_EXCLUSIONS: string[]
    REGION_MAP: RegionMap3
    rubicon: Rubicon3
    aol: Aol3
    appnexus: Appnexus3
    trustx: Trustx3
    ix: Ix3
  }
  
  export interface RegionMap3 {
    AF: string
    AL: string
    DZ: string
    AS: string
    AD: string
    AO: string
    AI: string
    AQ: string
    AG: string
    AR: string
    AM: string
    AW: string
    AU: string
    AT: string
    AZ: string
    BH: string
    BD: string
    BB: string
    BY: string
    BE: string
    BZ: string
    BJ: string
    BM: string
    BT: string
    BO: string
    BA: string
    BW: string
    BV: string
    BR: string
    IO: string
    VG: string
    BN: string
    BG: string
    BF: string
    BI: string
    KH: string
    CM: string
    CA: string
    CV: string
    BQ: string
    KY: string
    CF: string
    TD: string
    CL: string
    CN: string
    CX: string
    CC: string
    CO: string
    KM: string
    CK: string
    CR: string
    CI: string
    HR: string
    CW: string
    CY: string
    CZ: string
    CD: string
    DK: string
    DJ: string
    DM: string
    DO: string
    EC: string
    EG: string
    SV: string
    GQ: string
    ER: string
    EE: string
    ET: string
    FK: string
    FO: string
    FM: string
    FJ: string
    FI: string
    FR: string
    GF: string
    PF: string
    TF: string
    GA: string
    GE: string
    DE: string
    GH: string
    GI: string
    GR: string
    GL: string
    GD: string
    GP: string
    GU: string
    GT: string
    GG: string
    GN: string
    GW: string
    GY: string
    HT: string
    HM: string
    HN: string
    HK: string
    HU: string
    IS: string
    IN: string
    ID: string
    IQ: string
    IE: string
    IL: string
    IT: string
    JM: string
    JP: string
    JE: string
    JO: string
    KZ: string
    KE: string
    KI: string
    XK: string
    KW: string
    KG: string
    LA: string
    LV: string
    LB: string
    LS: string
    LR: string
    LY: string
    LI: string
    LT: string
    LU: string
    MO: string
    MK: string
    MG: string
    MW: string
    MY: string
    MV: string
    ML: string
    MT: string
    MH: string
    MQ: string
    MR: string
    MU: string
    YT: string
    MX: string
    MD: string
    MC: string
    MN: string
    ME: string
    MS: string
    MA: string
    MZ: string
    MM: string
    NA: string
    NR: string
    NP: string
    NL: string
    NC: string
    NZ: string
    NI: string
    NE: string
    NG: string
    NU: string
    NF: string
    MP: string
    NO: string
    OM: string
    PK: string
    PW: string
    PS: string
    PA: string
    PG: string
    PY: string
    PE: string
    PH: string
    PN: string
    PL: string
    PT: string
    PR: string
    QA: string
    RE: string
    RO: string
    RU: string
    RW: string
    SH: string
    KN: string
    LC: string
    PM: string
    VC: string
    WS: string
    SM: string
    ST: string
    SA: string
    SN: string
    RS: string
    SC: string
    SL: string
    SG: string
    SX: string
    SK: string
    SI: string
    SB: string
    SO: string
    ZA: string
    GS: string
    KR: string
    ES: string
    LK: string
    SR: string
    SJ: string
    SZ: string
    SE: string
    CH: string
    TW: string
    TJ: string
    TZ: string
    TH: string
    BS: string
    GM: string
    TL: string
    TG: string
    TK: string
    TO: string
    TT: string
    TN: string
    TR: string
    TM: string
    TC: string
    TV: string
    VI: string
    UG: string
    UA: string
    AE: string
    GB: string
    US: string
    UM: string
    UY: string
    UZ: string
    VU: string
    VA: string
    VE: string
    VN: string
    WF: string
    EH: string
    YE: string
    ZM: string
    ZW: string
  }
  
  export interface Rubicon3 {
    accountId: number
    desktop: Desktop6
    mobile: Mobile6
  }
  
  export interface Desktop6 {
    zoneId: number
    siteId: number
  }
  
  export interface Mobile6 {
    zoneId: number
    siteId: number
  }
  
  export interface Aol3 {
    networkId: string
    incontent: number[]
    banner: Banner13
  }
  
  export interface Banner13 {
    desktop: number[]
    mobile: number[]
  }
  
  export interface Appnexus3 {
    incontent: Incontent8
    banner: Banner14
  }
  
  export interface Incontent8 {
    US: number
    APAC: number
    BR: number
    CA: number
    EMEA: number
    IS: number
    LATAM: number
    ANZ: number
  }
  
  export interface Banner14 {
    US: number
    APAC: number
    BR: number
    CA: number
    EMEA: number
    IS: number
    LATAM: number
    ANZ: number
  }
  
  export interface Trustx3 {
    incontent: number
    banner: number
  }
  
  export interface Ix3 {
    siteId: string
  }
  
  export interface VideoAdConfig2 {
    qa: Qa9
    prod: Prod9
  }
  
  export interface Qa9 {
    google: boolean
    network: number
    cms: number
    showPremVideoAds: boolean
    allowAdSkip: boolean
    useNewUI: boolean
    iphoneplaysinline: boolean
    disallowAdSkipByEdition: string[]
    disableOnBackgroundedVideoEditions: string[]
  }
  
  export interface Prod9 {
    google: boolean
    network: number
    cms: number
    showPremVideoAds: boolean
    allowAdSkip: boolean
    useNewUI: boolean
    iphoneplaysinline: boolean
    disallowAdSkipByEdition: any[]
  }
  
  export interface TaboolaConfig2 {
    local: Local5
    sandbox: Sandbox4
    qa: Qa10
    prod: Prod10
  }
  
  export interface Local5 {
    taboola: Taboola11
    outbrain: Outbrain10
  }
  
  export interface Taboola11 {
    show: boolean
  }
  
  export interface Outbrain10 {
    show: boolean
  }
  
  export interface Sandbox4 {
    taboola: Taboola12
    outbrain: Outbrain11
  }
  
  export interface Taboola12 {
    show: boolean
  }
  
  export interface Outbrain11 {
    show: boolean
  }
  
  export interface Qa10 {
    taboola: Taboola13
    outbrain: Outbrain12
  }
  
  export interface Taboola13 {
    show: boolean
  }
  
  export interface Outbrain12 {
    show: boolean
  }
  
  export interface Prod10 {
    taboola: Taboola14
    outbrain: Outbrain13
  }
  
  export interface Taboola14 {
    show: boolean
  }
  
  export interface Outbrain13 {
    show: boolean
  }
  
  export interface VideoOovadConfig2 {
    Note: string
    Storage: string
  }
  
  export interface Analytics4 {}
  
  export interface Routing {
    location: Location
    params: Params2
  }
  
  export interface Location {
    port: string
    hash: string
    path: string
    host: string
    protocol: string
    params: Params
    pathname: string
    originalPathName: string
    query: Query
  }
  
  export interface Params {
    year: string
    _xhr: string
    groups: string
  }
  
  export interface Query {
    year: string
    _xhr: string
    groups: string
  }
  
  export interface Params2 {
    year: string
    _xhr: string
    groups: string
    sport: string
    pageType: string
    rawPageType: string
    subPageType: any
    league: string
  }
  
  export interface Page {
    key: string
    title: string
    type: string
    meta: Meta3
    content: Content
    transition: Transition
    subType: any
    analytics: Analytics5
    ads: Ads3
    outbrain: Outbrain14
    taboola: Taboola15
    adProviders: AdProviders
  }
  
  export interface Meta3 {
    title: string
    description: string
    canonical: string
    robots: string
    ogMetadata: OgMetadata
    jsonld: string
    hrefLangs: HrefLang[]
  }
  
  export interface OgMetadata {
    image: string
    width: number
    height: number
  }
  
  export interface HrefLang {
    key: string
    region: string
    url: string
  }
  
  export interface Content {
    wheretowatchmenu: Wheretowatchmenu
    teams: Teams
    navigation: Navigation
    subNavigation: SubNavigation
    headerscoreboard: Headerscoreboard
    streampicker: Streampicker
    scoreboard: Scoreboard4
  }
  
  export interface Wheretowatchmenu {}
  
  export interface Teams {
    mlb: Mlb[]
    nba: Nba[]
    nfl: Nfl3[]
    nhl: Nhl[]
    soccer: Soccer2[]
  }
  
  export interface Mlb {
    name: string
    teams: Team[]
  }
  
  export interface Team {
    id: string
    href: string
    name: string
    shortName: string
    abbrev: string
    logo: string
    logoDark: string
  }
  
  export interface Nba {
    name: string
    teams: Team2[]
  }
  
  export interface Team2 {
    id: string
    href: string
    name: string
    shortName: string
    abbrev: string
    logo: string
    logoDark: string
  }
  
  export interface Nfl3 {
    name: string
    teams: Team3[]
  }
  
  export interface Team3 {
    id: string
    href: string
    name: string
    shortName: string
    abbrev: string
    logo: string
    logoDark: string
  }
  
  export interface Nhl {
    name: string
    teams: Team4[]
  }
  
  export interface Team4 {
    id: string
    href: string
    name: string
    shortName: string
    abbrev: string
    logo: string
    logoDark: string
  }
  
  export interface Soccer2 {
    name: string
    teams: Team5[]
  }
  
  export interface Team5 {
    name: string
    href: string
    logo: string
  }
  
  export interface Navigation {
    lbl: string
    sports: Sport[]
    pillar: Pillar[]
    singleSport: boolean
  }
  
  export interface Sport {
    l: L
    t: string
    i: I[]
    a?: A8
    id: number
    lbl: string
  }
  
  export interface L {
    t: string
    w: W
  }
  
  export interface W {
    h: string
    a?: A
  }
  
  export interface A {
    mobile?: string
    icon?: string
  }
  
  export interface I {
    l: L2
    id: number
    t?: string
    i?: I2[]
    a?: A7
  }
  
  export interface L2 {
    t: string
    w: W2
    m?: M
  }
  
  export interface W2 {
    a?: A2
    h: string
    e?: boolean
    p?: boolean
  }
  
  export interface A2 {
    icon?: string
    root?: string
    sport_id?: string
    placeholder?: string
    breakpoints?: string
    route?: string
    mobile?: string
    tab?: string
    pagetype?: string
    sportAbbrev?: string
    "match-url"?: string
    isFantasy?: string
  }
  
  export interface M {
    a: A3
    h: string
  }
  
  export interface A3 {
    mobile: string
  }
  
  export interface I2 {
    l: L3
    id: number
    t?: string
    a?: A6
  }
  
  export interface L3 {
    t: string
    w?: W3
    m?: M2
  }
  
  export interface W3 {
    a?: A4
    h: string
    e?: boolean
    p?: boolean
  }
  
  export interface A4 {
    breakpoints?: string
    route?: string
    mobile?: string
    placeholder?: string
    tab?: string
    pagetype?: string
    icon?: string
    "match-url"?: string
    nofollow?: string
  }
  
  export interface M2 {
    a: A5
    h: string
  }
  
  export interface A5 {
    mobile: string
  }
  
  export interface A6 {
    breakpoints?: string
    root?: string
    sport_id?: string
  }
  
  export interface A7 {
    root: string
    sport_id?: string
    edition?: string
    sport?: string
  }
  
  export interface A8 {
    root: string
    sport_id: string
  }
  
  export interface Pillar {
    l: L4
    t: string
    i: I3[]
    a: A14
    id: number
  }
  
  export interface L4 {
    t: string
    w: W4
  }
  
  export interface W4 {
    a?: A9
    h: string
    e?: boolean
  }
  
  export interface A9 {
    logo: string
    icon?: string
    eplustrack?: string
    espnbettrack?: string
  }
  
  export interface I3 {
    l?: L5
    t?: string
    i?: I4[]
    a?: A13
    id: number
  }
  
  export interface L5 {
    t?: string
    w: W5
    m?: M3
  }
  
  export interface W5 {
    a?: A10
    h: string
    e?: boolean
  }
  
  export interface A10 {
    tab?: string
    pagetype?: string
    breakpoints?: string
    abbrev?: string
    mobile?: string
    route?: string
    logo?: string
    espnbettrack?: string
    eplustrack?: string
  }
  
  export interface M3 {
    a: A11
    h: string
  }
  
  export interface A11 {
    mobile: string
  }
  
  export interface I4 {
    l: L6
    id: number
  }
  
  export interface L6 {
    t: string
    w: W6
  }
  
  export interface W6 {
    a?: A12
    h: string
    p?: boolean
  }
  
  export interface A12 {
    class?: string
    abbrev?: string
    route?: string
  }
  
  export interface A13 {
    placeholder?: string
    menu?: string
  }
  
  export interface A14 {
    root: string
    twoColumn?: string
  }
  
  export interface SubNavigation {
    logo: string
    href: string
    text: string
    items: Item[]
    isPremium: boolean
    lbl: string
    t: string
  }
  
  export interface Item {
    l: L7
    id: number
    t?: string
    i?: I5[]
  }
  
  export interface L7 {
    t: string
    w: W7
    m?: M4
  }
  
  export interface W7 {
    a?: A15
    h: string
  }
  
  export interface A15 {
    placeholder?: string
    breakpoints?: string
    icon?: string
    route?: string
  }
  
  export interface M4 {
    a: A16
    h: string
  }
  
  export interface A16 {
    mobile: string
  }
  
  export interface I5 {
    l: L8
    id: number
  }
  
  export interface L8 {
    t: string
    w: W8
    m?: M5
  }
  
  export interface W8 {
    a?: A17
    h: string
    p?: boolean
    e?: boolean
  }
  
  export interface A17 {
    mobile?: string
    icon?: string
    route?: string
  }
  
  export interface M5 {
    a: A18
    h: string
  }
  
  export interface A18 {
    mobile: string
  }
  
  export interface Headerscoreboard {
    isTopEvents: boolean
    isTopSoccer: boolean
    sportTopics: SportTopic[]
    collegeConfs: CollegeConf[]
  }
  
  export interface SportTopic {
    league: string
    sportId: number
    displayName: string
    slug: string
    sport?: string
    href?: string
    linkText?: string
    top25Only?: boolean
  }
  
  export interface CollegeConf {
    uid: string
    groupId: string
    name: string
    shortName: string
    logo?: string
    parentGroupId?: string
    subGroups?: string[]
  }
  
  export interface Streampicker {}
  
  export interface Scoreboard4 {
    league: League2
    evts: Evt[]
    crntSzn: CrntSzn
    mdiaLst: MdiaLst
    mltiShrtTtl: string
    noGmeTxt: string
    seasonList: SeasonList
    season: Season
    byeTtl: string
    calendarData: CalendarData
    calendarType: string
    calendar: Calendar[]
    isWhitelistCalendar: boolean
    pgeHding: string
    ftchdGrpId: string
    autoUpdate: AutoUpdate
    nws: Nws
    vids: Vid[]
    qcklnks: Qcklnk[]
    requestedDates: RequestedDates
    atrbutn: Atrbutn
    isCollege: boolean
    leagueSlug: string
    promo: Promo
    shwCtLbl: boolean
    conferences: Conference[]
  }
  
  export interface League2 {
    id: string
    name: string
    abbrev: string
    slug: string
    calendarIsWhitelist: boolean
    logo: Logo3
  }
  
  export interface Logo3 {
    href: string
  }
  
  export interface Evt {
    id: string
    competitors: Competitor[]
    date: string
    tbd: boolean
    completed: boolean
    broadcasts: Broadcast[]
    link: string
    teams: Team6[]
    isTie: boolean
    format: Format
    tickets?: Tickets2
    vnue: Vnue
    status: Status
    tcktsAvail: boolean
    links: Link2[]
    hdeScrDte: boolean
    tmInfo: TmInfo
    allStr: boolean
    odds: any
    gmeTmeFrmt: string
    highlights: boolean
    day: string
    month: string
    rcpDta?: RcpDta
    lnescrs?: Lnescrs
    tckts: Tckts
    ldrs?: Ldr[]
    prfrmrTtl: any
    league: string
    lstPly?: LstPly
    wthr?: Wthr
    situation?: Situation
    metadata?: Metadata
    gameOdds?: GameOdds
    btngMrkts?: BtngMrkt[]
    cmpctMrkts?: number
    note?: string
    highlight?: Highlight
    cnfrnce?: string
  }
  
  export interface Competitor {
    id: string
    abbrev: string
    displayName: string
    shortDisplayName: string
    logo: string
    teamColor: string
    altColor?: string
    uid: string
    recordSummary: string
    standingSummary: string
    location: string
    links: string
    isHome: boolean
    score?: number
    winner?: boolean
    records: Record[]
    rank: number
  }
  
  export interface Record {
    name: string
    abbreviation?: string
    type: string
    summary: string
  }
  
  export interface Broadcast {
    name: string
    type: string
    market: string
  }
  
  export interface Team6 {
    id: string
    abbrev: string
    displayName: string
    shortDisplayName: string
    logo: string
    teamColor: string
    altColor?: string
    uid: string
    recordSummary: string
    standingSummary: string
    location: string
    links: string
    isHome: boolean
    score?: number
    winner?: boolean
    records: Record2[]
    rank: number
  }
  
  export interface Record2 {
    name: string
    abbreviation?: string
    type: string
    summary: string
  }
  
  export interface Format {
    regulation: Regulation
  }
  
  export interface Regulation {
    periods: number
  }
  
  export interface Tickets2 {
    summary: string
    numberAvailable: number
    links: Link[]
  }
  
  export interface Link {
    href: string
  }
  
  export interface Vnue {
    id: string
    fullName: string
    address: Address
    indoor: boolean
  }
  
  export interface Address {
    city: string
    state?: string
  }
  
  export interface Status {
    id: string
    description: string
    detail: string
    state: string
  }
  
  export interface Link2 {
    href: string
    rel: string
    text: string
    target: string
  }
  
  export interface TmInfo {
    "201"?: N201[]
    "218"?: N218[]
    "127"?: N127[]
    "2226"?: N2226[]
    "150"?: N150[]
    "2210"?: N2210[]
    "275"?: N275[]
    "2711"?: N2711[]
    "349"?: N349[]
    "2329"?: N2329[]
    "24"?: N24[]
    "2628"?: N2628[]
    "52"?: N52[]
    "59"?: N59[]
    "147"?: N147[]
    "167"?: N167[]
    "2440"?: N2440[]
    "2567"?: N2567[]
    "62"?: N62[]
    "2169"?: N2169[]
    "93"?: N93[]
    "142"?: N142[]
    "253"?: N253[]
    "254"?: N254[]
    "2305"?: N2305[]
    "2815"?: N2815[]
    "152"?: N152[]
    "2717"?: N2717[]
    "47"?: N47[]
    "164"?: N164[]
    "154"?: N154[]
    "2448"?: N2448[]
    "160"?: N160[]
    "2116"?: N2116[]
    "322"?: N322[]
    "2084"?: N2084[]
    "189"?: N189[]
    "2230"?: N2230[]
    "2115"?: N2115[]
    "2117"?: N2117[]
    "8"?: N8[]
    "2029"?: N2029[]
    "2184"?: N2184[]
    "2649"?: N2649[]
    "38"?: N38[]
    "2449"?: N2449[]
    "55"?: N55[]
    "324"?: N324[]
    "5"?: N5[]
    "2016"?: N2016[]
    "2545"?: N2545[]
    "2655"?: N2655[]
    "202"?: N202[]
    "2466"?: N2466[]
    "135"?: N135[]
    "153"?: N153[]
    "2296"?: N2296[]
    "2433"?: N2433[]
    "356"?: N356[]
    "2197"?: N2197[]
    "16"?: N16[]
    "23"?: N23[]
    "61"?: N61[]
    "228"?: N228[]
    "213"?: N213[]
    "277"?: N277[]
    "2287"?: N2287[]
    "2294"?: N2294[]
    "238"?: N238[]
    "259"?: N259[]
    "41"?: N41[]
    "120"?: N120[]
    "97"?: N97[]
    "2046"?: N2046[]
    "282"?: N282[]
    "2509"?: N2509[]
    "221"?: N221[]
    "2309"?: N2309[]
    "2083"?: N2083[]
    "2426"?: N2426[]
    "236"?: N236[]
    "2633"?: N2633[]
    "197"?: N197[]
    "2571"?: N2571[]
    "119"?: N119[]
    "2132"?: N2132[]
    "265"?: N265[]
    "2502"?: N2502[]
    "194"?: N194[]
    "2006"?: N2006[]
    "36"?: N36[]
    "251"?: N251[]
    "57"?: N57[]
    "2390"?: N2390[]
    "84"?: N84[]
    "2229"?: N2229[]
    "158"?: N158[]
    "2638"?: N2638[]
    "113"?: N113[]
    "2199"?: N2199[]
    "2026"?: N2026[]
    "2193"?: N2193[]
    "66"?: N66[]
    "155"?: N155[]
    "183"?: N183[]
    "195"?: N195[]
    "338"?: N338[]
    "2636"?: N2636[]
    "2005"?: N2005[]
    "2771"?: N2771[]
    "77"?: N77[]
    "193"?: N193[]
    "2459"?: N2459[]
    "2710"?: N2710[]
    "68"?: N68[]
    "290"?: N290[]
    "295"?: N295[]
    "2579"?: N2579[]
    "276"?: N276[]
    "2619"?: N2619[]
    "25"?: N25[]
    "302"?: N302[]
    "6"?: N6[]
    "249"?: N249[]
    "344"?: N344[]
    "2198"?: N2198[]
    "2097"?: N2097[]
    "2335"?: N2335[]
    "257"?: N257[]
    "258"?: N258[]
    "151"?: N151[]
    "2450"?: N2450[]
    "204"?: N204[]
    "304"?: N304[]
    "98"?: N98[]
    "333"?: N333[]
    "145"?: N145[]
    "231"?: N231[]
    "2306"?: N2306[]
    "2630"?: N2630[]
    "2032"?: N2032[]
    "2110"?: N2110[]
    "58"?: N58[]
    "2065"?: N2065[]
    "239"?: N239[]
    "2627"?: N2627[]
    "248"?: N248[]
    "2439"?: N2439[]
    "2393"?: N2393[]
    "2635"?: N2635[]
    "242"?: N242[]
    "2534"?: N2534[]
    "2653"?: N2653[]
    "235"?: N235[]
    "2453"?: N2453[]
    "70"?: N70[]
    "2483"?: N2483[]
    "87"?: N87[]
    "245"?: N245[]
    "130"?: N130[]
    "278"?: N278[]
    "2"?: N2[]
    "2010"?: N2010[]
    "26"?: N26[]
    "2000"?: N2000[]
    "2641"?: N2641[]
    "96"?: N96[]
    "2572"?: N2572[]
    "79"?: N79[]
    "252"?: N252[]
    "2247"?: N2247[]
    "2277"?: N2277[]
    "309"?: N309[]
    "2755"?: N2755[]
    "2348"?: N2348[]
    "2447"?: N2447[]
    "21"?: N21[]
    "2837"?: N2837[]
    "328"?: N328[]
    "2523"?: N2523[]
    "256"?: N256[]
    "2429"?: N2429[]
    "326"?: N326[]
    "2320"?: N2320[]
    "166"?: N166[]
    "2546"?: N2546[]
    "12"?: N12[]
    "9"?: N9[]
    "2751"?: N2751[]
    "264"?: N264[]
    "2692"?: N2692[]
    "30"?: N30[]
    "99"?: N99[]
    "103"?: N103[]
  }
  
  export interface N201 {
    href: string
    text: string
  }
  
  export interface N218 {
    href: string
    text: string
  }
  
  export interface N127 {
    href: string
    text: string
  }
  
  export interface N2226 {
    href: string
    text: string
  }
  
  export interface N150 {
    href: string
    text: string
  }
  
  export interface N2210 {
    href: string
    text: string
  }
  
  export interface N275 {
    href: string
    text: string
  }
  
  export interface N2711 {
    href: string
    text: string
  }
  
  export interface N349 {
    href: string
    text: string
  }
  
  export interface N2329 {
    href: string
    text: string
  }
  
  export interface N24 {
    href: string
    text: string
  }
  
  export interface N2628 {
    href: string
    text: string
  }
  
  export interface N52 {
    href: string
    text: string
  }
  
  export interface N59 {
    href: string
    text: string
  }
  
  export interface N147 {
    href: string
    text: string
  }
  
  export interface N167 {
    href: string
    text: string
  }
  
  export interface N2440 {
    href: string
    text: string
  }
  
  export interface N2567 {
    href: string
    text: string
  }
  
  export interface N62 {
    href: string
    text: string
  }
  
  export interface N2169 {
    href: string
    text: string
  }
  
  export interface N93 {
    href: string
    text: string
  }
  
  export interface N142 {
    href: string
    text: string
  }
  
  export interface N253 {
    href: string
    text: string
  }
  
  export interface N254 {
    href: string
    text: string
  }
  
  export interface N2305 {
    href: string
    text: string
  }
  
  export interface N2815 {
    href: string
    text: string
  }
  
  export interface N152 {
    href: string
    text: string
  }
  
  export interface N2717 {
    href: string
    text: string
  }
  
  export interface N47 {
    href: string
    text: string
  }
  
  export interface N164 {
    href: string
    text: string
  }
  
  export interface N154 {
    href: string
    text: string
  }
  
  export interface N2448 {
    href: string
    text: string
  }
  
  export interface N160 {
    href: string
    text: string
  }
  
  export interface N2116 {
    href: string
    text: string
  }
  
  export interface N322 {
    href: string
    text: string
  }
  
  export interface N2084 {
    href: string
    text: string
  }
  
  export interface N189 {
    href: string
    text: string
  }
  
  export interface N2230 {
    href: string
    text: string
  }
  
  export interface N2115 {
    href: string
    text: string
  }
  
  export interface N2117 {
    href: string
    text: string
  }
  
  export interface N8 {
    href: string
    text: string
  }
  
  export interface N2029 {
    href: string
    text: string
  }
  
  export interface N2184 {
    href: string
    text: string
  }
  
  export interface N2649 {
    href: string
    text: string
  }
  
  export interface N38 {
    href: string
    text: string
  }
  
  export interface N2449 {
    href: string
    text: string
  }
  
  export interface N55 {
    href: string
    text: string
  }
  
  export interface N324 {
    href: string
    text: string
  }
  
  export interface N5 {
    href: string
    text: string
  }
  
  export interface N2016 {
    href: string
    text: string
  }
  
  export interface N2545 {
    href: string
    text: string
  }
  
  export interface N2655 {
    href: string
    text: string
  }
  
  export interface N202 {
    href: string
    text: string
  }
  
  export interface N2466 {
    href: string
    text: string
  }
  
  export interface N135 {
    href: string
    text: string
  }
  
  export interface N153 {
    href: string
    text: string
  }
  
  export interface N2296 {
    href: string
    text: string
  }
  
  export interface N2433 {
    href: string
    text: string
  }
  
  export interface N356 {
    href: string
    text: string
  }
  
  export interface N2197 {
    href: string
    text: string
  }
  
  export interface N16 {
    href: string
    text: string
  }
  
  export interface N23 {
    href: string
    text: string
  }
  
  export interface N61 {
    href: string
    text: string
  }
  
  export interface N228 {
    href: string
    text: string
  }
  
  export interface N213 {
    href: string
    text: string
  }
  
  export interface N277 {
    href: string
    text: string
  }
  
  export interface N2287 {
    href: string
    text: string
  }
  
  export interface N2294 {
    href: string
    text: string
  }
  
  export interface N238 {
    href: string
    text: string
  }
  
  export interface N259 {
    href: string
    text: string
  }
  
  export interface N41 {
    href: string
    text: string
  }
  
  export interface N120 {
    href: string
    text: string
  }
  
  export interface N97 {
    href: string
    text: string
  }
  
  export interface N2046 {
    href: string
    text: string
  }
  
  export interface N282 {
    href: string
    text: string
  }
  
  export interface N2509 {
    href: string
    text: string
  }
  
  export interface N221 {
    href: string
    text: string
  }
  
  export interface N2309 {
    href: string
    text: string
  }
  
  export interface N2083 {
    href: string
    text: string
  }
  
  export interface N2426 {
    href: string
    text: string
  }
  
  export interface N236 {
    href: string
    text: string
  }
  
  export interface N2633 {
    href: string
    text: string
  }
  
  export interface N197 {
    href: string
    text: string
  }
  
  export interface N2571 {
    href: string
    text: string
  }
  
  export interface N119 {
    href: string
    text: string
  }
  
  export interface N2132 {
    href: string
    text: string
  }
  
  export interface N265 {
    href: string
    text: string
  }
  
  export interface N2502 {
    href: string
    text: string
  }
  
  export interface N194 {
    href: string
    text: string
  }
  
  export interface N2006 {
    href: string
    text: string
  }
  
  export interface N36 {
    href: string
    text: string
  }
  
  export interface N251 {
    href: string
    text: string
  }
  
  export interface N57 {
    href: string
    text: string
  }
  
  export interface N2390 {
    href: string
    text: string
  }
  
  export interface N84 {
    href: string
    text: string
  }
  
  export interface N2229 {
    href: string
    text: string
  }
  
  export interface N158 {
    href: string
    text: string
  }
  
  export interface N2638 {
    href: string
    text: string
  }
  
  export interface N113 {
    href: string
    text: string
  }
  
  export interface N2199 {
    href: string
    text: string
  }
  
  export interface N2026 {
    href: string
    text: string
  }
  
  export interface N2193 {
    href: string
    text: string
  }
  
  export interface N66 {
    href: string
    text: string
  }
  
  export interface N155 {
    href: string
    text: string
  }
  
  export interface N183 {
    href: string
    text: string
  }
  
  export interface N195 {
    href: string
    text: string
  }
  
  export interface N338 {
    href: string
    text: string
  }
  
  export interface N2636 {
    href: string
    text: string
  }
  
  export interface N2005 {
    href: string
    text: string
  }
  
  export interface N2771 {
    href: string
    text: string
  }
  
  export interface N77 {
    href: string
    text: string
  }
  
  export interface N193 {
    href: string
    text: string
  }
  
  export interface N2459 {
    href: string
    text: string
  }
  
  export interface N2710 {
    href: string
    text: string
  }
  
  export interface N68 {
    href: string
    text: string
  }
  
  export interface N290 {
    href: string
    text: string
  }
  
  export interface N295 {
    href: string
    text: string
  }
  
  export interface N2579 {
    href: string
    text: string
  }
  
  export interface N276 {
    href: string
    text: string
  }
  
  export interface N2619 {
    href: string
    text: string
  }
  
  export interface N25 {
    href: string
    text: string
  }
  
  export interface N302 {
    href: string
    text: string
  }
  
  export interface N6 {
    href: string
    text: string
  }
  
  export interface N249 {
    href: string
    text: string
  }
  
  export interface N344 {
    href: string
    text: string
  }
  
  export interface N2198 {
    href: string
    text: string
  }
  
  export interface N2097 {
    href: string
    text: string
  }
  
  export interface N2335 {
    href: string
    text: string
  }
  
  export interface N257 {
    href: string
    text: string
  }
  
  export interface N258 {
    href: string
    text: string
  }
  
  export interface N151 {
    href: string
    text: string
  }
  
  export interface N2450 {
    href: string
    text: string
  }
  
  export interface N204 {
    href: string
    text: string
  }
  
  export interface N304 {
    href: string
    text: string
  }
  
  export interface N98 {
    href: string
    text: string
  }
  
  export interface N333 {
    href: string
    text: string
  }
  
  export interface N145 {
    href: string
    text: string
  }
  
  export interface N231 {
    href: string
    text: string
  }
  
  export interface N2306 {
    href: string
    text: string
  }
  
  export interface N2630 {
    href: string
    text: string
  }
  
  export interface N2032 {
    href: string
    text: string
  }
  
  export interface N2110 {
    href: string
    text: string
  }
  
  export interface N58 {
    href: string
    text: string
  }
  
  export interface N2065 {
    href: string
    text: string
  }
  
  export interface N239 {
    href: string
    text: string
  }
  
  export interface N2627 {
    href: string
    text: string
  }
  
  export interface N248 {
    href: string
    text: string
  }
  
  export interface N2439 {
    href: string
    text: string
  }
  
  export interface N2393 {
    href: string
    text: string
  }
  
  export interface N2635 {
    href: string
    text: string
  }
  
  export interface N242 {
    href: string
    text: string
  }
  
  export interface N2534 {
    href: string
    text: string
  }
  
  export interface N2653 {
    href: string
    text: string
  }
  
  export interface N235 {
    href: string
    text: string
  }
  
  export interface N2453 {
    href: string
    text: string
  }
  
  export interface N70 {
    href: string
    text: string
  }
  
  export interface N2483 {
    href: string
    text: string
  }
  
  export interface N87 {
    href: string
    text: string
  }
  
  export interface N245 {
    href: string
    text: string
  }
  
  export interface N130 {
    href: string
    text: string
  }
  
  export interface N278 {
    href: string
    text: string
  }
  
  export interface N2 {
    href: string
    text: string
  }
  
  export interface N2010 {
    href: string
    text: string
  }
  
  export interface N26 {
    href: string
    text: string
  }
  
  export interface N2000 {
    href: string
    text: string
  }
  
  export interface N2641 {
    href: string
    text: string
  }
  
  export interface N96 {
    href: string
    text: string
  }
  
  export interface N2572 {
    href: string
    text: string
  }
  
  export interface N79 {
    href: string
    text: string
  }
  
  export interface N252 {
    href: string
    text: string
  }
  
  export interface N2247 {
    href: string
    text: string
  }
  
  export interface N2277 {
    href: string
    text: string
  }
  
  export interface N309 {
    href: string
    text: string
  }
  
  export interface N2755 {
    href: string
    text: string
  }
  
  export interface N2348 {
    href: string
    text: string
  }
  
  export interface N2447 {
    href: string
    text: string
  }
  
  export interface N21 {
    href: string
    text: string
  }
  
  export interface N2837 {
    href: string
    text: string
  }
  
  export interface N328 {
    href: string
    text: string
  }
  
  export interface N2523 {
    href: string
    text: string
  }
  
  export interface N256 {
    href: string
    text: string
  }
  
  export interface N2429 {
    href: string
    text: string
  }
  
  export interface N326 {
    href: string
    text: string
  }
  
  export interface N2320 {
    href: string
    text: string
  }
  
  export interface N166 {
    href: string
    text: string
  }
  
  export interface N2546 {
    href: string
    text: string
  }
  
  export interface N12 {
    href: string
    text: string
  }
  
  export interface N9 {
    href: string
    text: string
  }
  
  export interface N2751 {
    href: string
    text: string
  }
  
  export interface N264 {
    href: string
    text: string
  }
  
  export interface N2692 {
    href: string
    text: string
  }
  
  export interface N30 {
    href: string
    text: string
  }
  
  export interface N99 {
    href: string
    text: string
  }
  
  export interface N103 {
    href: string
    text: string
  }
  
  export interface RcpDta {
    text?: string
    description?: string
    hrf?: string
    duration?: string
    id?: string
    imgSrc?: string
    imgSrcWidth?: number
    imgSrcHeight?: number
    lang?: string
    source?: string
    headline?: string
    customMetaData?: CustomMetaData
    videoSrc?: VideoSrc
    track?: Track
  }
  
  export interface CustomMetaData {
    ContentType: string
    Edition: string
    Embedded: string
    Language: string
    League: string
    Orientation: string
    Placement: string
    PlayLocation: string
    PlayerName: string
    ReportSuite: string
    Site: string
    Sport: string
    TrackingServer: string
    VideoType: string
  }
  
  export interface VideoSrc {
    defaultSrc: string
    webSrc: string
  }
  
  export interface Track {
    coverageType: string
    leagueName: string
    sportName: string
    trackId: string
    trackName: string
  }
  
  export interface Lnescrs {
    awy: [number, number, any, any]
    hme: [number, number, any, any]
    lbls: number[]
  }
  
  export interface Tckts {
    summary?: string
    numberAvailable?: number
    link?: string
  }
  
  export interface Ldr {
    shortName: string
    name: string
    href: string
    uid: string
    position: string
    headshot?: string
    jersey: string
    stats: Stat[]
    teamAbbrev: string
    sport: string
    category: string
    teamLogo: string
    teamColor: string
  }
  
  export interface Stat {
    label: string
    value: string
  }
  
  export interface LstPly {
    athltHeadsht: string
    lstPlyTxt: string
    tmAbbrv: string
  }
  
  export interface Wthr {
    temperature: number
    conditionId: string
    weatherLink: string
  }
  
  export interface Situation {
    downAndDistance: string
    playText: string
    drivePosCurrent: string
    drivePosStart: string
    isPossessionChange: boolean
    isRedZone: boolean
    playId: string
    possesion: string
    endTeamId: string
    startTeamId: string
  }
  
  export interface Metadata {
    downDistanceText: string
  }
  
  export interface GameOdds {
    gameBetLink: string
    footerLinkId: string
    gameInfo: string
    keys: string[]
    labels: Labels
    odds: Odd[]
    providerName: string
    rightHeaderLogo: string
  }
  
  export interface Labels {
    line: string
    open: string
    pointSpread: string
    total: string
    moneyline: string
  }
  
  export interface Odd {
    line: Line
    open: Open
    pointSpread: PointSpread
    total: Total
    moneyline: Moneyline
  }
  
  export interface Line {
    primaryText: string
    primaryTextFull: string
    primaryTextFullWide: string
    primaryTextExtra: any
    primaryTextExtraWide: any
    secondaryText: string
    secondaryTextFull: string
    secondaryTextExtra: any
    link: string
    uid: string
  }
  
  export interface Open {
    primary: string
    secondary: string
  }
  
  export interface PointSpread {
    primary: string
    secondary: string
    link: string
    linkId: string
    mktTxt: string
  }
  
  export interface Total {
    primary: string
    secondary: string
    link: string
    linkId: string
    mktTxt: string
  }
  
  export interface Moneyline {
    primary: string
    link: string
    linkId: string
    mktTxt: string
  }
  
  export interface BtngMrkt {
    label: string
    labelShort: string
    displayValue: string
    shortDisplayValue: any
    secondaryText: string
  }
  
  export interface Highlight {
    id: number
    source: string
    headline: string
    thumbnail: string
    duration: number
    tracking: Tracking
    deviceRestrictions: DeviceRestrictions
    links: Links
    href: string
  }
  
  export interface Tracking {
    sportName: string
    leagueName: string
    coverageType: string
    trackingName: string
    trackingId: string
  }
  
  export interface DeviceRestrictions {
    type: string
    devices: string[]
  }
  
  export interface Links {
    web: Web
    mobile: Mobile7
    source: Source2
    sportscenter: Sportscenter
  }
  
  export interface Web {
    href: string
    self: Self
    seo: Seo
    dsi?: Dsi2
  }
  
  export interface Self {
    href: string
    dsi?: Dsi
  }
  
  export interface Dsi {
    href: string
  }
  
  export interface Seo {
    href: string
  }
  
  export interface Dsi2 {
    href: string
  }
  
  export interface Mobile7 {
    href: string
    source: Source
    alert: Alert
    streaming: Streaming
    progressiveDownload: ProgressiveDownload
  }
  
  export interface Source {
    href: string
  }
  
  export interface Alert {
    href: string
  }
  
  export interface Streaming {
    href: string
  }
  
  export interface ProgressiveDownload {
    href: string
  }
  
  export interface Source2 {
    href: string
    mezzanine: Mezzanine
    flash: Flash
    hds: Hds
    HLS: Hls
    HD: Hd2
    full: Full
  }
  
  export interface Mezzanine {
    href: string
  }
  
  export interface Flash {
    href: string
  }
  
  export interface Hds {
    href: string
  }
  
  export interface Hls {
    href: string
    HD: Hd
  }
  
  export interface Hd {
    href: string
  }
  
  export interface Hd2 {
    href: string
  }
  
  export interface Full {
    href: string
  }
  
  export interface Sportscenter {
    href: string
  }
  
  export interface CrntSzn {
    year: number
    seasonType: number
    name: string
    abbreviation: string
    endDate: string
  }
  
  export interface MdiaLst {
    title: string
    footer: string
  }
  
  export interface SeasonList {
    "2002": N2002
    "2003": N2003
    "2004": N2004
    "2005": N20052
    "2006": N20062
    "2007": N2007
    "2008": N2008
    "2009": N2009
    "2010": N20102
    "2011": N2011
    "2012": N2012
    "2013": N2013
    "2014": N2014
    "2015": N2015
    "2016": N20162
    "2017": N2017
    "2018": N2018
    "2019": N2019
    "2020": N2020
    "2021": N2021
    "2022": N2022
    "2023": N2023
    "2024": N2024
  }
  
  export interface N2002 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type
    weeks: Week[]
    year: number
  }
  
  export interface Type {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups
    weeks: Weeks
    slug: string
  }
  
  export interface Groups {
    $ref: string
  }
  
  export interface Weeks {
    $ref: string
  }
  
  export interface Week {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2003 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type2
    weeks: Week2[]
    year: number
  }
  
  export interface Type2 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups2
    weeks: Weeks2
    slug: string
  }
  
  export interface Groups2 {
    $ref: string
  }
  
  export interface Weeks2 {
    $ref: string
  }
  
  export interface Week2 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2004 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type3
    weeks: Week3[]
    year: number
  }
  
  export interface Type3 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups3
    weeks: Weeks3
    slug: string
  }
  
  export interface Groups3 {
    $ref: string
  }
  
  export interface Weeks3 {
    $ref: string
  }
  
  export interface Week3 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N20052 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type4
    weeks: Week4[]
    year: number
  }
  
  export interface Type4 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups4
    weeks: Weeks4
    slug: string
  }
  
  export interface Groups4 {
    $ref: string
  }
  
  export interface Weeks4 {
    $ref: string
  }
  
  export interface Week4 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N20062 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type5
    weeks: Week5[]
    year: number
  }
  
  export interface Type5 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups5
    weeks: Weeks5
    slug: string
  }
  
  export interface Groups5 {
    $ref: string
  }
  
  export interface Weeks5 {
    $ref: string
  }
  
  export interface Week5 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2007 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type6
    weeks: Week6[]
    year: number
  }
  
  export interface Type6 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups6
    weeks: Weeks6
    slug: string
  }
  
  export interface Groups6 {
    $ref: string
  }
  
  export interface Weeks6 {
    $ref: string
  }
  
  export interface Week6 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2008 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type7
    weeks: Week7[]
    year: number
  }
  
  export interface Type7 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups7
    weeks: Weeks7
    slug: string
  }
  
  export interface Groups7 {
    $ref: string
  }
  
  export interface Weeks7 {
    $ref: string
  }
  
  export interface Week7 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2009 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type8
    weeks: Week8[]
    year: number
  }
  
  export interface Type8 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups8
    weeks: Weeks8
    slug: string
  }
  
  export interface Groups8 {
    $ref: string
  }
  
  export interface Weeks8 {
    $ref: string
  }
  
  export interface Week8 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N20102 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type9
    weeks: Week9[]
    year: number
  }
  
  export interface Type9 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups9
    weeks: Weeks9
    slug: string
  }
  
  export interface Groups9 {
    $ref: string
  }
  
  export interface Weeks9 {
    $ref: string
  }
  
  export interface Week9 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2011 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type10
    weeks: Week10[]
    year: number
  }
  
  export interface Type10 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups10
    weeks: Weeks10
    slug: string
  }
  
  export interface Groups10 {
    $ref: string
  }
  
  export interface Weeks10 {
    $ref: string
  }
  
  export interface Week10 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2012 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type11
    weeks: Week11[]
    year: number
  }
  
  export interface Type11 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups11
    weeks: Weeks11
    slug: string
  }
  
  export interface Groups11 {
    $ref: string
  }
  
  export interface Weeks11 {
    $ref: string
  }
  
  export interface Week11 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2013 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type12
    weeks: Week12[]
    year: number
  }
  
  export interface Type12 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups12
    weeks: Weeks12
    slug: string
  }
  
  export interface Groups12 {
    $ref: string
  }
  
  export interface Weeks12 {
    $ref: string
  }
  
  export interface Week12 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2014 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type13
    weeks: Week13[]
    year: number
  }
  
  export interface Type13 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups13
    weeks: Weeks13
    slug: string
  }
  
  export interface Groups13 {
    $ref: string
  }
  
  export interface Weeks13 {
    $ref: string
  }
  
  export interface Week13 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2015 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type14
    weeks: Week14[]
    year: number
  }
  
  export interface Type14 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups14
    weeks: Weeks14
    slug: string
  }
  
  export interface Groups14 {
    $ref: string
  }
  
  export interface Weeks14 {
    $ref: string
  }
  
  export interface Week14 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N20162 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type15
    weeks: Week15[]
    year: number
  }
  
  export interface Type15 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups15
    weeks: Weeks15
    slug: string
  }
  
  export interface Groups15 {
    $ref: string
  }
  
  export interface Weeks15 {
    $ref: string
  }
  
  export interface Week15 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2017 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type16
    weeks: Week16[]
    year: number
  }
  
  export interface Type16 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups16
    weeks: Weeks16
    slug: string
  }
  
  export interface Groups16 {
    $ref: string
  }
  
  export interface Weeks16 {
    $ref: string
  }
  
  export interface Week16 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2018 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type17
    weeks: Week17[]
    year: number
  }
  
  export interface Type17 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups17
    weeks: Weeks17
    slug: string
  }
  
  export interface Groups17 {
    $ref: string
  }
  
  export interface Weeks17 {
    $ref: string
  }
  
  export interface Week17 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2019 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type18
    weeks: Week18[]
    year: number
  }
  
  export interface Type18 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups18
    weeks: Weeks18
    slug: string
  }
  
  export interface Groups18 {
    $ref: string
  }
  
  export interface Weeks18 {
    $ref: string
  }
  
  export interface Week18 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2020 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type19
    weeks: Week19[]
    year: number
  }
  
  export interface Type19 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups19
    weeks: Weeks19
    slug: string
  }
  
  export interface Groups19 {
    $ref: string
  }
  
  export interface Weeks19 {
    $ref: string
  }
  
  export interface Week19 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2021 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type20
    weeks: Week20[]
    year: number
  }
  
  export interface Type20 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups20
    weeks: Weeks20
    slug: string
  }
  
  export interface Groups20 {
    $ref: string
  }
  
  export interface Weeks20 {
    $ref: string
  }
  
  export interface Week20 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2022 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type21
    weeks: Week21[]
    year: number
  }
  
  export interface Type21 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups21
    weeks: Weeks21
    slug: string
  }
  
  export interface Groups21 {
    $ref: string
  }
  
  export interface Weeks21 {
    $ref: string
  }
  
  export interface Week21 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2023 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type22
    weeks: Week22[]
    year: number
  }
  
  export interface Type22 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups22
    weeks: Weeks22
    slug: string
  }
  
  export interface Groups22 {
    $ref: string
  }
  
  export interface Weeks22 {
    $ref: string
  }
  
  export interface Week22 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
  }
  
  export interface N2024 {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type23
    weeks: Week24[]
    year: number
  }
  
  export interface Type23 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups23
    week: Week23
    weeks: Weeks23
    slug: string
  }
  
  export interface Groups23 {
    $ref: string
  }
  
  export interface Week23 {
    $ref: string
    number: number
    startDate: string
    endDate: string
    text: string
    rankings: Rankings
    qbr: Qbr
  }
  
  export interface Rankings {
    $ref: string
  }
  
  export interface Qbr {
    $ref: string
  }
  
  export interface Weeks23 {
    $ref: string
  }
  
  export interface Week24 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
    dateRange: string
  }
  
  export interface Season {
    displayName: string
    endDate: string
    startDate: string
    seasonType: number
    type: Type24
    weeks: Week26[]
    year: number
  }
  
  export interface Type24 {
    $ref: string
    id: string
    type: number
    name: string
    abbreviation: string
    year: number
    startDate: string
    endDate: string
    hasGroups: boolean
    hasStandings: boolean
    hasLegs: boolean
    groups: Groups24
    week: Week25
    weeks: Weeks24
    slug: string
  }
  
  export interface Groups24 {
    $ref: string
  }
  
  export interface Week25 {
    $ref: string
    number: number
    startDate: string
    endDate: string
    text: string
    rankings: Rankings2
    qbr: Qbr2
  }
  
  export interface Rankings2 {
    $ref: string
  }
  
  export interface Qbr2 {
    $ref: string
  }
  
  export interface Weeks24 {
    $ref: string
  }
  
  export interface Week26 {
    text: string
    label: string
    startDate: string
    endDate: string
    seasonType: number
    weekNumber: number
    year: number
    url: string
    isActive: boolean
    dateRange: string
  }
  
  export interface CalendarData {
    date: string
    dateRange: DateRange
    calendarLastDay: string
    dateFormat: string
    lastBlackListDay: LastBlackListDay
    calendarDateRange: CalendarDateRange
  }
  
  export interface DateRange {
    startDate: string
    endDate: string
  }
  
  export interface LastBlackListDay {
    label: string
    value: string
    startDate: string
    endDate: string
    entries: Entry[]
  }
  
  export interface Entry {
    label: string
    alternateLabel: string
    detail: string
    value: string
    startDate: string
    endDate: string
  }
  
  export interface CalendarDateRange {
    startDate: string
    endDate: string
  }
  
  export interface Calendar {
    label: string
    value: string
    startDate: string
    endDate: string
    entries: Entry2[]
  }
  
  export interface Entry2 {
    label: string
    alternateLabel: string
    detail: string
    value: string
    startDate: string
    endDate: string
  }
  
  export interface AutoUpdate {
    mode: string
    timeout: number
    enabled: boolean
    topic: string
  }
  
  export interface Nws {
    header: string
    articles: Article2[]
    link: string
    text: string
  }
  
  export interface Article2 {
    headline: string
    byLine: string
    description: string
    image: string
    premium: boolean
    published: string
    logoSrc: string
    images: Image[]
    link: string
  }
  
  export interface Image {
    src: string
    alt: string
  }
  
  export interface Vid {
    ad: Ad2
    cerebroId: string
    description: string
    duration: string
    id: string
    imgSrc: string
    imgSrcWidth: number
    imgSrcHeight: number
    imgSrcFull: string
    lang: string
    expirationDate: string
    lastModified: string
    publishDate: string
    source: string
    title: string
    headline: string
    syndicatable: boolean
    customMetaData: CustomMetaData2
    videoSrc: VideoSrc2
    track: Track2
  }
  
  export interface Ad2 {
    sport: string
    bundle: string
  }
  
  export interface CustomMetaData2 {
    ContentType: string
    Edition: string
    Embedded: string
    Language: string
    League: string
    Orientation: string
    Placement: string
    PlayLocation: string
    PlayerName: string
    ReportSuite: string
    Site: string
    Sport: string
    TrackingServer: string
    VideoType: string
  }
  
  export interface VideoSrc2 {
    defaultSrc: string
    webSrc: string
  }
  
  export interface Track2 {
    coverageType: string
    leagueName: string
    sportName: string
    trackId: string
    trackName: string
  }
  
  export interface Qcklnk {
    button: Button
    links: Link3[]
    title: any
    titleImage: TitleImage
  }
  
  export interface Button {
    text: string
    href: string
    className: string
  }
  
  export interface Link3 {
    extrnl: boolean
    href: string
    icon: string
    img: boolean
    title: string
  }
  
  export interface TitleImage {
    src: string
    alt: any
    href: string
  }
  
  export interface RequestedDates {
    year: number
    seasontype: number
    week: number
  }
  
  export interface Atrbutn {
    pvdrLnk: string
    msg: string
    geoWhtLst: string[]
  }
  
  export interface Promo {
    link: string
    mobileText: string
    text: string
    icon: string
  }
  
  export interface Conference {
    value: string
    label: string
    id: string
    isDefault?: boolean
    url?: string
    isConference?: boolean
  }
  
  export interface Transition {
    reload: Reload
  }
  
  export interface Reload {
    rules: Rule[]
  }
  
  export interface Rule {
    priority: number
    retValue: boolean
    conditions: Condition[]
  }
  
  export interface Condition {
    type: string
    path: string
    val: boolean
  }
  
  export interface Analytics5 {
    SWID: string
    accountID: string
    site: string
    section: string
    categories: string[]
    contentType: string
    channel: string
    pageName: string
    gameInfo: string
    gameState: string
    userInfo: UserInfo
    lang: string
    country: string
    countryRegion: string
    pageURL: string
    vendors: any[]
    teamName: string
    edition: string
    path: string
    sport: string
    league: string
    siteSection: string
  }
  
  export interface UserInfo {
    insider: string
    premium: string
    year: string
    regType: string
    status: string
  }
  
  export interface Ads3 {
    level: string
    kvps: Kvp3[]
  }
  
  export interface Kvp3 {
    name: string
    value: string
  }
  
  export interface Outbrain14 {
    id: string
  }
  
  export interface Taboola15 {
    network: string
    webviewNetwork: string
    mode: string
    type: string
    targetType: string
    "right-rail": RightRail2
    pageTypeOverrides: PageTypeOverrides2
  }
  
  export interface RightRail2 {
    type: string
    mode: string
    targetType: string
  }
  
  export interface PageTypeOverrides2 {
    article: Article3
    preview: Preview2
    recap: Recap3
    gamepackage: Gamepackage3
    longform: Longform2
    clubhouse: Clubhouse3
    stats: Stats2
  }
  
  export interface Article3 {
    mode: string
    webviewMode: string
    type: string
    targetType: string
  }
  
  export interface Preview2 {
    mode: string
    webviewMode: string
    type: string
    targetType: string
  }
  
  export interface Recap3 {
    mode: string
    webviewMode: string
    type: string
    targetType: string
  }
  
  export interface Gamepackage3 {
    mode: string
    webviewMode: string
    type: string
    targetType: string
  }
  
  export interface Longform2 {
    mode: string
    type: string
    targetType: string
  }
  
  export interface Clubhouse3 {
    mode: string
    type: string
    targetType: string
  }
  
  export interface Stats2 {
    mode: string
    type: string
    targetType: string
  }
  
  export interface AdProviders {
    gpt: boolean
    taboola: boolean
    video: boolean
  }
  
  export interface Request {
    headers: Headers
    httpVersion: string
    method: string
    url: string
    vary: Vary
  }
  
  export interface Headers {}
  
  export interface Vary {
    host: string
    cached: boolean
    path: string
    region: string
    "forwarded-proto": string
    device: string
    country: string
    edition: string
    "edition-view": string
    userab: string
    dtcAuth: string
    secure: boolean
  }
  
  export interface Viewport {
    width: number
    height: number
  }
  
  export interface User {}
  