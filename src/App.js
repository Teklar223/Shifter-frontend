import React, { useEffect, useState } from "react"

export default function App(){
    const [itemList, setItemList] = useState([])

    useEffect( () => {
          getInfo()
        },[]
    )
    const getInfo = async () => {
      try {
        await fetch('/api/base_app/')
        .then( res => {
          return res.json()
        })
        .then( res => {
          setItemList(res);
        });
        
      } catch (e) {
        console.log(e);
    }}

      return (
        <main className="content">
        <div className="row">
            {
              itemList.map( item => {
                  return item.Role
              })
            }
        </div>
      </main>
      )
  }