import { DISTANCES, Vertex } from '../constants/distances'

const checkIfElementIsInArray = (array: any[], element: any) => array.indexOf(element) !== -1

const checkIfVertexExists = (origin: string) => checkIfElementIsInArray(Object.keys(DISTANCES),origin)

export const calculateLeastDistance = (origin: string, destination: string, sum: number, initialOrigin: string, distanceResults: number[] | null = null, edgeAlreadyDeepIn: string[] = []) => {
    if(distanceResults === null) distanceResults = []

    if(checkIfVertexExists(origin)){
        let originEdges = DISTANCES[origin as Vertex]
        for(let edge of originEdges){
            if(edge[0] === destination){
                distanceResults.push(edge[1] as number + sum)
            }
            else if(edge[0] !== initialOrigin && !checkIfElementIsInArray(edgeAlreadyDeepIn, edge[0])){
                edgeAlreadyDeepIn = [...edgeAlreadyDeepIn, edge[0] as string]
                calculateLeastDistance(edge[0] as string, destination, edge[1] as number + sum, initialOrigin, distanceResults, edgeAlreadyDeepIn)
            }
        }
    }
    return distanceResults
}

export const calculateDistance = (origin: string, destination: string) => {
    if(origin === destination) return "0"

    const result = calculateLeastDistance(origin, destination, 0, origin)
    if(!result.length) return "Não existem caminhos"

    return Math.min(...result).toString();
}