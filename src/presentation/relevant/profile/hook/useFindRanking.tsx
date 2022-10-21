import { useFindRankingPositionQuery } from '@/infra/graphql/generated/graphql';
import type { UseCurrentUserIdUseCaseResult } from '@/use-case/user/use-current-user-id.use-case';

const useFindRanking = (user: UseCurrentUserIdUseCaseResult) => {
	const [result] = useFindRankingPositionQuery({
		variables: { userId: user?.id || '**idが未指定のときはQueryは送られません**' },
		pause: !user?.id,
		requestPolicy: 'cache-and-network',
	});
	const { data } = result;
	const rank = data?.getRankingPosition;
	return rank;
}
export default useFindRanking;