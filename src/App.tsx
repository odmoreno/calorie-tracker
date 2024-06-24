
import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  console.log(state)
  return (
    <>
      <header className=" bg-lime-600 py-3">
        <div className=" max-w-4xl mx-auto flex justify-between">
          <h1 className=" text-center text-lg font-bold text-white uppercase">
            Contador de calorias
          </h1>
        </div>
      </header>

      <section className="bg-lime-500 py20 px-5">
        <div className="max-w-4xl mx-auto py-20">

          <Form
            dispatch={dispatch}
          />
        </div>
      </section>
    </>
  )
}

export default App
