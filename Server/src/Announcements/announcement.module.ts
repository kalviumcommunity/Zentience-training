
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './announcement.controller';
import { AnnouncementSchema } from 'src/Schemas/Announcement';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: AnnouncementSchema }]),
  ],
  controllers: [PostController],
})
export class PostModule {}
