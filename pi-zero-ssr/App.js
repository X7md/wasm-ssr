/*
 * Copyright 2022 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import Router from "preact-router";

// Styles

// Pages
import Index from "./pages/index.mdx";

const App = ({ url }) => {
  return (
    <>
      <main>
        <Router url={url}>
          <Index path="/" />
        </Router>
      </main>
    </>
  );
};

export default App;