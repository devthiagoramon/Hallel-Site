import Button from "react-bootstrap/Button"
import { FormControl, MenuItem, Select} from '@mui/material'
import './styleHeaderLoja.css'
import { useState } from "react"
import {FaShoppingCart} from "react-icons/fa"
import {AiFillHeart} from "react-icons/ai"

const TopBarLoja = () =>{


    const [age, setAge] = useState('');
    const [age2, setAge2] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const handleChange2 = (event) => {
      setAge2(event.target.value);
    };


    return(

        <header className='topo'>

        <div className='topo-left'>

        <Button style = {{textTransform: "capitalize", color: "#000000", background: "none", border: "none", fontWeight: "700", fontSize: "1em", fontFamily: "Inter"}}>Principal</Button>

            <FormControl >
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              style ={{color: "#000000", fontWeight: "700"}}
            >
              <MenuItem value="">
              Produtos
              </MenuItem>
              <MenuItem value={10}>Objetos de devoção</MenuItem>
              <MenuItem value={20}>Objetos personalizados</MenuItem>
              <MenuItem value={30}>Jovens</MenuItem>
              <MenuItem value={40}>Artesanato</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }} style={{color: "#ffffff"}}>
            <Select
              value={age2}
              onChange={handleChange2}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              style ={{color: "#000000", fontWeight: "700"}}
            >
              <MenuItem value="">
              Compras
              </MenuItem>
              <MenuItem value={10}>Carrinho</MenuItem>
              <MenuItem value={20}>Favoritos</MenuItem>
            </Select>
          </FormControl>

      </div>

      <div className='topo-right'>

        <AiFillHeart className='itemsExtra' />
        <FaShoppingCart className='itemsExtra' />

      </div>

      </header>

    )
}
export default TopBarLoja;