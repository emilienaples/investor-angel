import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule } from './forms/forms.module';
import { PrismaModule } from 'prisma/prisma.module';
import { StocksModule } from './stocks/stocks.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [FormsModule,
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public')
    }),
    PrismaModule,
    StocksModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
