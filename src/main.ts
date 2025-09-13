import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { KnownPrismaClientRequestErrorFilter } from './filters/filter.known_prisma_error';
import { ExcludeSensitiveDataInterceptor } from './interceptors/interceptor.sensitive-data';
import { FilterMongooseErrorsFilter } from './filters/filter.mongoose_errors.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    // origin: 'http://localhost:6020',
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // A global resource not found exception filter
  app.useGlobalFilters(
    new KnownPrismaClientRequestErrorFilter(),
    new FilterMongooseErrorsFilter(),
  );

  // Glodal sensitive data interceptor
  app.useGlobalInterceptors(new ExcludeSensitiveDataInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      whitelist: true,
    }),
  );

  await app.listen(
    process.env.PORT ?? 4000,
    //  '0.0.0.0',
  );
}
bootstrap();
