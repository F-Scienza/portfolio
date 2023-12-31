const Greeting = () => {
	return (
		<div className="flex flex-col w-screen p-8 pt-4 pb-8 mb-12 items-center justify-evenly bg-slate-900/20 rounded-lg lg:w-11/12 lg:flex-row">
			<div className="h-96 w-11/12 max-w-md lg:w-1/2 lg:pl-4 lg:pr-4 flex flex-col justify-end lg:justify-center ">
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
			<div className="relative w-11/12 max-w-md h-96 lg:w-1/2 lg:pl-4 lg:pr-4 flex flex-col lg:justify-center">
				<p>
					courses and official documentation. Later on, I enrolled in courses on
					platforms like Platzi, Coderhouse and Udemy, always complementing my
					learning with hands-on projects to apply my knowledge. I consider
					myself a great team player, driven by curiosity, and a dedicated
					self-learner.
				</p>
				<div className="absolute right-2 flex items-center bottom-36 lg:bottom-12">
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
