import Navbar from "@/components/share/Navbar";
import React from "react";

const App = async () => {
  return (
    <React.Fragment>
      <main className="w-6/7 mx-auto">
        <Navbar />
        <section>Home Page</section>
      </main>
    </React.Fragment>
  );
};

export default App;
