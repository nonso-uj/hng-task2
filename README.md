# Node.js CRUD API for Managing Persons

## Overview

This Node.js CRUD API allows you to perform Create, Read, Update, and Delete (CRUD) operations on instances of a "Person". You can create a new person, retrieve person details by `user_id`, update existing person records, and delete person records.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
   - [Authentication](#authentication)
   - [Endpoints](#endpoints)
   - [Request Examples](#request-examples)
3. [Response Examples](#response-examples)
4. [Contributing](#contributing)
5. [License](#license)

## Installation

To get started with this API, follow these installation steps:

```bash
# Clone the repository
git clone https://github.com/nonso-uj/hng-task2.git

# Navigate to the project directory
cd hng-task2

# Install dependencies
yarn install

# Start the server
yarn start

# Enable live reload by installing nodemon
yarn add nodemon

# Then start the server
yarn dev
```

## Usage

### Authentication

This API does not require authentication for basic CRUD operations. However, you can implement authentication as per your requirements.

### Endpoints

- **Create a Person**: `POST /api`
- **Read a Person**: `GET /api/:user_id`
- **Update a Person**: `PUT /api/:user_id`
- **Delete a Person**: `DELETE /api/:user_id`

### Request Examples

#### Create a Person (POST /api)

To create a new person, send a POST request with a JSON body containing the person's details:

```json
POST /api
Content-Type: application/json

{
  "name": "John Doe",
}
```

#### Read a Person (GET /api/:user_id)

To retrieve details of a person, send a GET request with the `user_id` parameter gotten after creating a person:

```bash
GET /api/123
```

#### Update a Person (PATCH /api/:user_id)

To update a person's details, send a PUT request with the `user_id` parameter and a JSON body containing the updated data:

```json
PATCH /api/123
Content-Type: application/json

{
  "name": "Updated Name",
}
```

#### Delete a Person (DELETE /api/:user_id)

To delete a person, send a DELETE request with the `user_id` parameter:

```bash
DELETE /api/123
```

## Response Examples

The Create, Read and Patch requests will primarily return a json object with the 'Person' id and name or an error message. Other fields can be returned if needed.
```json
{
    "_id": "6501121a84c8ddf4c669afd1",
    "name": "Matt Chinonso",
    "__v": 0
}
```
The Delete request returns a json object with a success message confirming the deletion upon success or an error message.
```json
{
    "message": "Person deleted Successfully!"
}
```


## Contributing

If you wish to contribute to this website, please fork it on GitHub, push your change to a named branch, then send a pull request which will be attended to in due time.

## License

```plaintext
MIT License
Copyright (c) [2023] [Udonne Chinonso]

The source code for the site is licensed under the MIT license, which you can find in the MIT-LICENSE.txt file.
```
