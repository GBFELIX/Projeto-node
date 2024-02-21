import styles from './Cadpartida.module.css'
import logo from '../../img/favicon.ico'
import Create from '../service/Create'
import NavBar from '../layout/Navbar';

function Cadpartida(){
    return(
        <div>
            <NavBar/>
            <section className={styles.home_container}>
            <img src={logo} alt="Paint" />
            <h1>Adicionar Partida</h1>
                <Create/>
            </section>
        </div>
    )
}
export default Cadpartida