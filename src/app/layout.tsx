import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Accueil',
  description: 'Mathéo Batelier - Étudiant en Développement Web à la Normandie Web School. Découvrez mon portfolio mettant en avant mes compétences et projets en développement web. Explorez mes réalisations et parcours dans le domaine de la création numérique.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
