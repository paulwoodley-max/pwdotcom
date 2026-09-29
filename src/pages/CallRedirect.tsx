import { useEffect } from "react";

export default function CallRedirect() {
  useEffect(() => {
    window.location.replace(
      "https://client.paulwoodley.com/widget/bookings/paul-woodley-calendar",
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-primary">
      <p className="text-lg font-medium animate-pulse">
        Redirecting to calendar...
      </p>
    </div>
  );
}
