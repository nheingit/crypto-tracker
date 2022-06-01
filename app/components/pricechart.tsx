import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
const stuff = {
	data: [
		{
			id: 'bitcoin',
			rank: '1',
			symbol: 'BTC',
			name: 'Bitcoin',
			supply: '19053556.0000000000000000',
			maxSupply: '21000000.0000000000000000',
			marketCapUsd: '581503970451.9656122072937876',
			volumeUsd24Hr: '11314808843.4709668667818764',
			priceUsd: '30519.4458426534979721',
			changePercent24Hr: '4.0889533447424445',
			vwap24Hr: '30244.6927610641748111',
			explorer: 'https://blockchain.info/'
		},
		{
			id: 'ethereum',
			rank: '2',
			symbol: 'ETH',
			name: 'Ethereum',
			supply: '120981728.6240000000000000',
			maxSupply: null,
			marketCapUsd: '229912358687.9163688984014304',
			volumeUsd24Hr: '6352688637.9661373837894702',
			priceUsd: '1900.3891025764946000',
			changePercent24Hr: '5.1401415228919394',
			vwap24Hr: '1864.0634619654924464',
			explorer: 'https://etherscan.io/'
		},
		{
			id: 'tether',
			rank: '3',
			symbol: 'USDT',
			name: 'Tether',
			supply: '72537249554.0904800000000000',
			maxSupply: null,
			marketCapUsd: '72477682681.6691007546104503',
			volumeUsd24Hr: '21141154133.0490838517468197',
			priceUsd: '0.9991788098833695',
			changePercent24Hr: '-0.0595942661747320',
			vwap24Hr: '0.9991191902699518',
			explorer: 'https://www.omniexplorer.info/asset/31'
		},
		{
			id: 'usd-coin',
			rank: '4',
			symbol: 'USDC',
			name: 'USD Coin',
			supply: '53673520819.6587450000000000',
			maxSupply: null,
			marketCapUsd: '53650728222.9251789302190419',
			volumeUsd24Hr: '895172173.6962456915143396',
			priceUsd: '0.9995753474639730',
			changePercent24Hr: '-0.1390122835830952',
			vwap24Hr: '1.0002577330739927',
			explorer: 'https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
		},
		{
			id: 'binance-coin',
			rank: '5',
			symbol: 'BNB',
			name: 'BNB',
			supply: '166801148.0000000000000000',
			maxSupply: '166801148.0000000000000000',
			marketCapUsd: '52161441292.2467494620857964',
			volumeUsd24Hr: '605269614.5888055379331826',
			priceUsd: '312.7163207068979493',
			changePercent24Hr: '2.8072632917826914',
			vwap24Hr: '312.5079989956686568',
			explorer: 'https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52'
		}
	],
	timestamp: 1653921829694
};

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const PriceChart = ({ chartData }: { chartData: any }) => {
	return (
		<Line
			className="w-full h-full max-h-full"
			data={chartData}
			options={{
				plugins: {
					title: { display: true, text: 'Crypto Prices' },
					legend: { display: true, position: 'bottom' }
				}
			}}
		/>
	);
};
