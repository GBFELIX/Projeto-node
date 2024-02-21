import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../img/favicon.jpg'

function NavBar(){
    return(
        <div className={styles.navbar}>
            <div className={styles.imagem}>
                <img src={logo} alt="Paint" />
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Administrador</Link>
                </li>    
                <li className={styles.item}>
                    <Link to="/">Financeiro</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/">Sair</Link>
                </li> 
            </ul>
        </div>
    )
}
export default NavBar