import React from 'react'
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const {register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit= data => {
    console.log(data)
    navigate('/')
  };

  return (
    <div className='signup-container'>
    <form onSubmit={handleSubmit(onSubmit)}>
    <h1 className='signup'>Signup</h1>
    <label>Name</label>
      <input type="text" {...register('fullname', { required: true} )} placeholder='full name'></input>
      <div className='error'>
      {errors.fullname?.type === 'required' && 'Full Name is required'}
      </div>
      <label>Gender</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <label>Username</label>
      <input type="text" {...register('username', { required: true} )} placeholder=' username'></input>
      <label>Email</label>
      <input type="email" {...register('email', { required: true} )} placeholder='email'></input>
      <div className='error'>
      {errors.email?.type === 'required' && 'Email is required'}
      </div>
      <label>Password</label>
      <input type="password" {...register('password', { required: true} )} placeholder='password'></input>
      <div className='error'>
      {errors.password?.type === 'required' && 'Password is required'}
      </div>
      <label>Confirm Password</label>
      <input type="password" {...register('confirmpassword', { required: true} )} placeholder='confirm password'></input>
      <div className='error'>
      {errors.confirmpassword?.type === 'required' && 'Confirm Password is required'}
      </div>
      <label>Mobile No.</label>
      <input type="text" {...register('mobileno', { required: true} )} placeholder='mobile number'></input>
      <button className='send-button'>Send</button>

    </form>
    </div>
  )
}

export default SignUp
