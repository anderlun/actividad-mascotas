import React from 'react';
import Link from 'next/link';
import "../globals.css";

function Page() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-blue-200'>
        <div className='container-login w-[360px] h-[640px] flex flex-col justify-end rounded-[30px] p-3'>
            <div className='flex flex-col gap-3'>
                <input type="email" placeholder='Correo electronico' className='px-4 py-[10px] rounded-[50px] bg-white bg-opacity-60 placeholder-blue-400 outline-none'/>
                <input type="password" placeholder='Contraseña' className='px-4 py-[10px] rounded-[50px] bg-white bg-opacity-60 placeholder-blue-400 outline-none'/>
                <Link href="/mascotas">
                    <button className='bg-blue-800 hover:bg-blue-700 py-[10px] w-full rounded-full text-white text-[1em]'>Ingresar</button>
                </Link>

                <Link href="/users">
                    <button className='bg-blue-800 hover:bg-blue-700 py-[10px] w-full rounded-full text-white text-[1em]'>registrar</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Page;
