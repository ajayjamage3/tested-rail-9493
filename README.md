# tested-rail-9493
Clickdeal is an e-commerce website where users can buy a variety of products

## Features

- Login
- Signup
- Authentication
- Authorization
- Payment Feature
- Buy Products


## Tech Stack

**Client:** HTML, CSS, JavaScript

**Server:** Node.js, Express.js

**Database:** MongoDB

## Run Locally

Clone the project

```bash
  git clone https://github.com/ajayjamage3/tested-rail-9493.git
```

Go to the project directory

```bash
  cd tested-rail-9493
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node server.js
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`mongourl`

`port`

`key`


## API Reference

#### Welcome

```http
  GET /api
```

#### User Register

```http
  POST /api/user/register
```

#### User Login

```http
  POST /api/user/login
```

#### All Products

```http
  GET /api/render/show
```

#### Create Products (Admin only)

```http
  POST /api/product/create
```

#### Update Products (Admin only)

```http
  PATCH /api/product/delete/:id
```


#### Delete Products (Admin only)

```http
  DELETE /api/product/update/:id
```




## Screenshots

Landing Page

![App Screenshot](https://i.ibb.co/zJVVNmh/Screenshot-400.png)

Product Page:

![App Screenshot](https://i.ibb.co/3MbyTwP/Screenshot-401.png)

Product Description Page:

![App Screenshot](https://i.ibb.co/drtXz6M/Screenshot-402.png)

Cart Page:

![App Screenshot](https://i.ibb.co/Bw0j8Rp/Screenshot-403.png)

Address page:

![App Screenshot](https://i.ibb.co/YRS9R5G/Screenshot-404.png)

Payment page:

![App Screenshot](https://i.ibb.co/71PTqWQ/Screenshot-405.png)



## Demo

[https://moonlit-liger-bfe537.netlify.app/index.html](https://moonlit-liger-bfe537.netlify.app/index.html)

## Author

- [@ajayjamage3](https://github.com/ajayjamage3)
