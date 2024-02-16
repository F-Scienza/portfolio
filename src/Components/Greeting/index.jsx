const Greeting = () => {
	return (
		<div className="flex flex-col w-screen md:p-8 pt-8 pb-8 mb-12 items-center justify-evenly dark:bg-slate-900/20 bg-slate-200 rounded-lg lg:w-11/12 lg:flex-row">
			<div className="h-96 w-11/12 max-w-md lg:w-1/2 pl-4 pr-4 flex flex-col justify-end lg:justify-center ">
				<div className="w-1/3 border-t-2 border-cyan-500"></div>
				<h1 className="text-2xl font-bold mb-2 tracking-widest">About me</h1>
				<p className="text-lg font-light">
					I am Facundo Scienza, Senior Mechatronics Technician. I am from
					Cordoba Argentina. I am currently a production leader at Mementica.
					Since 2020 I have used my free time to learn web development as a
					hobby, so now I am able to join a team as a frontend developer. I
					self-educated myself in programming during the pandemic, primarily
					through online resources such as YouTube
				</p>
			</div>
			<div className="relative w-11/12 max-w-md h-96 lg:w-1/2 pl-4 pr-4 flex flex-col lg:justify-center">
				<div>
					<p className="text-lg font-light">
						courses and official documentation. Later on, I enrolled in courses
						on platforms like Platzi, Coderhouse and Udemy, always complementing
						my learning with hands-on projects to apply my knowledge. I consider
						myself a great team player, driven by curiosity, and a dedicated
						self-learner.
					</p>
				</div>
				<span>
					
				</span>
				<div className="md:absolute right-2 flex items-center bottom-36 lg:bottom-12">
					<span className="text-6xl font-black text-cyan-500">29</span>
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
