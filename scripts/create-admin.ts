import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import readline from "readline";

const prisma = new PrismaClient();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function main() {
  console.log("\n=================================");
  console.log("   Johal Crane Services");
  console.log("      Admin Account Setup");
  console.log("=================================\n");

  const email = (await question("Admin email: ")).trim().toLowerCase();

  const password = await question("Admin password: ");

  const name = (await question("Admin name: ")).trim();

  if (!email || !password) {
    console.error("\nEmail and password are required.");
    return;
  }

  if (password.length < 8) {
    console.error("\nPassword must contain at least 8 characters.");
    return;
  }

  const existingAdmin = await prisma.admin.findUnique({
    where: {
      email,
    },
  });

  if (existingAdmin) {
    console.error("\nAn admin with this email already exists.");
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.admin.create({
    data: {
      email,
      passwordHash,
      name: name || null,
    },
  });

  console.log("\n=================================");
  console.log("      Admin Created Successfully");
  console.log("=================================");
  console.log(`Email: ${admin.email}`);
  console.log(`Name: ${admin.name ?? "Not specified"}`);
  console.log(`ID: ${admin.id}`);
  console.log("\nYou can now use these credentials for admin login.");
}

main()
  .catch((error) => {
    console.error("\nFailed to create admin:", error);
    process.exit(1);
  })
  .finally(async () => {
    rl.close();
    await prisma.$disconnect();
  });