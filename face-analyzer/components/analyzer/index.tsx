import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import Image from "next/image";
import { imgBase64Atom , celebrityListAtom , faceListAtom } from '../../Atoms/state';
import { celebrityProps, FaceProps } from '../../types/analyzer';

const Analyzer:NextPage = () => {
const router = useRouter();
const onClick = () => {
      setImgBase64("");
      setCelebrityList([]);
      setFaceList([]);
      router.push("/");
}
const [imgBase64, setImgBase64] = useRecoilState(imgBase64Atom); // 파일 base64
const [celebrityList, setCelebrityList] = useRecoilState<celebrityProps[]>(celebrityListAtom); // 파일 base64
const [faceList, setFaceList] = useRecoilState<FaceProps[]>(faceListAtom); // 파일 base64
console.log(faceList);

    return (
        <Wapper>
        {
            imgBase64 ? (
                <Image width={300} height={300} src={imgBase64} alt={''} />
            ) : ( <p>없음</p> )
        }

        <p>
          {`나이:  ${faceList[0].age.value}세`}
        </p>
        <p>
          {`성별 : ${ faceList[0].gender.value}`}
        </p>
        <p>
        {`표정 : ${ faceList[0].emotion.value}`}
        </p>
        <p>
        {`닮은사람: ${celebrityList[0].celebrity.value}(${celebrityList[0].celebrity.confidence * 100}) `}
        </p>

        <button onClick={onClick}>다른사진선택하기</button>
        </Wapper>
    )
}

const Wapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color:darkgray;
     
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    padding-bottom: 100px;
    gap: 50px;
`;

export default Analyzer;

