// src/pages/AboutPage.tsx
import { useEffect } from "react";
import { AuthorLayout } from "~/layouts/author-layout";

export function AboutPage() {
  useEffect(() => {
    document.title = "About – Ivan Trinh";
  }, []);

  const author = {
    name: "Tien Hoang Trinh",
    slug: "default",
    email: "ivantrinh.it@gmail.com",
    // Add other fields as needed...
  };

  const mainContent = { ...author };

  return <AuthorLayout content={mainContent} />;
}
