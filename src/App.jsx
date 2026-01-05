import { Suspense, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import LoadingPage from "./pages/LoadingPage";
import SharedLayout from "./pages/SharedLayout";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import LayoutUtilities from "./pages/LayoutUtilities";
import FloorPlan from "./pages/FloorPlan";
import Overview from "./pages/Overview"
import Location from "./pages/Location"
import Utilities from "./pages/Utilities";

export default function App() {
  const languageState = useSelector((state) => state.language);
  const { locale, messages } = languageState;
  const [checkVerify, setCheckVerify] = useState(true);

  return (
    <IntlProvider messages={messages} locale={locale}>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            {checkVerify ? (
              <Routes>
                <Route path="/" element={<LoadingPage />} />
                <Route element={<SharedLayout />}>
                  <Route path="/toan-canh" index element={<Overview />} />
                  <Route
                    path="mat-bang-tang/:block/:floor"
                    element={<FloorPlan />}
                  />
                  <Route
                    index
                    path={`lien-ket-vung`}
                    element={<Location />}
                  />
                  <Route
                    index
                    path={`mat-bang-tong-the`}
                    element={<Utilities />}
                  />
                  <Route
                    path="mat-bang-tien-ich/:block/:floor"
                    element={<LayoutUtilities />}
                  />
                </Route>

                <Route path="*" element={<ErrorPage />} />
              </Routes>
            ) : (
              <Routes>
                <Route
                  path="/*"
                  element={<Verify setCheckVerify={setCheckVerify} />}
                />
              </Routes>
            )}
          </BrowserRouter>
        </Suspense>
      </div>
    </IntlProvider>
  );
}
