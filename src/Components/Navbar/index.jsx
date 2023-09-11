import Logo from '../Logo';
//bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/10 via-cyan-500 to-gray-800
const Navbar = () => {
	const bg_gradient =
		'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-slate-900/10 to-gray-800/0';
	return (
		<nav
			className={`w-screen flex justify-evenly items-center pt-12 ${bg_gradient}`}
		>
			<div className="flex justify-center w-72">
				<Logo />
			</div>
			<ul className="flex w-72 justify-center gap-5 text-xl font-light">
				<li className="font-bold text-cyan-400">About</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar;
