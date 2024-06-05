import { useEffect } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { getTokenDuration } from "../util/auth";
function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }
    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);
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
