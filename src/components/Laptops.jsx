  
import { NavLink } from 'react-router-dom';
import LaptopsData from "../LaptopsData"
const Laptops = () => {
  
    

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} class="card-img-top" alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">${item.price}</p>
                        <NavLink to={`/Laptops/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink>
                        
                    </div>
                    
</div>
                );
    }

                return (
                <div>

                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 ">
                                <h3 className='text-center'>Laptops</h3>
                                <hr />
                            </div>
                            
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {LaptopsData.map(cardItem)}
                        </div>
                    </div>
                </div>
                )

           
}

                export default Laptops

