import { useFindAllUsersNameUseCase } from '@/use-case/user/use-find-all-users-name.use-case';

const useGetUserQuantity = (): number | undefined => {
	const users = useFindAllUsersNameUseCase();
	return users?.length;
}
export default useGetUserQuantity;
