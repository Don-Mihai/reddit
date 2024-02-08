interface INav {
    name: string;
    url: string;
    src?: string;
}

export const mainNav = [
    { name: 'Home', url: 'https://www.reddit.com/?feed=home', src: require('./img/home.png') },
    { name: 'Popular', url: 'https://www.reddit.com/r/popular/', src: require('./img/arrow.png') },
];

export const games: INav[] = [
    { name: 'Valheim', url: 'https://www.reddit.com/t/valheim/' },
    { name: 'Genshin Impact', url: 'https://www.reddit.com/t/genshin_impact/' },
    { name: 'Minecraft', url: 'https://www.reddit.com/t/minecraft/' },
    { name: 'Pokimane', url: 'https://www.reddit.com/t/pokimane/' },
    { name: 'Halo Infinite', url: 'https://www.reddit.com/t/halo_infinite/' },
    { name: 'Call of Duty: Warzone', url: 'https://www.reddit.com/t/call_of_duty_warzone/' },
    { name: 'Path of Exile', url: 'https://www.reddit.com/t/path_of_exile/' },
    { name: 'Hollow Knight: Silksong', url: 'https://www.reddit.com/t/hollow_knight_silksong/' },
    { name: 'Escape from Tarkov', url: 'https://www.reddit.com/t/escape_from_tarkov/' },
    { name: 'Watch Dogs: Legion', url: 'https://www.reddit.com/t/watch_dogs_legion/' },
];

export const sports = [
    { name: 'NFL', url: 'https://www.reddit.com/t/nfl/' },
    { name: 'NBA', url: 'https://www.reddit.com/t/nba/' },
    { name: 'Megan Anderson', url: 'https://www.reddit.com/t/megan_anderson/' },
    { name: 'Atlanta Hawks', url: 'https://www.reddit.com/t/atlanta_hawks/' },
    { name: 'Los Angeles Lakers', url: 'https://www.reddit.com/t/los_angeles_lakers/' },
    { name: 'Boston Celtics', url: 'https://www.reddit.com/t/boston_celtics/' },
    { name: 'Arsenal F.C.', url: 'https://www.reddit.com/t/arsenal_fc/' },
    { name: 'Philadelphia 76ers', url: 'https://www.reddit.com/t/philadelphia_76ers/' },
    { name: 'Premier League', url: 'https://www.reddit.com/t/premier_league/' },
    { name: 'UFC', url: 'https://www.reddit.com/t/ufc/' },
];

export const businesses = [
    { name: 'GameStop', url: 'https://www.reddit.com/t/gamestop/' },
    { name: 'Moderna', url: 'https://www.reddit.com/t/moderna/' },
    { name: 'Pfizer', url: 'https://www.reddit.com/t/pfizer/' },
    { name: 'Johnson & Johnson', url: 'https://www.reddit.com/t/johnson_johnson/' },
    { name: 'AstraZeneca', url: 'https://www.reddit.com/t/astrazeneca/' },
    { name: 'Walgreens', url: 'https://www.reddit.com/t/walgreens/' },
    { name: 'Best Buy', url: 'https://www.reddit.com/t/best_buy/' },
    { name: 'Novavax', url: 'https://www.reddit.com/t/novavax/' },
    { name: 'SpaceX', url: 'https://www.reddit.com/t/spacex/' },
    { name: 'Tesla', url: 'https://www.reddit.com/t/tesla/' },
];

export const cryptos = [
    { name: 'Cardano', url: 'https://www.reddit.com/t/cardano/' },
    { name: 'Dogecoin', url: 'https://www.reddit.com/t/dogecoin/' },
    { name: 'Algorand', url: 'https://www.reddit.com/t/algorand/' },
    { name: 'Bitcoin', url: 'https://www.reddit.com/t/bitcoin/' },
    { name: 'Litecoin', url: 'https://www.reddit.com/t/litecoin/' },
    { name: 'Basic Attention Token', url: 'https://www.reddit.com/t/basic_attention_token/' },
    { name: 'Bitcoin Cash', url: 'https://www.reddit.com/t/bitcoin_cash/' },
];

