import { VERTICES } from "../constants/distances";

type Distance = (string | number)[]

const getPosition = (element: string) => {
    let row = -1;
    for(let i = 0; i < VERTICES.length; i++) {
      if(VERTICES[i] === element) row = i +1;
    }
  
    return row;
}

export const updateTableValues = (origin: string,distance: Distance) => {
    let row = getPosition(origin)
    let column = getPosition(distance[0] as string)
    if(row == -1 || column == -1) return
    let cell = document.querySelector(`#table :nth-child(${row}) :nth-child(${column})`)
    if(cell) {
      cell.innerHTML = distance[1] as string
    }
}