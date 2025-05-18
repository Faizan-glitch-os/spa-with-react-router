import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function Mainpage() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
