import { useGetObtainmentStatusesQuery } from "@/infra/graphql/generated/graphql";
import type { UseCurrentUserIdUseCaseResult } from "@/use-case/user/use-current-user-id.use-case";

export type GetObtainmentStatusesResult = {
	iconUrl: string
	obtained: boolean
}[] | undefined

const useGetObtainmentStatuses = (user: UseCurrentUserIdUseCaseResult): GetObtainmentStatusesResult => {
	const [{ data }] = useGetObtainmentStatusesQuery({
		variables: { where: { authId: user?.id || '**idが未指定のときはQueryは送られません**' } },
		pause: !user?.id,
		requestPolicy: 'cache-and-network',
	});


	const obtainmentStatuses = data?.getObtainmentStatuses

	return obtainmentStatuses?.map((status) => ({
		iconUrl: status.item.iconUrl,
		obtained: status.obtained,
	}))
}
export default useGetObtainmentStatuses