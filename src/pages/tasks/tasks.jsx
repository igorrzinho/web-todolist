import * as React from 'react';
import Circle from '../../assets/circle.svg';
import Task from './task';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
export default function Tasks() {
  const id_usuario = localStorage.getItem('id_usuario');
  const [task, setTask] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [textTask, setTextTask] = React.useState('');
  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  const date = new Date();
  const months = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ];
  async function changeTask(id, complete) {
    try {
      await api.put(`/puttask/${id}`, {
        complete: complete,
      });
    } catch {
      alert('erro ao mudar tarefa');
    }
  }
  async function deleteTask(id) {
    try {
      await api.delete(`/deletetask/${id}`);
    } catch {
      alert('erro ao deletar tarefa');
    }
  }
  async function handleKey(e) {
    if (e.key == 'Enter') {
      try {
        const response = await api.post(`/addtask/${id_usuario}`, {
          task: textTask,
        });
        console.log(response.data);
      } catch {
        alert('erro ao adicionar tarefa');
      }
    }
  }
  React.useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);

  React.useEffect(() => {
    getTasks();
  }, [data]);
  async function getTasks() {
    try {
      const resTasks = await api.get(`/selecttask/${id_usuario}`);
      const dados = resTasks.data;
      setData(dados);
      var a = 0;
      dados.forEach((d) => {
        if (d.complete == 0) {
          a++;
        }
      });
      setTask(a);
    } catch {}
  }
  return (
    <div className="">
      <header className="w-full md:bg-color5 h-20 flex justify-center">
        <div>
          <nav>
            <ul>
              <li className="mb-8">
                <h2 className="font-semibold text-color4">
                  {date.getDate() +
                    ' ' +
                    months[date.getMonth()] +
                    ' ' +
                    date.getFullYear()}
                </h2>
              </li>
              <li className="text-color4">
                {task} {task == 1 ? 'tarefa' : 'tarefas'} para fazer
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex justify-center">
        <div className="">
          <div className="w-72 px-8 md:w-[calc(500px-2rem)] h-[50px] block bg-color1 m-0 my-8 rounded-md flex items-center">
            <label className="w-5 h-5" htmlFor="task">
              <img src={Circle} alt="" />
            </label>
            <input
              className="placeholder:italic placeholder:text-sm px-2.5 bg-color1 h-[50px] w-full"
              type="text"
              id="task"
              placeholder="escreva uma tarefa ..."
              value={textTask}
              onKeyDown={(e) => handleKey(e)}
              onChange={(e) => setTextTask(e.target.value)}
            />
          </div>
          <div>
            {data.map((d) => (
              <Task
                key={d.id}
                id={d.id}
                complete={d.complete}
                nameTask={d.task}
                changeTask={() => changeTask(d.id, d.complete == 0 ? 1 : 0)}
                deleteTask={() => deleteTask(d.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
