import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Маршрут для получения всех товаров
  @Get()
  async getAllProducts() {
    return await this.productsService.findAllProducts();
  }

  @Get('slug/:slug')
  async getProductBySlug(@Param('slug') slug: string) {
    console.log('Received slug:', slug);
    const product = await this.productsService.findBySlug(slug);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }
}
