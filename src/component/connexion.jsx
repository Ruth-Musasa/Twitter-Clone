import React, { useContext, useState } from 'react';
export default function Connexion() {
    return (
        <div className=" w-96">
            <h2 className="text-2xl font-bold pb-10">Connectez‑vous à Twitter</h2>
                <label htmlFor="">Name</label>
                <input type="text" className='text-xl h-12 border-[1px] border-gray-900 p-4 w-full' name="name" id='name'/>
                <label htmlFor="">Email</label>
                <input type="text" className='text-xl h-12 border-[1px] border-gray-900 p-4 w-full' name="email" id='nemail'/>
                <label htmlFor="">Mots de passe</label>
                <input type="text" className='text-xl h-12 border-[1px] border-gray-900 p-4 w-full' name="code" id='code' />
                <button type='submit' className="btn-primary h-12 w-40 mt-10" on>Connexion</button>
        </div>
    )
}
