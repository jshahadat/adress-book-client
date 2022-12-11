import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EdittedContacs = () => {
    const { edit, _id } = useLoaderData();
    const [edited, setEdited] = useState(edit)

    const handleEditReview = event => {

        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const edits = {
            comment,
        }

        fetch(`http://localhost:5000/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(edits)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                }
            })
            .catch(er => console.error(er));

    }
    return (
        <form onSubmit={handleEditReview}>
            <section className="flex mr-10 ml-10 justify-center">
                <div className="bg-gray-100 flex rounded-2xl shadow-lg  lg:w-fit w-96 p-5 items-center">

                    <div className='flex justify-center'>
                        <div className="">
                            <h2 className="font-bold text-2xl text-[#002D74]">Edit Address Book</h2>
                            <div className='lg:flex'>
                                <div className=' pb-6 lg:mr-6'>
                                    <input className="p-2 w-full  rounded-xl border" type="text" name="name"
                                        placeholder="Add Your Name" required />
                                </div>
                                <div className="relative  ">
                                    <input className="p-2 w-full rounded-xl border" type="number" name="number" placeholder="Add Contact Number" required />
                                </div>
                            </div>
                            <div className='lg:flex mt-5'>
                                <div className="relative pb-6 lg:mr-6">
                                    <input className="w-full p-2 rounded-xl border" type="text" name="homeTown" placeholder="Add Your Home Town" required />
                                </div>
                                <div className="relative">
                                    <input className="p-2 w-full rounded-xl border" type="text" name="currentCity" placeholder="Add Your Current City" required />
                                </div>
                            </div>
                            <div className='mt-5'>
                                <input className='btn' type="submit" value="Submit Your Service" />
                            </div>
                        </div>

                    </div>
                </div>

            </section>



        </form>
    );
};

export default EdittedContacs;