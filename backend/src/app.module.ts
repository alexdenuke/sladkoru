import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CategoriesProductsModule } from './products/categories.module';
@Module({
  imports: [CategoriesProductsModule],
  providers: [PrismaService],
})
export class AppModule {}
