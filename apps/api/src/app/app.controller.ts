import {
  Body,
  Controller,
  Get,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import 'multer';

import { Message, MyForm } from '@cs-demo-multipart/api-interfaces';

import { AppService } from './app.service';
import * as path from 'path';
const pngFileFilter = (req, file, callback) => {
  const ext = path.extname(file.originalname);
  if (ext !== '.png') {
    req.fileValidationError = 'Invalid file type';
    return callback(new Error('Invalid file type'), false);
  }
  return callback(null, true);
};


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @UseInterceptors(FileFieldsInterceptor([
    { name: 'oneImage', maxCount: 1 },
    { name: 'anotherImage', maxCount: 1 },
  ]))
  @Post('file')
  uploadFile(
    @Body() body: MyForm,
    @UploadedFiles() files: { oneImage?: Express.Multer.File[], anotherImage?: Express.Multer.File[] }) {
    console.log(files);
    return body;
  }
}
