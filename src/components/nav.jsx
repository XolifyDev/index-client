export const Nav = () => (
	<header>
		<nav
			className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'
			style={{ height: '7vh' }}
		>
			<div className='container-fluid'>
				<a className='navbar-brand' href='/'>
					FiveM Designs
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarCollapse'
					aria-controls='navbarCollapse'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarCollapse'>
					<ul className='navbar-nav me-auto mb-2 mb-md-0'>
						<li className='nav-item'>
							<a
								className='nav-link active'
								aria-current='page'
								href='/discord'
							>
								Discord
							</a>
						</li>
					</ul>
					<div className='d-flex'>
						<ul className='navbar-nav me-auto mb-2 mb-md-0'>
							<li className='nav-item'>
								<a
									className='nav-link active'
									aria-current='page'
									href='#'
								>
									Home
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	</header>
);
