import { pool } from "../db.js";

export const getTasks = async function (req, res) {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async function (req, res) {
  try {
    console.log(req.params.id);
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result[0]);
    console.log(`titulo de la tarea: ${result[0].title}`);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async function (req, res) {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title, description) VALUES(?,?)",
      [title, description]
    );
    console.log(result);

    res.json({
      id: result.insertId,
      status: result.serverStatus,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async function (req, res) {
  try {
    console.log(`parametro desde url(id):${req.params.id}`);

    const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async function (req, res) {
  try {
    console.log(`parametro desde url(id):${req.params.id}`);

    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
