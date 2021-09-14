export type ItemBox = {
  titleText: string;
  subText: string;
  iconName: string;
};

export type PayNavigatorParamList = {
  PayScreen: undefined;
  CardList: CardData[];
};

export type OtherNavigatorParamList = {
  OtherScreen: undefined;
  Setting: undefined;
  reward: undefined;
  coupon: undefined;
  giftCard: undefined;
  new: undefined;
  notifications: undefined;
  history: undefined;
  receipt: undefined;
  review: undefined;
  storeCare: undefined;
  customer: undefined;
  info: undefined;
  policy: undefined;
  personalInfo: undefined;
  nickName: undefined;
  personalReward: undefined;
  dt: undefined;
  services: undefined;
  emploee: undefined;
  pushNotification: undefined;
  gpsService: undefined;
  changePassword: undefined;
  version: undefined;
};

export type Data = {
  text: string;
  icon?: string;
  keyword: string;
};

export type CardData = {
  name: string;
  balance: string;
  barcode: string;
  isFavorite: boolean;
};
