import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function UserDetails({ user }) {
  return (
    <div className={styles.container}>
      <table id="users" className="table-user">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>WebSite</th>
        </tr>

          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
          </tr>

          </table>
          
          <Link href="/">
              Go Back
          </Link>

    </div>
  );
}

export const getServerSideProps = async (context) => {

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
    
    const user = await res.json();

    return {
        props: {
            user
        }
    }
    
};
