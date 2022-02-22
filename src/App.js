import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

const App = () => {
    return (
        <HashRouter>
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
                                <Layout>
                                    <React.Suspense fallback={<>...</>}>
                                        <Component />
                                    </React.Suspense>
                                </Layout>
                            }
                        />
                    )
                )}
            </Routes>
        </HashRouter>
    );
};

export default App;
