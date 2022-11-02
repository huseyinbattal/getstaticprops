import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({users}) {
  return (
    <div className={styles.container}>
      <div className="user-table">
        <table id="users">
          <tr>
            <th>Name</th>
            <th>Details</th>
          </tr>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <Link
                style={{
                  color: "#4caf50",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px",
                }}
                href={`/users/${user.id}`}
              >
                View Details
              </Link>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  
  const res = await fetch("https://jsonplaceholder.typicode.com/users")

  const users = await res.json();

  return {
    props: {
      users
    }
  }
  

}
