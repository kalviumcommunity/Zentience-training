import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Announcement } from './Schemas/Announcement';
import { CreateAnnouncementDto } from './DTO/CreateAnnouncementDto';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectModel('Announcement') private readonly announcementModel: Model<Announcement>,
  ) {}

  async create(createAnnouncementDto: CreateAnnouncementDto): Promise<Announcement> {
    const createdAnnouncement = new this.announcementModel(createAnnouncementDto);
    return createdAnnouncement.save();
  }
}