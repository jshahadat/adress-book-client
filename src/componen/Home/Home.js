import React, { useEffect, useState } from 'react';
import AllCotacts from './AllCotacts';

const Home = () => {
    const [addAdress, setAdress] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/adress', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('acessToken')}`
            }
        })

            .then(res => res.json())
            .then(data => setAdress(data))
    }, []);

    const handleAddBook = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const number = form.number.value
        const homeTown = form.homeTown.value;
        const currentCity = form.currentCity.value;

        const adressBook = {
            name,
            number,
            homeTown,
            currentCity

        }
        fetch('http://localhost:5000/adress', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adressBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>

            <div>
                <form onSubmit={handleAddBook}>
                    <section className="flex mr-10 ml-10 justify-center">
                        <div className="bg-gray-100 flex rounded-2xl shadow-lg  lg:w-fit w-96 p-5 items-center">

                            <div className='flex justify-center'>
                                <div className="">
                                    <h2 className="font-bold text-2xl text-[#002D74]">Address Book</h2>
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
            </div>
            <div>
                <AllCotacts></AllCotacts>
            </div>
        </div>
    );
};

export default Home;