import React from 'react';

const TourItem = ({ tour, loading }) => {
    if (!tour) return "No";
    // const counter = useSelector(state => state.cart)
    // const dispatch = useDispatch();


    // function renderPrice() {
    //     if (loading) {
    //         return "Loading"
    //     } else if (tour.price.sale_amount) {
    //         return `${tour.price.sale_amount} from ${tour.price.amount}`
    //     }

    //     return `${tour.price.amount}`;
    // }

    return (
        <div>
            {/* {loading ? "Loading" :
                <CardImg top width="100%" src={tour.image} alt="Card image cap" />
            } */}

            {loading ? <p>Loading</p> :
                <p>{tour.name}</p>
            }



        </div>
    )
}

export default TourItem;