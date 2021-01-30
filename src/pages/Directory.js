import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import Dropdowns from "../components/Dropdowns";
import Table from "../components/Table";

function Directory() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [search, setSearch] = useState("");
    // const [userIndex, setUserIndex] = useState(0);

    useEffect(() => {
        loadUsers();
    }, []);

    function loadUsers() {
        API.getUsers()
            .then(users => {
                setUsers(users);
                setUser(users[0]);
            })
            .catch(err => console.log(err));
    };

    function objAsc(a, b) {
        const bandA = a.login.toUpperCase();
        const bandB = b.login.toUpperCase();
        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }

    function objDesc(a, b) {
        const bandA = a.login.toUpperCase();
        const bandB = b.login.toUpperCase();
        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison * -1;
    }

    function sortByLoginAsc() {
        setUsers([...users].sort(objAsc));
    };

    function sortByLoginDesc() {
        setUsers([...users].sort(objDesc));
    };

    function sortByIdAsc() {
        setUsers([...users].sort((a, b) => a.id - b.id));
    };

    function sortByIdDesc() {
        setUsers([...users].sort((a, b) => b.id - a.id));
    };

    function handleInputChange (event) {
        setSearch(event.target.value);
        filterByLogin();
      };

    function filterByLogin() {
        setUsers([...users].filter(e => {
            // return e.login.toLowerCase().includes(search.toLowerCase());
            return e.login.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        }));
    } 

    return (
        <UserContext.Provider value={{ user, users, sortByIdAsc, sortByIdDesc, sortByLoginAsc, sortByLoginDesc, search, handleInputChange }}>
            <div>
                <Dropdowns />
                <Table />
            </div>
        </UserContext.Provider>
    );
}

export default Directory;