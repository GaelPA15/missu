// app/layout.tsx (este archivo debe estar en la carpeta 'app')

import React, { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Nos vamos a ver?',
  description: 'Broma interactiva',
};

interface LayoutProps {
  children: ReactNode; // Definir explícitamente 'children' como tipo ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;
