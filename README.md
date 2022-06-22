# mok-localstorage

Ease use of Local Storage in JavaScript and it's libraries

# Features

- Get Data Item From Local Storage
- Set Data Item in Local Storage
- Remove Data Item in Local Storage

# Installing

`npm i mok-localstorage`

# Example

#### Get Data

> key will be string

```
 import {getLocalStorageItem} from 'mok-localstorage';

 const data = getLocalStorageItem(key)

```

#### Set Data

> key will be string

> data will be string or object type

```
import {setLocalStorageItem} from 'mok-localstorage';

 const data = setLocalStorageItem(key,data)

```

#### Remove Data

> key will be string

```
import {removeLocalStorage} from 'mok-localstorage';

 const data = removeLocalStorage(key)

```

### React Example

```
import {
  getLocalStorageItem,
  removeLocalStorage,
  setLocalStorageItem,
} from "mok-localstorage";

function App() {
    // persist is JSON object
  const persist = getLocalStorageItem("persist");

  // Get Data
  const token = getLocalStorageItem("token");
  const user = {
    userid: "8045dd77-f0aa-4245-b695-2575536c1b9d",
    username: "new user",
    useremail: "newuser@gmail.com",
  };

  // Set Data
  setLocalStorageItem("user", user);

  // Remove Data
  removeLocalStorage("newdata");

  return (
    <h1>
      {token}
      {JSON.stringify(persist)}
    </h1>
  );
}

export default App;

```
