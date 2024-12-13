import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service'; // Сервис, который возвращает категории и товары

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get('/with-products')
  getAllCategoriesWithProducts() {
    return this.categoriesService.findAllCategoriesWithProducts();
  }
}
