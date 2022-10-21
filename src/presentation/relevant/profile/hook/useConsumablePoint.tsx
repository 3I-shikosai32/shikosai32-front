import type { UseCurrentUserIdUseCaseResult } from '@/use-case/user/use-current-user-id.use-case';
import { useUserConsumablePointUseCase } from '@/use-case/user/use-user-consumable-point.use-case';

const useConsumablePoint = (user: UseCurrentUserIdUseCaseResult) => {
	const { consumablePoint } = useUserConsumablePointUseCase({ id: user?.id });
	return consumablePoint;
}
export default useConsumablePoint;