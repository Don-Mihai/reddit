export interface IPopular {
  title?: string;
  members?: string;
  url?: string;
  imgUrl?: string;
  src?: string;
  sublinks?: IPopular[];
  objKey?: string;
  isBottomMenu?: boolean;
}

export const mainPopularGroups: IPopular[] = [
  { title: 'r/explainlikeimfive', url: 'https://www.reddit.com/r/explainlikeimfive/', members: '22,780,368 members', imgUrl: require('./Images/eli5.png') },
  { title: 'r/IAmA', url: 'https://www.reddit.com/r/IAmA/', members: '22,572,803 members', imgUrl: require('./Images/ama.png') },
  { title: 'r/classicwow', url: 'https://www.reddit.com/r/classicwow/', members: '59,6293 members', imgUrl: require('./Images/wow.png') },
  { title: 'r/Instagram', url: 'https://www.reddit.com/r/Instagram/', members: '844,209 members', imgUrl: require('./Images/instagram.png') },
  { title: 'r/NintendoSwitch', url: 'https://www.reddit.com/r/NintendoSwitch/', members: '5,882,263 memebrs', imgUrl: require('./Images/nintendo.jpg') },
];

export const subPopularGroups: IPopular[] = [
  { title: 'r/Tinder', url: 'https://www.reddit.com/r/Tinder/', members: '5,922,826 members', imgUrl: require('./Images/tinder.png') },
  { title: 'r/todayilearned', url: 'https://www.reddit.com/r/todayilearned/', members: '35,341,350 ', imgUrl: require('./Images/learned.png') },
  { title: 'r/iphone', url: 'https://www.reddit.com/r/iphone/', members: '3,968,022 members', imgUrl: require('./Images/iphone.jpg') },
  { title: 'r/ffxiv', url: 'https://www.reddit.com/r/ffxiv/', members: '975,316 members', imgUrl: require('./Images/fantasy.png') },
  { title: 'r/nfl', url: 'https://www.reddit.com/r/nfl/', members: '7,705,104 members', imgUrl: require('./Images/nfl.jpg') },
  { title: 'r/Showerthoughts', url: 'https://www.reddit.com/r/Showerthoughts/', members: 'members 30301916', imgUrl: require('./Images/thoughts.png') },
  { title: 'r/Music', url: 'https://www.reddit.com/r/Music/', members: '33,287,094 members', imgUrl: require('./Images/music.png') },
  { title: 'r/FORTnITE', url: 'https://www.reddit.com/r/FORTnITE/', members: '646,120 members', imgUrl: require('./Images/fortnite.png') },
  { title: 'r/DotA2', url: 'https://www.reddit.com/r/DotA2/', members: '1,372,212 members', imgUrl: require('./Images/dota.png') },
  { title: 'r/SquaredCircle', url: 'https://www.reddit.com/r/SquaredCircle/', members: '884,084 members', imgUrl: require('./Images/squaredcircle.png') },
  { title: 'r/keto', url: 'https://www.reddit.com/r/keto/', members: '3,460,672 members', imgUrl: require('./Images/keto.png') },
  { title: 'r/Frugal', url: 'https://www.reddit.com/r/Frugal/', members: '4,379,155 members', imgUrl: require('./Images/frugal.jpg') },
  { title: 'r/Overwatch', url: 'https://www.reddit.com/r/Overwatch/', members: '5,468,454 members', imgUrl: require('./Images/overwatch.jpg') },
  { title: 'r/piercing', url: 'https://www.reddit.com/r/piercing/', members: '730,927 members', imgUrl: require('./Images/piercing.png') },
  { title: 'r/worldnews', url: 'https://www.reddit.com/r/worldnews/', members: '35,847,695 members', imgUrl: require('./Images/worldnews.png') },
];

export interface IPopularState {
  open: boolean;
  openSubPopular: boolean;
  isBottomMenu?: boolean;
}

export const initialState: IPopularState = {
  open: true,
  openSubPopular: false,
};

export const Populars = [
  { title: 'r/explainlikeimfive', url: 'https://www.reddit.com/r/explainlikeimfive/', members: '22,780,368 members', imgUrl: require('./Images/eli5.png') },
  { title: 'r/IAmA', url: 'https://www.reddit.com/r/IAmA/', members: '22,572,803 members', imgUrl: require('./Images/ama.png') },
  { title: 'r/classicwow', url: 'https://www.reddit.com/r/classicwow/', members: '59,6293 members', imgUrl: require('./Images/wow.png') },
  { title: 'r/Instagram', url: 'https://www.reddit.com/r/Instagram/', members: '844,209 members', imgUrl: require('./Images/instagram.png') },
  { title: 'r/NintendoSwitch', url: 'https://www.reddit.com/r/NintendoSwitch/', members: '5,882,263 memebrs', imgUrl: require('./Images/nintendo.jpg') },
  {
    objKey: 'openSubPopular',
    isBottomMenu: true,
    sublinks: [
      { title: 'r/Tinder', url: 'https://www.reddit.com/r/Tinder/', members: '5,922,826 members', imgUrl: require('./Images/tinder.png') },
      { title: 'r/todayilearned', url: 'https://www.reddit.com/r/todayilearned/', members: '35,341,350 ', imgUrl: require('./Images/learned.png') },
      { title: 'r/iphone', url: 'https://www.reddit.com/r/iphone/', members: '3,968,022 members', imgUrl: require('./Images/iphone.jpg') },
      { title: 'r/ffxiv', url: 'https://www.reddit.com/r/ffxiv/', members: '975,316 members', imgUrl: require('./Images/fantasy.png') },
      { title: 'r/nfl', url: 'https://www.reddit.com/r/nfl/', members: '7,705,104 members', imgUrl: require('./Images/nfl.jpg') },
      { title: 'r/Showerthoughts', url: 'https://www.reddit.com/r/Showerthoughts/', members: 'members 30301916', imgUrl: require('./Images/thoughts.png') },
      { title: 'r/Music', url: 'https://www.reddit.com/r/Music/', members: '33,287,094 members', imgUrl: require('./Images/music.png') },
      { title: 'r/FORTnITE', url: 'https://www.reddit.com/r/FORTnITE/', members: '646,120 members', imgUrl: require('./Images/fortnite.png') },
      { title: 'r/DotA2', url: 'https://www.reddit.com/r/DotA2/', members: '1,372,212 members', imgUrl: require('./Images/dota.png') },
      { title: 'r/SquaredCircle', url: 'https://www.reddit.com/r/SquaredCircle/', members: '884,084 members', imgUrl: require('./Images/squaredcircle.png') },
      { title: 'r/keto', url: 'https://www.reddit.com/r/keto/', members: '3,460,672 members', imgUrl: require('./Images/keto.png') },
      { title: 'r/Frugal', url: 'https://www.reddit.com/r/Frugal/', members: '4,379,155 members', imgUrl: require('./Images/frugal.jpg') },
      { title: 'r/Overwatch', url: 'https://www.reddit.com/r/Overwatch/', members: '5,468,454 members', imgUrl: require('./Images/overwatch.jpg') },
      { title: 'r/piercing', url: 'https://www.reddit.com/r/piercing/', members: '730,927 members', imgUrl: require('./Images/piercing.png') },
      { title: 'r/worldnews', url: 'https://www.reddit.com/r/worldnews/', members: '35,847,695 members', imgUrl: require('./Images/worldnews.png') },
    ],
  },
];
