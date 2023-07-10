import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { StudentData } from './Schemas/StudentData.schema';
import { Createstudentdto } from './DTO/create-student.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/studentdata')
  async getallstudent(): Promise<StudentData[]> {
    return this.appService.findAll();
  }

  @Post('/addstudent')
  async createstudent(
    @Body()
    body: Createstudentdto,
  ): Promise<StudentData> {
    return this.appService.create(body);
  }
}
