import { Link } from 'react-router-dom'
import styles from './Match.module.css'
import logo from '../../img/favicon.jpg'

function Match(){
    return(
        <div>
        <div className={styles.navbar}>
            <div className={styles.imagem}>
                <img src={logo} alt="Paint" />
                <button style={{ marginLeft: '10px' }}> + Novo jogador</button>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/Cadpartida">Nova partida</Link>
                </li>
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
        <div class="ag-format-container">
            <div class="ag-courses_box">
            <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">
                UI/Web&amp;Graph design for teenagers 11-17&#160;years old
                </div>

                <div class="ag-courses-item_date-box">
                Start:
                <span class="ag-courses-item_date">
                    04.11.2022
                </span>
                </div>
            </a>
            </div>
        </div>
    </div>
</div>
    )
}
export default Match