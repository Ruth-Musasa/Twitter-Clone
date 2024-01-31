export default function EditProfil() {
    const handleChange = (e) => {
        e.preventDefault()
        const form = e.target
        let data = new FormData(form);
        let user = Object.fromEntries(data)
        form.reset()
        let changeUser =
        {
            'profil': user.profil,
            'name': user.name,
            'username': user.username,
            "isVerified": true,
            "thumbnailUrl": user.image
        }
    }
    return (
        <div className=" p-4 ">
            <h2 className="text-2xl font-bold pb-10">Edit Profil</h2>
            <form onSubmit={handleChange} className="" >
                <div className="text-lg font-bold flex flex-col ">
                    <label htmlFor=""> Profil</label>
                    <div className="border-[1px] border-gray-900 h-32 text-center">
                        <span className="text-gray-500 "> Selectionez une photo</span>
                        <input type="file" className='h-32 text-xl p-4 w-full opacity-0' placeholder='Profil' name="image" id="image" />
                    </div>
                    <label htmlFor=""> Name</label>
                    <input type="text" className='text-xl h-12 border-[1px] border-gray-900 p-4 w-full' name="name" id='name' />
                    <br />
                    <label htmlFor=""> Username</label>
                    <input type="text" className=' text-xl h-12 border-[1px] border-gray-900 p-4 w-full' name="username" id='username' />
                </div>
                <button className="btn-primary h-12 w-40 mt-10">Edit profil</button>
            </form>
        </div>
    )
}