import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../../utils/Input/Input';
import { fetchUserAC } from '../../../redux/actionCreators';

function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  return (
    <div className='registration'>
      <div className="registration__header">Авторизация</div>
      <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..." />
      <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
      <button className="registration__btn" onClick={() => dispatch(fetchUserAC({ email, password }))}>Войти</button>
    </div>
  );
}


export default Signin;
