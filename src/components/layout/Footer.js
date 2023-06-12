import styles from './Footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
export function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook></FaFacebook></li>
                <li><FaLinkedin></FaLinkedin></li>
                <li><FaInstagram></FaInstagram></li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2023</p>
        </footer>
    )
}