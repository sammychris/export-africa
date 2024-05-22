# Export Africa

### Description

This is a full-stack project built using Next.js and TailwindCSS. I built this for Nigerian exporters to list products and display their profiles. You can search for exporters by products or profile information.

### Prerequisites

What things you need to install the software and how to install them:

- `node`
- `npm || yarn`

## Getting Started

```shell
cd Export-Africa
npm run dev
```markdown
# Export Africa

### Description

This is a full-stack project built using Next.js and TailwindCSS. I built this for Nigerian exporters to list products and display their profiles. You can search for exporters by products or profile information.

### Prerequisites

What things you need to install the software and how to install them:

- `node`
- `npm || yarn`

## Getting Started

```shell
cd Export-Africa
npm run dev
```

## Running the tests

> TBD

Not yet implemented.

## Deployment

> TBD

## Built With

- [Next.js](https://nextjs.org/) - The React Framework.
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js.
- [Express](https://expressjs.com/) - Minimal and flexible Node.js web application framework.

## Contributing

We welcome contributions! Please read our [contributing guide](https://github.com/your/project/contributing) to get started.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Author

- **Samuel C. Okanume** - [sammychris](https://github.com/sammychris)

## License

This project is licensed under the MIT License.

## Acknowledgments

---

## `package.json`

```json
{
  "name": "export-africa",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://sammychris.github.io/export-africa",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export",
    "deploy": "npm run export && gh-pages -d out"
  },
  "dependencies": {
    "@fortawesome/free-solid-svg-icons": "^6.5.1",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@reduxjs/toolkit": "^2.2.0",
    "and": "^0.0.3",
    "axios": "^1.6.5",
    "bcrypt": "^5.1.1",
    "dotenv": "^16.4.1",
    "formidable": "^3.5.1",
    "formik": "^2.4.5",
    "js-cookie": "^3.0.5",
    "jsonwebtoken": "^9.0.2",
    "jwt-decode": "^4.0.0",
    "leaflet": "^1.9.4",
    "mongoose": "^8.1.1",
    "multer": "^1.4.5-lts.1",
    "next": "14.0.4",
    "next13-progressbar": "^1.2.1",
    "node-mailjet": "^6.0.5",
    "nodemailer": "^6.9.8",
    "react": "^18",
    "react-country-region-selector": "^3.6.1",
    "react-dnd": "^16.0.1",
    "react-dnd-html5-backend": "^16.0.1",
    "react-dom": "^18",
    "react-dropzone": "^14.2.3",
    "react-icons": "^5.0.0",
    "react-image-upload": "^3.0.1",
    "react-images-uploading": "^3.1.7",
    "react-leaflet": "^4.2.1",
    "react-redux": "^9.1.0",
    "react-select": "^5.8.0",
    "react-select-country-list": "^2.2.3",
    "react-slick": "^0.30.1",
    "react-sortable-tree": "^2.8.0",
    "react-tabs": "^6.0.2",
    "reactstrap": "^9.2.2",
    "slick-carousel": "^1.8.1",
    "uuid": "^9.0.1",
    "yup": "^1.3.3"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.16",
    "eslint": "^8",
    "eslint-config-next": "14.0.4",
    "gh-pages": "^6.1.1",
    "postcss": "^8.4.33",
    "tailwindcss": "^3.4.1"
  }
}
```
```
