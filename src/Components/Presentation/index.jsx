import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import Link from 'react-router-dom';
const Presentation = () => {
	return (
		<div
			id={'About'}
			className="flex flex-col w-screen mt-20 pb-8 items-center justify-evenly bg-slate-900/20 rounded-lg md:w-11/12 md:flex-row"
		>
			<div className="flex flex-col h-96 w-72 bg-gray text-5xl font-light justify-evenly">
				<span className="flex flex-col justify-center h-40 relative text-right">
					<h1 className="font-semibold">FACUNDO</h1>
					<h1 className="text-4xl absolute top-7 tracking-widest">SCIENZA</h1>
				</span>
				<div className="flex md:flex-col justify-center items-center">
					<h4 className="text-sm font-light opacity-60 mr-2">Redes: </h4>
					<span className="flex gap-2">
						<Link
							to="https://www.linkedin.com/in/facundo-scienza/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="w-7" src={linkedin} alt="in" />
						</Link>
						<Link
							to="https://github.com/F-Scienza"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="w-7" src={github} alt="in" />
						</Link>
					</span>
				</div>
			</div>
			<div className="flex md:w-72 p-8 md:p-0 flex-col md:h-96  justify-evenly items-center">
				<div className="w-full">
					<span className="text-sm text-cyan-500 tracking-widest">
						Based in Córdoba, Argentina.
					</span>
					<h2 className="text-xl font-bold tracking-widest">
						FRONTEND DEVELOPER
					</h2>
					<p className="text-lg font-light">
						Hello, I'm a frontend developer with solid knowledge in JavaScript,
						React, Node.js and Next.js.
					</p>
				</div>
				<span className="text-xl"></span>
			</div>
		</div>
	);
};

export default Presentation;
