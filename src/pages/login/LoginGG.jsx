import { useEffect, useState } from "react";
import { useAuth } from "../../components/context/AuthContext";
import "./_logingg.scss";

function LoginGG() {
  const { user, signInWithGoogle, logout } = useAuth();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (user) {
      const { displayName, email } = user;
      setUserData({ displayName, email });
    }
  }, [user]);

  return (
    <div>
      {!user ? (
        <button
          onClick={signInWithGoogle}
          type="button"
          className="login-with-google-btn"
        >
          Sign in with Google
        </button>
      ) : (
        <div className="wrapper">
          <div className="profile-card js-profile-card">
            <div className="profile-card__img">
              <img src="src/assets/web/HoangDuc.jpg" alt="profile card" />
            </div>
            <div className="profile-card__cnt js-profile-cnt">
              <div className="profile-card__name">{userData.displayName}</div>
              <div className="profile-card__txt">{userData.email}</div>
              <div className="profile-card-loc"></div>
              <div className="profile-card-ctr">
                <button
                  className="profile-card__button button--orange"
                  onClick={logout}
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginGG;
