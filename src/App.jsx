import { useCallback, useState } from "react";
import { TabsProvider } from "./contexts/TabsContext";
import { SelectionProvider } from "./contexts/SelectionContext";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { isDesktop } from 'react-device-detect';
import UseScreenOrientation from "react-hook-screen-orientation";

import Fighter from "./components/Character/Character";
import Header from "./components/Header/Header";
import Selection from "./components/Selection/Selection";
import Modal from "./components/Modal/Modal";

function App() {

  const screenOrientation = UseScreenOrientation();
  const [disclaimer, setDisclaimer] = useState(true);
  const handle = useFullScreenHandle();

  const handleDisclaimer = useCallback(
    (value = disclaimer) => {
      setDisclaimer(!value);
      handle.enter();
    },
    [setDisclaimer, disclaimer, handle]
  );

  return (
    <>
      <Modal
        isOpen={!isDesktop && (screenOrientation.includes('portrait') || !handle.active)}
        setIsOpen={(i) => handleDisclaimer(i)}
        classes="welcome"
      >
        <h1>NFT APE FIGHT</h1>

        <div className="underline"></div>

        {screenOrientation.includes("portrait") ? (
          <p>
            turn your device. <br />
            you have to be in landscape mode to continue
          </p>
        ) : (
          <button onClick={handleDisclaimer}>ENTER THE ARENA</button>
        )}
      </Modal>

      <FullScreen handle={handle}>

        <div className="bg__img"></div>
        <div className="col__container">
          {Array.from({ length: 5 }).map( (n, i) => {
              return (
                <div key={i} className="bg__col"></div>
              );        
          })} 
        </div>

        <SelectionProvider>
          <TabsProvider>
            <Header />
            <div className="fullscreen__container">
              <Selection />
              <Fighter />
            </div>
          </TabsProvider>
        </SelectionProvider>

      </FullScreen>
    </>
  );
}

export default App;
