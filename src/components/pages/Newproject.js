import styles from './Newproject.module.css'
import { ProjectForm } from '../Projects/ProjectForm'
import { useNavigate } from 'react-router-dom'

function Newproject(){

    const history = useNavigate()

    function createPost(project){
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            history('/projects', { state: { message: 'Projeto criado com sucesso!' } })
        })
        .catch((err) => console.log(err))  
    }

    return(
        <div className={styles.np_cont}>
            <h1>Criar Projeto</h1>
            <p>Crie um projeto e adicione serviços já</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}
export default Newproject