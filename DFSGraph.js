class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

//The function should accept a starting node
depthFirstSearch(node){
        //Create a list to store the end result, to be returned at the every end
        const result = [];
        //create an object to store visited vertices
        const visitedVertices = {};
        const adjacencyList = this.adjacencyList;
        //create a helper function which accepts a vertex
        (function DFS(vertex){
            //the helper function should return early if the vertex is empty
            if(!vertex) return null;
            //the helper function should place the vertex it accepts into the visited object and push that vertex into the result array
            visited[vertex] = true;
            result.push(vertex);
            //loop over all of the values in the adjacencyList for that matrix
            adjacencyList[vertex].forEach(neighbor => {
                //if any of those values have not been visited, recursively invoke the helper function with that vertex
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
             })
        })(node)
        return result;
    }
}
