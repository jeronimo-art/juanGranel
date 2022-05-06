import { useUser } from "@auth0/nextjs-auth0";

export default function Cursos_user() {
  const { user } = useUser();
  return (
    <div>
      <p>cursos</p>
    </div>
  );
}