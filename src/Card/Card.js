import React from 'react'

import Typography  from '@mui/material/Typography'
import 'bootstrap/dist/css/bootstrap.min.css'

import './Card.css'
const Card = () => {
  return (
    <div>
    
<h2>Image Notes:</h2>
    <section class="fl-card-list">
    <aside class="fl-card">
       <figure>
	    <img class="fl-card-img" src="https://cdn.shopify.com/s/files/1/0677/3299/6340/files/va-boutique.jpg?v=1706486045" height="250" width="400 px"/>
	    <figcaption>FRUITS</figcaption>
       </figure>
	   <div class="fl-card-body">
	     <h3 class="fl-card-title"> 💌Fruits</h3>
	    <p class="fl-card-content">agriculture related activities like growing Agriculture crops, 
      Horticulture crops, Sericulture, Dairy, Poultry, Fishery etc. Each of this activity requires .</p>

      
       
      
	  </div>
    </aside>

    <aside class="fl-card">
       <figure>
	    <img class="fl-card-img" src="https://cdn.shopify.com/s/files/1/0677/3299/6340/files/va-boutique-1.jpg?v=1706486082" height="250" weight="100"/>
	    <figcaption>An apple</figcaption>
       </figure>
       <div class="fl-card-body">
	 <h3 class="fl-card-title">❣️An apple </h3>
	 <p class="fl-card-content">  department to assist farmers in carrying out farming activities effectively and efficiently. While establishment of 
	  </p>
       </div>
    </aside>

    <aside class="fl-card">
       <figure>
	    <img class="fl-card-img" src="https://cdn.shopify.com/s/files/1/0677/3299/6340/files/va-boutique-2.jpg?v=1706486116" height="250" width="100"/>
	    <figcaption>Banana</figcaption>
       </figure>
       <div class="fl-card-body">
	  <h3 class="fl-card-title">💟Queen of Fruits</h3>
	  <p class="fl-card-content">A well organized and scrutinized farmer database will avoid farmers from running pillar to post for availing benefits. Besides it would helps the departments in overcoming the aforesaid issues. DPAR e Governance department in association with NIC</p>
      </div>
    </aside>

    <aside class="fl-card">
       <figure>
	    <img class="fl-card-img" src="https://cdn.shopify.com/s/files/1/0677/3299/6340/files/va-boutique-3.jpg?v=1706486138" height="250" weight="100"/>
	    <figcaption>La boutique de Veri Alimenti</figcaption>
       </figure>
       <div class="fl-card-body">
	    <h3 class="fl-card-title">💓Grape </h3>
	    <p class="fl-card-content">nos esforzamos por cobrar menos y por brindar valor a nuestra comunidad.  Sabemos que es la única forma de realizar nuestra visión de poder apoyar fuertemente a el agricultor que es tan vital para nuestra sociedad pero tan vulnerable, especialmente en nuestra amada Colombia.</p>
      </div>
    </aside>

    <aside class="fl-card">
       <figure>
	    <img class="fl-card-img" src="https://cdn.shopify.com/s/files/1/0677/3299/6340/files/va-boutique-4.jpg?v=1706486159" height="250" weight="100"/>
	    <figcaption>La boutique de Veri Alimenti</figcaption>
       </figure>
       <div class="fl-card-body">
	    <h3 class="fl-card-title">❣️Orange</h3>
	    <p class="fl-card-content">Soñamos con la eutopía que Dios nos dio,
	    creemos firmemente que la salud es la mayor riqueza y que los
	    frutos y el agua son lo mas valioso que tenemos despues de la vida.
	    Por eso fundamos VeriAlimenti®...</p>
      </div>
    </aside>

</section>
    </div>
  )
}

export default Card