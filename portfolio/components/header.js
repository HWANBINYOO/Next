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
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokelinecap="round"
                  strokelinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span className="ml-3 text-xl">
                <span className="text-blue-800">유환빈</span> 포트폴리오
              </span>
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
