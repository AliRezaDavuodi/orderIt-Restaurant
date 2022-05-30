import { useEffect, useState } from "react"

import { convertFoodData } from "hooks/http-request/apis"
import api from "router/api-config"

const useApiFetch = (name, type, inputs={}, converter=convertFoodData) => {
    const [data, setData] = useState([])
    const [error, setError] = useState([])
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        let isSubscribed = true
        if(!isSubscribed) return

        setLoading(true)

        const fetchData = async () => {

            try {
                const res = await api[name][type](inputs)
                const covertedData = converter(res);
                setData(covertedData);
                setSuccess(true)
            } 

            catch (error) {
                setSuccess(false)
                setError(error)
            }

            finally {
                setLoading(false)
            }
        } 

        fetchData()


        return _ => isSubscribed = false
    }, []) // should be empty to run just one time
 
    return {data, error, success, loading}
}

export default useApiFetch