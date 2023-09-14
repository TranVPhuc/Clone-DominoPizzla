import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import { signOut } from "../../firebase/FirebaseConfig";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
   await signOut();

  };

  if (!user) {
    return <Navigate replace to="/login" />;
  }
  return (
    <>
      <h1>Profile</h1>
 <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;