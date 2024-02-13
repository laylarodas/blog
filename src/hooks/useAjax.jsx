import { useState, useEffect } from "react";

export const useAjax = (url) => {

    const [state, setState ] = useState(
        {
            data:null,
            loading: true
        }
    );

    const getData = async () => {

        setState({
            ...state,
            loading: true
        })

        const petition = await fetch(url);
        const { data } = await petition.json();

        setState({
            data:data,
            loading: false
        })
    }


    useEffect(() => {
        getData();
    },[url]);


    return {
        data: state.data,
        loading: state.loading
    }
}