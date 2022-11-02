import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  ParseFilePipeBuilder,
  Post,
  Req,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { Express, Request, Response } from 'express';
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
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
    @Body() body: MyForm,
    @UploadedFiles() files: { oneImage?: Express.Multer.File[], anotherImage?: Express.Multer.File[] }) {
    console.log('request', request.originalUrl, request.headers.origin, request.headers.host, request.cookies);
    if(request.cookies['key'] === null || request.cookies['key'] === undefined || request.cookies['key'] === '') {
      throw new HttpException('Missing key cookie', HttpStatus.FORBIDDEN);
    } else {
      response.cookie('serverkey', uuidv4());
    }
    return {
      body,
      cookies: request.cookies
    };
  }
}
