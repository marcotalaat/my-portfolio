import React, { useEffect, useState } from 'react';
import './admin.css';
import { AdminCard } from './adminCard';
import axios from 'axios';

const Admin = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        window.addEventListener("load", function(){
            const getData = async() => {
                const {data} = await axios.get("https://64f03e748a8b66ecf77955b1.mockapi.io/views/");
                setState(data)
            }
            getData();
        })
    }, [])

    console.log(state)

    return(
        <section className="admin">
            <div className="container">
                <h1>Welcome Admin</h1>
                <hr />
                <h3>Numbers of</h3>
                <div className="row">
          
                    {state.map(data => (

                    <AdminCard key={data.id} title={data.title} counter={data.counter} />
                    ))}
{/*                     <div className="col-md-4">
                        <div className='admin-card'>
                            <p>Views 20</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='admin-card'>
                            <p>CV Downloaded 20</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='admin-card'>
                            <p>LaCosta 20</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='admin-card'>
                            <p>Powerfull 20</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='admin-card'>
                            <p>Katameros 20</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='admin-card'>
                            <p>Globe 20</p>
                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    )
}
export default Admin;