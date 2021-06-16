import {useState} from "react"

export default () => {
    const [joke, setAcudit] = useState("");

    const acudit = () => {
        fetch('https://icanhazdadjoke.com/', {
            method: "GET",
            headers: {
            Accept: "application/json",
      },
        }) 

        .then(quote => quote.json())
        .then(quote => setAcudit(quote.joke)); 
    };

    return (
        <main>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="card text-center">
                            <div className="card-body">
                            <h5 className="card-title">Preparado para reirte? 😂 😂 😂 </h5>
                            <p id="card-text" className="card-text">{joke}</p>
                            <a href="#" id= "btn" className="btn btn-info btn-lg" onClick={() => acudit()}>Siguiente broma</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
