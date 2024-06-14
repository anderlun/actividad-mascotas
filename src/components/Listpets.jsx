"use client"
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { FaPencilAlt } from "react-icons/fa";
import axios from 'axios';
import Link from 'next/link';

function Listpets() {


const [pets, setPets] = useState([])

const listarPets = async() =>{
    await axios.get('/api/mascota')
    .then(response =>{
        setPets(response.data)
    })
    console.log(pets)
}

const eliminarPet = async(id) =>{
    const response = await axios.delete(`/api/mascota/${id}`)
    if(response){
        alert('mascota eliminada')
        listarPets();
    }
}

useEffect(()=>{
    listarPets();
}, [])

  return (
    <div className='overflow-auto mt-3 h-[80%]'>
        {pets.map(pet => (
            <div key={pet.id} className='flex justify-between items-center bg-gray-200 hover:bg-gray-300 p-4 my-3 rounded-xl'>
                <div className='flex items-center gap-4'>
                    <img className='h-[65px] w-[65px] bg-yellow-400 rounded-full' src={`/img/${pet.photo}`} alt='foto perro' />
                    <div>
                        <p className='font-bold'>{pet.name}</p>
                        <p className='text-[0.8em]'>{pet.race_id}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Link href={`/mascotainfo/${pet.id}`} className='h-[35px] w-[35px] flex justify-center items-center rounded-full bg-blue-700 hover:bg-blue-600 text-white text-xl' ><ImSearch/></Link>
                    <button className='h-[35px] w-[35px] flex justify-center items-center rounded-full bg-blue-700 hover:bg-blue-600 text-white text-xl' ><FaPencilAlt/></button>
                    <button onClick={()=>{eliminarPet(pet.id)}} className='h-[35px] w-[35px] flex justify-center items-center rounded-full bg-red-600 hover:bg-red-500 text-white text-xl' ><AiFillDelete/></button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Listpets