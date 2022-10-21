import { useChangeDeliveryStateCharacterStatusMutation } from '@/infra/graphql/generated/graphql';

const useChangeDeliveryStatus = () => {
  const [{ data, fetching, error }, executeMutation] = useChangeDeliveryStateCharacterStatusMutation();

  return { data, fetching, error, executeMutation };
};

export default useChangeDeliveryStatus;
