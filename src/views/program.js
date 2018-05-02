import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const postsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="_id" />
            <TextField source="name" />
            <TextField source="version" />
            <TextField source="md5" />
        </Datagrid>
    </List>
);