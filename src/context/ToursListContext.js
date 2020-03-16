import React, { createContext, useContext, useEffect, useState } from 'react'
import { getMalibourneTours } from '../services/api/tours';

const ToursListContext = createContext();

function ToursListProvider({ children }) {

    const [toursList, setToursList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [tourFilter, setTourFilter] = useState({
        name: '',
        price: '',
        rating: ''
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
        setTourFilter({ ...tourFilter, name: newValue })
    }

    function changePrice(event, newValue) {
        setTourFilter({ ...tourFilter, price: newValue })
    }

    function changeRating(event, newValue) {
        setTourFilter({ ...tourFilter, rating: newValue })
    }


    const onFilter = function () {
        // console.log("On FIlter clicked", car)
        fetchToursList()
    }

    useEffect(() => {
        fetchToursList()
    }, [])

    useEffect(() => {
        onFilter()
    }, tourFilter.name)

    return (
        <ToursListContext.Provider value={{
            fetchToursList,
            toursList,
            isLoading,
            onFilter,
            changePrice,
            changeRating,
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