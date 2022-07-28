import './register.css'

export default function Register() {
  return (
    <div className='container22'>
      <div className='wrapper22'>
        <h1 className='title22'>CREATE AN ACCOUNT</h1>
        <form className='form22'>
          <input placeholder="name" />
          <input placeholder="last name" />
          <input placeholder="username" />
          <input placeholder="email" />
          <input placeholder="password" />
          <input placeholder="confirm password" />
          <span className='agreement22'>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className='button22'>CREATE</button>
        </form>
      </div>
    </div>
  )
}
