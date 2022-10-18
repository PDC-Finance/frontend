import Nav from './Nav'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {/* <h1>Hello</h1> */}
                    {children}
                </main>

            </div>
        </div>
    );
};

export default Layout;