import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Post as PostEntity, PostDocument } from 'src/Schemas/AssignmentSchema';

@Controller('assignments')
export class PostController {
  constructor(
    @InjectModel(PostEntity.name) private postModel: Model<PostDocument>,
  ) {}

  @Post()
  async createPost(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('subject') subject: string,
    @Body('fileFormat') fileFormat: string,
  ): Promise<PostDocument> {
    const createdPost = new this.postModel({ title, description, subject, fileFormat });
    return createdPost.save();
  }
}