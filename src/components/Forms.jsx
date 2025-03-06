import React, { useRef, useState } from 'react';
// controlled component va uncontrolled




function Forms() {

   
    const handleSubmit = (e) => {
        e.preventDefault();
        const forma = new FormData(e.target);
        const product = Object.fromEntries(forma.entries())
        console.log(product)

    }
    console.log("rendering...")
    return (
        <div className='h-screen w-screen flex justify-start items-center flex-col gap-5 pt-10'>
            <h1>Mahsulot qoshishk</h1>
            <form onSubmit={handleSubmit} className='w-96 bg-blue-500 p-5 rounded-2xl flex flex-col gap-4' action="">
                <input name='nom'

                    className='bg-white p-2 outline-none rounded-sm' type="text" placeholder='nomi' />
                <input name='narx' className='bg-white p-2 outline-none rounded-sm' type="number" placeholder='narxi' />

                <select name="rang"

                    className='bg-white p-2 outline-none rounded-sm' id="">
                    <option value="Oq">Oq</option>
                    <option value="Sariq">Sariq</option>
                    <option value="Qora">Qora</option>
                    <option value="Yashil">Yashil</option>
                </select>
                <textarea
                    name={"desc"}

                    className='bg-white p-2 outline-none rounded-sm h-40' id="" placeholder='mahsulot haqida'>

                </textarea>
                <button className='bg-black text-white p-2 rounded-lg cursor-pointer'>Kiritish</button>
            </form>
        </div>
    )
}

export default Forms