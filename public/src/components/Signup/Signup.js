import React, { useState } from 'react';
import Input from '../../utils/Input/Input';
import { signup } from '../../actions/auth';

function Signup(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
      <div className='registration'>
          <div className="registration__header">Регистрация</div>
          <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
          <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
          <button className="registration__btn" onClick={() => signup(email, password)}>Войти</button>
      </div>
  );
}


export default Signup;
