import Link from "next/link";

export default function Index() {
    return (
        <>
            <p>blog list </p>
            <Link href= "blog/create"> create new blog</Link>
        </>
    );
}

