import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: 1, name: "Max" },
    { id: 2, name: "Manuel" },
    { id: 3, name: "Hugo" },
  ];
  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: `clients/[id]`,
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
