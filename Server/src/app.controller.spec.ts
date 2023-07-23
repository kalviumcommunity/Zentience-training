import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import * as request from 'supertest';
import { Query } from 'mongoose';
import { Model } from 'mongoose';
import { AppController } from './app.controller';
import { PostController } from './Announcements/announcement.controller';
import {Post as PostEntity, PostDocument } from './Schemas/Announcement';
import { AppService } from './app.service';
import { getModelToken } from '@nestjs/mongoose';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
        {
          provide: getModelToken('StudentData'), // Provide the token for the model
          useValue: {}, // Provide an empty object as a mock for the model
        },
      ],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  describe('getallstudent', () => {
    it('should return an array of StudentData', async () => {
      const studentData = [
        { id: 1, Name: 'John Doe', Class: 'Class 7', Rollno: 7501, Teachername: 'Jonh Doe' },
        { id: 2, Name: 'Jane Smith', Class: 'Class 8', Rollno: 7502, Teachername: 'Jane Smith' },
      ];
      jest.spyOn(appService, 'findAll').mockResolvedValue(studentData);
  
      expect(await appController.getallstudent()).toEqual(studentData);
    },20000); 
  });

  
  describe('composeAssignment', () => {
    it('should create and return an assignment', async () => {
      const assignmentData = {
        title: 'Test Assignment',
        description: 'Test Assignment Description',
        subject: 'Math',
        fileFormat: 'pdf',
      };

      const expectedAssignment = {
        _id: 'mock-assignment-id',
        ...assignmentData,
      };

      jest.spyOn(appService, 'composeAssignment').mockResolvedValue(expectedAssignment);

      const result = await appService.composeAssignment(assignmentData);

      expect(appService.composeAssignment).toHaveBeenCalledWith(assignmentData);
      expect(result).toEqual(expectedAssignment);
    });
  });

  

  describe('createstudent', () => {
    it('should create a new student', async () => {
      const createStudentDto = { id: 1, Name: 'John Doe',Class:'Class 7', Rollno:7501, Teachername:'Jonh Doe' };
      const createdStudent = { id: 1, ...createStudentDto };
      jest.spyOn(appService, 'create').mockResolvedValue(createdStudent);

      expect(await appController.createstudent(createStudentDto)).toEqual(createdStudent);
    },10000);
  });

  describe('addStudent', () => {
    it('should add a new student', async () => {
      const addStudentDto = { name: 'John Doe', email: 'john@example.com',password:'abcd',Teachername:'John Doe' };
      const addedStudent = { id: 1, ...addStudentDto };
      jest.spyOn(appService, 'addStudent').mockResolvedValue(addedStudent);

      expect(await appController.addStudent(addStudentDto)).toEqual(addedStudent);
    },10000);
  });

  describe('checkstudent', () => {
    it('should check student login and return success message', async () => {
      const studentCredentials = { username: 'john@example.com', password: 'password' };
      const response = { message: 'student login successfully' };
      jest.spyOn(appService, 'checkstudent').mockResolvedValue(response);

      expect(await appController.checkstudent(studentCredentials)).toEqual(response);
    },10000);

    it('should check student login and return not found message', async () => {
      const studentCredentials = { username: 'john@example.com', password: 'wrongpassword' };
      const response = { message: 'student not found' };
      jest.spyOn(appService, 'checkstudent').mockResolvedValue(response);

      expect(await appController.checkstudent(studentCredentials)).toEqual(response);
    },10000);
  });

  describe('updatestudent', () => {
    it('should update an existing student', async () => {
      const updateStudentDto = { id: 1, Name: 'John Doe',Class:'Class 7', Rollno:7501, Teachername:'Jonh Doe' };
      const id = 1;
      const response = { message: 'Data updated successfully' };
      jest.spyOn(appService, 'update').mockResolvedValue(response);

      expect(await appController.updatestudent(updateStudentDto, id)).toEqual(response);
    },10000);

    it('should return not found message when student does not exist', async () => {
      const updateStudentDto = { id: 1, Name: 'John Doe',Class:'Class 7', Rollno:7501, Teachername:'Jonh Doe' };
      const id = 1;
      const response = { message: 'Student not found' };
      jest.spyOn(appService, 'update').mockResolvedValue(response);

      expect(await appController.updatestudent(updateStudentDto, id)).toEqual(response);
    },10000);
  });

  describe('deletestudent', () => {
    it('should delete an existing student', async () => {
      const id = 1;
      const response = { message: 'A' };
      jest.spyOn(appService, 'delete').mockResolvedValue(response);

      expect(await appController.deletestudent(id)).toEqual(response);
    },10000);

    it('should return not found message when student does not exist', async () => {
      const id = 1;
      const response = { message: 'Student not found' };
      jest.spyOn(appService, 'delete').mockResolvedValue(response);

      expect(await appController.deletestudent(id)).toEqual(response);
    },10000);
  });

  describe('PostController', () => {
    let postController: PostController;
    let postModel: Model<PostDocument>;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [PostController],
        providers: [
          {
            provide: getModelToken(PostEntity.name),
            useValue: {
              find: jest.fn(),
              create: jest.fn().mockReturnValue({
                save: jest.fn().mockResolvedValue({
                  id: 'mock-post-id',
                  title: 'Mock Post Title',
                  description: 'Mock Post Description',
                }),
              }),
            },
          },
          {
            provide: getModelToken('PostModel'), // Replace 'PostModel' with the correct token for the postModel provider
            useValue: {
              prototype: {
                save: jest.fn().mockResolvedValue({
                  id: 'mock-post-id',
                  title: 'Mock Post Title',
                  description: 'Mock Post Description',
                }),
              },
            },
          },
        ],
      }).compile();
  
      postController = module.get<PostController>(PostController);
      postModel = module.get<Model<PostDocument>>(getModelToken(PostEntity.name));
    });
  
    describe('createPost', () => {
      it('should create a new post', async () => {
        const title = 'Test Post Title';
        const description = 'Test Post Description';
  
        const createSpy = jest.spyOn(postModel, 'create');
  
        const createdPost = await postController.createPost(title, description);
  
        expect(createSpy).toHaveBeenCalledWith({ title, description });
        expect(createdPost).toEqual({
          id: 'mock-post-id',
          title: 'Mock Post Title',
          description: 'Mock Post Description',
        });
      },10000);
    });

    describe('getAllAnnouncements', () => {
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
  
        const announcements = await postController.getAllAnnouncements();
  
        expect(postModel.find).toHaveBeenCalled();
        expect(announcements).toEqual(expectedAnnouncements);
      });
  
      it('should handle errors', async () => {
        const errorMessage = 'Error fetching announcements';
  
        jest.spyOn(postModel, 'find').mockRejectedValue(new Error(errorMessage));
  
        try {
          await postController.getAllAnnouncements();
        } catch (error) {
          expect(error.message).toBe(errorMessage);
        }
      });
    });
  

    

  });

});
