import styles from './Home.module.css'
import logo from '../../img/favicon.ico'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <div>
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>costs</span></h1>
            <p>Comece a gerenciar agora mesmo!</p>
            <LinkButton to='/Newproject' text='Criar projeto'/>
            <img src={logo} alt="Costs" />
        </section>
        </div>
    )
}
export default Home