import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ position: "relative", margin: 0, padding: 0 }}>
            <div style={{ background: "cyan" }}>layout doashboard</div>
            {children}
        </div>
    );
}
