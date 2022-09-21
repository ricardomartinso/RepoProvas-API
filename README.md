# RepoProvas-API

A Typescript designed project to share tests among students.

<p align="center">
  <img src="https://img.icons8.com/bubbles/300/000000/test-passed.png"/>
</p>
<h1 align="center">
  RepoProvas
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Coverage-100%25-red.svg"height="25px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

RepoProvas simulates an API that you can share news and old tests with your friends.

</br>

## Features

- Create your user and log in.
- Create tests with pdf links for free referring to teachers and disciplines
- Visualize your tests by disciplines
- Visualize your tests by teachers

</br>

## API Reference

### Sign up

```http
POST /signup
```

#### Request:

| Body              | Type     | Description                            |
| :---------------- | :------- | :------------------------------------- |
| `email`           | `string` | **Required**. User email               |
| `password`        | `string` | **Required**. User password            |
| `confirmPassword` | `string` | **Required**. Confirmation of password |

`confirmPassword` must be equal to password!

#

### Login

```http
POST /login
```

#### Request:

| Body              | Type     | Description                            |
| :---------------- | :------- | :------------------------------------- |
| `email`           | `string` | **Required**. User email               |
| `password`        | `string` | **Required**. User password            |
| `confirmPassword` | `string` | **Required**. Confirmation of password |

`confirmPassword` must be equal to password!

</br>

#### Response:

```json
{
  "token": "RandomTokenGenerated"
}
```

#

### Create a test

```http
POST /tests
```

#### Request:

| Body                   | Type     | Description                                                            |
| :--------------------- | :------- | :--------------------------------------------------------------------- |
| `name`                 | `string` | **Required**. Test name                                                |
| `pdfUrl`               | `string` | **Required**. Url of test(pdf)                                         |
| `categoryId`           | `number` | **Required**. Category of the test                                     |
| `teachersDisciplineId` | `number` | **Required**. TeacherDiscipline (Teacher and Discipline of teacher) Id |

</br>

####

| Headers         | Type     | Description                    |
| :-------------- | :------- | :----------------------------- |
| `Authorization` | `string` | **Required**. 'Bearer `token`' |

####

#

### Get tests separeted by disciplines

```http
GET /tests/disciplines
```

####

| Headers         | Type     | Description                    |
| :-------------- | :------- | :----------------------------- |
| `Authorization` | `string` | **Required**. 'Bearer `token`' |

####

#### Response:

```json
[
  {
    "number": 1,
    "disciplines": [
      {
        "name": "HTML e CSS",
        "teacherDisciplines": [
          {
            "teacher": {
              "name": "Diego Pinho"
            },
            "tests": [
              {
                "name": "Projeto de HTML e CSS 1",
                "pdfUrl": "https://www.projetohtmlecss.pdf",
                "category": {
                  "name": "Projeto"
                }
              }
            ]
          }
        ]
      },
      {
        "name": "Humildade",
        "teacherDisciplines": [
          {
            "teacher": {
              "name": "Bruna Hamori"
            },
            "tests": []
          }
        ]
      }
    ]
  },
  {
    "number": 2,
    "disciplines": []
  }
]
```

#

### Get tests separeted by teachers

```http
GET /tests/teachers
```

#### Request:

| Params | Type      | Description                 |
| :----- | :-------- | :-------------------------- |
| `id`   | `integer` | **Required**. Credential Id |

####

| Headers         | Type     | Description                    |
| :-------------- | :------- | :----------------------------- |
| `Authorization` | `string` | **Required**. 'Bearer `token`' |

####

#### Response:

```json
[
  {
    "name": "Diego Pinho",
    "teacherDisciplines": [
      {
        "discipline": {
          "name": "HTML e CSS"
        },
        "tests": [
          {
            "name": "Projeto de HTML e CSS 1",
            "pdfUrl": "https://www.htmlecss.pdf",
            "category": {
              "name": "Projeto"
            }
          }
        ]
      },
      {
        "discipline": {
          "name": "JavaScript"
        },
        "tests": []
      },
      {
        "discipline": {
          "name": "React"
        },
        "tests": []
      }
    ]
  },
  {
    "name": "Bruna Hamori",
    "teacherDisciplines": [
      {
        "discipline": {
          "name": "Humildade"
        },
        "tests": []
      },
      {
        "discipline": {
          "name": "Planejamento"
        },
        "tests": []
      },
      {
        "discipline": {
          "name": "Autoconfiança"
        },
        "tests": []
      }
    ]
  }
]
```

#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

`SECRET_KEY = any string`

</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/ricardomartinso/RepoProvas-API
```

Go to the project directory

```bash
  cd RepoProvas-API/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

</br>

## Lessons Learned

In this project I learned a lot about how to structure an API with TypeScript

</br>

## Acknowledgements

- [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

</br>

## Authors

- Ricardo Martins is a full stack student at Driven Education. Nowadays he studies Computer Engineering at UFPA,
  looking forward to become a Dev.
  <br/>

#
