import { useUser } from "@auth0/nextjs-auth0";

export default function Perfil() {
  const { user } = useUser();
  return (
    <div>
      <img alt="Foto de usuario" src={user.picture} />
      <p>Nombre: {user.name}</p>
      <p>Nombre de usuario: {user.nickname}</p>
      <p>Nombre de email: {user.email}</p>
    </div>
  );
}
