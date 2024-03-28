import { useRouter } from "next/router";

export default function ClientName() {
  const router = useRouter();
  return (
    <div>
      <h1>
        The client #{router.query.id} name is {router.query.name}
      </h1>
    </div>
  );
}
