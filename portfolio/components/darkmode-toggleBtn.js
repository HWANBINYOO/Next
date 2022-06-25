import { useTheme } from "next-themes";

export default function DarkModeToggleBtn() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0"
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Button
      <svg
        fill="none"
        stroke="currentColor"
        strokelinecap="round"
        strokelinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  );
}
