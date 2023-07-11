import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})

export class StudentData {

  @Prop({ required: true })
  Name: string;
  @Prop({ required: true })
  Class: string;
  @Prop({ required: true })
  Rollno: string;

}

export const Studentschema = SchemaFactory.createForClass(StudentData);