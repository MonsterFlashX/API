function displayData(data) 
{
  const dataContainer = document.getElementById('displayData');
  const para = document.createElement('p');
  const title = document.createElement('title');
  const text = document.createElement('text');
  const Phone = document.createElement('Phone');
  const Email = document.createElement('Email');
  const Name = document.createElement('Name');
  const Gender = document.createElement('Gender');
  para.textContent = `Title ${data.title}`;
  dataContainer.appendChild(para);
  const showData = document.createElement("displayData");

  console.log(displayData(data));
}  

async function fetchData()
{ 
  fetch('https://randomuser.me/api/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });  
}

console.log(fetchData());
