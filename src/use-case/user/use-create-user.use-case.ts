import { useCreateUserMutation } from '@/infra/graphql/generated/graphql';

const useCreateUserUseCase = () => {
  const [{ data, fetching, error }, executeMutation] = useCreateUserMutation();

  return { data, fetching, error, executeMutation };
};

export default useCreateUserUseCase;
