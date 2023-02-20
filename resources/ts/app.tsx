import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import React from "react";
import { createRoot } from "react-dom/client";
import "@/styles/tailwind.css";

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
    return pages[`./pages/${name}.tsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
  progress: {
    color: "#4B5563",
  },
});
