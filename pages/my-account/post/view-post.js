export default function ViewPost() {
    
    return (<>
        <div>
<h2>post list</h2>
        </div>
    </>
    );
}


export async function getServerSideProps(context) {
    
    return {
      props: {}, // will be passed to the page component as props
    }
  }