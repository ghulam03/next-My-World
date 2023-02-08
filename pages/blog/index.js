import Link from "next/link";

export default function Index() {
    return (
        <>
            <p>blog page</p>
            <Link href= "blog/create"> create new blog</Link>
        </>
    );
}

