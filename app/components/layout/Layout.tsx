import { FC } from 'react'

import Footer from './Sidebar/Footer'
import Navigation from './Navigation/Navigation'

import styles from './Layout.module.scss'

const Layout: FC = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center+' '}>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
