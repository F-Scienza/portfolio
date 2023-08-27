import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';


const Presentation = () => {
    return (
        <div className='flex w-screen h-screen items-center justify-evenly bg-gradient-to-b from-neutral-700 to-gray-900'>
            <div className=" flex flex-col h-full w-72 bg-gray text-5xl font-light justify-evenly">
                <span className="font-light">F-scz</span>
                <span className="flex flex-col justify-center h-40 relative">
                    <h1 className="font-semibold">Facundo</h1>
                    <h1 className="text-4xl absolute top-7 tracking-widest">SCIENZA</h1>
                </span>
                <div className='flex flex-col'>
                    <h4 className='text-sm font-light opacity-60'>Redes:</h4>
                    <span className='flex gap-2'>
                        <img
                            className='w-7'
                            src={linkedin}
                            alt="in"
                        />
                        <img
                            className='w-7'
                            src={github}
                            alt="in"
                        />
                    </span>

                </div>
            </div>
            <div className="flex flex-col h-full w-56 justify-evenly">
                <nav className="">
                    <ul className="flex w-auto justify-center gap-5 text-xl font-light">
                        <li className='font-bold text-cyan-400'>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className="">
                    <span className="text-sm font-light opacity-70">based in Córdoba</span>
                    <h2 className="text-xl font-bold">FRONTEND DEVELOPER</h2>
                    <p className="text-sm font-light">
                        Hello, I'm a frontend developer with solid knowledge in JavaScript, React, Node.js, and Next.js.
                    </p>
                </div>
                <span>
                    <h4>link para bio 👉</h4>
                </span>
            </div>
        </div>
    );
}

export default Presentation;