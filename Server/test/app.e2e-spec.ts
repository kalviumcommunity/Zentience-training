import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AppService } from './../src/app.service';
import { StudentData } from './../src/Schemas/StudentData.schema';
import { addedstudent } from './../src/Schemas/Added-student.schema';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let appService: AppService;

  beforeEach(async () => {
    jest.setTimeout(10*1000);
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    
    app = moduleFixture.createNestApplication();
    appService = moduleFixture.get<AppService>(AppService);
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });


  describe('/studentData (GET)', () => {
    it('should return an array of StudentData', async () => {
      const studentData: StudentData[] = [
        { Name: 'John Doe', Class: 'Class 7', Rollno: 7501, Teachername: 'Jonh Doe' },
        { Name: 'John Doe', Class: 'Class 7', Rollno: 7501, Teachername: 'Jonh Doe' },
      ];
      jest.spyOn(appService, 'findAll').mockResolvedValue(studentData);

      return request(app.getHttpServer())
        .get('/studentData')
        .expect(200)
        .expect(studentData);
    },10000);
  });

  describe('/studentData (POST)', () => {
    it('should create a new student', async () => {
      const createStudentDto = { id: 1, Name: 'John Doe', Class: 'Class 7', Rollno: 7501, Teachername: 'Jonh Doe' };
      const createdStudent: StudentData = {
        id: 1,
        ...createStudentDto,
      };
      jest.spyOn(appService, 'create').mockResolvedValue(createdStudent);

      return request(app.getHttpServer())
        .post('/studentData')
        .send(createStudentDto)
        .expect(201)
        .expect(createdStudent);
    },10000);
  });

  describe('/addStudent (POST)', () => {
    it('should add a new student', async () => {
      const addStudentDto = { id:1,name: 'John Doe', email: 'john@example.com',password:'abcd',Teachername:'John Doe' };
      const addedStudent: addedstudent = {
        id: 1,
        ...addStudentDto,
      };
      jest.spyOn(appService, 'addStudent').mockResolvedValue(addedStudent);

      return request(app.getHttpServer())
        .post('/addStudent')
        .send(addStudentDto)
        .expect(201)
        .expect(addedStudent);
    },10000);
  });

  describe('/login (POST)', () => {
    it('should check student login and return success message', async () => {
      const studentCredentials = {
        username: 'john@example.com',
        password: 'password',
      };
      const response = { message: 'student login successfully' };
      jest.spyOn(appService, 'checkstudent').mockResolvedValue(response);

      return request(app.getHttpServer())
        .post('/login')
        .send(studentCredentials)
        .expect(200)
        .expect(response);
    },10000);

    it('should check student login and return not found message', async () => {
      const studentCredentials = {
        username: 'john@example.com',
        password: 'wrongpassword',
      };
      const response = { message: 'student not found' };
      jest.spyOn(appService, 'checkstudent').mockResolvedValue(response);

      return request(app.getHttpServer())
        .post('/login')
        .send(studentCredentials)
        .expect(200)
        .expect(response);
    },10000);
  });

  describe('/studentData/:id (PATCH)', () => {
    it('should update an existing student', async () => {
      const updateStudentDto = { name: 'John Doe', age: 21 };
      const id = 1;
      const response = { message: 'Data updated successfully' };
      jest.spyOn(appService, 'update').mockResolvedValue(response);

      return request(app.getHttpServer())
        .patch(`/studentData/${id}`)
        .send(updateStudentDto)
        .expect(200)
        .expect(response);
    },10000);

    it('should return not found message when student does not exist', async () => {
      const updateStudentDto = { name: 'John Doe', age: 21 };
      const id = 1;
      const response = { message: 'Student not found' };
      jest.spyOn(appService, 'update').mockResolvedValue(response);

      return request(app.getHttpServer())
        .patch(`/studentData/${id}`)
        .send(updateStudentDto)
        .expect(200)
        .expect(response);
    },10000);
  });

  describe('/studentData/:id (DELETE)', () => {
    it('should delete an existing student', async () => {
      const id = 1;
      const response = { message: 'A' };
      jest.spyOn(appService, 'delete').mockResolvedValue(response);

      return request(app.getHttpServer())
        .delete(`/studentData/${id}`)
        .expect(200)
        .expect(response);
    },10000);

    it('should return not found message when student does not exist', async () => {
      const id = 1;
      const response = { message: 'Student not found' };
      jest.spyOn(appService, 'delete').mockResolvedValue(response);

      return request(app.getHttpServer())
        .delete(`/studentData/${id}`)
        .expect(200)
        .expect(response);
    },10000);
  });
});
