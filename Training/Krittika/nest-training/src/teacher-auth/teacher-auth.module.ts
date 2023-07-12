import { Module } from '@nestjs/common';
import { TeacherAuthController } from './teacher-auth.controller';
import { TeacherAuthService } from './teacher-auth.service';

@Module({
  controllers: [TeacherAuthController],
  providers: [TeacherAuthService]
})
export class TeacherAuthModule {}
