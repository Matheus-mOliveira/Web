import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <nav>
        <ul>
          <li>
            <a href="https://www.google.com" target="_blank">
              Google
            </a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </>
  );
}