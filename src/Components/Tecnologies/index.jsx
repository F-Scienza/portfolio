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
		<div className="flex flex-col items-center justify-around w-11/12 ">
			<div className=" flex gap-8 mb-12">
				<div className="h-36 w-36 bg-black/5 rounded-lg">
					<span className="flex flex-col justify-center items-center font-semibold text-sm text-center">
						<img className="w-32" src={html5img} alt="html" />
						<p>html</p>
					</span>
				</div>
				<div className="h-36 w-36 bg-black/5 rounded-lg">
					<span className="flex flex-col justify-center items-center font-semibold text-sm text-center">
						<img className="w-32" src={jslogo} alt="js" />
						<p>js</p>
					</span>
				</div>
				<div className="h-36 w-36 bg-black/5 rounded-lg">
					<span className="flex flex-col justify-center items-center font-semibold text-sm text-center">
						<img className="w-32" src={css3} alt="css" />
						<p>css</p>
					</span>
				</div>
				<div className="h-36 w-36 bg-black/5 rounded-lg">
					<span className="flex flex-col justify-center items-center font-semibold text-sm text-center">
						<img className="w-32" src={reactlogo} alt="react" />
						<p>react</p>
					</span>
				</div>
			</div>
			<div className="flex w-1/2 gap-8 justify-center">
				<div>
					<span className="flex flex-col justify-center items-center font-light text-center text-xs">
						<img className="w-8 mb-2" src={gitlogo} alt="react" />
						<p>Git</p>
					</span>
				</div>
				<div>
					<span className="flex flex-col justify-center items-center font-light text-center text-xs">
						<img className="w-8 mb-2" src={ghlogo} alt="react" />
						<p>Github</p>
					</span>
				</div>
				<div>
					<span className="flex flex-col justify-center items-center font-light text-center text-xs">
						<img className="w-8 mb-2" src={nodeLogo} alt="react" />
						<p>Nodejs</p>
					</span>
				</div>
				<div>
					<span className="flex flex-col justify-center items-center font-light text-center text-xs">
						<img className="w-8 mb-2" src={nextjslogo} alt="react" />
						<p>Nextjs</p>
					</span>
				</div>
				<div>
					<span className="flex flex-col justify-center items-center font-light text-center text-xs">
						<img className="w-8 mb-2" src={tsLogo} alt="react" />
						<p>Typescript</p>
					</span>
				</div>
				<div>
					<span className="flex flex-col justify-center items-center font-light text-center text-xs">
						<img className="w-8 mb-2" src={firebaselogo} alt="react" />
						<p>Firebase</p>
					</span>
				</div>
				<div>
					<span className="flex flex-col justify-center items-center font-light text-center text-xs">
						<img className="w-8 mb-2" src={tailwindlogo} alt="react" />
						<p>Tailwind</p>
					</span>
				</div>
				<div>
					<span className="flex flex-col justify-center items-center font-light text-center text-xs">
						<img className="w-8 mb-2" src={boostraplogo} alt="react" />
						<p>Bootstrap</p>
					</span>
				</div>
				<div>
					<span className="flex flex-col justify-center items-center font-light text-center text-xs">
						<img className="w-8 mb-2" src={apilogo} alt="react" />
						<p>RestApi</p>
					</span>
				</div>
				<div>
					<span className="flex flex-col justify-center items-center font-light text-center text-xs">
						<img className="w-8 mb-2" src={testing} alt="react" />
						<p>Testing</p>
					</span>
				</div>
				<div>
					<span className="flex flex-col justify-center items-center font-light text-center text-xs">
						<img className="w-8 mb-2" src={mailer} alt="react" />
						<p>Mailjs</p>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Tecnologies;
