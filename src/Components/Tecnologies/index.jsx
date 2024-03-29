import html5img from '../../assets/html-5-logo.svg';
import reactlogo from '../../assets/react.svg';
import jslogo from '../../assets/javascript.svg';
import css3 from '../../assets/css-3.svg';
import tsLogo from '../../assets/typescript.svg';
import testing from '../../assets/testing.svg';
import tailwindlogo from '../../assets/tailwind.svg';
import nodeLogo from '../../assets/nodejs.svg';
import mailer from '../../assets/mail.svg';
import gitlogo from '../../assets/git.svg';
import ghlogo from '../../assets/github.svg';
import firebaselogo from '../../assets/firebase.svg';
import boostraplogo from '../../assets/bootstrap.svg';
import apilogo from '../../assets/api.svg';
import nextjslogo from '../../assets/nextjs.svg';

const Tecnologies = () => {
	return (
		<div
			id={'Tecnologies'}
			className="flex flex-col items-center w-screen md:pb-20 md:w-11/12 md:pt-20 "
		>
			<span className="border-t-4 dark:border-t-2 border-cyan-500 w-48 h-4"></span>
			<span className="text-2xl md:text-4xl font-semibold mb-8 tracking-widest ">
				My knowledge
			</span>
			<div className="flex flex-wrap justify-center mb-20 gap-8">
				<div className="h-24 w-24 md:h-36 md:w-36 rounded-lg transition duration-300 ease-in-out ">
					<span className="flex flex-col justify-center items-center font-semibold text-sm text-center">
						<img className="w-32" src={html5img} alt="html" />
						<p>Html:5</p>
					</span>
				</div>
				<div className="h-24 w-24 md:h-36 md:w-36 rounded-lg transition duration-300 ease-in-out ">
					<span className="flex flex-col justify-center items-center font-semibold text-sm text-center">
						<img className="w-32" src={css3} alt="css" />
						<p>CSS</p>
					</span>
				</div>
				<div className="h-24 w-24 md:h-36 md:w-36 rounded-lg transition duration-300 ease-in-out ">
					<span className="flex flex-col justify-center items-center font-semibold text-sm text-center">
						<img className="w-32" src={jslogo} alt="js" />
						<p>Javascript</p>
					</span>
				</div>
				<div className="h-24 w-24 md:h-36 md:w-36 rounded-lg transition duration-300 ease-in-out ">
					<span className="flex flex-col justify-center items-center font-semibold text-sm text-center">
						<img className="w-32" src={reactlogo} alt="react" />
						<p>React</p>
					</span>
				</div>
			</div>
			<div className="flex flex-wrap lg:flex-nowrap mb-8 md:w-1/2 gap-8 justify-center">
				<div>
					<span className="w-12 h-16 flex flex-col justify-center items-center text-center text-sm opacity-50 transition duration-300 ease-in-out  hover:opacity-100">
						<img className=" w-8 mb-2" src={gitlogo} alt="react" />
						<p>Git</p>
					</span>
				</div>
				<div>
					<span className="w-12 h-16 flex flex-col justify-center items-center text-center text-sm opacity-50 transition duration-300 ease-in-out  hover:opacity-100">
						<img className="w-8 mb-2" src={ghlogo} alt="react" />
						<p>Github</p>
					</span>
				</div>
				<div>
					<span className="w-12 h-16 flex flex-col justify-center items-center text-center text-sm opacity-50 transition duration-300 ease-in-out  hover:opacity-100">
						<img className="w-8 mb-2" src={nodeLogo} alt="react" />
						<p>Nodejs</p>
					</span>
				</div>
				<div>
					<span className="w-12 h-16 flex flex-col justify-center items-center text-center text-sm opacity-50 transition duration-300 ease-in-out  hover:opacity-100">
						<img className="w-8 mb-2" src={nextjslogo} alt="react" />
						<p>Nextjs</p>
					</span>
				</div>
				<div>
					<span className="w-12 h-16 flex flex-col justify-center items-center text-center text-sm opacity-50 transition duration-300 ease-in-out  hover:opacity-100">
						<img className="w-8 mb-2" src={tsLogo} alt="react" />
						<p>Typescript</p>
					</span>
				</div>
				<div>
					<span className="w-12 h-16 flex flex-col justify-center items-center text-center text-xs opacity-50 transition duration-300 ease-in-out  hover:opacity-100">
						<img className="w-8 mb-2" src={firebaselogo} alt="react" />
						<p>Firebase</p>
					</span>
				</div>
				<div>
					<span className="w-12 h-16 flex flex-col justify-center items-center text-center text-xs opacity-50 transition duration-300 ease-in-out  hover:opacity-100">
						<img className="w-8 mb-2" src={tailwindlogo} alt="react" />
						<p>Tailwind</p>
					</span>
				</div>
				<div>
					<span className="w-12 h-16 flex flex-col justify-center items-center text-center text-xs opacity-50 transition duration-300 ease-in-out  hover:opacity-100">
						<img className="w-8 mb-2" src={boostraplogo} alt="react" />
						<p>Bootstrap</p>
					</span>
				</div>
				<div>
					<span className="w-12 h-16 flex flex-col justify-center items-center text-center text-xs opacity-50 transition duration-300 ease-in-out  hover:opacity-100">
						<img className="w-8 mb-2" src={apilogo} alt="react" />
						<p>RestApi</p>
					</span>
				</div>
				<div>
					<span className="w-12 h-16 flex flex-col justify-center items-center text-center text-xs opacity-50 transition duration-300 ease-in-out  hover:opacity-100">
						<img className="w-8 mb-2" src={testing} alt="react" />
						<p>Testing</p>
					</span>
				</div>
				<div>
					<span className="w-12 h-16 flex flex-col justify-center items-center text-center text-xs opacity-50 transition duration-300 ease-in-out  hover:opacity-100">
						<img className="w-8 mb-2" src={mailer} alt="react" />
						<p>Mailjs</p>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Tecnologies;
