import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import {ProjectForm} from '../Projects/ProjectForm'

function Project(){

    const { id } = useParams()

    const [ project, setProject ] = useState([])
    const [ showProjectForm, setProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch((err) => console.log(err))
    }, 500)
    }, [id])
    
    function toggleProjectForm(){
        setProjectForm(!showProjectForm)
    }


    return <>{project.name ? (
    <div className={styles.project_details}>
        <Container customClass="column">
            <div className={styles.details_container}>
                <h1>Projeto: {project.name}</h1>
                <button onClick={toggleProjectForm} className={styles.btn}>{!showProjectForm ? "Editar projeto" : "Fechar"}</button>
                {!showProjectForm ? (
                    <div className={styles.project_inf}>
                        <p>
                            <span>Categoria:</span> {project.category.name}
                        </p>
                        <p>
                            <span>Orçamento:</span> {project.budget}
                        </p>
                        <p>
                            <span>Total utilizado:</span> {project.cost}
                        </p>
                    </div>
                ) : (
                    <div className={styles.project_inf}>
                        <p>detalhes do projeto</p>
                        <ProjectForm/>
                    </div>
                )}
            </div>
        </Container>
    </div>
    ) : (
        <Loading/>)}</>
}
export default Project