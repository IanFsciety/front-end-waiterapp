import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import { Orders } from "./components/Orders";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position="bottom-center"/>
    </>
  );
}
