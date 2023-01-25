export const Footer = () => (
	<footer className='container' style={{ display: 'flex' }}>
		<div>
			<p style={{ fontWeight: '700' }}>
				&copy; FiveM Designs 2022 &middot; FiveM Designs is not
				affilated with cfx.re or FiveM
			</p>

			<div style={{ display: 'flex' }}>
				<a
					href='/discord'
					style={{
						marginRight: '3vh',
						fontSize: '35px',
						cursor: 'pointer',
						color: '#eee',
					}}
				>
					<i className='fab fa-discord'></i>
				</a>

				<a
					style={{ fontSize: '35px', color: '#eee' }}
					href={process.env.REACT_APP_YOUTUBE}
					target='_blank'
				>
					<i className='fab fa-youtube'></i>
				</a>
			</div>
		</div>

		<p style={{ marginLeft: 'auto' }}>
			<span style={{ color: '#eee' }}>
				<a href='https://developers.fivem.design'>Developers</a>{' '}
				&middot; <a href='#'>Privacy</a> &middot; <a href='#'>Terms</a>
			</span>
		</p>
	</footer>
);
