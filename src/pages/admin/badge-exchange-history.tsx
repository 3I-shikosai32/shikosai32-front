import type { GetServerSideProps } from "next";
import type { FC } from 'react';
import { Character } from "@/model/character/character.model";
import type { BadgeTransaction } from "@/model/transaction/badge-transaction.model";
import type { User } from "@/model/user/user.model";
import { Layout } from '@/presentation/layout/layout.container';
import GiftExchangeHistory from "@/presentation/relevant/exchange-history/gift-history.page";

type Props = {historyData:(User & BadgeTransaction)[]}

const BadgeExhcangeHistory: FC<Props> = ({historyData}) => (
  <Layout title="gift exchage history">
    <GiftExchangeHistory 
      title="缶バッジ交換履歴"
      discription="それぞれが使用するキャラクターの４つのきせかえアイテムをすべて集めたユーザーが表示されています。ユーザーのアイコンと同じデザインの缶バッジを手渡してください。"
      firstData={historyData}
    />
  </Layout>
);

export default BadgeExhcangeHistory;

export const getServerSideProps: GetServerSideProps<Props> = async () => {

  // fetch
  
  const data = {
    historyData:[{
      createdAt: new Date(2022,10,19,10),
      deliveredAt: undefined,
      receiver: {
        id:"hgoe",
        name:"hoge",
        iconUrl:"/icons/fox.png"
      },
      id: "hoge",
      isDelivered: false,
      exchangedItem:Character.Cat
    },{
      createdAt: new Date(2022,10,19,10),
      deliveredAt: undefined,
      receiver: {
        id:"fuga",
        name:"fuga",
        iconUrl:"/icons/fox.png"
      },
      id: "fuga",
      isDelivered: false,
      exchangedItem:Character.Pudding
    },{
      createdAt: new Date(2022,10,19,10),
      deliveredAt: undefined,
      receiver: {
        id:"piyo",
        name:"piyo",
        iconUrl:"/icons/fox.png"
      },
      id: "piyo",
      isDelivered: false,
      exchangedItem:Character.Reaper
    }]
  } as Props
  return {
    props:data
  }
}