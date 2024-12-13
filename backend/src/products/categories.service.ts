import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAllCategoriesWithProducts() {
    return this.prisma.category.findMany({
      include: {
        products: {
          orderBy: {
            name: 'asc', // Сортировка продуктов внутри каждой категории по имени
          },
        },
      },
      orderBy: {
        sortOrder: 'asc', // Сортировка категорий по полю sortOrder в порядке возрастания
      },
    });
  }
}
