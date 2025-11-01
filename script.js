document.getElementById('loadUser').addEventListener('click', () => {
  fetch('https://randomuser.me/api')
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка при отриманні даних!');
      }
      return response.json();
    })
    .then(data => {
      const user = data.results[0];
      const picture = user.picture.large;
      const city = user.location.city;
      const postcode = user.location.postcode;
      const cell = user.cell;
      const name = `${user.name.first} ${user.name.last}`;

      const userDiv = document.getElementById('user');
      userDiv.innerHTML = `
        <img src="${picture}" alt="User Photo"><br>
        <strong>Ім'я:</strong> ${name}<br>
        <strong>Місто:</strong> ${city}<br>
        <strong>Поштовий індекс:</strong> ${postcode}<br>
        <strong>Телефон:</strong> ${cell}
      `;
    })
    .catch(error => {
      console.error('Помилка:', error);
      document.getElementById('user').innerText = 'Не вдалося завантажити користувача.';
    });
});
