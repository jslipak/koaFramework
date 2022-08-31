const Router = require('koa-router');

const router = new Router({
  prefix:'/products'
})

let products = [
  {
    "id": 0,
    "timestamp": "09:30,06-05-2016",
    "title": "Wyatt Buck",
    "code": "2069f014-9205-4c32-a421-3e0c23621bd5",
    "thumbnail": "http://placehold.it/32x32",
    "price": "$1,396.96",
    "stock": 37
  },
  {
    "id": 1,
    "timestamp": "02:43,11-10-2014",
    "title": "Tommie Battle",
    "code": "04e250a4-5683-4f93-90f0-793f09f4eb54",
    "thumbnail": "http://placehold.it/32x32",
    "price": "$2,971.16",
    "stock": 31
  },
  {
    "id": 2,
    "timestamp": "05:42,18-03-2022",
    "title": "Ida Livingston",
    "code": "92637a33-7e5b-4d27-991c-61348793e639",
    "thumbnail": "http://placehold.it/32x32",
    "price": "$3,014.79",
    "stock": 24
  },
  {
    "id": 3,
    "timestamp": "10:22,26-09-2014",
    "title": "Sonia avid",
    "code": "de34c7ff-2f1c-4474-986d-6ae3d010f06d",
    "thumbnail": "http://placehold.it/32x32",
    "price": "$3,758.43",
    "stock": 31
  },
  {
    "id": 4,
    "timestamp": "05:12,04-11-2014",
    "title": "Karla Pierce",
    "code": "4afb12f3-b83f-4c50-acd5-feba3074288a",
    "thumbnail": "http://placehold.it/32x32",
    "price": "$1,461.32",
    "stock": 33
  },
  {
    "id": 5,
    "timestamp": "02:14,12-07-2020",
    "title": "Rhoda Adkins",
    "code": "58205210-40ce-4bcc-80d5-fcfe1ab4316a",
    "thumbnail": "http://placehold.it/32x32",
    "price": "$2,870.98",
    "stock": 33
  },
  {
    "id": 6,
    "timestamp": "06:11,19-02-2020",
    "title": "Mcclure Brennan",
    "code": "a3874306-b878-4562-852a-06281f054c5d",
    "thumbnail": "http://placehold.it/32x32",
    "price": "$1,781.90",
    "stock": 29
  },
  {
    "id": 7,
    "timestamp": "04:32,14-09-2014",
    "title": "Mckinney Houston",
    "code": "c5c6ef41-c596-4d08-af44-f918827d128b",
    "thumbnail": "http://placehold.it/32x32",
    "price": "$1,813.11",
    "stock": 34
  },
  {
    "id": 8,
    "timestamp": "12:38,13-07-2017",
    "title": "Zimmerman Cash",
    "code": "2c2ca6f9-1de3-4b0b-aa8a-cf7b4564b2bc",
    "thumbnail": "http://placehold.it/32x32",
    "price": "$1,134.73",
    "stock": 36
  },
  {
    "id": 9,
    "timestamp": "07:29,05-06-2015",
    "title": "Booker Rasmussen",
    "code": "343ad0f5-9a94-48ea-8686-53b858894c35",
    "thumbnail": "http://placehold.it/32x32",
    "price": "$1,276.45",
    "stock": 30
  },
  {
    "id": 10,
    "timestamp": "08:50,27-11-2015",
    "title": "Knight Roy",
    "code": "85b549fe-bf72-49e7-b7df-c820dd068d0b",
    "thumbnail": "http://placehold.it/32x32",
    "price": "$3,886.81",
    "stock": 40
  },
  {
    "id": 11,
    "timestamp": "07:41,01-04-2022",
    "title": "Estelle Mcbride",
    "code": "07b43de7-1530-481a-aaf0-889188c42ba9",
    "thumbnail": "http://placehold.it/32x32",
    "price": "$3,724.90",
    "stock": 34
  },
  {
    "id": 12,
    "timestamp": "03:44,03-06-2014",
    "title": "Alissa Ewing",
    "code": "a0befb36-e751-4bee-ba58-b7529be16034",
    "thumbnail": "http://placehold.it/32x32",
    "price": "$2,152.20",
    "stock": 39
  }
]

router.get('/', ctx => {
  ctx.body = {
    status: 'success', 
    message: products
    }
  }
)

router.get('/:id', ctx => {
  const id = ctx.params.id
  const product = products.filter(product => product.id == id)
  ctx.body = {
    status: 'success', 
    message: product
    }
  }
)

router.post('/', ctx => {
  const product = ctx.request.body
  products.push(product)
  ctx.body = {
    status: 'success', 
    message: products
    }
  }
)

router.delete('/:id', ctx => {
  const id = ctx.params.id
  const product = products.filter(product => product.id == id)
  const index = products.indexOf(product)
  products.splice(index, 1)
  ctx.body = {
  status: 'success',
  message: product
  }}
)

module.exports = router;
