import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Job } from './job.schema';
import { Jobdto } from './job.dto';

@Injectable()
export class JobService {
  constructor(
    @InjectModel('jobs') private jobModel: Model<Job>,
    @InjectConnection() private connection: Connection,
  ) {}

  async addJob(createJobDto: Jobdto): Promise<Job> {
    const createJob = new this.jobModel(createJobDto);
    return createJob.save();
  }

  async findAll(): Promise<Job[]> {
    return this.jobModel.find().exec();
  }

  async findJob(id: string): Promise<Job> {
    console.log('find Job id', id);
    const result = await this.jobModel.findById(id).exec();
    console.log('found Job', result);
    return result;
  }

  async generateStaticId(): Promise<Job[]> {
    const query = await this.jobModel.find({}).select({ _id: 1 });
    console.log('static paths', query);
    return query;
  }
}