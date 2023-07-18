import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './assignment.controller';
import { AssignmentSchema } from 'src/Schemas/AssignmentSchema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Assignment', schema: AssignmentSchema }]),
  ],
  controllers: [PostController],
})
export class AssignmentModule {}
