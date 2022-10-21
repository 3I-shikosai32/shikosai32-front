import { useFindItemCompletedCharacterStatusesQuery } from '@/infra/graphql/generated/graphql';

const useFindCompletedCharacter = () => {
  const [result] = useFindItemCompletedCharacterStatusesQuery();
  const { data } = result;
  return data?.findItemCompletedCharacterStatuses;
};

export default useFindCompletedCharacter;
