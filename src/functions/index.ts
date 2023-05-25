import { prisma } from "src/database/db";

export async function toggleToto(id: string, checked: boolean) {
    "use server";
    console.log(id, checked);
    await prisma.todo.update({ where: { id: id }, data: { complete: checked } });
}
