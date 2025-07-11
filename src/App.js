import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostPage from "./pages/PostPage";
const App = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />

      <main className="p-4 sm:ml-64 pt-20">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <PostPage />
          {children}
        </div>
      </main>
    </>
  );
};

export default App;
