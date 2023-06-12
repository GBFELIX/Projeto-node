import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../img/favicon.ico'

export function NavBar(){
    return(
        <div className={styles.navbar}>
            <div className={styles.imagem}>
                <img src={logo} alt="Costs" />
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Company">Empresa</Link>
                </li>    
                <li className={styles.item}>
                    <Link to="/Contato">Contato</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Projects">Projetos</Link>
                </li> 
            </ul>
        </div>
    )
}