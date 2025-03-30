import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔄 Очистка базы перед заполнением...');
  await prisma.weightOption.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  // Создание категорий
  const pahlava = await prisma.category.create({
    data: {
      name: 'Пахлава',
      sortOrder: 1,
    },
  });
  const halva = await prisma.category.create({
    data: {
      name: 'Халва',
      sortOrder: 2,
    },
  });
  const lukum = await prisma.category.create({
    data: {
      name: 'Лукум',
      sortOrder: 3,
    },
  });
  const chocolate = await prisma.category.create({
    data: {
      name: 'Шоколад',
      sortOrder: 4,
    },
  });
  const tea = await prisma.category.create({
    data: {
      name: 'Чай',
      sortOrder: 5,
    },
  });
  const coffee = await prisma.category.create({
    data: {
      name: 'Кофе',
      sortOrder: 6,
    },
  });

  // Создание продуктов с использованием ID категорий
  await prisma.product.create({
    data: {
      name: 'Пахлава с фисташкой2222',
      slug: 'turkish-pahleva-with-pistachio2',
      imgURL: '/75527.jpg',
      description: 'Традиционная турецкая пахлава с фисташкой',
      weightOptions: {
        create: [
          { weight: 100, price: 250 },
          { weight: 250, price: 450 },
          { weight: 500, price: 800 },
        ],
      },
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Пахлава с фисташкой3',
      slug: 'turkish-pahleva-with-pistachio3',
      imgURL: '/75527.jpg',
      description: 'Традиционная турецкая пахлава с фисташкой',
      weightOptions: {
        create: [
          { weight: 100, price: 250 },
          { weight: 250, price: 450 },
          { weight: 500, price: 800 },
        ],
      },
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Пахлава с фисташкой4',
      slug: 'turkish-pahleva-with-pistachio4',
      imgURL: '/75527.jpg',
      description: 'Традиционная турецкая пахлава с фисташкой',
      weightOptions: {
        create: [
          { weight: 100, price: 250 },
          { weight: 250, price: 450 },
          { weight: 500, price: 800 },
        ],
      },
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Пахлава с фисташкой5',
      slug: 'turkish-pahleva-with-pistachio5',
      imgURL: '/75527.jpg',
      description: 'Традиционная турецкая пахлава с фисташкой',
      weightOptions: {
        create: [
          { weight: 100, price: 250 },
          { weight: 250, price: 450 },
          { weight: 500, price: 800 },
        ],
      },
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Пахлава с фисташкой6',
      slug: 'turkish-pahleva-with-pistachio6',
      imgURL: '/75527.jpg',
      description: 'Традиционная турецкая пахлава с фисташкой',
      weightOptions: {
        create: [
          { weight: 100, price: 250 },
          { weight: 250, price: 450 },
          { weight: 500, price: 800 },
        ],
      },
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Пахлава с фисташкой7',
      slug: 'turkish-pahleva-with-pistachio7',
      imgURL: '/75527.jpg',
      description: 'Традиционная турецкая пахлава с фисташкой',
      weightOptions: {
        create: [
          { weight: 100, price: 250 },
          { weight: 250, price: 450 },
          { weight: 500, price: 800 },
        ],
      },
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Пахлава с фисташкой8',
      slug: 'turkish-pahleva-with-pistachio8',
      imgURL: '/75527.jpg',
      description: 'Традиционная турецкая пахлава с фисташкой',
      weightOptions: {
        create: [
          { weight: 100, price: 250 },
          { weight: 250, price: 450 },
          { weight: 500, price: 800 },
        ],
      },
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });

  await prisma.product.create({
    data: {
      name: 'Халва с фисташкой9',
      slug: 'turkish-pahleva-with-pistachio9',
      imgURL: '/75527.jpg',
      description: 'Сладкая халва с фисташкой',
      weightOptions: {
        create: [
          { weight: 100, price: 250 },
          { weight: 250, price: 450 },
          { weight: 500, price: 800 },
        ],
      },
      categoryId: halva.id, // Используем ID категории "Напитки"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Чай',
      slug: 'tea',
      imgURL: '/75527.jpg',
      description: 'Турецкий чёрный чай',
      weightOptions: {
        create: [
          { weight: 100, price: 250 },
          { weight: 250, price: 450 },
          { weight: 500, price: 800 },
        ],
      },
      categoryId: tea.id, // Используем ID категории "Напитки"
    },
  });

  console.log('Сиды успешно созданы!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
