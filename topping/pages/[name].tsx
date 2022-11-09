import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Home from '../components/Home';

const toppingPage:NextPage = () => {
    const router = useRouter();
    
    return (
        <>
            <Header />
            <Home router={router.query.name as string} />
        </>
    )
}


export default toppingPage;