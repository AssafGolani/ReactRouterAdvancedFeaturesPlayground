import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";
function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
