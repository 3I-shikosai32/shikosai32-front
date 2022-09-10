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
  DateTime: any;
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

export type EnumGiftNameFilter = {
  equals?: InputMaybe<GiftName>;
  in?: InputMaybe<Array<GiftName>>;
  not?: InputMaybe<NestedEnumGiftNameFilter>;
  notIn?: InputMaybe<Array<GiftName>>;
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

export enum GiftName {
  BabyStar = 'BABY_STAR',
  Cabagge = 'CABAGGE',
  Morokoshi = 'MOROKOSHI',
  UmaiboCheese = 'UMAIBO_CHEESE',
  UmaiboCornPotage = 'UMAIBO_CORN_POTAGE',
  UmaiboMentaiko = 'UMAIBO_MENTAIKO'
}

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
  name?: InputMaybe<EnumGiftNameFilter>;
  price?: InputMaybe<IntFilter>;
  remaining?: InputMaybe<IntFilter>;
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
  id: Scalars['String'];
  layer: Scalars['Int'];
  url: Scalars['String'];
  userIds: Array<Scalars['String']>;
  users: Array<NestedUser>;
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
  id?: InputMaybe<StringFilter>;
  layer?: InputMaybe<IntFilter>;
  url?: InputMaybe<StringFilter>;
  userIds?: InputMaybe<StringNullableListFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  incrementTotalPoint: User;
  joinGame: User;
  pullGacha: Item;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationIncrementTotalPointArgs = {
  increment: Scalars['Float'];
  where: UserWhereUniqueInput;
};


export type MutationJoinGameArgs = {
  game: Game;
  where: UserWhereUniqueInput;
};


export type MutationPullGachaArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
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

export type NestedEnumGiftNameFilter = {
  equals?: InputMaybe<GiftName>;
  in?: InputMaybe<Array<GiftName>>;
  not?: InputMaybe<NestedEnumGiftNameFilter>;
  notIn?: InputMaybe<Array<GiftName>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedGiftHistory = {
  __typename?: 'NestedGiftHistory';
  createdAt: Scalars['DateTime'];
  giftId: Scalars['String'];
  id: Scalars['String'];
  isDelivered: Scalars['Boolean'];
  userId: Scalars['String'];
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

export type NestedItem = {
  __typename?: 'NestedItem';
  character: Character;
  id: Scalars['String'];
  layer: Scalars['Int'];
  url: Scalars['String'];
  userIds: Array<Scalars['String']>;
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

export type NestedUser = {
  __typename?: 'NestedUser';
  avatarUrl: Scalars['String'];
  character: Character;
  consumablePoint: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  iconUrl: Scalars['String'];
  id: Scalars['String'];
  itemIds: Array<Scalars['String']>;
  name: Scalars['String'];
  participateGame: Game;
  pullableGachaTimes: Scalars['Int'];
  role: Role;
  totalPointDay1: Scalars['Int'];
  totalPointDay2: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  findUser?: Maybe<User>;
  findUsers: Array<User>;
  tmp: Scalars['String'];
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

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
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

export type User = {
  __typename?: 'User';
  avatarUrl: Scalars['String'];
  character: Character;
  consumablePoint: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  giftHistories: Array<NestedGiftHistory>;
  iconUrl: Scalars['String'];
  id: Scalars['String'];
  itemIds: Array<Scalars['String']>;
  items: Array<NestedItem>;
  name: Scalars['String'];
  participateGame: Game;
  pullableGachaTimes: Scalars['Int'];
  role: Role;
  totalPointDay1: Scalars['Int'];
  totalPointDay2: Scalars['Int'];
};

export type UserCreateInput = {
  avatarUrl: Scalars['String'];
  character: Character;
  consumablePoint?: InputMaybe<Scalars['Int']>;
  email: Scalars['String'];
  giftHistories?: InputMaybe<Array<GiftHistoryCreateInput>>;
  iconUrl: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  participateGame?: InputMaybe<Game>;
  pullableGachaTimes?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Role>;
  totalPointDay1?: InputMaybe<Scalars['Int']>;
  totalPointDay2?: InputMaybe<Scalars['Int']>;
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

export type UserUpdateInput = {
  consumablePoint?: InputMaybe<Scalars['Int']>;
  itemIds?: InputMaybe<Array<Scalars['String']>>;
  participateGame?: InputMaybe<Game>;
  pullableGachaTimes?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Role>;
  totalPointDay1?: InputMaybe<Scalars['Int']>;
  totalPointDay2?: InputMaybe<Scalars['Int']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatarUrl?: InputMaybe<StringFilter>;
  character?: InputMaybe<EnumCharacterFilter>;
  consumablePoint?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  giftHistories?: InputMaybe<GiftHistoryListRelationFilter>;
  iconUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  itemIds?: InputMaybe<StringNullableListFilter>;
  items?: InputMaybe<ItemListRelationFilter>;
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

export type FindUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindUserQuery = { __typename?: 'Query', findUser?: { __typename?: 'User', id: string, name: string, email: string, role: Role, character: Character, avatarUrl: string, iconUrl: string, participateGame: Game, pullableGachaTimes: number, totalPointDay1: number, totalPointDay2: number, consumablePoint: number, items: Array<{ __typename?: 'NestedItem', id: string, layer: number, url: string }>, giftHistories: Array<{ __typename?: 'NestedGiftHistory', id: string, giftId: string, isDelivered: boolean, createdAt: any }> } | null };


export const FindUserDocument = gql`
    query FindUser($id: String!) {
  findUser(where: {id: $id}) {
    id
    name
    email
    role
    character
    avatarUrl
    iconUrl
    items {
      id
      layer
      url
    }
    giftHistories {
      id
      giftId
      isDelivered
      createdAt
    }
    participateGame
    pullableGachaTimes
    totalPointDay1
    totalPointDay2
    consumablePoint
  }
}
    `;

export function useFindUserQuery(options: Omit<Urql.UseQueryArgs<FindUserQueryVariables>, 'query'>) {
  return Urql.useQuery<FindUserQuery, FindUserQueryVariables>({ query: FindUserDocument, ...options });
};