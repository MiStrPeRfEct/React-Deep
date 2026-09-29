import React from "react";

const Home = () => {
  // is we use dynamic component like users in this that it will break the rule
  //  of memoization and starts re-rendering
  console.log("home is rendering");
  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default React.memo(Home);
