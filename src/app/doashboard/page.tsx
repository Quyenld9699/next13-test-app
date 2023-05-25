import { prisma } from "src/database/db";
import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import TodoTask from "src/components/TodoTask/TodoTask";
import { toggleToto } from "src/functions";

export default async function Dashboard() {
    const todos = await prisma.todo.findMany();

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h1>Todo list</h1>
                <div style={{ marginLeft: "auto" }}>
                    <Link style={{ cursor: "pointer" }} href="/doashboard/create-todo">
                        + Create
                    </Link>
                </div>
            </div>
            <div>
                <ul>
                    {todos.map((item, index) => {
                        return <TodoTask key={item.id} item={item} toggleToto={toggleToto} />;
                    })}
                </ul>
            </div>
        </div>
    );
}
