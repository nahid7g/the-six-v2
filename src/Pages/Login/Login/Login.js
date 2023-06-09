import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/actionCreators/userActions'
import Spinner from '../../../components/Loading/Spinner'

const Login = () => {
  const dispatch = useDispatch()
  const { loading, message, success } = useSelector((state) => state.loginUser)
  useEffect(() => {
    if (success) {
      window.location.reload()
    }
  }, [success])
  const handleLogin = (e) => {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    const theUser = {
      email,
      password,
    }
    dispatch(login(theUser))
    e.target.email.value = ''
    e.target.password.value = ''
  }
  return (
    <>
      <input type='checkbox' id='login-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='login-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <form onSubmit={handleLogin}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
              />
              <p className='text-red-600 my-3'>{!success && message}</p>
              <label className='label'>
                <small>Admin: nahidhasan2g@gmail.com</small>
              </label>
              <label>
                <small>Admin pass: hasan1234@A</small>
              </label>
            </div>
            {loading && <Spinner />}
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
