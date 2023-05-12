import * as React from 'react';
import ImgLogin from '../assets/img_login.svg';
import { useNavigate } from 'react-router-dom';
import api from '.././services/api';
import { Link } from 'react-router-dom';

export default function Login() {
  const [nome, setNome] = React.useState('');
  const [password, setPassword] = React.useState('');
  async function logar() {
    try {
      const response = await api.post('/login', {
        nomeUsuario: nome,
        senha: password,
      });
      let token = response.data[0].token;
      let id = response.data[0].id;
      localStorage.setItem('token', token);
      localStorage.setItem('id_usuario', id);
      redirecionar('/tasks');
    } catch {
      alert('usuario ou senha invalidos');
      redirecionar('/');
    }
  }

  // Função de redirecionamento
  const navigate = useNavigate();
  const redirecionar = (rota) => {
    navigate(rota);
  };
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1 className="text-3xl	font-bold text-center text-color4">Login</h1>
        <img src={ImgLogin} alt="" className="w-[80%] max-w-[500px] m-auto" />

        <div className="grid grid-cols-1 md:gap-4 place-items-center">
          <label className="font-semibold text-lg" htmlFor="email">
            email
          </label>
          <input
            className="w-[305px] h-[50px] block bg-color1 m-0 mb-8 border border-color5 rounded-md placeholder:italic placeholder:text-sm px-2.5"
            type="text"
            id="email"
            placeholder="email ou nome de usuario"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label className="font-semibold text-lg" htmlFor="senha">
            senha
          </label>
          <input
            className="w-[305px] h-[50px] block bg-color1 m-0 mb-8 border border-color5 rounded-md placeholder:italic placeholder:text-sm px-2.5"
            type="text"
            id="senha"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-[325px] h-[50px] block bg-color4 m-0 border text-color5 font-semibold border-color5 rounded-md"
            onClick={() => logar()}
          >
            entrar
          </button>
        </div>
        <p className="text-color5 p-8">
          não tem uma conta?
          <Link to="/cadastro">
            {' '}
            <span className="text-color4">crie uma já</span>{' '}
          </Link>
        </p>
      </div>
    </div>
  );
}
