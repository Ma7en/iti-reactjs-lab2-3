/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function List({ tasks, handleDelete }) {
    const { name, id } = tasks;

    return (
        <>
            <li>
                <span>{name}</span>
                <div className="div-btn">
                    {/* <button className="edit-btn">Edit</button> */}
                    <button
                        className="delete-btn"
                        onClick={() => {
                            handleDelete(id);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </li>
        </>
    );
}

export default List;
