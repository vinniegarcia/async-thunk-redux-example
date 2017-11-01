const express = require('express'),
    faker = require('faker'),
    app = express();

app.get('/', (req, res) => {
    let people = [];
    const total = req.query.total || 100;
    for (var i = 0; i < total; i++) {
        people.push({
            name: faker.name.findName(),
            age: Math.random() * 100,
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            company: faker.company.companyName(),
            img: faker.image.avatar(),
            email: faker.internet.email()
        })
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(people);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
})