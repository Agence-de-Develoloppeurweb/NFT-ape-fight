import { useState } from "react"
import { TabsProvider } from "./contexts/TabsContext"
import { SelectionProvider } from "./contexts/SelectionContext"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import UseScreenOrientation from "react-hook-screen-orientation"
import useMediaQuery from "./hooks/useMediaQuery"

import Fighter from "./components/Character/Character"
import Header from "./components/Header/Header"
import Selection from "./components/Selection/Selection"
import Modal from "./components/Modal/Modal"

function App() {

  const isDesktop = useMediaQuery("(min-width: 64em)");
  const screenOrientation = UseScreenOrientation();
  const [disclaimer, setDisclaimer] = useState(true);
  const handle = useFullScreenHandle();

  return (
    <>
      <Modal
        //isOpen={!isDesktop && (screenOrientation.includes('portrait') || !handle.active)}
        isOpen={!isDesktop && disclaimer}
        setIsOpen={(i) => setDisclaimer(i)}
        classes="welcome"
      >
        <h1>NFT APE FIGHT</h1>

        <div className="underline"></div>

        {screenOrientation.includes('portrait') ?
          <p>turn your phone. <br />you have to be in landscape mode to continue</p>
          :
          <button 
            onClick={() => {
              setDisclaimer(!disclaimer)
              //handle.enter()
            }}
          >
            ENTER THE ARENA
          </button>
        }
      </Modal>

      <FullScreen handle={handle}>

        <div className="bg__img"></div>
        <div className="col__container">
          {Array.from({ length: 5 }).map( (n, i) => {
              return (
                <div key={i} className="bg__col" onClick={() => setDisclaimer(!disclaimer)}></div>
              );        
          })} 
        </div>

        {/* <div className="fullscreen__container"> */}
          <SelectionProvider>
            <TabsProvider>
              <Header />
              <div className="fullscreen__container">
                <Selection />
                <Fighter />
              </div>
            </TabsProvider>
          </SelectionProvider>
        {/* </div> */}

      </FullScreen>
    </>
  )
}

export default App
