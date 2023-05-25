import { prisma } from "src/database/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function createTaskTodo(data: FormData) {
    "use server";

    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid Title");
    }
    await prisma.todo.create({ data: { title: title, complete: false } });
    redirect("/doashboard");
}

export default function CreateTodo() {
    return (
        <div style={{ padding: "20px" }}>
            <Link href={"/doashboard"}>Back</Link>
            <br />
            <br />
            <div>
                <form action={createTaskTodo}>
                    <input type="text" name="title" />
                    <br />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}
