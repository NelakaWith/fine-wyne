import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fine-Wyne Admin",
  description: "Admin dashboard for Fine-Wyne chat application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
