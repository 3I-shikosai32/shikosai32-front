import { useGetTotalPointQuery } from "@/infra/graphql/generated/graphql";
import type { UseCurrentUserIdUseCaseResult } from "@/use-case/user/use-current-user-id.use-case";


const useGetTotalPoint = (user: UseCurrentUserIdUseCaseResult) => {
	const [{ data }] = useGetTotalPointQuery({
		variables: { where: { authId: user?.id || '**idが未指定のときはQueryは送られません**' } },
		pause: !user?.id,
		requestPolicy: 'cache-and-network',
	});
	const totalPointDay1 = data?.findUser?.totalPointDay1;
	const totalPointDay2 = data?.findUser?.totalPointDay2;
	
	return {
		totalPointDay1,
		totalPointDay2
	}
}

export default useGetTotalPoint