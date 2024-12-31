import Counter from './Counter'
export default function App() {
  return (
    <div className='d-flex'>
      <div id='test'>
        <h1>
          <span>
            <p>Hello 1</p>
          </span>
        </h1>
        <p>Hello 2</p>
      </div>
      <h1>
        <p>Hello i'm Out Of Scope</p>
      </h1>
      <Counter />
    </div>
  )
}
