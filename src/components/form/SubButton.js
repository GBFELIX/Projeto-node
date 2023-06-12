import styles from './SubButton.module.css'

function SubButton({text}){
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}
export default SubButton