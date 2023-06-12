import styles from "./Loading.module.css"
import Load from "../../img/bars.svg"
function Loading(){
    return(
        <div className={styles.loader_container}>
            <img src={Load} alt="" className={styles.loader}/>
        </div>
    )
}
export default Loading