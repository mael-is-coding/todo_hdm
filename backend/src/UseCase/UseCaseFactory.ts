import { Injectable } from '@nestjs/common';
import ServiceFactory from '../ServiceFactory';
import DeleteTask from './DeleteTask/DeleteTask';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import CreateTaskUseCase from './CreateTask/CreateTask';
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase';
import CreateTask from './CreateTask/CreateTask';

type UseCases = GetAllTasksUseCase | DeleteTask | CreateTask | SaveTaskUseCase;

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}
