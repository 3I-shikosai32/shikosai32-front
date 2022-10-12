import { useCreateUserMutation } from "../../generated/graphql";

const useCreateUserMutationHandler = () => {
	const [{ data, fetching }, executeMutation] = useCreateUserMutation();
  
	return { data, fetching, executeMutation };
  };
  
  export default useCreateUserMutationHandler;