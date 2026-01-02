import { Suspense, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import LoadingPage from "./pages/LoadingPage";
import SharedLayout from "./pages/SharedLayout";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";

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
                <Route path="/toan-canh" element={<SharedLayout />}>
                  <Route index element={<Home />} />
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
