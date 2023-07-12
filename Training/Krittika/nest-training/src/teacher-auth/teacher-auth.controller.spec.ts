import { Test, TestingModule } from '@nestjs/testing';
import { TeacherAuthController } from './teacher-auth.controller';

describe('TeacherAuthController', () => {
  let controller: TeacherAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherAuthController],
    }).compile();

    controller = module.get<TeacherAuthController>(TeacherAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
