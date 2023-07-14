import { Schema, Document } from 'mongoose';

export interface Announcement extends Document {
  title: string;
  description: string;
}

export const AnnouncementSchema = new Schema({
  title: String,
  description: String,
});
