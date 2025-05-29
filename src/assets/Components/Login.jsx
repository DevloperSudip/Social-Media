import styles from "./Login.module.css";

const Login = () => {
  return (
    <form className={styles.loginForm}>
      <div>
        <center>
          <h3>
            <b>Login Here</b>
          </h3>
        </center>
      </div>
      <br />
      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className={`${styles.loginChar} form-label`}
        >
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleInputPassword1"
          className={`${styles.loginChar} form-label `}
        >
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Login;
