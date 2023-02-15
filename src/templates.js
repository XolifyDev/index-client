import StorePNG from './assets/store.png';

import StoreLandingIMG from './assets/store/preview_landing.png';
import StoreProductsIMG from './assets/store/preview_products.png';
import XolifyStoreIMG from './assets/templates/xolify.png';
import LinkTreeIMG from './assets/templates/linkTree.png';

const Templates = [
	{
		id: 'xolifyStore',
		name: 'Xolify Store',
		price: '10',
		demo: 'https://xolify.fivem.design',
		template: XolifyStoreIMG,
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
		id: 'store',
		name: 'Adrens Store',
		price: '10',
		demo: 'https://store.adrencad.com',
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
		id: 'forums',
		name: 'Community Forums',
		price: '10',
		demo: 'https://demo.fivem.design/forums',
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
		id: 'forums',
		name: 'Community Site',
		price: '10',
		demo: 'https://demo.fivem.design/forums',
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
		demo: 'https://adren.fivem.design',
		template: LinkTreeIMG,
	},
];

export default Templates;
