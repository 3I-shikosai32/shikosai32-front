import { useFindGiftExchangeInfoQuery } from "@/infra/graphql/generated/graphql";
import type { UseCurrentUserIdUseCaseResult } from "@/use-case/user/use-current-user-id.use-case";

const useFindGifInfo = (user: UseCurrentUserIdUseCaseResult) => {
	const [result] = useFindGiftExchangeInfoQuery({
		variables: { userId: user?.id || '**idが未指定のときはQueryは送られません**' },
		pause: !user?.id,
		requestPolicy: 'cache-and-network',
	});
	const { data, fetching, error } = result;
	const Items = data?.gifts
	return {
		Items,
		fetching,
		error
	}
}

export default useFindGifInfo