import { FormEvent, useEffect, useRef, useState } from 'react';

import { Select } from './components/select';
import { DISTANCES, VERTICES, Vertex } from './constants/distances';
import { updateTableValues } from './utils/table';

import './styles/app.css';
import { calculateDistance } from './utils/calculateDistance';

function App() {
  const [result, setResult] = useState<string | null>()
  const firstSelect = useRef<HTMLSelectElement>(null)
  const secondSelect = useRef<HTMLSelectElement>(null)

  let matrixDimension = [...Array(VERTICES.length)]

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const origin = firstSelect?.current?.value
    const destination = secondSelect?.current?.value
    if(!origin || !destination) return

    const result = calculateDistance(origin, destination)
    setResult(result)
  }

  useEffect(() => {
    Object.keys(DISTANCES).map(vertex => {
      DISTANCES[vertex as Vertex].map(distance => {
        updateTableValues(vertex,distance)
      })
    })  
  },[])

  return (
    <div className="wrapper">
      <h1>Matriz de adjacência</h1>
      <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                {VERTICES.map(vertex => <th key={vertex}>{vertex}</th>)}
              </tr>
            </thead>
            <tbody id="table">
              {matrixDimension.map((e, i) => 
              <tr className="table-row" key={i}>
                {matrixDimension.map((e,i) => 
                  <td className="table-cell" key={i}>/</td>
                )}
              </tr>
            )}
            </tbody>
          </table>
      </div>
      <p>Você deseja saber a menor distância entre quais pontos?</p>
      <form onSubmit={onSubmit}>
        <div className="input-container">
            <Select ref={firstSelect} options={[...VERTICES]}/>
            X
            <Select ref={secondSelect} options={[...VERTICES]}/>
        </div>
        <button type="submit">calcular</button>
      </form>
      {result ?
      <div className="result-container">
        <p>RESULTADO:</p>
        <span>{result}</span>
      </div> : <></>}
    </div>
  );
}

export default App;
