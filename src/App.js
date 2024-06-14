import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Contactlist from './components/ContactList/Contactlist'
import Addcontact from './components/AddContact/Addcontact';
import Viewcontact from './components/ViewContact/Viewcontact';
import Editcontacts from './components/EditContact/Editcontacts';

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<Contactlist/>}/>
        <Route path={'/contacts/add'} element={<Addcontact/>}/>
        <Route path={'/contacts/view/:contactId'} element={<Viewcontact/>}/>
        <Route path={'/contacts/edit/:contactId'} element={<Editcontacts/>}/>
        
      </Routes>
    </React.Fragment>
  )
}

export default App