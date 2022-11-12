import type { NextPage } from 'next'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { plus , minus ,add} from '../store/counterSlice';

const Home: NextPage = () => {
  const Countvalue = useSelector((state: RootState) => state.counter.value);
  const [count , setCount ] = useState<number>();
  const dispatch = useDispatch();
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  }
  return (
    <>
      <p>count : {Countvalue}</p>
      <button onClick={() => dispatch(plus())}>counter 증가</button>
      <button onClick={() => dispatch(minus())}>counter 감소</button>
      <input type="number" onChange={onChange} value={count} />
      <button onClick={() => dispatch(add(count))}>입력</button>
    </>
  )
}

export default Home
