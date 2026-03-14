# DevTinder

- `npm init` or `npm init -y` : This command is used to initialize a new Node.js project. It creates a `package.json` file that contains metadata about the project, such as its name, version, description, author, and license.
- `npm install express` : This command is used to install the express package in the project. Express is a fast, unopinionated, minimalist web framework for Node.js.

- `app.use()` : This method is used to mount a middleware function at a specific path in the application. It is used to handle requests and responses in the application.

# Some method:

- `app.use(express.json())`: This method is used to parse the incoming requests with JSON payloads. It is used to handle requests with JSON payloads in the application.

- `await UserModel.find({})`: This method is used to find all the users in the database.

- `await UserModel.find({ email: email })`: This method is used to find the user in the database by email. If there are 2 users with same email it will return both the users.

- `await UserModel.findOne({ email: email })`: This method is used to find the user in the database by email. If there are 2 users with same email it will return only one user.