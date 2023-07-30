import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const drawerWidth = '100%';

const theme = createTheme({
	components: {
		MuiDrawer: {
			styleOverrides: {
				paper: {
					display: "flex",
					flexDirection: "column",
					flexWrap: "nowrap",
					backgroundColor: "#DC143C",
					overflow: "hidden",
				},
			},
		},
	},
});

export default function PermanentDrawerLeft({ active }) {
	return (
		<ThemeProvider theme={theme}>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						maxWidth: drawerWidth,
					},
				}}
				variant="permanent"
				anchor="top"
			>
				<div className="flex flex-row m-5 text-white text-xl font-bold ">
					<a href="#top" className="hover:animate-flicker">
						<p className="font-neon text-2xl font-normal text-shadow-header">
							Charlie Childress
						</p>
					</a>
					<div className="flex flex-grow justify-end">
						<a href="#about" className="pr-10 hover:underline">
							{active === "About" && (
								<Box>
									<p className="text-header-select">About</p>
								</Box>
							)}
							{active !== "About" && (
								<Box>
									<p>About</p>
								</Box>
							)}
						</a>
						<a href="#projects" className="pr-10 hover:underline">
							{active === "Projects" && (
								<Box>
									<p className="text-header-select">Projects</p>
								</Box>
							)}
							{active !== "Projects" && (
								<Box>
									<p>Projects</p>
								</Box>
							)}
						</a>
						<a href="#skills" className="pr-10 hover:underline">
							{active === "Skills" && (
								<Box>
									<p className="text-header-select">Skills</p>
								</Box>
							)}
							{active !== "Skills" && (
								<Box>
									<p>Skills</p>
								</Box>
							)}
						</a>
						<a href="#contact" className=" hover:underline">
							{active === "Contact" && (
								<Box>
									<p className="text-header-select">Contact</p>
								</Box>
							)}
							{active !== "Contact" && (
								<Box>
									<p>Contact</p>
								</Box>
							)}
						</a>
					</div>
				</div>
			</Drawer>
		</ThemeProvider>
	);
}
