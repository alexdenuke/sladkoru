import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  // Метод для получения всех товаров
  async findAllProducts() {
    return this.prisma.product.findMany({
      select: {
        slug: true, // Выбираем только slug для каждого товара
        // Добавь другие поля, если они нужны для генерации путей
      },
    });
  }

  async findBySlug(slug: string) {
    return await this.prisma.product.findUnique({
      where: { slug },
      include: {
        weightOptions: true, // ← вот этого тебе не хватало
      },
    });
  }
}
