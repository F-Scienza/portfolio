const Greeting = () => {
    return (
        <div className='flex w-full h-screen items-center justify-evenly '>
            <div className=" w-1/2 text-center text-5xl font-black ">
                <span>
                    {"<"} 
                </span>
                <span>
                    {" / "} 
                </span>
                <span>
                    {">"} 
                </span>
            </div>
            <div className="w-1/2 p-20">
                <h1 className="text-5xl font-thin mb-2">HELLO!</h1>
                <p>
                    I am Facundo Scienza, Senior Mechatronics Technician. I am from Cordoba Argentina.
                    I am currently a production leader at Mementica.
                    Since 2020 I have used my free time to learn web development as a hobby, so now I am able to join a team as a frontend developer.
                </p>
            </div>
        </div>
    );
}

export default Greeting;