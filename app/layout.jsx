import "../src/index.css";

const siteUrl = "https://sanagh7.github.io/";
const siteImage = `${siteUrl}san.JPG`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Sanandan Ghimire (Sana) - Full Stack Developer & Software Engineer Portfolio",
  description:
    "Portfolio of Sanandan Ghimire (Sana), a Full Stack Developer specializing in React, Node.js, and cybersecurity. Explore projects, skills and professional experience in web development and software engineering.",
  keywords: [
    "Sanandan Ghimire",
    "Sana",
    "Full Stack Developer",
    "Software Developer",
    "React Developer",
    "Node.js",
    "Portfolio",
    "Next.js",
    "Cyber Security",
    "Nepal Developer",
  ],
  authors: [{ name: "Sanandan Ghimire" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Sanandan Ghimire (Sana) - Full Stack Developer & Software Engineer",
    description:
      "Portfolio of Sanandan Ghimire (Sana), a Full Stack Developer specializing in React, Node.js, and cybersecurity.",
    images: [{ url: siteImage, width: 1200, height: 630 }],
    siteName: "Sanandan Ghimire Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanandan Ghimire (Sana) - Full Stack Developer",
    description:
      "Portfolio of Sanandan Ghimire (Sana), a Full Stack Developer specializing in React, Node.js, and cybersecurity.",
    images: [siteImage],
    creator: "@sanandan_ghimire",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060921",
};

const personStructuredData = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Sanandan Ghimire",
  alternateName: "Sana",
  description: "Full Stack Developer specializing in React, Node.js, and cybersecurity",
  image: siteImage,
  sameAs: ["https://github.com/sanagh7", "https://linkedin.com/in/sanandanghimire"],
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "Nepal",
  },
  email: "sanandanghimire6688@gmail.com",
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteUrl,
  name: "Sanandan Ghimire Portfolio",
  description:
    "Personal portfolio website of Sanandan Ghimire (Sana), a Full Stack Developer and Software Engineer",
  author: {
    "@type": "Person",
    name: "Sanandan Ghimire",
    alternateName: "Sana",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
