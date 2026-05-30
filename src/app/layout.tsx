import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "JointLab Shop",
    template: "%s | JointLab Shop",
  },
  description:
    "Suplementos formulados por JointLab Institute. Cuida tus articulaciones, maximiza tu rendimiento y acelera tu recuperacion.",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}

