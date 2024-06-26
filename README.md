# DBB API

## Description

DBB API is an API for managing (currently supports select queries) a database that includes articles, suppliers, and more. It is built using Node.js, Express.js, and Prisma, and is [deployed on Render.](https://dbb-api.onrender.com/)

### Available Routes

- **GET https://dbb-api.onrender.com/**: Displays a welcome page.
- **GET https://dbb-api.onrender.com/dbb/articles**: Lists all articles.
- **GET https://dbb-api.onrender.com/dbb/suppliers**: Lists all suppliers.
- **GET https://dbb-api.onrender.com/dbb/articlesxsuppliers**: Lists articles by suppliers.

### Coming soon.
This API is designed to be consumed by an application that will use AI to receive natural language queries, translate them into SQL statements, and return the response to the user in natural language.

## Contribution

Contributions are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## Acknowledgements

This project uses open-source technologies and thanks the developer community for their support and contributions.

## Contact

For any questions or suggestions, feel free to contact me through my [GitHub profile](https://github.com/BasiliscX).
