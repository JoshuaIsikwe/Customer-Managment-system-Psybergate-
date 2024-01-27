'use client'
import Footer from "./Footer";
import Header from "./Header";
import AppContext from "./AppContext";
import { useState } from "react";

export default function RootLayout({ children }) {

    const [firstName, setName] = useState(null); 
    const [surname, setSurname] = useState(''); 
    const [cell, setCell] = useState(''); 
    const [physicalAddress, setPhysicalAddress] = useState(''); 
    const [postalAddress, setPostalAddress] = useState(''); 
    const [comment, setComment] = useState(''); 
    return (
      <html lang="en">
        <Header/>
          <AppContext.Provider
          value={{firstName, setName, surname, setSurname, cell, setCell, physicalAddress, setPhysicalAddress, postalAddress, setPostalAddress, comment, setComment}}
          > 
            {children}
          </AppContext.Provider>
        <Footer/>
      </html>
    )
  }