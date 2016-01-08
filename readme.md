# Test Platfrom Application

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
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /app/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /api/                   # REST API / Relay endpoints
│   ├── /components/            # React components
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /client.js              # Client-side startup script
│   ├── /config.js              # Global application settings
│   ├── /routes.js              # Universal (isomorphic) application routes
│   └── /server.js              # Server-side startup script
├── /config/                     # Build automation scripts and utilities
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
│── package.json                # The list of 3rd party libraries and utilities
└── preprocessor.js             # ES6 transpiler settings for Jest
```
