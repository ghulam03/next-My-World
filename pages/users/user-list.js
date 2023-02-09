export default function UserList() {
    return (
        <>
            <p>user list</p>
        </>
    );
}


export async function getStaticProps(ctx){


    return {
        props:{
            data:null
        }
    }
}
