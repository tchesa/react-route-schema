import { FormEvent } from 'react'
import useInputChange from '../hooks/useInputChange'
import { login } from '../store/auth'
import useAppDispatch from '../hooks/useAppDispatch'

const Login = () => {
  const [email, setEmail] = useInputChange('')
  const [password, setPassword] = useInputChange('')
  const dispatch = useAppDispatch()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    console.log('submit', email, password)
    dispatch(login({ email, password }))
  }

  return (
    <>
    <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="E-mail" value={email} onChange={setEmail} />
        <input type="password" placeholder="Password" value={password} onChange={setPassword} />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
