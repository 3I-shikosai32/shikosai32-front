import { useFindUserMetaDataQuery } from "@/infra/graphql/generated/graphql";
import type { UseCurrentUserIdUseCaseResult } from "@/use-case/user/use-current-user-id.use-case";


const useGetUser = (user: UseCurrentUserIdUseCaseResult) => {
	const [result] = useFindUserMetaDataQuery({
		variables: { id: user?.id || '**idが未指定のときはQueryは送られません**' },
		pause: !user?.id,
		requestPolicy: 'cache-and-network',
	});
	const { data } = result;
	const name = data?.findUser?.name;
	const character = data?.findUser?.characterStatus.character;
	const url = data?.findUser?.characterStatus.iconUrl;
	return {
		name,
		character,
		url,
	}
}
export default useGetUser
