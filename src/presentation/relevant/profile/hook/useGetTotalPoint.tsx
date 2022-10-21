import { isBefore } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { useGetTotalPointQuery } from '@/infra/graphql/generated/graphql';
import type { UseCurrentUserIdUseCaseResult } from '@/use-case/user/use-current-user-id.use-case';

const useGetTotalPoint = (user: UseCurrentUserIdUseCaseResult) => {
	const date = new Date();
	const DAY2 = zonedTimeToUtc(new Date(2022, 10, 23, 23, 59, 59), 'Asia/Tokyo');
	const [{ data }] = useGetTotalPointQuery({
		variables: { where: { authId: user?.id || '**idが未指定のときはQueryは送られません**' } },
		pause: !user?.id,
		requestPolicy: 'cache-and-network', 
	});
	const totalPointDay1 = data?.findUser?.totalPointDay1;
	const totalPointDay2 = data?.findUser?.totalPointDay2;
	if (isBefore(date, DAY2)) {
		return totalPointDay1;
	}
	return totalPointDay2;
}

export default useGetTotalPoint;