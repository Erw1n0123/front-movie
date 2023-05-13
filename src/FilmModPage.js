import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function FilmModPage(){
    const params = useParams();
    const id = params.filmId;
    const navigate = useNavigate();
    const [film,setFilm] = useState([]);


    useEffect(() => {
        (async() => {
            try{

            const res = await fetch(`https://localhost:7017/Film/${id}`)
                const Film = await res.json();
                setFilm(Film);
                console.log(Film);
                
            }
            catch(error) {
                console.log(error);
            }
        })
        ();
    }, []);
    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Film módosítása</h2>
            <form
            onSubmit={(event) => {
                event.persist();
                event.preventDefault();
                fetch(`https://localhost:7017/Film/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: event.target.elements.id.value,
                        Nev: event.target.elements.nev.value,
                        KiadasEve: event.target.elements.kiadaseve.value,
                        ertekeles: event.target.elements.ertekeles.value,
                        kepneve: event.target.elements.kepneve.value
                    }),
                })
                .then(() => {
                    navigate("/");
                });
            }}>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Film ID:</label>
                    <div className="col-sm-9">
                        <input type="text" name="id" className="form-control bg-transparent border border-dark border-2 rounded-0" value={film.id}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Film név:</label>
                    <div className="col-sm-9">
                        <input type="text" name="nev" className="form-control bg-transparent border border-dark border-2 rounded-0" defaultValue={film.nev}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Kiadás éve:</label>
                    <div className="col-sm-9">
                        <input type="text" name="kiadaseve" className="form-control bg-transparent border border-dark border-2 rounded-0" defaultValue={film.kiadasEve}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Értékelés:</label>
                    <div className="col-sm-9">
                        <input type="text" name="ertekeles" className="form-control bg-transparent border border-dark border-2 rounded-0" defaultValue={film.ertekeles}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Kép név:</label>
                    <div className="col-sm-9">
                        <input type="text" name="kepneve" className="form-control bg-transparent border border-dark border-2 rounded-0" defaultValue={film.kepneve}/>
                    </div>
                </div>
                <img src={film.kepneve} height="200px" width="300px" className='border border-dark border-2 rounded-0' alt={film.nev}/>
                <br></br>
                <button type="submit" className="btn btn-transparent border border-dark border-2 rounded-0 m-2">Küldés</button>
            </form>
        </div>
    )
}
export default FilmModPage;