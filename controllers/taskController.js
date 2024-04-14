const Task = require('../models/Task');


exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.createTask = async (req, res) => {
    try {
      const { description } = req.body;
      const task = await Task.create({ description, completed: false });
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  exports.updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const { completed } = req.body;
      const task = await Task.findByIdAndUpdate(id, { completed }, { new: true });
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  exports.deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      await Task.findByIdAndDelete(id);
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };