export function callApi(reqmethod, url, data, responseHandler) {
    var option;

    if (reqmethod === "GET" || reqmethod === "DELETE") {  // Fixed "DELET" typo
        option = { method: reqmethod, headers: { 'Content-Type': 'application/json' } };
    } else {
        option = { 
            method: reqmethod, 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(data)  // Ensure JSON body is sent properly
        };
    }

    fetch(url, option)
        .then(response => {
            if (!response.ok) throw new Error(response.status + " " + response.statusText);
            return response.text();
        })
        .then(data => responseHandler(data))
        .catch(error => alert(error));
}