export const televisions = [
    { name: 'The Real Housewives of Atlanta', url: 'https://www.reddit.com/t/the_real_housewives_of_atlanta/' },
    { name: 'The Bachelor', url: 'https://www.reddit.com/t/the_bachelor/' },
    { name: 'Sister Wives', url: 'https://www.reddit.com/t/sister_wives/' },
    { name: '90 Day Fiance', url: 'https://www.reddit.com/t/90_day_fiance/' },
    { name: 'Wife Swap', url: 'https://www.reddit.com/t/wife_swap/' },
    { name: 'The Amazing Race Australia', url: 'https://www.reddit.com/t/the_amazing_race_australia/' },
    { name: 'Married at First Sight', url: 'https://www.reddit.com/t/married_at_first_sight/' },
    { name: 'The Real Housewives of Dallas', url: 'https://www.reddit.com/t/the_real_housewives_of_dallas/' },
    { name: 'My 600-lb Life', url: 'https://www.reddit.com/t/my_600lb_life/' },
    { name: 'Last Week Tonight with John Oliver', url: 'https://www.reddit.com/t/last_week_tonight_with_john_oliver/' },
];

export const celebrities = [
    { name: 'Kim Kardashian', url: 'https://www.reddit.com/t/kim_kardashian/' },
    { name: 'Doja Cat', url: 'https://www.reddit.com/t/doja_cat/' },
    { name: 'Iggy Azalea', url: 'https://www.reddit.com/t/iggy_azalea/' },
    { name: 'Jamie Lee Curtis', url: 'https://www.reddit.com/t/jamie_lee_curtis/' },
    { name: 'Natalie Portman', url: 'https://www.reddit.com/t/natalie_portman/' },
    { name: 'Henry Cavill', url: 'https://www.reddit.com/t/henry_cavill/' },
    { name: 'Millie Bobby Brown', url: 'https://www.reddit.com/t/millie_bobby_brown/' },
    { name: 'Tom Hiddleston', url: 'https://www.reddit.com/t/tom_hiddleston/' },
    { name: 'Keanu Reeves', url: 'https://www.reddit.com/t/keanu_reeves/' },
];

export const subTopics: INav[] = [
    { name: 'Animals & Pets', url: 'https://www.reddit.com/t/animals_and_pets/', src: require('./img/pets.png') },
    { name: 'Anime', url: 'https://www.reddit.com/t/anime/', src: require('./img/anime.png') },
    { name: 'Art', url: 'https://www.reddit.com/t/art/', src: require('./img/art.png') },
    { name: 'Cars and Motor Vehicles', url: 'https://www.reddit.com/t/cars_and_motor_vehicles/', src: require('./img/wheel.png') },
    { name: 'Crafts and DIY', url: 'https://www.reddit.com/t/crafts_and_diy/', src: require('./img/tractor.png') },
    { name: 'Culture, Race, and Ethnicity', url: 'https://www.reddit.com/t/culture_race_and_ethnicity/', src: require('./img/race.png') },
    { name: 'Ethics & Philosophy', url: 'https://www.reddit.com/t/ethics_and_philosophy/', src: require('./img/philosophy.png') },
    { name: 'Fashion', url: 'https://www.reddit.com/t/fashion/', src: require('./img/fashion.png') },
    { name: 'History', url: 'https://www.reddit.com/t/history/', src: require('./img/history.png') },
    { name: 'Law', url: 'https://www.reddit.com/t/law/', src: require('./img/law.png') },
    { name: 'Learning and Education', url: 'https://www.reddit.com/t/learning_and_education/', src: require('./img/education.png') },
    { name: 'Military', url: 'https://www.reddit.com/t/military/', src: require('./img/military.png') },
    { name: 'Movie', url: 'https://www.reddit.com/t/movie/', src: require('./img/movie.png') },
    { name: 'Music', url: 'https://www.reddit.com/t/music/', src: require('./img/music.png') },
    { name: 'Place', url: 'https://www.reddit.com/t/place/', src: require('./img/place.png') },
    { name: 'Podcasts and Streamers', url: 'https://www.reddit.com/t/podcasts_and_streamers/', src: require('./img/podcast.png') },
    { name: 'Politics', url: 'https://www.reddit.com/t/politics/', src: require('./img/politics.png') },
    { name: 'Programming', url: 'https://www.reddit.com/t/programming/', src: require('./img/programming.png') },
    { name: 'Reading, Writing, and Literature', url: 'https://www.reddit.com/t/reading_writing_and_literature/', src: require('./img/book.png') },
    { name: 'Religion and Spirituality', url: 'https://www.reddit.com/t/religion_and_spirituality/', src: require('./img/candle.png') },
    { name: 'Science', url: 'https://www.reddit.com/t/science/', src: require('./img/flask.png') },
    { name: 'Technology', url: 'https://www.reddit.com/t/technology/', src: require('./img/technology.png') },
    { name: 'Travel', url: 'https://www.reddit.com/t/travel/', src: require('./img/travel.png') },
];

