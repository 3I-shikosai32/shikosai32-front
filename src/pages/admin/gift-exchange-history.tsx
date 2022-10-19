import type { GetServerSideProps } from "next";
import type { FC } from 'react';
import type { GiftTransaction } from "@/model/transaction/gift-transaction.model";
import type { User } from "@/model/user/user.model";
import { Layout } from '@/presentation/layout/layout.container';
import GiftExchangeHistory from "@/presentation/relevant/exchange-history/gift-history.page";

type Props = {historyData:(User & GiftTransaction)[]}

const GiftExhcangeHistory: FC<Props> = ({historyData}) => (
  <Layout title="gift exchage history">
    <GiftExchangeHistory 
      title="景品交換履歴"
      discription="順位ごとのポイントと所定のボーナスポイントを考慮して、各プレイヤーに付与するポイントを入力してください。"
      firstData={historyData}
    />
  </Layout>
);

export default GiftExhcangeHistory;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
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
      exchangedItem:{name:"ベビースター"}
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
      exchangedItem:{name:"ベビースター"}
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
      exchangedItem:{name:"ベビースター"}
    }]
  } as Props
  return {
    props:data
  }
}