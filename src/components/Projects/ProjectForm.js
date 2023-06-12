import styles from './ProjectForm.module.css'
import {Input} from '../form/Input'
import Select from '../form/Select'
import SubButton from '../form/SubButton'
import {useEffect, useState} from 'react'

export function ProjectForm({ handleSubmit, btnText, ProjectData}){
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(ProjectData || {})
    
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }
    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
    }
    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
    }
    return(
        <form className={styles.form} onSubmit={submit}> 
            <Input type='text' name='name' text='Nome do projeto' placeholder='Insira o nome do projeto' handleOnChange={handleChange} 
            value={project.name ? project.name: ''}/>
            <Input type="number" name='budget' text='Valor do orçamento' placeholder="Insira o orçamento" handleOnChange={handleChange} 
            value={project.budget ? project.budget: ''}/>
            <Select name="cateogory_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} 
            value={project.category ? project.category.id: ''} />
            <SubButton text={btnText}/>
        </form>
    )
}