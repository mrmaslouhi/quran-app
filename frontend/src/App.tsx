import { useEffect, useState } from "react";
import Navbar from "./components/ui/Navbar";
import Layout from  "./components/ui/Layout"
import ButtonGroup from "./components/ui/ButtonGroup";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import quranData from "./quranData";
import dateInHijri from "./dateInHijri";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="px-2 md:px-4 lg:px-6">
        <Navbar />
        <Routes>
{quranData.map((obj) => {
  return (
    <Route
      key={obj.id}
      path={`/${obj.id}`}
      element={<Layout obj={obj} />}
    />
  );
})}
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
