/* eslint-disable react-hooks/rules-of-hooks */
import type { FC } from "react";
import { BadgeTransactionItem } from "../history/component/badge-transaction-item/badge-transaction-item.presenter";
import useChangeDeliveryStatus from "./hook/useChangeDeliveryStatus";
import useFindCompletedCharacter from "./hook/useFindCompletedCharacter";

const badgeHistoryPage: FC = () => {
	const users = useFindCompletedCharacter();
	const { executeMutation } = useChangeDeliveryStatus();
	return (
		<div>
			{
				users?.map((user) => (
					<BadgeTransactionItem
						key={user.user.characterStatus.id}
						isDelivered={user.itemCompletedHistory?.isDelivered ? user.itemCompletedHistory?.isDelivered : false}
						className="max-w-3xl"
						createdAt={new Date("2022-10-21T18:04:22.137Z")}
						deliveredAt={new Date("2022-10-21T18:04:22.137Z")}
						exchangedItem={user.character}
						id="this-is-transaction-id-12345"
						onSubmit={() => { executeMutation({ delivered: user.itemCompletedHistory?.isDelivered, where: user.user.characterStatus.id }) }}
						receiver={{
							iconUrl: user.iconUrl,
							id: user.user.characterStatus.id,
							name: user.user.name
						}}
					/>
				))
			}
		</div>
	)
}
export default badgeHistoryPage