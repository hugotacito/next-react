import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const { id } = useRouter().query;
  return (
    <div>
      <h1>Project Page #{id}</h1>
    </div>
  );
}
