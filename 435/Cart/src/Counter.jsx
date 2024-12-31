import React, { useContext } from 'react'
import { CounterContext } from './counterContext'

export default function Counter() {
    const { counter } = useContext(CounterContext)
    return (
        <div>
            <button oncl>-</button>
            <h1>{counter}</h1>
            <button>+</button>
        </div>
    )
}
