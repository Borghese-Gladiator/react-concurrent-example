import React, { useState, useEffect } from 'react';

export default function UsersList() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data)
                    setUsers(data);
                });
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <ul>
            {users.map(({ id, name }) => {
                return (
                    <li key={id}>{name}</li>
                )
            })}
        </ul>
    )
}