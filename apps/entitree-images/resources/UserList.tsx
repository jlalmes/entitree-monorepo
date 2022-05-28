import { Datagrid, DateField, EmailField, List, TextField } from "react-admin";

import React from "react";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="_id"></TextField>
      {/* <TextField source="name" /> */}
      <EmailField source="email" />
      <TextField source="image" />
      <TextField source="role" />
      <TextField source="emailVerified" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TextField source="id" />
    </Datagrid>
  </List>
);
