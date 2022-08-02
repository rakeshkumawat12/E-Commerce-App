import "./login.css"

export default function Login() {
  return (
    <div className="container11">
      <div className="wrapper11">
        <h1 className="title11">SIGN IN</h1>
        <form className="form11">
          <input className="input11" placeholder="username" />
          <input className="input11" placeholder="password" />
          <button className="button11">LOGIN</button>
          <a className="link11">FORGET PASSWORD?</a>
          <a className="link11">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  )
}
