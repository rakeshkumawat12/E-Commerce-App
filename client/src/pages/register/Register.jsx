import './register.css'

export default function Register() {
  return (
    <div className='container14'>
      <div className='wrapper14'>
        <h1 className='title14'>CREATE AN ACCOUNT</h1>
        <form className='form14'>
          <input className='input14' placeholder="name" />
          <input className='input14' placeholder="last name" />
          <input className='input14' placeholder="username" />
          <input className='input14' placeholder="email" />
          <input className='input14' placeholder="password" />
          <input className='input14' placeholder="confirm password" />
          <span className='agreement22'>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className='button14'>CREATE</button>
        </form>
      </div>
    </div>
  )
}
