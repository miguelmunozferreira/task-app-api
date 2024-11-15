import TaskModel from "../models/task.model";
import { Task } from "../interfaces/task.interface";

export const getTasks = async () => {
  const tasks = await TaskModel.find().populate("createdBy", "name").lean();

  const res: Task[] = tasks.map((task) => ({
    id: task._id.toString(),
    name: task.name,
    state: task.state,
    createdBy: task.createdBy,
  }));

  return res;
};

export const getTask = async (id: string) => {
  const task = await TaskModel.findOne({ _id: id }).populate("createdBy", "name").lean();

  if (!task) return null;

  const res: Task = {
    id: task._id.toString(),
    name: task.name,
    state: task.state,
    createdBy: task.createdBy,
  };

  return res;
};

export const insertTask = async (task: Task) => {
  const res = await TaskModel.create(task);
  return res;
};

export const updateTask = async (id: string, data: Task) => {
  const res = await TaskModel.findOneAndUpdate({ _id: id }, data, { new: true });
  return res;
};

export const deleteTask = async (id: string) => {
  const res = await TaskModel.deleteOne({ _id: id });
  return res;
};
