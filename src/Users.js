import React from 'react'
import firebase from './firebase';
import { useEffect, useState } from 'react'
let sup = (id) => {
    const user = firebase.database().ref("Utilisateurs").child(id).remove();
}
export default function Users() {
    const [data, setdata] = useState([])
    useEffect(() => {
        const users = firebase.database().ref("Utilisateurs");
        users.on('value', (snapshot) => {
            var data = snapshot.val()
            //var Arrdata = Object.values(data)
            var Arrdata = [];
            for (let id in data)
                Arrdata.push({ id, ...data[id] })
            setdata(Arrdata);
        });
    }, []);
    var tds = data?.map(user => {
        return (
            <tr>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.nom}</td>
                <td>{user.sex}</td>
                <td>{user.date}</td>
                <td><button className='btn btn-danger' >Blocker</button> <button className='btn btn-danger' onClick={() => sup(user.id)}>Supprimer</button></td>
            </tr >
        )
    });
    return (
        <div className='container'>
            <strong style={{ float: "right", margin: "3px", fontSize: '2rem', }}>Bienvune Admin</strong>
            <br />
            <br />

            <h1 style={{ textAlign: 'center' }}>Liste des utilisateurs</h1>
            <br />
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Ajouter un utilisateur</button>
            <br />
            <br />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Date</th>
                        <th scope="col" style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tds}
                </tbody>
            </table>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ajouter un utilistaeur</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Nom</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Email</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Mot de passe</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Sex</label>
                                    <select className="form-control" >
                                        <option>
                                            Male
                                        </option>
                                        <option>
                                            Female
                                        </option>
                                    </select>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                            <button type="button" className="btn btn-primary">Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
