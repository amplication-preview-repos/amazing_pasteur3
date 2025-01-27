import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AdList } from "./ad/AdList";
import { AdCreate } from "./ad/AdCreate";
import { AdEdit } from "./ad/AdEdit";
import { AdShow } from "./ad/AdShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { CategoryItemList } from "./categoryItem/CategoryItemList";
import { CategoryItemCreate } from "./categoryItem/CategoryItemCreate";
import { CategoryItemEdit } from "./categoryItem/CategoryItemEdit";
import { CategoryItemShow } from "./categoryItem/CategoryItemShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Megamarket"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Ad"
          list={AdList}
          edit={AdEdit}
          create={AdCreate}
          show={AdShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="CategoryItem"
          list={CategoryItemList}
          edit={CategoryItemEdit}
          create={CategoryItemCreate}
          show={CategoryItemShow}
        />
      </Admin>
    </div>
  );
};

export default App;
