import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Studentschema } from './Schemas/StudentData.schema';
import { addedstudentsschema } from './Schemas/Added-student.schema';
import { AnnouncementSchema } from './Schemas/Announcement';
import { PostModule } from './Announcements/announcement.module';
import { AssignmentSchema } from './Schemas/AssignmentSchema';
// import { AssignmentModule } from './Assignments/assignment.module';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'StudentData', schema: Studentschema },
      { name: 'addedstudent', schema: addedstudentsschema },
      { name: 'announcements', schema: AnnouncementSchema },
      {name: 'AssignmentData',schema:AssignmentSchema}
    ]),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
