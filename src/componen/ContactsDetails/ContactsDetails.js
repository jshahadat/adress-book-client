import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ContactsDetails = () => {
    const { number, name, homeTown, currentCity } = useLoaderData()
    console.log(number);
    return (
        <div className='pr-5 lg:pr-20 pl-5'>
            <h2 className="text-3xl mt-10 mb-10">Single Contact Details</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact Number</th>
                            <th>Home Town</th>
                            <th>Current City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>


                            <td>{name}</td>
                            <td>{number}</td>
                            <td>{homeTown}</td>
                            <td>{currentCity}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactsDetails;