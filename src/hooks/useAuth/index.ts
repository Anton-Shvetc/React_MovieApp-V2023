import { useContext } from "react";
import { AuthContext } from "../../AuthContext/index";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
