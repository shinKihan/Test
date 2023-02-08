import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { getParent, getChildren } from './api/test'
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Home=()=> {

  const [text, setText] = useState(0);
  // const [parents, setparents] = useState(0);
  // useEffect(()=>{
  //   const result = getParent()
  //   setparents(result)
  //   console.log(result)
  // }, [])
  return (
    <>
      <main className={styles.main}>
      <div>
        <h1>parents</h1>
        {
          getParent()?.data?.map((item, index) => {
            return <div key={index}>
              valor: {item.name}
            </div>
          })
        }
      </div>
      <div>
        <div>
          <h1>Select the value you want to return information</h1>
          <h3>Impacto ambiental = 2</h3>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel>value</InputLabel>
              <Select
                label="Value"
                onChange={(e)=> setText(e.target.value)}
              >
                {
                  getParent()?.data?.map((item, index) => {
                    return <MenuItem value={item.id} key={index} onClick={()=> {
                      setText(item.id)
                    }}>
                      valor: {item.name} - {item.id}
                    </MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div>
        <h1>childs</h1>
        <table>     
        {
          getChildren(text)?.results.map((item)=>{
            return <tr key={item.id}>
              <td>{item?.name}</td>
              <td>{item?.id}</td>
            </tr>
          })
        }
        </table>
      </div>
      </main>
    </>
  )
}
export default Home
