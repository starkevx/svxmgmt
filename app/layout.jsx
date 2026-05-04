import './globals.css'

export const metadata = {
  title: 'SVX Management - Sports and Business Management Agency',
  description: 'Strategic financial oversight, operational excellence, and brand development across all SVX Group subsidiaries.',
  keywords: 'sports management, business management, SVX Group, V1 Sports, V1 Tech',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
