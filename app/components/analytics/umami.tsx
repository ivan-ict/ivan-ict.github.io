import { useEffect } from "react";

interface UmamiAnalyticsProps {
  websiteId?: string;
  src?: string;
}

export function UmamiAnalytics({
  websiteId,
  src = "/stats/script.js",
}: UmamiAnalyticsProps) {
  useEffect(() => {
    if (!websiteId) return;

    // Check if script already exists to avoid duplicates
    const existingScript = document.querySelector(
      `script[data-website-id="${websiteId}"]`
    );
    if (existingScript) return;

    // Create and append the script
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.setAttribute("data-website-id", websiteId);
    script.src = src;

    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const scriptToRemove = document.querySelector(
        `script[data-website-id="${websiteId}"]`
      );
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [websiteId, src]);

  // This component doesn't render anything visible
  return null;
}
