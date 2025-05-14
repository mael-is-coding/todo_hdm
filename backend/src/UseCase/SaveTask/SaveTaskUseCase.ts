import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';
import CreateTaskUseCase from ''

@Injectable()
export default class SaveTaskUseCase
  implements UseCase<Promise<Task>, [dto: SaveTaskDto]>
{
  constructor() {}

  async handle(dto: SaveTaskDto) {
    /*
    * @todo IMPLEMENT HERE : VALIDATION DTO, DATA SAVING, ERROR CATCHING
    */
    try {
        if(!(dto.id == null) || !(dto.id typeof number) || !(dto.name typeof string)) {
          throw new Error("Bad typing of SaveTaskDTO.");
        }
    } catch (ex) {
      return false
    }

    return true;
  }
}
