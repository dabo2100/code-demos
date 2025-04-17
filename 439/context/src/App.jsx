import { useContext, useEffect } from "react"
import { AppContext } from "./context/AppContext"


export default function App() {
  const { isDark, toggleMode } = useContext(AppContext);

  useEffect(() => {
    console.log('App is Rendered')
  },)
  // console.log(isDark);
  return (
    <div className="col-12 App">
      <h1>Mode is : {isDark ? 'Dark' : 'Light'} </h1>
      <button onClick={toggleMode}>Toggle</button>
    </div>
  )
}
