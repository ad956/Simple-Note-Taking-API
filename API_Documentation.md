# Note API Documentation

## Base URL

http://localhost:3000/api

## 1. Create Note

- **Endpoint:**

  - `POST /notes`

- **Description:**

  - Creates a new note.

- **Request:**

  - **Method:** `POST`
  - **URL:** `/notes`
  - **Request Body:**
    ```json
    {
      "title": "string",
      "content": "string"
    }
    ```

- **Response:**
  - **Status Code:** `200 OK`
  - **Response Body:**
    ```json
    {
      "_id": "string",
      "title": "string",
      "content": "string",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
    ```

## 2. Retrieve All Notes

- **Endpoint:**

  - `GET /notes`

- **Description:**

  - Retrieves a list of all notes.

- **Request:**

  - **Method:** `GET`
  - **URL:** `/notes`

- **Response:**
  - **Status Code:** `200 OK`
  - **Response Body:**
    ```json
    [
      {
        "_id": "string",
        "title": "string",
        "content": "string",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
      // ... (more notes)
    ]
    ```

## 3. Retrieve Note by ID

- **Endpoint:**

  - `GET /notes/:id`

- **Description:**

  - Retrieves a single note by its ID.

- **Request:**

  - **Method:** `GET`
  - **URL:** `/notes/:id`

- **Response:**
  - **Status Code:** `200 OK`
  - **Response Body:**
    ```json
    {
      "_id": "string",
      "title": "string",
      "content": "string",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
    ```

## 4. Update Note

- **Endpoint:**

  - `PUT /notes/:id`

- **Description:**

  - Updates the content of an existing note.

- **Request:**

  - **Method:** `PUT`
  - **URL:** `/notes/:id`
  - **Request Body:**
    ```json
    {
      "title": "string",
      "content": "string"
    }
    ```

- **Response:**
  - **Status Code:** `200 OK`
  - **Response Body:**
    ```json
    {
      "_id": "string",
      "title": "string",
      "content": "string",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
    ```

## 5. Delete Note

- **Endpoint:**

  - `DELETE /notes/:id`

- **Description:**

  - Deletes a note by its ID.

- **Request:**

  - **Method:** `DELETE`
  - **URL:** `/notes/:id`

- **Response:**
  - **Status Code:** `200 OK`
  - **Response Body:**
    ```json
    {
      "_id": "string",
      "title": "string",
      "content": "string",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
    ```

## Error Responses

- **404 Not Found:**
  - If a note with the specified ID is not found.
  - **Response Body:**
    ```json
    {
      "error": "Note not found"
    }
    ```
