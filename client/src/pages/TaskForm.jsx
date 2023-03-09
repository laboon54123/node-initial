import {Form, Formik} from 'formik'

function TaskForm(){
    return (
        <Formik
            initialValues={{
                title: "",
                description: "",
            }}
            onSubmit={(values) =>{
                console.log(values)
            }}
        >{({handleChange, handleSubmit}) => (<Form onSubmit={handleSubmit}>
            <label htmlFor="">Title</label>
            <input type="text" name='title' placeholder='write a title' onChange={handleChange
            } />

            <label>Description</label>
            <textarea name="description" id="" cols="30" rows="3" placeholder='write a description' onChange={handleChange}></textarea>

            <button type='submit'>Save</button>
        </Form>)}
        </Formik>
    )
}

export default TaskForm