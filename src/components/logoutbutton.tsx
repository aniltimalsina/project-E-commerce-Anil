import { useDispatch } from "react-redux";
import { logoutUser } from "../auth-thunk/auththunk";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
