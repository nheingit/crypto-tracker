import { NavLink } from '@remix-run/react';
import ethEyeGlassIcon from '../../public/eth-eyeglass.png';
import pieChartIconLight from '../../public/pieChartIconLight.png';
import pieChartIconDark from '../../public/pieChartIconDark.png';
import walletIconLight from '../../public/walletIconLight.png';
import walletIconDark from '../../public/walletIconDark.png';
export function Navbar() {
	const styles = {
		topShadow: {
			boxShadow: '0 20px 0 0 #1EB980'
		},
		bottomShadow: {
			boxShadow: '0 -20px 0 0 #1EB980'
		}
	};
	return (
		<nav className="relative w-24 h-screen pt-4">
			<ul>
				<li className="px-5 mb-20">
					<NavLink to="/">
						<img
							src={ethEyeGlassIcon}
							alt="icon of an eyeglass with an upward trending graph in the middle"
						/>
					</NavLink>
				</li>
				<li className="mb-20">
					<NavLink to="/">
						{({ isActive }) =>
							isActive ? (
								<div className="relative">
									<div
										style={styles.topShadow}
										className="absolute left-0 w-10 h-10 shadow-green-primary -top-10 rounded-bl-3xl"
									/>
									<div className="px-5 py-2.5 bg-green-primary relative w-24 h-18 rounded-r-xl shadow-md shadow-gray-500/40">
										<div
											style={styles.bottomShadow}
											className="absolute left-0 w-10 h-10 -bottom-10 rounded-tl-3xl"
										/>
										<img src={walletIconDark} className="mb-2 ml-3" />
										<p className="relative text-sm text-gray-text font-robotoCondensed">connect</p>
									</div>
								</div>
							) : (
								<img src={walletIconLight} className="mb-2 ml-3 px-5 py-2.5" />
							)}
					</NavLink>
				</li>
				<li className="mb-20">
					<NavLink to="/overview">
						{({ isActive }) =>
							isActive ? (
								<div className="relative">
									<div
										style={styles.topShadow}
										className="absolute left-0 w-10 h-10 shadow-green-primary -top-10 rounded-bl-3xl"
									/>
									<div className="px-5 py-2.5 bg-green-primary relative w-24 h-18 rounded-r-xl shadow-md shadow-gray-500/40">
										<div
											style={styles.bottomShadow}
											className="absolute left-0 w-10 h-10 -bottom-10 rounded-tl-3xl"
										/>
										<img src={pieChartIconDark} className="mb-2 ml-3" />
										<p className="relative text-sm text-gray-text font-robotoCondensed">overview</p>
									</div>
								</div>
							) : (
								<img src={pieChartIconLight} className="mb-2 ml-3 px-5 py-2.5" />
							)}
					</NavLink>
				</li>
				<li className="mb-20">
					<NavLink to="/asdf">
						{({ isActive }) =>
							isActive ? (
								<div className="relative">
									<div
										style={styles.topShadow}
										className="absolute left-0 w-10 h-10 shadow-green-primary -top-10 rounded-bl-3xl"
									/>
									<div className="px-5 py-2.5 bg-green-primary relative w-24 h-18 rounded-r-xl shadow-md shadow-gray-500/40">
										<div
											style={styles.bottomShadow}
											className="absolute left-0 w-10 h-10 -bottom-10 rounded-tl-3xl"
										/>
										<img src={walletIconDark} className="mb-2 ml-3" />
										<p className="relative text-sm text-gray-text font-robotoCondensed">overview</p>
									</div>
								</div>
							) : (
								<img src={walletIconLight} className="mb-2 ml-3 px-5 py-2.5" />
							)}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
