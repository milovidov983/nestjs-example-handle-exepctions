import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    console.log('EXCEPTION DATA:');
    console.log(exception);

    const ctx = host.switchToHttp();

    console.log('CONTEXT:');
    console.log(ctx);
  }
}
