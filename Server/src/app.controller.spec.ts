import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { AppController } from './app.controller';
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
    },10000); 
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
});
