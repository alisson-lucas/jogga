import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

import './styles.css'

import api from '../../services/api';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  async function onSubmit(data) {
    

    try {
      const response = await api.post('/', data);

      alert('cadastrado com sucesso');
      // alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }
    
  return (
      <div className="form-container">
          <div className="form-header">
            <span>SOLUÇÕES PERSONALIZADAS PARA SUA EMPRESA. FALE CONOSCO</span>
          </div>
          <div className="form-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <span id="nome">NOME</span>
              <input id="name" type="text" value={name} name="name" ref={register({
                required: "Enter your name"
              })}  onChange={e => setName(e.target.value)}/>
              {errors.name && <p className="error">{errors.name.message}</p>}
              <span id="mail">E-MAIL</span>
              <input id="email" type="email" value={email} name="email" ref={register({
                required: "Enter your e-mail",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter a valid e-mail address",
                },
              })} onChange={e => setEmail(e.target.value)}/>
              {errors.email && <p className="error">{errors.email.message}</p>}
              <span id="telefone">TELEFONE</span>
              <input id="phone" type="text" value={phone} name="phone" ref={register({
                required: "Enter you phone number"
              })} onChange={e => setPhone(e.target.value)}/>
              {errors.phone && <p className="error">{errors.phone.message}</p>}
              <button className="button-submit" type="submit">ENVIAR</button>
            </form>
          </div>
      </div>
    );
}

export default Form;