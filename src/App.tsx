import { useState, useCallback } from "react";
//import "./styles.css";
import ConnectWalletButton from "./ConnectWalletButton";

export default function App() {
  const [, setSelectedAddress] = useState<string>();

  const addressChanged = useCallback((address: string | undefined) => {
    setSelectedAddress(address);
  }, []);

  return (
    <div className="App">
      <ConnectWalletButton onChange={addressChanged} />
    </div>
  );
}

