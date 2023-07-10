import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { StudentData } from './Schemas/StudentData.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(StudentData.name)
    private studentModel: mongoose.Model<StudentData>,
  ) {}

  async findAll(): Promise<StudentData[]> {
    const data = await this.studentModel.find();
    return data;
  }

  async create(student: StudentData): Promise<StudentData> {
    const res = await this.studentModel.create(student);
    return res;
  }
}
