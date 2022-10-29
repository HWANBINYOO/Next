import { NextPage } from "next"

const Post: NextPage = () => {
    return (
        <h1>hi</h1>
    )
};

export async function getStaticProps() {

    
    return {
      props: {
      },
    };
  }


export default Post;