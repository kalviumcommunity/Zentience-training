import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { StudentData } from './Schemas/StudentData.schema';
import * as mongoose from 'mongoose';
import { addedstudent } from './Schemas/Added-student.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(StudentData.name)
    private studentModel: mongoose.Model<StudentData>,
    @InjectModel(addedstudent.name)
    private addedStudentModel: mongoose.Model<addedstudent>,
  ) {}

  async findAll(): Promise<StudentData[]> {
    const data = await this.studentModel.find();
    return data;
  }

  async checkstudent(body: any): Promise<{ message: string }> {
    const { username, password } = body;
    const data = await this.addedStudentModel.findOne({
      $and: [{ email: username }, { password: password }],
    });
    if (data) {
      return { message: 'student login successfully' };
    } else {
      return { message: 'student not found' };
    }
  }

  async create(student: StudentData): Promise<StudentData> {
    const res = await this.studentModel.create(student);
    return res;
  }

  async addStudent(student: addedstudent): Promise<addedstudent> {
    const res = await this.addedStudentModel.create(student);
    return res;
  }

  async update(id: number, body: StudentData): Promise<{ message: string }> {
    const student = await this.studentModel.findById(id);

    if (student) {
      Object.assign(student, body);

      await student.save();

      return { message: 'Data updated successfully' };
    } else {
      return { message: 'Student not found' };
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    const clas = await this.studentModel.findById(id);
    const student = await this.studentModel.findByIdAndRemove(id);
    if (student) {
      return { message: `${clas.Class}` };
    } else {
      return { message: 'Student not found' };
    }
  }
}
