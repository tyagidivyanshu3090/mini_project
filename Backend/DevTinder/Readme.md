# DevTinder

- `npm init` or `npm init -y` : This command is used to initialize a new Node.js project. It creates a `package.json` file that contains metadata about the project, such as its name, version, description, author, and license.
- `npm install express` : This command is used to install the express package in the project. Express is a fast, unopinionated, minimalist web framework for Node.js.

- `app.use()` : This method is used to mount a middleware function at a specific path in the application. It is used to handle requests and responses in the application.

# Schema level validation

- required: Ensures that the field is required.
- unique: Ensures that no two users can have the same value for the field.
- default: Defines the default value for the field.
- lowercase: Converts the field to lowercase.
- uppercase: Converts the field to uppercase.
- select: This will not be returned in the response. Hence it is not visible to the client. 

```javascript
 password: { type: String, required: true, select: false }
```

- trim: Removes whitespace from both ends of a string.
- minLength: Defines the minimum length of the field. **Mainly used for strings.**
- maxLength: Defines the maximum length of the field. **Mainly used for strings.**
- min: Defines the minimum value for the field. **Mainly used for numbers.**
- max: Defines the maximum value for the field. **Mainly used for numbers.**

# Some method:

- `app.use(express.json())`: This method is used to parse the incoming requests with JSON payloads. It is used to handle requests with JSON payloads in the application.

- `await UserModel.find({})`: This method is used to find all the users in the database.

- `await UserModel.find({ email: email })`: This method is used to find the user in the database by email. If there are 2 users with same email it will return both the users.

- `await UserModel.findOne({ email: email })`: This method is used to find the user in the database by email. If there are 2 users with same email it will return only one user.

- `await UserModel.deleteOne({ email: email })`: This method is used to delete the user from the database by email. If there are 2 users with same email it will delete only one user.

- `await UserModel.findByIdAndDelete({ _id: id })`: This method is used to delete the user from the database by id. If there are 2 users with same id it will delete only one user.

- `UserModel.deleteOne()` is a Model Method. It takes a "filter" object as an argument. It finds the first document that matches the filter and removes it permanently.

- `UserModel.findOneAndDelete({ email: email })`: This method is used to find the user in the database by email and delete it. If there are 2 users with same email it will delete only one user.

- `UserModel.findByIdAndUpdate(id, update, options)`: This method is used to find the user in the database by id and update it. 