document.getElementById('fetchDataButton').addEventListener('click', fetchData);

function fetchData() {
    const truenasIp = '192.168.0.30';
    const apiUrl = `http://${truenasIp}/api/v2.0/system/info`;
    const apiKey = 'your_api_key';

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
