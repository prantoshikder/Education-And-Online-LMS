import type { Metadata } from "next";
import "../scss/main.scss";
import PageRender from "./PageRender";

export const metadata: Metadata = {
  title: "Education & Online LMS",
  description: "Learning Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageRender>{children}</PageRender>
      </body>
    </html>
  );
}
