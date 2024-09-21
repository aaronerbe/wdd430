// app/layout.js
export const metadata = {
    title: 'My Next.js Learning Module',
    description: 'Learning Next.js',
};

export default function RootLayout({ children }) {
    return (
    <html lang="en">
        <body>{children}</body>
    </html>
    );
}