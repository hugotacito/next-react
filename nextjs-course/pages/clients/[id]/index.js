import { useRouter } from "next/router";

export default function Client() {
  const router = useRouter();
  function loadProjectHandler() {
    router.push(`/clients/${router.query.id}/Hugo`);
  }
  return (
    <div>
      <h1>The client #{router.query.id}</h1>
      <button onClick={loadProjectHandler}>Definir Nome para Hugo</button>
    </div>
  );
}
