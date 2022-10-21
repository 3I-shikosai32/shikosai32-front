import { useFindItemCompletedCharacterStatusesQuery } from '@/infra/graphql/generated/graphql';

const useFindCompletedCharacter = () => {
  const [result] = useFindItemCompletedCharacterStatusesQuery();
  const { data } = result;
  return data;
};

export default useFindCompletedCharacter;
