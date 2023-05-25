"use client";

import React from "react";

export default function TodoTask({ item, toggleToto }: { item: { id: string; title: string; complete: boolean }; toggleToto: (id: string, checked: boolean) => void }) {
    return (
        <li>
            <input type="checkbox" id={item.id} defaultChecked={item.complete} onChange={(e) => toggleToto(item.id, e.target.checked)} />
            <label htmlFor={item.id}>{item.title}</label>
        </li>
    );
}
