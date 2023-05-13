import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function FilmListPage(){
    const [Films,setFilms] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7017/Film")
        .then((res) => res.json())
        .then((filmek) => setFilms(filmek));
    }, []);

    return (
        <div>
            <h2>Filmek</h2>
            {Films.map((film) =>(
               <div className="card col-sm-4 d-inline-block m-auto p-2 bg-transparent border border-dark border-3 rounded-0" key={film.id}>
               <div className="row text-dark">
                   <div className='col-8'>{film.nev}</div>
                   <div className='col-4'>
                   <NavLink key="y" to={"/mod-film/" + film.id}>
                       <i className="bi bi-pencil-square text-dark"></i>
                   </NavLink> &nbsp;&nbsp;
                   <NavLink key="x" /*to={"/del-zaszlo/" + zaszlo.id}*/>
                       <i className="bi bi-x-square text-dark"></i>
                   </NavLink>
                   </div>  
               </div>

               <div className="card-body">
                   <NavLink key={film.id} /*to={"/zaszlo/" + zaszlo.id}*/>
                       <img alt={film.nev}
                           className="img-fluid border border-dark border-1"
                           style={{ height: 150, width: 250 }}
                           src={film.kepneve}/>
                    </NavLink>
                   <br />
                   <div className='float-start'>Kiadás éve: {film.kiadasEve}</div>
                   <br></br>
                   <div className="float-start">Ertekeles: {film.ertekeles}</div>
                   
               </div>
           </div>
            ))}
        </div>
        
    )
}
export default FilmListPage;