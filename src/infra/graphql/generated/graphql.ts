import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export enum Character {
  Cat = 'CAT',
  Fox = 'FOX',
  Goku = 'GOKU',
  Pudding = 'PUDDING',
  Reaper = 'REAPER',
  Tree = 'TREE'
}

export type CharacterStatus = {
  __typename?: 'CharacterStatus';
  avatarUrl: Scalars['String'];
  character: Character;
  characterPointDay1: Scalars['Int'];
  characterPointDay2: Scalars['Int'];
  iconUrl: Scalars['String'];
  id: Scalars['String'];
  itemCompletedHistory?: Maybe<ItemCompletedHistory>;
  itemIds: Array<Scalars['String']>;
  items: Array<Item>;
  user: User;
  userId: Scalars['String'];
};

export type CharacterStatusOrderInput = {
  itemCompletedHistory?: InputMaybe<ItemCompletedHistoryOrderInput>;
};

export type CharacterStatusWhereInput = {
  AND?: InputMaybe<Array<CharacterStatusWhereInput>>;
  NOT?: InputMaybe<Array<CharacterStatusWhereInput>>;
  OR?: InputMaybe<Array<CharacterStatusWhereInput>>;
  avatarUrl?: InputMaybe<StringFilter>;
  character?: InputMaybe<EnumCharacterFilter>;
  characterPointDay1?: InputMaybe<IntFilter>;
  characterPointDay2?: InputMaybe<IntFilter>;
  iconUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  itemCompletedHistory?: InputMaybe<ItemCompletedHistoryNullableCompositeFilter>;
  itemIds?: InputMaybe<StringNullableListFilter>;
  items?: InputMaybe<ItemListRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CharacterStatusWhereUniqueInput = {
  id: Scalars['String'];
};

export enum Date {
  Day1 = 'DAY1',
  Day2 = 'DAY2'
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumCharacterFilter = {
  equals?: InputMaybe<Character>;
  in?: InputMaybe<Array<Character>>;
  not?: InputMaybe<NestedEnumCharacterFilter>;
  notIn?: InputMaybe<Array<Character>>;
};

export type EnumGameFilter = {
  equals?: InputMaybe<Game>;
  in?: InputMaybe<Array<Game>>;
  not?: InputMaybe<NestedEnumGameFilter>;
  notIn?: InputMaybe<Array<Game>>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export enum Game {
  CoinDropping = 'COIN_DROPPING',
  IceRaze = 'ICE_RAZE',
  None = 'NONE',
  Poker = 'POKER',
  President = 'PRESIDENT',
  WeDidntPlaytest = 'WE_DIDNT_PLAYTEST',
  Xeno = 'XENO'
}

export type GameAttenders = {
  __typename?: 'GameAttenders';
  coinDropping: Array<User>;
  iceRaze: Array<User>;
  poker: Array<User>;
  president: Array<User>;
  weDidntPlaytest: Array<User>;
  xeno: Array<User>;
};

export type Gift = {
  __typename?: 'Gift';
  giftHistories: Array<GiftHistory>;
  iconUrl: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  remaining: Scalars['Int'];
};

export type GiftHistory = {
  __typename?: 'GiftHistory';
  createdAt: Scalars['DateTime'];
  deliveredAt?: Maybe<Scalars['DateTime']>;
  exchangedGift: Gift;
  giftId: Scalars['String'];
  id: Scalars['String'];
  isDelivered: Scalars['Boolean'];
  user: User;
  userId: Scalars['String'];
};

export type GiftHistoryChangeDeliveryStateInput = {
  isDelivered: Scalars['Boolean'];
};

export type GiftHistoryCreateInput = {
  giftId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isDelivered?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['String'];
};

export type GiftHistoryListRelationFilter = {
  every?: InputMaybe<GiftHistoryWhereInput>;
  none?: InputMaybe<GiftHistoryWhereInput>;
  some?: InputMaybe<GiftHistoryWhereInput>;
};

export type GiftHistoryOrderInput = {
  createdAt?: InputMaybe<SortOrder>;
  deliveredAt?: InputMaybe<SortOrder>;
};

export type GiftHistoryWhereInput = {
  AND?: InputMaybe<Array<GiftHistoryWhereInput>>;
  NOT?: InputMaybe<Array<GiftHistoryWhereInput>>;
  OR?: InputMaybe<Array<GiftHistoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  exchangedGift: GiftRelationFilter;
  giftId: StringFilter;
  id?: InputMaybe<StringFilter>;
  isDelivered: BoolFilter;
  user: UserRelationFilter;
  userId: StringFilter;
};

export type GiftHistoryWhereUniqueInput = {
  id: Scalars['String'];
};

export type GiftOrderInput = {
  createdAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  remaining?: InputMaybe<SortOrder>;
};

export type GiftRelationFilter = {
  is?: InputMaybe<GiftWhereInput>;
  isNot?: InputMaybe<GiftWhereInput>;
};

export type GiftWhereInput = {
  AND?: InputMaybe<Array<GiftWhereInput>>;
  NOT?: InputMaybe<Array<GiftWhereInput>>;
  OR?: InputMaybe<Array<GiftWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  giftHistories?: InputMaybe<GiftHistoryListRelationFilter>;
  iconUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  remaining?: InputMaybe<IntFilter>;
};

export type GiftWhereUniqueInput = {
  id: Scalars['String'];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Item = {
  __typename?: 'Item';
  character: Character;
  iconUrl: Scalars['String'];
  id: Scalars['String'];
  layer: Scalars['Int'];
  layerUrl: Scalars['String'];
  userIds: Array<Scalars['String']>;
  users: Array<User>;
};

export type ItemCompletedHistory = {
  __typename?: 'ItemCompletedHistory';
  createdAt: Scalars['DateTime'];
  deliveredAt?: Maybe<Scalars['DateTime']>;
  isDelivered: Scalars['Boolean'];
};

export type ItemCompletedHistoryNullableCompositeFilter = {
  equals?: InputMaybe<ItemCompletedHistoryObjectEqualityInput>;
  is?: InputMaybe<ItemCompletedHistoryWhereInput>;
  isNot?: InputMaybe<ItemCompletedHistoryWhereInput>;
  isSet?: InputMaybe<Scalars['Boolean']>;
};

export type ItemCompletedHistoryObjectEqualityInput = {
  createdAt: Scalars['DateTime'];
  deliveredAt?: InputMaybe<Scalars['DateTime']>;
  isDelivered: Scalars['Boolean'];
};

export type ItemCompletedHistoryOrderInput = {
  createdAt?: InputMaybe<SortOrder>;
  deliveredAt?: InputMaybe<SortOrder>;
};

export type ItemCompletedHistoryWhereInput = {
  AND?: InputMaybe<Array<ItemCompletedHistoryWhereInput>>;
  NOT?: InputMaybe<Array<ItemCompletedHistoryWhereInput>>;
  OR?: InputMaybe<Array<ItemCompletedHistoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deliveredAt?: InputMaybe<DateTimeNullableFilter>;
  isDelivered?: InputMaybe<BoolFilter>;
};

export type ItemListRelationFilter = {
  every?: InputMaybe<ItemWhereInput>;
  none?: InputMaybe<ItemWhereInput>;
  some?: InputMaybe<ItemWhereInput>;
};

export type ItemWhereInput = {
  AND?: InputMaybe<Array<ItemWhereInput>>;
  NOT?: InputMaybe<Array<ItemWhereInput>>;
  OR?: InputMaybe<Array<ItemWhereInput>>;
  character?: InputMaybe<EnumCharacterFilter>;
  iconUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  layer?: InputMaybe<IntFilter>;
  layerUrl?: InputMaybe<StringFilter>;
  userIds?: InputMaybe<StringNullableListFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeDeliveryStateCharacterStatus: CharacterStatus;
  changeDeliveryStateGiftHistory: GiftHistory;
  createUser: User;
  exchangeGift: Array<GiftHistory>;
  exitGame: User;
  incrementPoint: Array<User>;
  joinGame: User;
  pullGacha: Item;
  updateUserBio: User;
};


export type MutationChangeDeliveryStateCharacterStatusArgs = {
  delivered: Scalars['Boolean'];
  where: CharacterStatusWhereUniqueInput;
};


export type MutationChangeDeliveryStateGiftHistoryArgs = {
  data: GiftHistoryChangeDeliveryStateInput;
  where: GiftHistoryWhereUniqueInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationExchangeGiftArgs = {
  data: GiftHistoryCreateInput;
  exchangeQuantity: Scalars['Int'];
};


export type MutationExitGameArgs = {
  where: UserWhereUniqueInput;
};


export type MutationIncrementPointArgs = {
  users: Array<UserIncrementPointInput>;
};


export type MutationJoinGameArgs = {
  game: Game;
  where: UserWhereUniqueInput;
};


export type MutationPullGachaArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserBioArgs = {
  data: UserUpdateBioInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumCharacterFilter = {
  equals?: InputMaybe<Character>;
  in?: InputMaybe<Array<Character>>;
  not?: InputMaybe<NestedEnumCharacterFilter>;
  notIn?: InputMaybe<Array<Character>>;
};

export type NestedEnumGameFilter = {
  equals?: InputMaybe<Game>;
  in?: InputMaybe<Array<Game>>;
  not?: InputMaybe<NestedEnumGameFilter>;
  notIn?: InputMaybe<Array<Game>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type ObtainmentStatus = {
  __typename?: 'ObtainmentStatus';
  item: Item;
  obtained: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  findGift?: Maybe<Gift>;
  findGiftHistories: Array<GiftHistory>;
  findGiftHistory?: Maybe<GiftHistory>;
  findGifts: Array<Gift>;
  findItemCompletedCharacterStatuses: Array<CharacterStatus>;
  findUser?: Maybe<User>;
  findUsers: Array<User>;
  getGameAttenders: GameAttenders;
  getObtainmentStatuses: Array<ObtainmentStatus>;
  getRanking: Array<User>;
};


export type QueryFindGiftArgs = {
  where: GiftWhereUniqueInput;
};


export type QueryFindGiftHistoriesArgs = {
  cursor?: InputMaybe<GiftHistoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GiftHistoryOrderInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GiftHistoryWhereInput>;
};


export type QueryFindGiftHistoryArgs = {
  where: GiftHistoryWhereUniqueInput;
};


export type QueryFindGiftsArgs = {
  cursor?: InputMaybe<GiftWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GiftOrderInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GiftWhereInput>;
};


export type QueryFindItemCompletedCharacterStatusesArgs = {
  cursor?: InputMaybe<CharacterStatusWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CharacterStatusOrderInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CharacterStatusWhereInput>;
};


export type QueryFindUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetObtainmentStatusesArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGetRankingArgs = {
  date: Date;
  rankingTarget: RankingTarget;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum RankingTarget {
  Cat = 'CAT',
  Fox = 'FOX',
  Goku = 'GOKU',
  Pudding = 'PUDDING',
  Reaper = 'REAPER',
  Total = 'TOTAL',
  Tree = 'TREE'
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  updatedGameAttenders: GameAttenders;
  updatedRanking: Array<User>;
};


export type SubscriptionUpdatedRankingArgs = {
  date: Date;
  rankingTarget: RankingTarget;
};

export type User = {
  __typename?: 'User';
  characterStatus: CharacterStatus;
  consumablePoint: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  giftHistories: Array<GiftHistory>;
  id: Scalars['String'];
  name: Scalars['String'];
  participateGame: Game;
  pullableGachaTimes: Scalars['Int'];
  role: Role;
  totalPointDay1: Scalars['Int'];
  totalPointDay2: Scalars['Int'];
};

export type UserCreateInput = {
  character: Character;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  role?: InputMaybe<Role>;
};

export type UserIncrementPointInput = {
  id: Scalars['String'];
  increment: Scalars['Int'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderInput = {
  createdAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  totalPointDay1?: InputMaybe<SortOrder>;
  totalPointDay2?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateBioInput = {
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  consumablePoint?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  giftHistories?: InputMaybe<GiftHistoryListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  participateGame?: InputMaybe<EnumGameFilter>;
  pullableGachaTimes?: InputMaybe<IntFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  totalPointDay1?: InputMaybe<IntFilter>;
  totalPointDay2?: InputMaybe<IntFilter>;
};

export type UserWhereUniqueInput = {
  id: Scalars['String'];
};

export type DetailedGameAttenderDataFragment = { __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string, avatarUrl: string, items: Array<{ __typename?: 'Item', layer: number, layerUrl: string }> } };

export type GameAttenderBioDataFragment = { __typename?: 'User', id: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } };

export type GiftHistoryDataFragment = { __typename?: 'GiftHistory', id: string, isDelivered: boolean, createdAt: Date, deliveredAt?: Date | null, exchangedGift: { __typename?: 'Gift', name: string }, user: { __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } } };

export type GiftSalesDataFragment = { __typename?: 'Gift', id: string, name: string, iconUrl: string, price: number, remaining: number };

export type UserBioDataFragment = { __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } };

export type UserMetaDataFragment = { __typename?: 'User', id: string, name: string, email: string, role: Role, characterStatus: { __typename?: 'CharacterStatus', id: string, character: Character, iconUrl: string } };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', createdAt: Date, id: string, name: string } };

export type ExchangeGiftMutationVariables = Exact<{
  userId: Scalars['String'];
  giftId: Scalars['String'];
  amount: Scalars['Int'];
}>;


export type ExchangeGiftMutation = { __typename?: 'Mutation', exchangeGift: Array<{ __typename?: 'GiftHistory', id: string }> };

export type ExitGameMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ExitGameMutation = { __typename?: 'Mutation', exitGame: { __typename?: 'User', id: string, participateGame: Game } };

export type JoinGameMutationVariables = Exact<{
  userId: Scalars['String'];
  game: Game;
}>;


export type JoinGameMutation = { __typename?: 'Mutation', joinGame: { __typename?: 'User', id: string, participateGame: Game } };

export type CheckUserExistanceQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type CheckUserExistanceQuery = { __typename?: 'Query', findUser?: { __typename?: 'User', id: string } | null };

export type FindDetailedGameAttendersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindDetailedGameAttendersQuery = { __typename?: 'Query', getGameAttenders: { __typename?: 'GameAttenders', coinDropping: Array<{ __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string, avatarUrl: string, items: Array<{ __typename?: 'Item', layer: number, layerUrl: string }> } }>, xeno: Array<{ __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string, avatarUrl: string, items: Array<{ __typename?: 'Item', layer: number, layerUrl: string }> } }>, iceRaze: Array<{ __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string, avatarUrl: string, items: Array<{ __typename?: 'Item', layer: number, layerUrl: string }> } }>, poker: Array<{ __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string, avatarUrl: string, items: Array<{ __typename?: 'Item', layer: number, layerUrl: string }> } }>, president: Array<{ __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string, avatarUrl: string, items: Array<{ __typename?: 'Item', layer: number, layerUrl: string }> } }>, weDidntPlaytest: Array<{ __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string, avatarUrl: string, items: Array<{ __typename?: 'Item', layer: number, layerUrl: string }> } }> } };

export type FindGameAttendersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindGameAttendersQuery = { __typename?: 'Query', getGameAttenders: { __typename?: 'GameAttenders', coinDropping: Array<{ __typename?: 'User', id: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } }>, xeno: Array<{ __typename?: 'User', id: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } }>, iceRaze: Array<{ __typename?: 'User', id: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } }>, poker: Array<{ __typename?: 'User', id: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } }>, president: Array<{ __typename?: 'User', id: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } }>, weDidntPlaytest: Array<{ __typename?: 'User', id: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } }> } };

