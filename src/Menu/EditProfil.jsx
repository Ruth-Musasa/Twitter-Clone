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
        console.log(changeUser.name , changeUser.username);
    }
    return (
        <div className="border-[1px] border-gray-900 p-4">
            <h2 className="text-2xl font-bold">Edit Profil</h2>
            <form onSubmit={handleChange} >
                <div className="text-lg">
                    <label htmlFor=""> Profil</label>
                    <input type="file" className='bg-black text-xl h-12 border-[1px] border-gray-900 p-4' name="image" id="image" />
                    <br />
                    <label htmlFor="" > Name</label>
                    <input type="text" className='bg-black text-xl  h-12 border-[1px] border-gray-900 p-4'  name="name" id='name' />
                    <br />
                    <label htmlFor=""> Username </label>
                    <input type="text" className='bg-black text-xl  h-12 border-[1px] border-gray-900 p-4' name="username" id='username' />
                </div>
                <button className="btn-primary h-9 w-40">Edit profil</button>
            </form>
        </div>
    )
}