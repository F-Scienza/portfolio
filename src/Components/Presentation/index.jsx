import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
const Presentation = () => {
	return (
		<div
			id={'About'}
			className="flex flex-col w-screen md:mt-20 md:pb-8 items-center justify-evenly dark:bg-slate-900/20 bg-slate-200 rounded-lg lg:w-11/12 md:flex-row"
		>
			<div className="flex flex-col h-96 w-72 bg-gray text-5xl font-light justify-evenly p-4">
				<span className="flex flex-col justify-center h-40 relative text-right">
					<h1 className="font-semibold">FACUNDO</h1>
					<h1 className="text-4xl absolute top-7 tracking-widest">SCIENZA</h1>
				</span>
				<div className="flex md:flex-col justify-center items-center">
					<h4 className="text-sm font-light opacity-60 mr-2">Check me out:</h4>
					<span className="flex gap-2">
						<a
							href="https://www.linkedin.com/in/facundo-scienza/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="w-7" src={linkedin} alt="in" />
						</a>
						<a
							href="https://github.com/F-Scienza"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img className="w-7" src={github} alt="in" />
						</a>
					</span>
				</div>
			</div>
			<div className="flex max-w-md md:w-72 p-4 md:p-0 flex-col md:h-96  justify-evenly items-center">
				<div className="w-11/12 lg:w-full">
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
