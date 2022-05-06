import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="logout hover"
      onClick={() => logout()}
    >
      Salir
    </button>
  );
};
