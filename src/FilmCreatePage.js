import { useNavigate } from "react-router-dom";

export function FilmCreatePage(){
    const navigate = useNavigate();
    return (
        <div>
            <h2>Új Film</h2>
            <form
                onSubmit={(event) => {
                    event.persist();
                    event.preventDefault();
                    fetch(`https://localhost:7017Film`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            nev: event.target.elements.nev.value,
                            kiadasEve: event.target.elements.kiadaseve.value,
                            ertekeles: event.target.elements.ertekeles.value,
                            kepneve: event.target.elements.kepneve.value,
                        }),
                    })
                    .then(() =>
                    {
                        navigate("/");
                    })}}>
                <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Film név:</label>
                <div className="col-sm-9">
                <input type="text" name="nev" className="form-control bg-transparent border border-dark border-2 rounded-0" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Kiadás éve:</label>
                <div className="col-sm-9">
                <input type="number" name="kiadaseve" className="form-control bg-transparent border border-dark border-2 rounded-0" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Értékelés:</label>
                <div className="col-sm-9">
                <input type="number" name="ertekeles" className="form-control bg-transparent border border-dark border-2 rounded-0" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Kép név:</label>
                <div className="col-sm-9">
                <input type="text" name="kepneve" defaultValue=".jpg" className="form-control bg-transparent border border-dark border-2 rounded-0" />
                </div>
            </div>
            <button type="submit" className="btn btn-transparent border border-dark border-2 rounded-0">
                Küldés
            </button>
            </form>
        </div>
    )
}
export default FilmCreatePage;