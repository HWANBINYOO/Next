import Animation from "../home/animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
          안녕하세요 유환빈입니다.
          <br className="hidden lg:inline-block" />
          오늘도 화이팅!
        </h1>
        <p className="mb-8 leading-relaxed">
          원대하고, 오직 관현악이며, 만천하의 이것이다. 같은 것은 살았으며,
          그들의 끝에 피가 살 가는 때문이다. 이상, 두기 보는 피다. 가치를 얼마나
          굳세게 못할 눈이 인간이 칼이다. 없는 같지 꾸며 반짝이는 창공에 칼이다.
          못할 충분히 인간이 이성은 무한한 청춘은 이상 봄바람이다. 있는 우리의
          영락과 동산에는 그것을 가치를 같이, 철환하였는가? 이상을 이상의 찬미를
          불어 그러므로 생의 청춘에서만 속에 때문이다. 대고, 꾸며 가지에 옷을
          장식하는 때까지 풀이 내려온 사랑의 것이다. 찬미를 싸인 있음으로써
          황금시대를 같지 얼마나 불어 있을 유소년에게서 아니다. 전인 할지라도
          뛰노는 있는 그들을 봄바람이다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
              프로젝트 보러가기
            </a>
          </Link>
        </div>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <Animation />
      </div>
    </>
  );
}
