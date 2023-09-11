import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';

const Presentation = () => {
	return (
		<div className="flex w-11/12 mt-20 pb-8 items-center justify-evenly bg-slate-900/20 rounded-lg ">
			<div className="flex flex-col h-96 w-72 bg-gray text-5xl font-light justify-evenly">
				<span className="flex flex-col justify-center h-40 relative text-right">
					<h1 className="font-semibold">FACUNDO</h1>
					<h1 className="text-4xl absolute top-7 tracking-widest">SCIENZA</h1>
				</span>
				<div className="flex flex-col">
					<h4 className="text-sm font-light opacity-60">Redes:</h4>
					<span className="flex gap-2">
						<img className="w-7" src={linkedin} alt="in" />
						<img className="w-7" src={github} alt="in" />
					</span>
				</div>
			</div>
			<div className="flex flex-col h-96 w-72 justify-evenly items-center">
				<div className="w-full">
					<span className="text-sm text-cyan-500">Based in Córdoba</span>
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
