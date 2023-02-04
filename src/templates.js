import StorePNG from './assets/store.png';

import StoreLandingIMG from './assets/store/preview_landing.png';
import StoreProductsIMG from './assets/store/preview_products.png';

const Templates = [
	{
		id: 'store',
		name: 'Adrens Store',
		price: '10',
		demo: 'https://demo.fivem.design?demo=store',
		template: StorePNG,
		trial: true,
		previewImgs: [
			{
				src: StoreLandingIMG,
			},
			{
				src: StoreProductsIMG,
			},
		],
	},
	{
		id: 'linktree',
		name: 'Link Tree',
		price: '0',
		template: 'https://i.imgur.com/iAuXP2x.png',
		demo: 'https://demo.fivem.design?demo=linktree',
	},
];

export default Templates;