export type FindGiftSalesDataQueryVariables = Exact<{ [key: string]: never; }>;


export type FindGiftSalesDataQuery = { __typename?: 'Query', findGifts: Array<{ __typename?: 'Gift', id: string, name: string, iconUrl: string, price: number, remaining: number }> };

export type FindUserConsumablePointQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindUserConsumablePointQuery = { __typename?: 'Query', findUser?: { __typename?: 'User', id: string, consumablePoint: number } | null };

export type FindUserMetaDataQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindUserMetaDataQuery = { __typename?: 'Query', findUser?: { __typename?: 'User', id: string, name: string, email: string, role: Role, characterStatus: { __typename?: 'CharacterStatus', id: string, character: Character, iconUrl: string } } | null };

export type UpdatedDetailedGameAttendersSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UpdatedDetailedGameAttendersSubscription = { __typename?: 'Subscription', updatedGameAttenders: { __typename?: 'GameAttenders', coinDropping: Array<{ __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string, avatarUrl: string, items: Array<{ __typename?: 'Item', layer: number, layerUrl: string }> } }>, xeno: Array<{ __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string, avatarUrl: string, items: Array<{ __typename?: 'Item', layer: number, layerUrl: string }> } }>, iceRaze: Array<{ __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string, avatarUrl: string, items: Array<{ __typename?: 'Item', layer: number, layerUrl: string }> } }>, poker: Array<{ __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string, avatarUrl: string, items: Array<{ __typename?: 'Item', layer: number, layerUrl: string }> } }>, president: Array<{ __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string, avatarUrl: string, items: Array<{ __typename?: 'Item', layer: number, layerUrl: string }> } }>, weDidntPlaytest: Array<{ __typename?: 'User', id: string, name: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string, avatarUrl: string, items: Array<{ __typename?: 'Item', layer: number, layerUrl: string }> } }> } };

