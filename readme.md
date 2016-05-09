# Test Platfrom Application
This project provides a test management application and reporting.
All data and logic are handled by backend services such as the reporting-service
while this project provides the UI and management of session.

Used technologies:  
- Nodejs
- React
- ES6
- Webpack
- Babel

## How to start

Run:  
```
npm install
npm start
```

Check your http://localhost:8080/ or  `open http://localhost:8080/`

## How to test

`npm test`

## Webpack in production mode
Minimizes the bundle file
Run:  
`npm run build`

### Directory Layout

```
.
├── /node_modules/              # 3rd-party libraries and utilities.
├── /public/                    # public folder, which serves the web pages.
|   ├── bundle.js               # The compiled js of all snippets of code in app directory.
|   ├── index.hmtl              # Main html page.
|   ├── img                     # Public image directory.
|   ├── css                     # Public css directory.
├── /app/                       # The source code of the application.
│   ├── /components/            # React components.
│   ├── /index.js               # Universal (isomorphic) application routes.
│   └── /server.js              # Server-side startup script.
├── /test/                      # Test directory.
│   ├── /components/            # Unit tests of application components.
├── webpack.config.js           # Build automation scripts and utilities.
└── package.json                # Project configuration and meta data.
```
