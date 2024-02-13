import {
	CheckCircleIcon,
	HeartIcon,
	ShoppingBagIcon,
	ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
const Projects = () => {
	return (
		<div
			id="Projects"
			className="pt-20 flex flex-col items-center w-11/12 mb-16"
		>
			<span className="border-t-4 dark:border-t-2 border-cyan-500 w-48 h-4"></span>
			<span className="text-2xl md:text-4xl font-semibold mb-8 tracking-widest ">
				Some projects
			</span>
			<div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 ">
				<div
					className={`bg-slate-500/10 w-72 h-40 md:h-80 rounded-lg flex justify-around items-center pt-10 md:pt-40 pr-4 hover:bg-slate-500/20 hover:text-cyan-500 transition duration-500 ease-in-out shadow-none hover:shadow-xl hover:shadow-cyan-500/5 border-solid border-4 border-cyan-500/10 dark:border-none`}
				>
					<div className="flex items-start justify-center w-1/3 h-full pt-8">
						<CheckCircleIcon className="w-12 text-cyan-500" />
					</div>
					<div className="flex flex-col">
						<a
							href="https://f-scienza.github.io/ReactToDo/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex text-center text-sm font-light tracking-widest underline text-cyan-500 underline-offset-4"
						>
							{' '}
							visit app <ArrowUpRightIcon className="w-3 pt-1" />
						</a>
						<span className="text-2xl md:text-4xl font-semibold">
							ToDo List
						</span>
						<p className="text-sm w-40 font-extralight">
							This app is a tool that helps you organize and manage your daily
							activities.{' '}
						</p>
					</div>
				</div>
				<div
					className={`bg-slate-500/10 w-72 h-40 md:h-80 rounded-lg flex justify-around items-center pt-10 md:pt-40 pr-4 hover:bg-slate-500/20 hover:text-cyan-500 transition duration-500 ease-in-out shadow-none hover:shadow-xl hover:shadow-cyan-500/5  border-solid border-4 border-cyan-500/10 dark:border-none`}
				>
					<div className="flex items-start justify-center w-1/3 h-full pt-8">
						<HeartIcon className="w-12 text-cyan-500" />
					</div>
					<div>
						<a
							href="https://f-scienza.github.io/dogsapi/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex text-center text-sm font-light tracking-widest underline text-cyan-500 underline-offset-4 "
						>
							{' '}
							visit app <ArrowUpRightIcon className="w-3 pt-1" />
						</a>
						<span className="text-2xl md:text-4xl  font-semibold">
							Dogs app
						</span>
						<p className="text-sm w-40 font-extralight">
							This app allows you to choose your favorite dogs photos.
						</p>
					</div>
				</div>
				<div
					className={`bg-slate-500/10 w-72 h-40 md:h-80 rounded-lg flex justify-around items-center pt-10 md:pt-40 pr-4 hover:bg-slate-500/20 hover:text-cyan-500 transition duration-500 ease-in-out shadow-none hover:shadow-xl hover:shadow-cyan-500/5 border-solid border-4 border-cyan-500/10 dark:border-none`}
				>
					<div className="flex items-start justify-center w-1/3 h-full pt-8">
						<ShoppingBagIcon className="w-12 text-cyan-500" />
					</div>
					<div>
						<a
							href="https://main--bucolic-tarsier-61120c.netlify.app/#/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex text-center text-sm font-light tracking-widest underline text-cyan-500 underline-offset-4"
						>
							{' '}
							visit app <ArrowUpRightIcon className="w-3 pt-1" />
						</a>
						<span className="text-2xl md:text-4xl  font-semibold">
							Ecommerce
						</span>
						<p className="text-sm w-40 font-extralight">
							An app for you to buy products from fakestore api.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