export const resources = [
    { name: 'About Reddit', url: 'https://www.redditinc.com/', src: require('./img/about.png') },
    {
        name: 'Advertise',
        url: 'https://accounts.reddit.com/adsregister?dest=https%3A%2F%2Fads.reddit.com%2F&referrer=https%3A%2F%2Fwww.reddit.com%2F&utm_source=web3x_consumer&utm_name=left_nav_cta',
        src: require('./img/advertise.png'),
    },
    { name: 'Help', url: 'https://support.reddithelp.com/hc/en-us', src: require('./img/help.png') },
    { name: 'Blog', url: 'https://www.redditinc.com/blog', src: require('./img/blog.png') },
    { name: 'Careers', url: 'https://www.redditinc.com/careers', src: require('./img/career.png') },
    { name: 'Press', url: 'https://www.redditinc.com/press', src: require('./img/micro.png') },
];

export const subResources = [
    { name: 'Communities', url: 'https://www.reddit.com/best/communities/1/', src: require('./img/communities.png') },
    {
        name: 'Best of Reddit',
        url: 'https://www.reddit.com/posts/2023/',
        src: require('./img/hourglass.png'),
    },
    { name: 'Topics', url: 'https://www.reddit.com/topics/a-1/', src: require('./img/topics.png') },
    { name: 'Content Policy', url: 'https://www.redditinc.com/policies/content-policy', src: require('./img/content.png') },
    { name: 'Privacy Policy', url: 'https://www.reddit.com/policies/privacy-policy', src: require('./img/privacy.png') },
    { name: 'User Agreement', url: 'https://www.redditinc.com/policies/user-agreement', src: require('./img/agree.png') },
];

export const languages = [
    { name: 'English / Global', url: 'https://www.reddit.com/' },
    { name: 'Deutsch', url: 'https://www.reddit.com/de/' },
    { name: 'Español', url: 'https://www.reddit.com/es/' },
    { name: 'Français', url: 'https://www.reddit.com/fr/' },
    { name: 'Italiano', url: 'https://www.reddit.com/it/' },
    { name: 'Português', url: 'https://www.reddit.com/pt/' },
];

export interface INavState {
    open: boolean;
    openTopMenu: boolean;
    openSubGame: boolean;
    openSubSport: boolean;
    openSubBusiness: boolean;
    openSubCrypto: boolean;
    openSubTv: boolean;
    openSubCelebrity: boolean;
    openResource: boolean;
    openLang: boolean;
    openSubTopics: boolean;
    openSubResources: boolean;
}

export const initialState: INavState = {
    open: true,
    openTopMenu: true,
    openSubGame: false,
    openSubSport: false,
    openSubBusiness: false,
    openSubCrypto: false,
    openSubTv: false,
    openSubCelebrity: false,
    openResource: true,
    openLang: true,
    openSubTopics: false,
    openSubResources: false,
};

export const Topics = [
    {
        name: 'HOME',
        url: '',
        imgUrl: require('./img/home.png'),
    },
    {
        name: 'POPULAR',
        url: '',
        imgUrl: require('./img/arrow.png'),
    },
    {
        name: 'TOPICS',
        url: '',
        imgUrl: '',
        objKey: 'open',
        sublinks: [
            { name: 'Gaming', url: '', imgUrl: require('./img/joystick.png'), objKey: 'openSubGame', sublinks: games },
            { name: 'Sports', url: '', imgUrl: require('./img/tennisball.png'), objKey: 'openSubSport', sublinks: sports },
            { name: 'Business', url: '', imgUrl: require('./img/graphics.png'), objKey: 'openSubBusiness', sublinks: businesses },
            { name: 'Crypto', url: '', imgUrl: require('./img/crypto.png'), objKey: 'openSubCrypto', sublinks: cryptos },
            { name: 'Television', url: '', imgUrl: require('./img/tv.png'), objKey: 'openSubTv', sublinks: televisions },
            { name: 'Celebrity', url: '', imgUrl: require('./img/star.png'), objKey: 'openSubCelebrity', sublinks: celebrities },
        ],
    },
    {
        name: 'RESOURCES',
        url: '',
        imgUrl: '',
        objKey: 'openResource',
        sublinks: resources,
    },
    {
        name: 'POPULAR POSTS',
        url: '',
        imgUrl: '',
        objKey: 'openLang',
        sublinks: languages,
    },
];
