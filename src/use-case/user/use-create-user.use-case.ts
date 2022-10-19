import type { UseMutationResponse } from 'urql';
import { CreateUserMutation, Exact, useCreateUserMutation, UserCreateInput } from '@/infra/graphql/generated/graphql';

export type UseCreateUserUseCaseResult = {
  data:
    | UseMutationResponse<
        CreateUserMutation,
        Exact<{
          data: UserCreateInput;
        }>
      >['0']['data']
    | undefined;
  fetching: UseMutationResponse<
    CreateUserMutation,
    Exact<{
      data: UserCreateInput;
    }>
  >['0']['fetching'];
  error:
    | UseMutationResponse<
        CreateUserMutation,
        Exact<{
          data: UserCreateInput;
        }>
      >['0']['error']
    | undefined;
  executeMutation: UseMutationResponse<
    CreateUserMutation,
    Exact<{
      data: UserCreateInput;
    }>
  >['1'];
};

const useCreateUserUseCase = (): UseCreateUserUseCaseResult => {
  const [{ data, fetching, error }, executeMutation] = useCreateUserMutation();

  return { data, fetching, error, executeMutation };
};

export default useCreateUserUseCase;
