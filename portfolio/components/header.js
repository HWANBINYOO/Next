import Link from "next/link";
import DarkModeToggleBtn from "./darkmode-toggleBtn";
export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <Link href="/">
            <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokelinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">유환빈 포트폴리오</span>
            </a>
          </Link>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">홈</a>
            </Link>
            <Link href="/projects">
              <a className="mr-5 hover:text-gray-900">프로젝트</a>
            </Link>
            <a
              href="https://github.com/HWANBINYOO"
              className="mr-5 hover:text-gray-900"
            >
              내 깃허브
            </a>
          </nav>
          <DarkModeToggleBtn />
        </div>
      </header>
    </>
  );
}
