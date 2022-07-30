import "./login.css"

export default function Login() {
  return (
    <div className="container21">
      <div className="wrapper21">
        <h1 className="title21">SIGN IN</h1>
        <form className="form21">
          <input placeholder="username" />
          <input placeholder="password" />
          <button className="button21">LOGIN</button>
          <a className="link">FORGET PASSWORD?</a>
          <a className="link">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  )
}
