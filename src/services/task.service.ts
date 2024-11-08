import TaskModel from "../models/task.model";
import { Task } from "../interfaces/task.interface";

export const getTasks = async () => {
  const res = await TaskModel.find();
  return res;
};

export const getTask = async (id: string) => {
  const res = await TaskModel.findOne({ _id: id });
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
