import type {FC} from "react"
import { useState, Fragment } from "react";
import type { BadgeTransaction } from "@/model/transaction/badge-transaction.model";
import type { GiftTransaction } from "@/model/transaction/gift-transaction.model";
import type { User } from "@/model/user/user.model";
import { Button } from "@/presentation/primitive/component/button/button.presenter";
import { TransactionItem } from "@/presentation/primitive/component/transaction-item/transaction-item.presenter";

type ExchangeDataType = (User & (GiftTransaction | BadgeTransaction))[];

type ExchangeHistoryProps = {
  title: string;
  discription: string;
  firstData: ExchangeDataType
}

const GiftExchangeHistory:FC<ExchangeHistoryProps> = ({
  title,
  discription,
  firstData
}) => {
  const [ExchangeData,setExchangeData] = useState<ExchangeDataType>(firstData)
  const [isShowButton,setShowButton] = useState<boolean>(firstData.length === 20 )
  return(
    <>
      <div className="my-10 hidden h-auto w-[40rem] flex-col items-center space-y-3 rounded-2xl bg-white p-5 md:flex">
        <h1 className="text-3xl font-bold">{title}</h1>
        <span><small>{discription}</small></span>
        <div className="flex h-auto min-h-[2.5rem] w-full flex-col items-center space-y-3 rounded-2xl bg-[#F0F1F2] p-3">
          {
            ExchangeData.map(data => (
              <TransactionItem 
                key={data.id}
                createdAt={data.createdAt}
                receiver={data.receiver}
                id={data.id}
                isDelivered={data.isDelivered}
                deliveredAt={data.deliveredAt}
                exchangedItem={data.exchangedItem}
                onSubmit={()=>{
                  // Submit code
                }}
                className="w-full"
              >
                {typeof(data.exchangedItem) === "object" ? data.exchangedItem.name : data.exchangedItem}
              </TransactionItem>
            ))
          }
        </div>
        <Button 
          type="button"
          className={`${isShowButton?"inline-block":"hidden"}`} 
          onClick={()=>{
            const getData:Promise<ExchangeDataType> = fetch("").then((res) => res.json()) // URL
            getData.then(data => {
              if(data.length === 20){ // 条件式
                setShowButton(true)
              }
              setExchangeData([...ExchangeData,...data])})
          }}
        ><small>次の20件を読み込む</small></Button>
      </div>
      <div className="md:hidden">
        PCでの操作を推奨します。
      </div>
    </>
)
}

export default GiftExchangeHistory

