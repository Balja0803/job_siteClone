import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';

// export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  password?: string;
  @Prop()
  gender?: string;
  @Prop()
  joinDate?: string;
  @Prop()
  phoneNumber?: number;
  @Prop()
  email: string;
  @Prop([String])
  skill: string[];
  @Prop({ default: 'CLIENT' })
  role: 'CLIENT' | 'MODERATOR' | 'ADMIN';
}

export const UserSchema = SchemaFactory.createForClass(User);
