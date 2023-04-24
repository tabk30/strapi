### Kiến trúc thư mục
```
├── pakages
│   ├── admin-test-ultis
│   │   ├── **/*.css
│   ├── cli
│   ├── core
│   │   ├──....
│   │   ├── admin: FE cua strapi
│   │   ├── strapi
│   │   │   ├── bin
│   │   │   │   └── strapi.js dinh nghia cac command cua strapi. goi qua ham getLocalScript
│   │   │   ├── ee Chua ro muc dic
│   │   │   ├── lib
│   │   │   │   ├── commands: cau lenh chay cli
│   │   │   │   │   ├── ...
│   │   │   │   │   ├── develop.js
│   │   │   │   │   ├── ...
│   │   │   │   ├── core
│   │   │   │   ├── core-api
│   │   │   │   ├── load
│   │   │   │   ├── middlewares
│   │   │   │   ├── migrations
│   │   │   │   ├── services
│   │   │   │   ├── types
│   │   │   │   ├── utils
│   │   │   │   ├── compile.js
│   │   │   │   ├── container.js
│   │   │   │   ├── factories.js
│   │   │   │   ├── global.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── indes.js
│   │   │   │   └── Strapi.js thu muc export ra Strapi
│   │   │   ├── ... Mot so file khac
│   │   ├──....
│   ├── generators
│   ├── plugins
│   ├── providers
│   └── utils
├── public
│   ├── css
│   │   ├── **/*.css
│   ├── images
│   ├── js
│   ├── index.html
├── dist (or build)
├── node_modules
├── package.json
├── package-lock.json 
└── .gitignore
```