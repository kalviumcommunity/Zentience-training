import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherAuthModule } from './teacher-auth/teacher-auth.module';

@Module({
  imports: [TeacherAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
