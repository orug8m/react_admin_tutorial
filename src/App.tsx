import * as React from "react"
import { Admin, Resource,ListGuesser } from 'react-admin'
// import { UserList } from './users'
import { PostList, PostEdit, PostCreate } from './posts'
import jsonServerProvider from 'ra-data-json-server'
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./Dashboard"
import authProvider from "./authProvider"

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={ListGuesser} icon={UserIcon} />
  </Admin>
)
export default App
