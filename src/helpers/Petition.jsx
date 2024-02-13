export const Petition = async (url, method, dataSave = "") => {


    let loading = true;

    let options = {
        method: "GET"
    }

    if (method == "GET" || method == "DELETE") {
        options = {
            method: method
        }
    }

    if (method == "POST" || method == "PUT") {
        options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataSave)
        }
    }



    const petition = await fetch(url);
    const data = await petition.json();

    loading = false;


    return {
        data,
        loading
    }
}