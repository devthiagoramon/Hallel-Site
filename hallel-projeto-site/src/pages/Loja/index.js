import { FaShoppingCart } from 'react-icons/fa'
import { IoChevronDown } from 'react-icons/io5'
import { AiFillHeart } from 'react-icons/ai'
import { GiCandles } from 'react-icons/gi'
import { FaBible } from 'react-icons/fa'
import { FaTshirt } from 'react-icons/fa'
import { AiFillTrophy } from 'react-icons/ai'
import { AiFillShopping } from 'react-icons/ai'
import { FaGlobe } from 'react-icons/fa'
import './lojaPrincipalStyle.css'
import { FormControl, MenuItem, Select} from '@mui/material'
import { useState } from 'react'
import Button from '@mui/material/Button';
import Devocao from '../../components/LojaCards/ObjetosDevocao/indexDevo'
import Artigos from '../../components/LojaCards/Artigos/indexArtigo'
import Jovens from "../../components/LojaCards/Jovens/indexJovens";
import Artesanato from "../../components/LojaCards/Artesanato/indexArtesanato";

function Loja() {
    const [age, setAge] = useState('');
    const [age2, setAge2] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const handleChange2 = (event) => {
      setAge2(event.target.value);
    };
  return (
    <div>


      <header className='topo'>

        <div className='topo-left'>

        <Button style = {{textTransform: "capitalize", color: "#000000", fontWeight: "700", fontSize: "1em", fontFamily: "Inter"}}>Principal</Button>

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

      <h1 className='title'>Loja</h1>
      <div className='containerImagemEntrar'>

        <div id='divUm'>
          <FaBible className='itemsPainel' id='biblia' />
          <GiCandles className='itemsPainel' id='vela' />
        </div>

        <div className='div2'>
          <FaTshirt className='itemsPainel' id='blusa' />
          <h1>Loja Hallel</h1>
          <AiFillTrophy className='itemsPainel' id='trof' />
        </div>

        <div className='div3'>
          <AiFillShopping className='itemsPainel' id='shop' />
          <FaGlobe className='itemsPainel' id='globo' />
        </div>

      </div>

      <Devocao />

      <Artigos />
      
    
      <Jovens />

      <Artesanato/>

      </div>
  );
}

export default Loja;
