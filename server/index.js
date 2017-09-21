const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express()
const port =3008



  let fakeDatabase = {
    initialProducts: [
        {
          id: 0,
          color: 'blue',
          price: 5
        },
        {
          id: 1,
          color: 'red',
          price: 2
        },
        {
          id: 2,
          color: 'green',
          price: 3
        },
        {
          id: 3,
          color: 'white',
          price: 1
        },
        {
          id: 5,
          color: 'black',
          price: 6
        },
        {
            id: 6,
            color: 'rainbow',
            price: 10000
          },
      ],



      detailedProducts: [
        {
            id: 0,
            color: 'blue',
            price: 5,
            details: "This is a whole bunch of details about the blue shoe"
          },
          {
            id: 1,
            color: 'red',
            price: 2,
            details: "This is a whole bunch of details about the red shoe"
          },
          {
            id: 2,
            color: 'green',
            price: 3,
            details: "This is a whole bunch of details about the green shoe"
          },
          {
            id: 3,
            color: 'white',
            price: 1,
            details: "This is a whole bunch of details about the white shoe"
          },
          {
            id: 5,
            color: 'black',
            price: 6,
            details: "This is a whole bunch of details about the black shoe"
          },
          {
              id: 6,
              color: 'rainbow',
              price: 10000,
              details: "This is a whole bunch of details about the blue shoe"
        },
      ]


}
app.get('/api/products', (req, res)=> {


    res.json(fakeDatabase.initialProducts)
})
app.get('/api/products/:id', (req, res)=> {
for(var i = 0; i < fakeDatabase.detailedProducts.length; i++) {
    if(fakeDatabase.detailedProducts[i].id === +req.params.id){
        return res.json(fakeDatabase.detailedProducts[i])
    }
}
res.json(`couldnt find the product'${req.params.id}`)
})


app.listen(port, () => {
    console.log( `Listening on ${port}`);

})