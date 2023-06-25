import Fighter from "./components/Character/Character";
import Header from "./components/Header/Header"
//import Navbar from "./components/Navbar/Navbar"
import SelectionGrid from "./components/Selection/SelectionGrid"

function App() {

  return (
    <>
      {Array.from({ length: 5 }).map( (n, i) => {
          return (
            <div key={i} className="bg__col"></div>
          );        
      })} 
      <div className="bg__img"></div>
      <Header>Select fighter</Header>
      <SelectionGrid></SelectionGrid>
      <Fighter></Fighter>

      {/* <div className="background">
        <Header>Select fighter</Header>
        <div className="background__img"></div>
        {Array.from({ length: 5 }).map( (n, i) => {
            return (
              <div key={i} className="background__col"></div>
            );        
        })}
      </div>
      <div className="container">
        <SelectionGrid></SelectionGrid>
      </div> */}
      
      {/* <Navbar></Navbar> */}
    </>
  )
}

export default App
