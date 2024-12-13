import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
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
      name: 'Пахлава с фисташкой2',
      description: 'Традиционная турецкая пахлава с фисташкой',
      price: 1335.5,
      weight: 500,
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Пахлава с фисташкой3',
      description: 'Традиционная турецкая пахлава с фисташкой',
      price: 15.5,
      weight: 500,
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Пахлава с фисташкой4',
      description: 'Традиционная турецкая пахлава с фисташкой',
      price: 15.5,
      weight: 500,
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Пахлава с фисташкой5',
      description: 'Традиционная турецкая пахлава с фисташкой',
      price: 15.5,
      weight: 500,
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Пахлава с фисташкой6',
      description: 'Традиционная турецкая пахлава с фисташкой',
      price: 15.5,
      weight: 500,
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Пахлава с фисташкой7',
      description: 'Традиционная турецкая пахлава с фисташкой',
      price: 15.5,
      weight: 500,
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Пахлава с фисташкой8',
      description: 'Традиционная турецкая пахлава с фисташкой',
      price: 15.5,
      weight: 500,
      categoryId: pahlava.id, // Используем ID категории "Сладости"
    },
  });

  await prisma.product.create({
    data: {
      name: 'Халва с фисташкой9',
      description: 'Сладкая халва с фисташкой',
      price: 5.0,
      weight: 200,
      categoryId: halva.id, // Используем ID категории "Напитки"
    },
  });
  await prisma.product.create({
    data: {
      name: 'Чай',
      description: 'Турецкий чёрный чай',
      price: 5.0,
      weight: 200,
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
