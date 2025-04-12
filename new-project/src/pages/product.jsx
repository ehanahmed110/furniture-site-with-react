import React from 'react'
 function Product() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })    
    return (
        <>
           <div className="owl-carousel owl-theme">
    <div className="item"><h4>1</h4></div>
    <div className="item"><h4>2</h4></div>
    <div className="item"><h4>3</h4></div>
    <div className="item"><h4>4</h4></div>
</div>            
        </>
    )
}
export default Product
