import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import readline from "node:readline";

const prisma = new PrismaClient();

function askHidden(question) {
  return new Promise((resolve) => {
    const stdin = process.stdin;
    const stdout = process.stdout;

    stdout.write(question);

    let input = "";

    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");

    const onData = (key) => {
      if (key === "\r" || key === "\n") {
        stdout.write("\n");
        stdin.setRawMode(false);
        stdin.pause();
        stdin.removeListener("data", onData);
        resolve(input);
        return;
      }

      if (key === "\u0003") {
        stdout.write("\nCancelled.\n");
        stdin.setRawMode(false);
        stdin.pause();
        stdin.removeListener("data", onData);
        process.exit(1);
      }

      if (key === "\u007f") {
        input = input.slice(0, -1);
        return;
      }

      input += key;
    };

    stdin.on("data", onData);
  });
}

async function main() {
  try {
    const admin = await prisma.admin.findUnique({
      where: {
        email: "johalcrane123@gmail.com",
      },
    });

    if (!admin) {
      throw new Error("Admin account not found.");
    }

    const currentPassword = await askHidden(
      "Enter current admin password: "
    );

    const currentPasswordValid = await bcrypt.compare(
      currentPassword,
      admin.passwordHash
    );

    if (!currentPasswordValid) {
      throw new Error("Current password is incorrect.");
    }

    const newPassword = await askHidden(
      "Enter NEW admin password: "
    );

    const confirmPassword = await askHidden(
      "Confirm NEW admin password: "
    );

    if (newPassword !== confirmPassword) {
      throw new Error("New passwords do not match.");
    }

    if (newPassword.length < 10) {
      throw new Error(
        "New password must contain at least 10 characters."
      );
    }

    if (newPassword === currentPassword) {
      throw new Error(
        "New password must be different from the current password."
      );
    }

    const passwordHash = await bcrypt.hash(newPassword, 12);

    await prisma.admin.update({
      where: {
        email: "johalcrane123@gmail.com",
      },
      data: {
        passwordHash,
      },
    });

    console.log("\nAdmin password changed successfully.");
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error("\nPassword change failed:", error.message);
  process.exit(1);
});