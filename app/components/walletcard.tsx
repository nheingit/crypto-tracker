import ethIcon from '../../public/ethIcon.png';
const PriceRow = () => (
	<div className="flex justify-between h-12 my-4 text-white border-l-4 text-md border-l-green-primary">
		<div className="flex">
			<img src={ethIcon} alt="ethereum icon" className="mx-3" />
			<div>
				<p className="font-robotoCondensed">ETH</p>
				<p className="font-eczar">$1,012</p>
			</div>
		</div>
		<div className="text-right">
			<p className="font-eczar">$12,379</p>
			<p className="font-eczar">7.22</p>
		</div>
	</div>
);
export function WalletCard() {
	return (
		<div className="grid grid-flow-row px-4 pt-4 bg-gray-700 h-72 max-h-min">
			<div className="flex justify-between mb-2 border-b-4 border-b-green-primary">
				<p className="text-2xl text-white font-robotoCondensed">0xc90c...dd56</p>
				<p className="text-2xl text-white font-eczar">$ 42,069</p>
			</div>
			<div className="overflow-y-auto scrollbar-hide">
				<PriceRow />
				<PriceRow />
				<PriceRow />
				<PriceRow />
			</div>
		</div>
	);
}
