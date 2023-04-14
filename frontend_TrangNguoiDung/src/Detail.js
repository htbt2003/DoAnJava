import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


function Detail() {
    const [product, setUser] = useState({
        productName: "",
        price: "",
        image: "",
      });

      const { id } = useParams();

    useEffect(() => {
        loadUser();
      }, []);
    
      const loadUser = async () => {
        const result = await axios.get(`http://localhost:8384/api/v1/products/${id}`);
        setUser(result.data);
      };
    
    return (
        
		<div>

{/* <!-- Favicon  --> */}


    {/* <!-- Search Wrapper Area Start --> */}
    <div class="search-wrapper section-padding-100">
        <div class="search-close">
            <i class="fa fa-close" aria-hidden="true"></i>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="search-content">
                        <form action="#" method="get">
                            <input type="search" name="search" id="search" placeholder="Type your keyword..."/>
                            <button type="submit"><img src="img/core-img/search.png" alt=""/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Search Wrapper Area End --> */}

    {/* <!-- ##### Main Content Wrapper Start ##### --> */}
    <div class="main-content-wrapper d-flex clearfix">

        {/* <!-- Mobile Nav (max width 767px)--> */}
        <div class="mobile-nav">
        </div>

        {/* <!-- Header Area Start --> */}
        <header class="header-area clearfix">
            {/* <!-- Close Icon --> */}
            <div class="nav-close">
                <i class="fa fa-close" aria-hidden="true"></i>
            </div>
            {/* <!-- Button Group --> */}
            <div class="amado-btn-group mt-30 mb-100">
                <a href="#" class="btn amado-btn mb-15">%Discount%</a>
                <a href="#" class="btn amado-btn active">New this week</a>
            </div>
            {/* <!-- Cart Menu --> */}
            <div class="cart-fav-search mb-100">
                <a href="cart.html" class="cart-nav"><img src="img/core-img/cart.png" alt=""/> Cart <span>(0)</span></a>
                <a href="#" class="fav-nav"><img src="img/core-img/favorites.png" alt=""/> Favourite</a>
                <a href="#" class="search-nav"><img src="img/core-img/search.png" alt=""/> Search</a>
            </div>
            {/* <!-- Social Button --> */}
            <div class="social-info d-flex justify-content-between">
                <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
        </header>
        {/* <!-- Header Area End --> */}

        {/* <!-- Product Details Area Start --> */}
        <div class="single-product-area section-padding-100 clearfix">
            <div class="container-fluid">


                <div class="row">
                    <div class="col-12 col-lg-7">
                        <div class="single_product_thumb">
                            <div id="product_details_slider" class="carousel slide" data-ride="carousel">
                                
                            <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        
                                            <img class="d-block" style={{width:'400px', height:'400px'}} src={"/assets/images/items/" + product.image} alt="First slide"/>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-5">
                        <div class="single_product_desc">
                            {/* <!-- Product Meta Data --> */}
                            <div class="product-meta-data">
                                <div class="line"></div>
                                <p class="product-price">${product.price}</p>
                                <a href="product-details.html">
                                    <h6>{product.productName}</h6>
                                </a>
                                {/* <!-- Ratings & Review --> */}
                                <div class="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                    <div class="ratings">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div class="review">
                                        <a href="#">Write A Review</a>
                                    </div>
                                </div>
                                {/* <!-- Avaiable --> */}
                                <p class="avaibility"><i class="fa fa-circle"></i> In Stock</p>
                            </div>

                            <div class="short_overview my-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?</p>
                            </div>

                            {/* <!-- Add to Cart Form --> */}
                            <form class="cart clearfix" method="post">
                                <div class="cart-btn d-flex mb-50">
                                    <p>Qty</p>
                                    <div class="quantity">
                                        <span class="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                                        <input type="number" class="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1"/>
                                        <span class="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-caret-up" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <button type="submit" name="addtocart" value="5" class="btn amado-btn">Add to cart</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Product Details Area End --> */}
    </div>



		</div>
    );
}
export default Detail;