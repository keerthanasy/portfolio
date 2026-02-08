# Portfolio 2026

A premium, immersive developer portfolio built with Next.js, Three.js, and Framer Motion.

## Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    npm install three @types/three @react-three/fiber @react-three/drei framer-motion lucide-react lenis
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

-   **Framework**: Next.js 15 (App Router)
-   **Styling**: CSS Modules / Global CSS
-   **Animation**: Framer Motion
-   **3D**: React Three Fiber + Drei
-   **Scroll**: Lenis

## Structure

-   `src/app/page.tsx`: Main entry point assembling all sections.
-   `src/components/`: Reusable components (Hero, About, etc.).
-   `src/components/Scene.tsx`: The 3D background layer.

## Customization

-   Edit `src/app/globals.css` to change the color palette (Look for `:root` variables).
-   Update `src/components/Projects.tsx` to add your own case studies.
