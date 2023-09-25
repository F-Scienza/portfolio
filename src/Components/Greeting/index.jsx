const Greeting = () => {
	return (
		<div className="flex flex-col w-screen p-8 pt-8 pb-8 mb-20 items-center justify-evenly bg-slate-900/20 rounded-lg md:w-11/12 md:flex-row">
			<div className="h-96 md:w-1/2 max-w-xs flex flex-col justify-end md:justify-center ">
				<div className="w-1/3 border-t-2 border-cyan-500"></div>
				<h1 className="text-2xl font-bold mb-2 tracking-widest">About me</h1>
				<p>
					I am Facundo Scienza, Senior Mechatronics Technician. I am from
					Cordoba Argentina. I am currently a production leader at Mementica.
					Since 2020 I have used my free time to learn web development as a
					hobby, so now I am able to join a team as a frontend developer. I
					self-educated myself in programming during the pandemic, primarily
					through online resources such as YouTube
				</p>
			</div>
			<div className="relative h-96 md:w-1/2 max-w-xs flex flex-col md:justify-center">
				<p>
					courses and official documentation. Later on, I enrolled in courses on
					platforms like Platzi, Coderhouse, and Udemy, always complementing my
					learning with hands-on projects to apply my knowledge. I consider
					myself a great team player, driven by curiosity, and a dedicated
					self-learner.
				</p>
				<div className="absolute right-0 flex items-center bottom-12">
					<span className="text-6xl font-black text-cyan-500">28</span>
					<div className="flex flex-col justify-start text-justify font-bold ml-2 border-b-2 border-cyan-500">
						<span>Years</span>
						<span>old</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Greeting;
