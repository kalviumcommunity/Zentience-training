import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AppService } from './../src/app.service';
import { StudentData } from './../src/Schemas/StudentData.schema';
import { addedstudent } from './../src/Schemas/Added-student.schema';
import { PostController } from './../src/Announcements/announcement.controller';
import {Post as PostEntity, PostDocument } from './../src/Schemas/Announcement';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let appService: AppService;

  beforeEach(async () => {
    jest.setTimeout(10 * 1000);
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    appService = moduleFixture.get<AppService>(AppService);
    await app.init();
  });



  describe('/studentData (GET)', () => {
    it('should return an array of StudentData', async () => {
      const studentData: StudentData[] = [
        { Name: 'John Doe', Class: 'Class 7', Rollno: 7501, Teachername: 'Jonh Doe' },
        { Name: 'John Doe', Class: 'Class 7', Rollno: 7501, Teachername: 'Jonh Doe' },
      ];
      jest.spyOn(appService, 'findAll').mockResolvedValue(studentData);

      await request(app.getHttpServer())
        .get('/studentData')
        .expect(200)
        .expect(studentData);
    }, 20000);
  });

  describe('/studentData (POST)', () => {
    it('should create a new student', async () => {
      const createStudentDto = { id: 1, Name: 'John Doe', Class: 'Class 7', Rollno: 7501, Teachername: 'Jonh Doe' };
      const createdStudent: StudentData = {
        id: 1,
        ...createStudentDto,
      };
      jest.spyOn(appService, 'create').mockResolvedValue(createdStudent);

      await request(app.getHttpServer())
        .post('/studentData')
        .send(createStudentDto)
        .expect(201)
        .expect(createdStudent);
    }, 20000);
  });

  describe('/addStudent (POST)', () => {
    it('should add a new student', async () => {
      const addStudentDto = { id: 1, name: 'John Doe', email: 'john@example.com', password: 'abcd', Teachername: 'John Doe' };
      const addedStudent: addedstudent = {
        id: 1,
        ...addStudentDto,
      };
      jest.spyOn(appService, 'addStudent').mockResolvedValue(addedStudent);

      await request(app.getHttpServer())
        .post('/addStudent')
        .send(addStudentDto)
        .expect(201)
        .expect(addedStudent);
    }, 20000);
  });

  describe('/login (POST)', () => {
    it('should check student login and return success message', async () => {
      const studentCredentials = {
        username: 'john@example.com',
        password: 'password',
      };
      const response = { message: 'student login successfully' };
      jest.spyOn(appService, 'checkstudent').mockResolvedValue(response);

      await request(app.getHttpServer())
        .post('/login')
        .send(studentCredentials)
        .expect(200)
        .expect(response);
    }, 20000);

    it('should check student login and return not found message', async () => {
      const studentCredentials = {
        username: 'john@example.com',
        password: 'wrongpassword',
      };
      const response = { message: 'student not found' };
      jest.spyOn(appService, 'checkstudent').mockResolvedValue(response);

      await request(app.getHttpServer())
        .post('/login')
        .send(studentCredentials)
        .expect(200)
        .expect(response);
    }, 20000);
  });

  describe('/studentData/:id (PATCH)', () => {
    it('should update an existing student', async () => {
      const updateStudentDto = { name: 'John Doe', age: 21 };
      const id = 1;
      const response = { message: 'Data updated successfully' };
      jest.spyOn(appService, 'update').mockResolvedValue(response);

      await request(app.getHttpServer())
        .patch(`/studentData/${id}`)
        .send(updateStudentDto)
        .expect(200)
        .expect(response);
    }, 20000);

    it('should return not found message when student does not exist', async () => {
      const updateStudentDto = { name: 'John Doe', age: 21 };
      const id = 1;
      const response = { message: 'Student not found' };
      jest.spyOn(appService, 'update').mockResolvedValue(response);

      await request(app.getHttpServer())
        .patch(`/studentData/${id}`)
        .send(updateStudentDto)
        .expect(200)
        .expect(response);
    }, 20000);
  }); 




  describe('/assignments (POST)', () => {
    it('should create and return an assignment', async () => {
      const assignmentData = {
        title: 'Test Assignment',
        description: 'Test Assignment Description',
        subject: 'Math',
        fileFormat: 'pdf',
      };
  
      return await request(app.getHttpServer())
        .post('/assignments')
        .send(assignmentData)
        .expect(201)
        .then((response) => {
          const createdAssignment = response.body;
          expect(createdAssignment._id).toBeDefined();
          expect(createdAssignment.title).toEqual(assignmentData.title);
          expect(createdAssignment.description).toEqual(assignmentData.description);
          expect(createdAssignment.subject).toEqual(assignmentData.subject);
          expect(createdAssignment.fileFormat).toEqual(assignmentData.fileFormat);
        });
    });
  });




  describe('/studentData/:id (DELETE)', () => {
    it('should delete an existing student', async () => {
      const id = 1;
      const response = { message: 'A' };
      jest.spyOn(appService, 'delete').mockResolvedValue(response);

      await request(app.getHttpServer())
        .delete(`/studentData/${id}`)
        .expect(200)
        .expect(response);
    }, 20000);

    it('should return not found message when student does not exist', async () => {
      const id = 1;
      const response = { message: 'Student not found' };
      jest.spyOn(appService, 'delete').mockResolvedValue(response);

      await request(app.getHttpServer())
        .delete(`/studentData/${id}`)
        .expect(200)
        .expect(response);
    }, 20000);
  });
});

describe('PostController (e2e)', () => {
  let app: INestApplication;
  let postController: PostController;
  let postModel: Model<PostDocument>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    postController = moduleFixture.get<PostController>(PostController);
    postModel = moduleFixture.get<Model<PostDocument>>(getModelToken(PostEntity.name));
  });



  describe('/posts (POST)', () => {
    it('should create a new post', async () => {
      const title = 'Test Post Title';
      const description = 'Test Post Description';
  
      const createSpy = jest.spyOn(postModel, 'create');
  
      const response = await request(app.getHttpServer())
        .post('/posts')
        .send({ title, description })
        .expect(201);
  
      expect(createSpy).toHaveBeenCalledWith({ title, description });
      expect(response.body).toEqual({
        __v:0,
        _id: expect.any(String),
        title: 'Test Post Title',
        description: 'Test Post Description', 
      });
    },20000);
  });

  describe('/posts (GET)', () => {
    it('should return an array of announcements', async () => {
      const expectedAnnouncements = [
        {
          id: 1,
          title: 'Mock Post 1',
          description: 'Mock Post Description 1',
        },
        {
          id: 2,
          title: 'Mock Post 2',
          description: 'Mock Post Description 2',
        },
      ];
  
      jest.spyOn(postModel, 'find').mockResolvedValue(expectedAnnouncements);
  
      return await request(app.getHttpServer())
        .get('/posts')
        .expect(200)
        .then((response) => {
          const announcements: PostDocument[] = response.body;
          expect(announcements).toEqual(expectedAnnouncements);
        });
    });
  
    it('should handle errors', async () => {
      const errorMessage = 'Error fetching announcements';
    
      jest.spyOn(postModel, 'find').mockRejectedValue(new Error(errorMessage));
    
      return await request(app.getHttpServer())
        .get('/posts')
        .expect(500)
        .then((response) => {
          const { message }: { message: string } = response.body;
          expect(message).toMatch(/Internal server error|Error fetching announcements/);
        });
    });
    
  });
  
});
