import Link from "next/link";

export default function Users() {
    return (
        <>
        <Link href="users/user-list">
           <h2>user list
            </h2> 
        </Link>
        <Link href="users/create-user">
           <h2>create User
            </h2> 
        </Link>
        </>
    );
}

