import React, { createContext, useContext, useEffect, useState } from 'react'
import { getMalibourneTours } from '../services/api/tours';

const ToursListContext = createContext();

function ToursListProvider({ children }) {

    const [toursList, setToursList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [tourFilter, setTourFilter] = useState({
        location_ids: "Melbourne",
        // price: [0, 1000],
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

    function changePrice(event, newValue) {
        console.log('Change price', event, newValue.name)

        // let price = [];
        // if (newValue.name === 'min') {
        //     price[0] = parseInt(newValue.value)
        // } else {
        //     price[1] = parseInt(newValue.value)
        // }

        // console.log("P", price)
        // setTourFilter({
        //     ...tourFilter,
        //     annotate: 'converted_price:AUD',
        //     converted_price: price[0],
        //     converted_price: price[1],
        //     order_by: 'converted_price'

        // })
    }

    function changeRatingOrder(event, newValue) {
        console.log("rating score", event)
        setTourFilter({ ...tourFilter, order_by: event })
    }

    const onFilter = function () {
        fetchToursList()
    }

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
            changePrice,
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