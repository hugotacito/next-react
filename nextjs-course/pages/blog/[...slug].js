import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const slug = router.query.slug?.reduce(
    (oldObj, newObj) => oldObj + "-" + newObj
  );
  return (
    <div>
      <h1>Blog Post #{slug}</h1>
    </div>
  );
}
