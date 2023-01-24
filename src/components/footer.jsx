export const Footer = () => (
	<footer className='container' style={{ display: 'flex' }}>
		<div>
			<p style={{ fontWeight: '700' }}>
				&copy; FiveM Designs 2022 &middot; FiveM Designs is not
				affilated with cfx.re or FiveM
			</p>

			<div style={{ display: 'flex' }}>
				<a
					style={{
						marginRight: '3vh',
						fontSize: '35px',
						cursor: 'pointer',
						color: '#eee',
					}}
					href='/discord'
				>
					<i className='fab fa-discord'></i>
				</a>

				<a
					style={{ fontSize: '35px', color: '#eee' }}
					// href={YouTubeChannel}
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
