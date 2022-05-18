import React, {useState} from 'react'
import '../../styles/burger.css'

import BurgerStack from './BurgerStack'
import IngredientList from './IngredientList'

import { ingredients } from '../../data/burger-data'

const BurgerShop = () => {
  console.log(ingredients)
  const [stack, setStack] = useState([])

  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} />
        <BurgerStack stack={stack}/>
      </section>
    </div>
  )
}

export default BurgerShop