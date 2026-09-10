function Login() {
  return (
    <div>
      <h1>Login</h1>

      <form>
        <div>
          <label>Username</label>
          <input type="text" />
        </div>

        <div>
          <label>Password</label>
          <input type="password" />
        </div>

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login