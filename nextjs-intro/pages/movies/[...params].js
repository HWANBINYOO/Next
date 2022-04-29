import { useRouter } from "next/router";
import Nhead from "../../components/Nhead";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params;
  return (
    <div>
      <Nhead title={title} />
      <h4>{title}</h4>;
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
