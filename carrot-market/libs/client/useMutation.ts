import { useState } from "react"


export default function useMutation(url: string): [
    (data:any) => void,
    { loading: boolean; data:undefined | any; error:undefined | any }
] {
    const [loading , setLoading] = useState(false);
    const [data , setData] = useState<undefined | any>(undefined);
    const [error , setError] = useState<undefined | any>(undefined);
    function mutation(data?:any){

    }
    return[mutation , {loading, data, error}]
}