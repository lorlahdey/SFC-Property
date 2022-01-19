## SFC-Property API

SFC-Property API is a REST API for a property agency to showcase and lease available properties out to prospect owners.

# API Overview
**What you can do with this API:**

- Add a property
- Get list of all properties
- Get list of individual property
- Make update to property Info

## Set Up Development

- Check that the latest version on nodejs is installed:

```
  node --version
  >> v14.4.0 or greater
```

- Clone the repo and cd into it:

```bash
  git clone https://github.com/lorlahdey/SFC-Property
  cd SFC-Property
```

- Install dependencies:

```bash
  npm install
```

- Create a `.env` file in the root folder and add all the configuration in the `.env.example` file to it. Make sure you replace the values with the right values:

```
  # General settings
    PORT= <Port>
    MONGODB_URI = <MONGODB_URI> 
```

- Run the application with the command:

```
  npm start
```
