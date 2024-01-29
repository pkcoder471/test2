import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let navigate = useNavigate();
    const Base_URL = "http://localhost:8000/api";
    const [currUser, setcurrUser] = useState({});

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/SignIn');
        }
        else {
            const getUser = async () => {
                const response = await fetch(`${Base_URL}/user/getUser`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'token': localStorage.getItem('token'),
                    },
                });
                const json = await response.json();
                setcurrUser(json);
            }
            getUser();
        }
    }, [])

    return (
        <div>
            <p>{currUser.name}</p>
            <p>{currUser.email}</p>
        </div>
    )
}

export default Home