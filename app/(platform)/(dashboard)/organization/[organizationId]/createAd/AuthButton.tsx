import React from "react";
import styles from "../../../../../../styles/AuthButton.module.css";

const AuthButton: React.FC = () => {
  const handleAuth = () => {
    const facebookOAuthUrl = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_FACEBOOK_REDIRECT_URI}&scope=pages_manage_posts,instagram_content_publish`;

    // Redirect to Facebook's OAuth page
    window.location.href = facebookOAuthUrl;
  };

  return (
    <button onClick={handleAuth} className={styles.authButton}>
      Authenticate with Facebook
    </button>
  );
};

export default AuthButton;