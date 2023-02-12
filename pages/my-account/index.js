import Link from "next/link";

export default function Index() {
  return (
    <>
    <Link href="/my-account/add-blog">
      <p>add blog</p>
        
    </Link>
    <Link href="/my-account/add-animal">
      <p>add animal</p>
        
    </Link>
      <p>user info</p>
    </>
  );
}
