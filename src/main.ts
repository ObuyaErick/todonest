import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { KnownPrismaClientRequestErrorFilter } from './filters/filter.known_prisma_error';
import { ExcludeSensitiveDataInterceptor } from './interceptors/interceptor.sensitive-data';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // A global resource not found exception filter
  app.useGlobalFilters(new KnownPrismaClientRequestErrorFilter());

  // Glodal sensitive data interceptor
  app.useGlobalInterceptors(new ExcludeSensitiveDataInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      whitelist: true,
    }),
  );

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
