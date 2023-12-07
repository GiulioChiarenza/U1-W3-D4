// let numeriEstratti = []; // Array per tenere traccia dei numeri estratti

function TabelloneTombola() {
  const tabellone = document.createElement('table');

   let cellnumber = 1;
  for (let i = 0; i < 9; i++) {
    const righe = document.createElement('tr');
    for (let i = 0; i < 10; i++) {
      const celle = document.createElement('td');
      celle.textContent = cellnumber;
      celle.setAttribute('style', 'width: 30px; height: 30px; text-align: center;');
      righe.appendChild(celle);
      cellnumber++;
    }
    tabellone.appendChild(righe);
  }
  return tabellone;
}
const tabelloneTombola = TabelloneTombola();
document.body.appendChild(tabelloneTombola);

const button = document.createElement('button');
button.textContent = 'Estrazione';
document.body.appendChild(button);
