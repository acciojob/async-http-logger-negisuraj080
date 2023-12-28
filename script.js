//your JS code here. If required.
async function fetchData() {
    try {
        // Make an asynchronous HTTP request using fetch
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        // Check if the request was successful (status code 200)
        if (response.ok) {
            // Parse the response body as JSON
            const data = await response.json();

            // Log the result to the console
            console.log('Response from the API:', data);
        } else {
            // Log an error message if the request was not successful
            console.error('Failed to fetch data. Status:', response.status);
        }
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error('Error fetching data:', error.message);
    }
}



