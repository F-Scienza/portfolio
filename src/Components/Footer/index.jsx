import Logo from '../Logo';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
const Footer = () => {
	const bg_gradient =
		'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-500/20 dark:from-cyan-500/5 via-slate-900/5 to-gray-800/0';
	return (
		<div
			className={`flex flex-col justify-center items-center w-11/12 ${bg_gradient} pt-16 pb-16`}
		>
			<Logo />
			<div className="flex flex-col justify-center items-center p-10">
				<p className="text-xl font-semibold">Thanks for your time. </p>
				<p className="font-light opacity-80">
					{' '}
					Feedback is always appreciated.
				</p>
			</div>
			<div className="flex gap-8">
				<a
					href="https://github.com/F-Scienza"
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
					<img className="w-7" src={github} alt="github" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
