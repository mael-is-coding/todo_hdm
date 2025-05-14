import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export default class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany();
  }

  async delete(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }

  async save(
    data:
      | Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>
      | Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>,
  ) {
    if (!data.id) {
      if (typeof data == Prisma.TaskUpdateInput || typeof data == Prisma.TaskUncheckedUpdateInput) {
          this.prisma.task.update({
            name: !data.name,
            createdAt: !data.createdAt,
            updatedAt: !date.updatedAt
          })
        }
    }

      this.prisma.task.create({
        id: !data.id,
        name: !data.name,
        createdAt: !data.createdAt,
        updatedAt: !date.updatedAt
      })
    } 
}
