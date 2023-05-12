import * as React from 'react';
import NotFound from '../assets/not_found.svg';
import Arrow from '../assets/arrow-right-circle.svg';
import { Link } from 'react-router-dom';
// function
export default function Error() {
  return (
    <div className="flex items-center justify-center h-[300px]">
      <img src={NotFound} className="w-[80%] max-w-[400px]" />
      <div className="w-full bg-white h-[50%] grid justify-items-center  items-center rounded-t-[46px] absolute bottom-0 left-0">
        <div className="grid justify-items-center">
          <h2 className="text-3xl	font-bold text-center text-color2">
            página não encontrada
          </h2>
          <h3 className="text-lg font-bold text-center text-color5">
            volte para pagina inicial
          </h3>

          <div className="p-24">
            <Link to={'/home'}>
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
