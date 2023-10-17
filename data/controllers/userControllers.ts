import UserModel from "../models/userModel";

export const getUser = UserModel.findOne.bind(UserModel);
export const getUsers = UserModel.find.bind(UserModel);

export const countUsers = UserModel.countDocuments.bind(UserModel);

export const createUser = UserModel.create.bind(UserModel);
export const createUsers = UserModel.insertMany.bind(UserModel);

export const changeUser = UserModel.updateOne.bind(UserModel);
export const changeUsers = UserModel.updateMany.bind(UserModel);

export const removeUser = UserModel.deleteOne.bind(UserModel);
export const removeUsers = UserModel.deleteMany.bind(UserModel);