export type UpdatedGameAttendersSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UpdatedGameAttendersSubscription = { __typename?: 'Subscription', updatedGameAttenders: { __typename?: 'GameAttenders', coinDropping: Array<{ __typename?: 'User', id: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } }>, xeno: Array<{ __typename?: 'User', id: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } }>, iceRaze: Array<{ __typename?: 'User', id: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } }>, poker: Array<{ __typename?: 'User', id: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } }>, president: Array<{ __typename?: 'User', id: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } }>, weDidntPlaytest: Array<{ __typename?: 'User', id: string, characterStatus: { __typename?: 'CharacterStatus', iconUrl: string } }> } };

export const DetailedGameAttenderDataFragmentDoc = gql`
    fragment DetailedGameAttenderData on User {
  id
  name
  characterStatus {
    iconUrl
    avatarUrl
    items {
      layer
      layerUrl
    }
  }
}
    `;
export const GameAttenderBioDataFragmentDoc = gql`
    fragment GameAttenderBioData on User {
  id
  characterStatus {
    iconUrl
  }
}
    `;
export const UserBioDataFragmentDoc = gql`
    fragment UserBioData on User {
  id
  name
  characterStatus {
    iconUrl
  }
}
    `;
export const GiftHistoryDataFragmentDoc = gql`
    fragment GiftHistoryData on GiftHistory {
  id
  exchangedGift {
    name
  }
  user {
    ...UserBioData
  }
  isDelivered
  createdAt
  deliveredAt
}
    ${UserBioDataFragmentDoc}`;
