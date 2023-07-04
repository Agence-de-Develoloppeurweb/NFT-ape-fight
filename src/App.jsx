import { useCallback, useState } from "react";
import { TabsProvider } from "./contexts/TabsContext";
import { SelectionProvider } from "./contexts/SelectionContext";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import UseScreenOrientation from "react-hook-screen-orientation";
import useMediaQuery from "./hooks/useMediaQuery";

import Fighter from "./components/Character/Character";
import Header from "./components/Header/Header";
import Selection from "./components/Selection/Selection";
import Modal from "./components/Modal/Modal";

function App() {
  const isDesktop = useMediaQuery("(min-width: 64em)");
  const screenOrientation = UseScreenOrientation();
  const [disclaimer, setDisclaimer] = useState(true);
  const handle = useFullScreenHandle();

  const handleDisclaimer = useCallback(
    (value = disclaimer) => {
      setDisclaimer(!value);
    },
    [setDisclaimer, disclaimer]
  );

  return (
    <>
      <Modal
        isOpen={!isDesktop && disclaimer}
        setIsOpen={(i) => handleDisclaimere(i)}
        classes="welcome"
      >
        <h1>NFT APE FIGHT</h1>

        <div className="underline"></div>

        {screenOrientation.includes("portrait") ? (
          <p>
            turn your phone. <br />
            you have to be in landscape mode to continue
          </p>
        ) : (
          <button onClick={handleDisclaimer}>ENTER THE ARENA</button>
        )}
      </Modal>

      <FullScreen handle={handle}>
        <div style={{ position: "fixed", inset: 0 }}>test</div>

        {Array.from({ length: 5 }).map((n, i) => {
          return (
            <div key={i} className="bg__col" onClick={handleDisclaimer}></div>
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
      </FullScreen>
    </>
  );
}

export default App;
