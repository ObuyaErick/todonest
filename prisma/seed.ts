// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const todos = [
  {
    description: 'Buy groceries for the week',
    completed: false,
  },
  {
    description: 'Complete project documentation',
    completed: true,
  },
  {
    description: 'Schedule dentist appointment',
    completed: false,
  },
  {
    description: 'Reply to client emails',
    completed: true,
  },
  {
    description: 'Prepare presentation for Monday meeting',
    completed: false,
  },
  {
    description: 'Take car for oil change',
    completed: false,
  },
  {
    description: 'Read chapter 5 of Flutter book',
    completed: true,
  },
  {
    description: 'Call mom for her birthday',
    completed: false,
  },
  {
    description: 'Update resume with recent projects',
    completed: false,
  },
  {
    description: 'Organize desk and workspace',
    completed: true,
  },
  {
    description: 'Research vacation destinations',
    completed: false,
  },
  {
    description: 'Fix leaky kitchen faucet',
    completed: false,
  },
  {
    description: 'Submit expense reports',
    completed: true,
  },
  {
    description: 'Plan weekend hiking trip',
    completed: false,
  },
  {
    description: 'Review and pay monthly bills',
    completed: false,
  },
];

const prisma = new PrismaClient();

async function main() {
  console.log('Creating todos');
  await prisma.todo.createMany({
    data: todos,
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
