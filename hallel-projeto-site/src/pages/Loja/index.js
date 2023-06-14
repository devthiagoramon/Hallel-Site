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

function Loja() {
  return (
    <div>
      

      <header className='topo'>
        <h2>Principal</h2>
        <h2>Produtos</h2>
        <IoChevronDown />
        <h2>Compras</h2>
        <IoChevronDown className='iconeSeta' />
        <AiFillHeart className='itemsExtra' />
        <FaShoppingCart className='itemsExtra' />
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
      <h1 className='title2'>Objetos de devoção</h1>
      <div className='contItens'>
        <div className='imagens'>
        <img className='imageItens'/>
        <img className='imageItens'/>
        <img className='imageItens'/>
        <img className='imageItens'/>
        </div>
      </div>
    </div>
  );
}

export default Loja;
