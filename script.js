document.addEventListener('DOMContentLoaded', () => {
    fetch('data.php')
        .then(response => response.json())
        .then(data => {
            const moveDetails = document.getElementById('move-details');
            if (data) {
                moveDetails.innerHTML = `
                    <p>ID: ${data.id}</p>
                    <p>Move: ${data.move}</p>
                    <p>Timestamp: ${data.timestamp}</p>
                `;
            } else {
                moveDetails.innerHTML = '<p>No data found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('move-details').innerHTML = '<p>Error fetching data.</p>';
        });
});
