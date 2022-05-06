import { useAuth0 } from "@auth0/auth0-react";
import Menu from "./menu.js";

export const Profile = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="z-index5">
        
      </div>
    )
  );
};
