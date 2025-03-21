import { MoveUpRight } from "lucide-react";


const footerLinks = [
	{
		title: "Linkedin",
		href: "https://www.linkedin.com/in/parashmonidas/",
	},
	{ title: "Github", href: "https://github.com/parashmusuc" },
	{ title: "Twitter", href: "https://twitter.com/parashmusic" },
	{ title: "Instagram", href: "/https://www.instagram.com/parash.wav/" },
	{ title: "YouTube", href: "/https://youtube.com/@parash9912" },
];
export default function Footer() {
	return (
		<footer className="overflow-x-clip mt-25 text-white -z-1 px-4 flex justify-center">
			{/* <div className="bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div> */}
			<div className="container">
				<div className="border-t py-6 border-white/15 text-sm flex flex-col md:flex-row justify-between items-center gap-8">
					<div>
						<div className="text-gray-600">&copy; 2024 All right reserved.</div>
					</div>
					<nav className="flex flex-col md:flex-row items-center gap-8 ">
						{footerLinks.map((footerLink) => (
							<a
								className="inline-flex gap-1.5 font-semibold"
								href={footerLink.href}
								target="blank"
							>
								<span>{footerLink.title}</span>
								<div className="size-">
									<MoveUpRight/>
								</div>
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
}


