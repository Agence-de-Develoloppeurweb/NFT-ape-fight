import { TabsProvider } from "./contexts/TabsContext"
import { SelectionProvider } from "./contexts/SelectionContext"

import Fighter from "./components/Character/Character"
import Header from "./components/Header/Header"
import Selection from "./components/Selection/Selection"
import { useEffect } from "react"

function App() {

  useEffect( () => {
    screen.orientation.lock('landscape');
    var element = document.querySelector("#root");
    element.requestFullscreen();
  })

  return (
    <>
      {Array.from({ length: 5 }).map( (n, i) => {
          return (
            <div key={i} className="bg__col"></div>
          );        
      })} 
      <div className="bg__img"></div>

      <SelectionProvider>
        <TabsProvider>
          <Header />
          <Selection />
        </TabsProvider>
        
        <Fighter />
      </SelectionProvider>
      
    </>
  )
}

export default App
