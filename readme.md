# Test Platfrom Application

Used technologies:  
- Nodejs
- React
- ES6
- Webpack
- Babel
- http://semantic-ui.com/
- Gulp


## How to start

Run:  
```
npm install
npm start
```

Check your http://localhost:3000/ or  `open http://localhost:3000/`

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
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores.
│   ├── /api/                   # REST API / Relay endpoints.
│   ├── /components/            # React components.
│   ├── /routes.js              # Universal (isomorphic) application routes.
│   └── /server.js              # Server-side startup script.
├── webpack.config.js           # Build automation scripts and utilities.
└── package.json                # Project configuration and meta data.
```
