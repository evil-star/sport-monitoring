import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(
                    ({
                        path,
                        exact,
                        component: Component,
                        layout: Layout,
                        name,
                    }) => (
                        <Route
                            path={path}
                            exact={exact}
                            key={name}
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <Layout>
                                        <Component />
                                    </Layout>
                                </React.Suspense>
                            }
                        />
                    )
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
