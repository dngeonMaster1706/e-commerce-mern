Sure, here's the complete README in one code block:

```markdown
# NerdNook

NerdNook is an e-commerce website where users can buy a variety of products. This project is built using the MERN stack, with JWT authentication for secure user login and React Bootstrap for a responsive and visually appealing user interface.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- User authentication with JWT
- Browse products
- Add products to cart
- Checkout process
- Admin panel for managing products
- Responsive design

## Technologies Used
- MongoDB
- Express.js
- React.js
- Node.js
- JWT for authentication
- React Bootstrap for UI

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/nerdnook.git
   cd nerdnook
   ```

2. Install server dependencies:
   ```sh
   cd server
   npm install
   ```

3. Install client dependencies:
   ```sh
   cd ../client
   npm install
   ```

4. Create a `.env` file in the `server` directory and add the following environment variables:
   ```env
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret
   ```

## Usage
1. Start the server:
   ```sh
   cd server
   npm start
   ```

2. Start the client:
   ```sh
   cd ../client
   npm start
   ```

3. Open your browser and go to `http://localhost:3000`.

## API Endpoints
- `POST /api/auth/login`: Authenticate a user
- `POST /api/auth/register`: Register a new user
- `GET /api/products`: Get all products
- `POST /api/products`: Add a new product (Admin only)
- `PUT /api/products/:id`: Update a product (Admin only)
- `DELETE /api/products/:id`: Delete a product (Admin only)
- `POST /api/cart`: Add a product to the cart
- `GET /api/cart`: Get all cart items
- `DELETE /api/cart/:id`: Remove a product from the cart

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. 

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or issues, please contact [your email address].
```
