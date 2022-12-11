import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllCotacts = () => {

    const [allContacts, setAllContacts] = useState([]);
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/adress')
            .then(res => res.json())
            .then(data => setAllContacts(data))
    }, []);



    const handleDeleteContacts = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {

            fetch(`http://localhost:5000/contacts/${id}`, {

                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = contacts.filter(odr => odr._id !== id);
                        setContacts(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <div className='pr-5 lg:pr-20 pl-5'>
                <h2 className="text-3xl mt-10 mb-10">All Contacts</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Number</th>
                                <th>Details</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allContacts.map((allContacts, i) => <tr key={allContacts._id}>
                                    <th>{i + 1}</th>
                                    {/* <td>{allContacts.name}</td> */}
                                    <td>{allContacts.number}</td>
                                    <td><Link to={allContacts._id}><button className='btn btn-xs btn-danger'>Details</button></Link></td>
                                    <td><button onClick={() => handleDeleteContacts(allContacts._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                                    <td><Link to={allContacts._id}><button className='btn btn-xs btn-danger'>Edit</button></Link></td>


                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default AllCotacts;