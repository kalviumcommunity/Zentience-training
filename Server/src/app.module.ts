import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Studentschema } from './Schemas/StudentData.schema';
import { addedstudentsschema } from './Schemas/Added-student.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'StudentData', schema: Studentschema },
      { name: 'addedstudent', schema: addedstudentsschema },
    ]),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
