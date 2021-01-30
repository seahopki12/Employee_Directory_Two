import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";


function Table() {
    const { users } = useContext(UserContext);

    return (
        <div>
            <div className="container-md">
                {
                    users.map(user => {
                        return (
                            <div className="row">
                                <div className="col-md-3">{user.id}</div>
                                <div className="col-md-3">{user.login}</div>
                                <div className="col-md-3">{user.url}</div>
                                <div className="col-md-3">{user.type}</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Table;