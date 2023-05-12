import * as React from 'react';
import ImgHome from '../assets/imgHome.svg';
import { Link } from 'react-router-dom';
import Arrow from '../assets/arrow-right-circle.svg';

export default function Home() {
  let token = localStorage.getItem('token');
  const [logado, setLogado] = React.useState(user);
  const [id, setId] = React.useState(1);
  const [data, setData] = React.useState([]);
  function user() {
    if (!token) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <div className="flex items-center justify-center h-[300px]">
      <img src={ImgHome} className="w-[80%] max-w-[500px]" />
      <div className="w-full bg-white h-[50%] grid justify-items-center  items-center rounded-t-[46px] absolute bottom-0 left-0">
        <div className="grid justify-items-center">
          <h2 className="text-3xl	font-bold text-center text-color2">
            Organize Suas Tarefas Diarias
          </h2>
          <div className="p-24">
            <Link to={logado ? '/tasks' : '/cadastro'}>
              <div className="bg-color2 rounded-full hover:scale-125">
                <img src={Arrow} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