export const GiftSalesDataFragmentDoc = gql`
    fragment GiftSalesData on Gift {
  id
  name
  iconUrl
  price
  remaining
}
    `;
export const UserMetaDataFragmentDoc = gql`
    fragment UserMetaData on User {
  id
  name
  email
  role
  characterStatus {
    id
    character
    iconUrl
  }
}
    `;
export const CreateUserDocument = gql`
    mutation CreateUser($data: UserCreateInput!) {
  createUser(data: $data) {
    createdAt
    id
    name
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const ExchangeGiftDocument = gql`
    mutation ExchangeGift($userId: String!, $giftId: String!, $amount: Int!) {
  exchangeGift(
    data: {giftId: $giftId, userId: $userId, isDelivered: false}
    exchangeQuantity: $amount
  ) {
    id
  }
}
    `;

export function useExchangeGiftMutation() {
  return Urql.useMutation<ExchangeGiftMutation, ExchangeGiftMutationVariables>(ExchangeGiftDocument);
};
export const ExitGameDocument = gql`
    mutation ExitGame($userId: String!) {
  exitGame(where: {id: $userId}) {
    id
    participateGame
  }
}
    `;

export function useExitGameMutation() {
  return Urql.useMutation<ExitGameMutation, ExitGameMutationVariables>(ExitGameDocument);
};
export const JoinGameDocument = gql`
    mutation JoinGame($userId: String!, $game: Game!) {
  joinGame(game: $game, where: {id: $userId}) {
    id
    participateGame
  }
}
    `;

export function useJoinGameMutation() {
  return Urql.useMutation<JoinGameMutation, JoinGameMutationVariables>(JoinGameDocument);
};
export const CheckUserExistanceDocument = gql`
    query CheckUserExistance($id: String!) {
  findUser(where: {id: $id}) {
    id
  }
}
    `;

export function useCheckUserExistanceQuery(options: Omit<Urql.UseQueryArgs<CheckUserExistanceQueryVariables>, 'query'>) {
  return Urql.useQuery<CheckUserExistanceQuery, CheckUserExistanceQueryVariables>({ query: CheckUserExistanceDocument, ...options });
};
export const FindDetailedGameAttendersDocument = gql`
    query FindDetailedGameAttenders {
  getGameAttenders {
    coinDropping {
      ...DetailedGameAttenderData
    }
    xeno {
      ...DetailedGameAttenderData
    }
    iceRaze {
      ...DetailedGameAttenderData
    }
    poker {
      ...DetailedGameAttenderData
    }
    president {
      ...DetailedGameAttenderData
    }
    weDidntPlaytest {
      ...DetailedGameAttenderData
    }
  }
}
    ${DetailedGameAttenderDataFragmentDoc}`;

export function useFindDetailedGameAttendersQuery(options?: Omit<Urql.UseQueryArgs<FindDetailedGameAttendersQueryVariables>, 'query'>) {
  return Urql.useQuery<FindDetailedGameAttendersQuery, FindDetailedGameAttendersQueryVariables>({ query: FindDetailedGameAttendersDocument, ...options });
};
export const FindGameAttendersDocument = gql`
    query FindGameAttenders {
  getGameAttenders {
    coinDropping {
      ...GameAttenderBioData
    }
    xeno {
      ...GameAttenderBioData
    }
    iceRaze {
      ...GameAttenderBioData
    }
    poker {
      ...GameAttenderBioData
    }
    president {
      ...GameAttenderBioData
    }
    weDidntPlaytest {
      ...GameAttenderBioData
    }
  }
}
    ${GameAttenderBioDataFragmentDoc}`;

export function useFindGameAttendersQuery(options?: Omit<Urql.UseQueryArgs<FindGameAttendersQueryVariables>, 'query'>) {
  return Urql.useQuery<FindGameAttendersQuery, FindGameAttendersQueryVariables>({ query: FindGameAttendersDocument, ...options });
};
export const FindGiftSalesDataDocument = gql`
    query FindGiftSalesData {
  findGifts {
    ...GiftSalesData
  }
}
    ${GiftSalesDataFragmentDoc}`;

export function useFindGiftSalesDataQuery(options?: Omit<Urql.UseQueryArgs<FindGiftSalesDataQueryVariables>, 'query'>) {
  return Urql.useQuery<FindGiftSalesDataQuery, FindGiftSalesDataQueryVariables>({ query: FindGiftSalesDataDocument, ...options });
};
export const FindUserConsumablePointDocument = gql`
    query FindUserConsumablePoint($id: String!) {
  findUser(where: {id: $id}) {
    id
    consumablePoint
  }
}
    `;

export function useFindUserConsumablePointQuery(options: Omit<Urql.UseQueryArgs<FindUserConsumablePointQueryVariables>, 'query'>) {
  return Urql.useQuery<FindUserConsumablePointQuery, FindUserConsumablePointQueryVariables>({ query: FindUserConsumablePointDocument, ...options });
};
export const FindUserMetaDataDocument = gql`
    query FindUserMetaData($id: String!) {
  findUser(where: {id: $id}) {
    ...UserMetaData
  }
}
    ${UserMetaDataFragmentDoc}`;

export function useFindUserMetaDataQuery(options: Omit<Urql.UseQueryArgs<FindUserMetaDataQueryVariables>, 'query'>) {
  return Urql.useQuery<FindUserMetaDataQuery, FindUserMetaDataQueryVariables>({ query: FindUserMetaDataDocument, ...options });
};
export const UpdatedDetailedGameAttendersDocument = gql`
    subscription UpdatedDetailedGameAttenders {
  updatedGameAttenders {
    coinDropping {
      ...DetailedGameAttenderData
    }
    xeno {
      ...DetailedGameAttenderData
    }
    iceRaze {
      ...DetailedGameAttenderData
    }
    poker {
      ...DetailedGameAttenderData
    }
    president {
      ...DetailedGameAttenderData
    }
    weDidntPlaytest {
      ...DetailedGameAttenderData
    }
  }
}
    ${DetailedGameAttenderDataFragmentDoc}`;

export function useUpdatedDetailedGameAttendersSubscription<TData = UpdatedDetailedGameAttendersSubscription>(options: Omit<Urql.UseSubscriptionArgs<UpdatedDetailedGameAttendersSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<UpdatedDetailedGameAttendersSubscription, TData>) {
  return Urql.useSubscription<UpdatedDetailedGameAttendersSubscription, TData, UpdatedDetailedGameAttendersSubscriptionVariables>({ query: UpdatedDetailedGameAttendersDocument, ...options }, handler);
};
export const UpdatedGameAttendersDocument = gql`
    subscription UpdatedGameAttenders {
  updatedGameAttenders {
    coinDropping {
      ...GameAttenderBioData
    }
    xeno {
      ...GameAttenderBioData
    }
    iceRaze {
      ...GameAttenderBioData
    }
    poker {
      ...GameAttenderBioData
    }
    president {
      ...GameAttenderBioData
    }
    weDidntPlaytest {
      ...GameAttenderBioData
    }
  }
}
    ${GameAttenderBioDataFragmentDoc}`;

export function useUpdatedGameAttendersSubscription<TData = UpdatedGameAttendersSubscription>(options: Omit<Urql.UseSubscriptionArgs<UpdatedGameAttendersSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<UpdatedGameAttendersSubscription, TData>) {
  return Urql.useSubscription<UpdatedGameAttendersSubscription, TData, UpdatedGameAttendersSubscriptionVariables>({ query: UpdatedGameAttendersDocument, ...options }, handler);
};