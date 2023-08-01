const ContactCard = () => {
  return (
		<div className="flex flex-col w-full h-full pt-6 pb-10 px-8 bg-neon-text text-white shadow-[0px_0px_100px_rgba(49,49,255,0.7)]">
			<form>
				<h1 className="font-bold pb-3 text-dark-text text-sm 3xl:text-2xl 2xl:text-xl xl:text-xl lg:text-md md:text-md sm:text-sm xs:text-xs">
					Send Me A Message!
				</h1>
				<div className="flex flex-row font-semibold text-lg pb-2">
					<h2 className="w-1/2">Name</h2>
				</div>
				<div className="flex flex-row  text-black">
					<input className="w-1/2 p-2" placeholder={"First"}></input>
					<input className="ml-3 w-1/2 p-2 " placeholder={"Last"}></input>
				</div>
				<div className="flex flex-row font-semibold text-lg pt-5 pb-2">
					<h2 className="w-1/2">Email</h2>
					<h2 className="w-1/2 ml-3">Phone Number</h2>
				</div>
				<div className="flex flex-row text-black">
					<input className="w-1/2 p-2" placeholder={"Email"}></input>
					<input className="ml-3 w-1/2 p-2" placeholder={"Number"}></input>
				</div>
				<h2 className="w-1/2 font-semibold text-lg pt-5 pb-2">Message</h2>
				<input
					className="w-full pb-40 p-2 text-black"
					placeholder={"Message"}
				></input>
				<div className="pt-4"></div>
				<button className="w-full border-2 p-2 px-4 border-white hover:bg-header-select hover:border-header-select">
					<p>Submit</p>
				</button>
			</form>
		</div>
	);
};

export default ContactCard;
