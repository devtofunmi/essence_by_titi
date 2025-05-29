import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="py-6 text-sm text-center text-gray-600">
      <p>
        Essence by Titi &copy; {year ?? ""}. All rights reserved.
      </p>
      <p className="mt-2">
        Follow us on{" "}
        <a
          href="https://instagram.com/essencebytiti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600  hover:underline"
        >
          Instagram
        </a>
      </p>
    </div>
  );
}
