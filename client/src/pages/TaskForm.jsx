import { Form, Formik } from "formik";
import { createTasksRequest } from "../api/tasks.api.js";
function TaskForm() {
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      onSubmit={async (values, actions) => {
        console.log(values);
        try {
          const response = await createTasksRequest(values);
          console.log(response);
          actions.resetForm()
        } catch (error) {
          console.error(error);
        }
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            placeholder="write a title"
            onChange={handleChange}
            value={values.title}
          />

          <label>Description</label>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="3"
            placeholder="write a description"
            onChange={handleChange}
            value={values.description}
          ></textarea>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "saving..." : "Save"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default TaskForm;
