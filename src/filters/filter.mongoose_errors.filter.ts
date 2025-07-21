import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { Error as MongooseError } from 'mongoose';

@Catch(MongooseError.ValidationError)
export class FilterMongooseErrorsFilter implements ExceptionFilter {
  catch(exception: MongooseError.ValidationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    return response.status(422).json({
      status: 'FAIL',
      code: 422,
      payload: [],
      errors: [exception.message],
      scope: 'FAIL',
      tm: '20250502175231',
      success: false,
    });
  }
}
