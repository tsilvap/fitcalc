const csv = require('csvtojson');
const fs = require('fs');

const csvTable = './table.csv';

// Parse csv food table into a JSON object.

csv({
  delimiter: ':',
  headers: [
    'id',
    'nameId',
    'name',
    'prepCode',
    'prepMethod',
    'calories',
    'protein',
    'lipid',
    'carb'
  ],
  ignoreColumns: /nameId|prepCode/,
  noheader: true
})
  .fromFile(csvTable)
  .then(jsonObject => {
    fs.writeFile('foodList.json', JSON.stringify(jsonObject, null, 2), err => {
      if (err) throw err;
    });
  });
