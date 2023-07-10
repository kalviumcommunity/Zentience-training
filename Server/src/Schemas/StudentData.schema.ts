import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})

export class StudentData {

  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  Class: string;
  @Prop({ required: true })
  Rollno: string;

}

export const Studentschema = SchemaFactory.createForClass(StudentData);