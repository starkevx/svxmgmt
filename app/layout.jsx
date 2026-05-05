import './globals.css'

export const metadata = {
  title: 'SVX Management | Sports, Athlete and Brand Management Agency',
  description: 'Strategic financial oversight, operational excellence, athlete management and brand development across all SVX Group subsidiaries.',
  keywords: 'sports management, athlete management, NIL, college recruiting, brand and business management, SVX Group, VarsityOne, V1Portal, V1Sportz,',
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
