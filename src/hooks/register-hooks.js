import { useMutation } from "react-query";
import registerService from "../services/register-service";

const useRegisterUser = () => {
  return useMutation((data) => registerService.createUser(data));
};

export { useRegisterUser };
