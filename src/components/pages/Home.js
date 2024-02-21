import styles from './Home.module.css'
import logo from '../../img/favicon.ico'
import Log from '../service/Log'

function Home(){
    return(
        <div>
        <section className={styles.home_container}>
        <img src={logo} alt="Paint" />
            <h1>Acesso ao sistema</h1>
            <Log/>
        </section>
        </div>
    )
}
export default Home
