import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module'; // Import UserModule
import { PrismaService } from '../prisma/prisma.service'; // Import PrismaService

@Module({
  imports: [UserModule], // Add UserModule to imports
  controllers: [AppController],
  providers: [AppService, PrismaService], // Add PrismaService to providers
})
export class AppModule {}
