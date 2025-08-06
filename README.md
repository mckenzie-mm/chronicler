# Chronicler Monorepo (Mackenzie Solution)

This monorepo contains both the frontend and backend applications for the Chronicler project, managed with [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces).

## Structure

- `frontend/` – React app (TypeScript)
- `backend/` – Node.js app (TypeScript)

## Getting Started

### Install all dependencies (root)

```bash
npm install
```

This will install dependencies for both workspaces (`frontend` and `backend`).

### Running scripts

You can now run scripts for each workspace from the root using the following commands:

#### Frontend

```bash
npm run frontend:start
npm run frontend:test
npm run frontend:build
```

#### Backend

```bash
npm run backend:dev
npm run backend:start
npm run backend:test
```

---

## My Solution to this problem is given below.

Time did not permit the writing of jest test code, so screenshots of the running app with different test cases are shown below. 

The solution uses both server side and client side validation and error messages.

#### Test 1: input data as given in the readme

<kbd>![alt text](https://github.com/mckenzie-mm/chronicler/blob/main/test-images/1.png)<kbd>

#### Test 2: no input data entered (client side validation error)

<kbd>![alt text](https://github.com/mckenzie-mm/chronicler/blob/main/test-images/2.png)<kbd>

#### Test 3: input data as given in the readme but with invalid character (client side validation error)

<kbd>![alt text](https://github.com/mckenzie-mm/chronicler/blob/main/test-images/3.png)<kbd>

#### Test 4: input data as given in the readme but with lists of unequal length (server side error)

<kbd>![alt text](https://github.com/mckenzie-mm/chronicler/blob/main/test-images/4.png)<kbd>

#### Test 5: input data as given in the readme but with floating number format (a validation error that has not been fixed yet. This case is a todo in the app)

<kbd>![alt text](https://github.com/mckenzie-mm/chronicler/blob/main/test-images/5.png)<kbd>



