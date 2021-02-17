import { useRef, useState } from 'react'
import { USER, PASSWORD } from './StaticData';
export default function Login({ setislogin }) {
    const [erreur, seterreur] = useState(false)
    const User = useRef("");
    const Password = useRef("");
    return (
        <div className="container text-center mt-5 login">
            {erreur ? <div class="alert alert-danger" role="alert">
                Erreur de mot de passe !
                      </div> : ''}
            <h1>Connectez-vous !</h1>
            <h4>Bienvenue </h4>
            <img src='/icon.png' height="180px" />
            <div className="mt-5">
                <div className="form-group row ">
                    <label htmlFor="staticEmail" className="offset-2 col-sm-2 col-3 col-form-label ">CIN</label>
                    <div className="col-sm-5 col-5 ">
                        <input ref={User} type="text" className="form-control" id="staticEmail" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className=" offset-2 col-sm-2 col-3 col-form-label">Mot de passe</label>
                    <div className="col-sm-5 col-5">
                        <input ref={Password} type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary offset-1 mb-2" onClick={() => { User.current.value === USER && Password.current.value === PASSWORD ? setislogin(true) : seterreur(true) }}>Connectez-vous!</button>
            </div>
        </div>
    )
}
