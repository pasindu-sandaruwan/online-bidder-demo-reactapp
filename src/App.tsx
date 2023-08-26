import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./pages/Product";
import ContentLayout from "./components/layout/ContentLayout";

function App() {
    return (
        <ContentLayout>
           <Product/>
       </ContentLayout>
    );
}

export default App;
