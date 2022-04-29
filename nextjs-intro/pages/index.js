import Link from "next/link";
import { useRouter } from "next/router";
import Nhead from "../components/Nhead";

export default function Home({ data }) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className="container">
      <Nhead title="Home" />
      {data?.map((movie) => (
        <div onClick={() => onClick(movie.id)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            <Link href={`movies/${movie.id}`} key={movie.id}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          width: 500px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          display: flex;
          justify-content: center;
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/movies`);
  const data = await res.json();
  return { props: { data } };
}
