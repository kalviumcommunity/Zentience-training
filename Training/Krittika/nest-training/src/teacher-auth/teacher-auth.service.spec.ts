import { Test, TestingModule } from '@nestjs/testing';
import { TeacherAuthService } from './teacher-auth.service';

describe('TeacherAuthService', () => {
  let service: TeacherAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeacherAuthService],
    }).compile();

    service = module.get<TeacherAuthService>(TeacherAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
