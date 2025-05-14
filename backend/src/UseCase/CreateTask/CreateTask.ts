import SaveTaskDto from './SaveTaskDto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { TaskRepository } from '../../Repositories/TaskRepository';

@Injectable() 
export default class CreateTaskUseCase implements UseCase<Promise<boolean>, [dto: SaveTaskDto]>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(dto: SaveTaskDto) {
    try {
        await this.taskRepository.save(dto)
        return true;
    } catch (error) {
        throw new BadRequestException(error.message);
    }
  }
}