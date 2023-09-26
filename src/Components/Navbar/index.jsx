import Logo from '../Logo';
//bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/10 via-cyan-500 to-gray-800
const Navbar = () => {
	const bg_gradient =
		'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-slate-900/10 to-gray-800/0';
	return (
		<nav
			className={`w-screen md:w-11/12 flex justify-evenly items-center pt-12 pr-2 pl-2 md:pr-0 md:pl-0 ${bg_gradient}`}
		>
			<div className="flex justify-center md:w-72">
				<Logo />
			</div>
			<ul className="flex w-72 justify-center gap-5 md:text-xl font-semibold md:font-light">
				<li className="font-bold transition duration-300 ease-in-out hover:text-cyan-400">
					<a href="#About">About</a>
				</li>
				<li className="font-bold transition duration-300 ease-in-out hover:text-cyan-400">
					<a href="#Tecnologies">Knoweledge</a>
				</li>
				<li className="font-bold transition duration-300 ease-in-out hover:text-cyan-400">
					<a href="#Projects">Projects</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
