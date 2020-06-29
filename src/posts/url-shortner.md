---
title: "URL-Shortener"
Date: "2020-06-23"
author: "Nilanjan Deb"
---

## Website Preview

![photo](./url.png)

---

## Setup Locally

---

#### Prerequisites

- [MongoDB](https://www.mongodb.com/cloud/atlas).
- [Node JS](https://nodejs.org/).
- [React JS](https://reactjs.org/).

#### Instructions

- ```
  >> git clone https://github.com/nil1729/url-shortner-nodejs.git
  >> cd url-shortner-nodejs
  >> npm install
  ```

- #### In `config` directory

  - Create a `default.json` file.
  - Add your `MongoDB Atlas` credentials in `"mongoURI"` field.

  - ```
    {
            "mongoURI": ""
    }
    ```

    - Here is [the Video](https://www.youtube.com/watch?v=KKyag6t98g8) Tutorial for how to create MongoDB Atlas account and connect to NodeJS application.
