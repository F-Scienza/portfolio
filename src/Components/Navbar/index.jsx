import Logo from '../Logo';
import { Switch } from '../Switch/Switch';

const Navbar = () => {
	const bg_gradient =
		'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-slate-900/10 to-gray-800/0';
	
	return (
		<nav
			className={`w-screen lg:w-11/12 flex flex-col md:flex-row justify-evenly items-center pt-12 pr-2 pl-2 md:pr-0 md:pl-0 ${bg_gradient}`}
		>
			<div className="flex justify-center mb-12 md:mb-0 md:w-72">
				<Logo />
			</div>
			<ul className="flex w-72 justify-center gap-5 md:text-xl font-semibold md:font-light pb-12 md:pb-4">
				<li className="font-bold transition duration-300 ease-in-out hover:text-cyan-400 pt-2">
					<a href="#About">About</a>
				</li>
				<li className="font-bold transition duration-300 ease-in-out hover:text-cyan-400 pt-2">
					<a href="#Tecnologies">Knoweledge</a>
				</li>
				<li className="font-bold transition duration-300 ease-in-out hover:text-cyan-400 pt-2">
					<a href="#Projects">Projects</a>
				</li>
				<li>
					<Switch/>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
