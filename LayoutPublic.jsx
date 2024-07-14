import { Outlet } from "react-router-dom";

function LayoutPublic() {
  return (
    <>
    <main>
        <Outlet/>
    </main>
    </>
  );
}

export default LayoutPublic;
