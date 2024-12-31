import React from 'react'
import { useRecoilState } from 'recoil'
import { $Counter } from './store'

export default function Controls() {
    const [counter, setCounter] = useRecoilState($Counter);
    return (
        <div>
            <button onClick={() => { setCounter(counter - 1) }}>-</button>
            <button onClick={() => { setCounter(counter + 1) }}>+</button>
        </div>
    )
}
