import React, { createContext, useContext, useEffect, useState } from 'react'
import { getMalibourneTours } from '../services/api/tours';

const ToursListContext = createContext();

function ToursListProvider({ children }) {

    const [toursList, setToursList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [tourFilter, setTourFilter] = useState({
        location_ids: "Melbourne",
        price: "",
        order_by: "-score"
    })

    const fetchToursList = async () => {
        try {
            const tour = await getMalibourneTours(tourFilter);
            setToursList(tour.results)
            setIsLoading(false)
        } catch (e) {
            console.log("TourListProvider: ", e)
        }
    }

    // TODO: Make this into one function
    function changeTitle(event, newValue) {
        setTourFilter({ ...tourFilter, location_ids: event })
    }

    function changePriceOrder(event, newValue) {
        setTourFilter({ ...tourFilter, price: event })
    }

    function changeRatingOrder(event, newValue) {
        console.log("rating score", event)
        setTourFilter({ ...tourFilter, order_by: event })
    }

    const onFilter = function () {
        // console.log("On FIlter clicked", car)
        fetchToursList()
    }

    // useEffect(() => {
    //     fetchToursList()
    // }, [])

    useEffect(() => {
        onFilter()
    }, [tourFilter])

    return (
        <ToursListContext.Provider value={{
            tourFilter,
            fetchToursList,
            toursList,
            isLoading,
            onFilter,
            changePriceOrder,
            changeRatingOrder,
            changeTitle
        }} >
            {children}
        </ToursListContext.Provider >
    )

}


export {
    ToursListContext,
    ToursListProvider
}


// import React, { createContext, useContext, useEffect, useState } from 'react'

// const ToursListContext = createContext();

// function ToursListProvider({ children }) {




//     return (
//         <ToursListContext.Provider value={{
//             heel: 'd'
//         }} >
//             {children}
//         </ToursListContext.Provider >
//     )

// }

// export {
//     ToursListContext,
//     ToursListProvider
// }