import {
  Controller,
  Get,
  Body,
  Post,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { StudentData } from './Schemas/StudentData.schema';
import { Createstudentdto } from './DTO/create-student.dto';
import { addedstudentdto } from './DTO/add-Student.dto';
import { addedstudent } from './Schemas/Added-student.schema';
import { HttpCode } from '@nestjs/common';
import { AssignmentData } from './Schemas/AssignmentSchema';
import { composeassignmentdto } from './DTO/ComposeAssignment.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/studentData')
  async getallstudent(): Promise<StudentData[]> {
    return this.appService.findAll();
  }

  @Get('/assignmentsData')
  async getAssignments(): Promise<AssignmentData[]> {
    return this.appService.findAssignments();
  }

  @Post('/studentData')
  async createstudent(
    @Body()
    body: Createstudentdto,
  ): Promise<StudentData> {
    return this.appService.create(body);
  }

  @Post('/addStudent')
  async addStudent(
    @Body()
    body: addedstudentdto,
  ): Promise<addedstudent> {
    return this.appService.addStudent(body);
  }

  @Post('/assignments')
  async createPost(
    @Body() 
    body: composeassignmentdto,
  ): Promise<AssignmentData> {
    // const createdTask = new this.postModel({ title, description, subject, fileFormat });
    return this.appService.composeAssignment(body);
  }

  @Post('/login')
  @HttpCode(200) 
  async checkstudent(
    @Body() body: any,
  ): Promise<{ message: string }> {
    return this.appService.checkstudent(body);
  }
  

  @Patch('/studentData/:id')
  async updatestudent(
    @Body()
    body: Createstudentdto,
    @Param('id')
    id: number,
  ): Promise<{ message: string }> {
    return this.appService.update(id, body);
  }

  @Delete('/studentData/:id')
  async deletestudent(
    @Param('id')
    id: number,
  ): Promise<{ message: string }> {
    return this.appService.delete(id);
  }
}
