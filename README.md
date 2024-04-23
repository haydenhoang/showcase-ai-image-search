<h1>
 🤖 AI Image Search, powered by Typesense
</h1>
This is a demo that showcase Typesense's Image Search feature which includes:

<br />

- Search images using text descriptions of their contents
- Image Similarity search

## Tech Stack

- <a href="https://github.com/typesense/typesense" target="_blank">Typesense</a>
- NextJS
- Typescript
- Tailwind

The data contains 1265 best images out of the first 5000 image-prompt pairs which were taken from <a href="https://github.com/poloclub/diffusiondb" target="_blank">DiffusionDB</a> and then filtered based on aesthetics using <a href="https://github.com/kenjiqq/aesthetics-scorer" target="_blank">aesthetics-scorer</a>.

## Project Structure

```bash
├── scripts/
│   ├── data/
│   │   └── 20-images.json
│   └── indexTypesense.ts # script that index data from 20-images.json into typesense server
└── src/
    ├── app/
    │   ├── [slug]/
    │   │   └── page.tsx # explore similar style (search similar images with image)
    │   └── page.tsx # search images using text descriptions
    ├── components/
    │   └── UI components...
    ├── hooks/
    │   └── useImageSearch.ts
    └── lib/
        └── typesense.ts # typesense client config
```

## Development

To run this project locally, make sure you have docker and nodejs, install dependencies and start the dev server:

Installation

```shell
git clone https://github.com/typesense/showcase-ai-image-search.git

cd showcase-ai-image-search

npm i
```

Start typesense server

```shell
npm run start:typesense # or: docker compose up
```

Index data into typesense

```shell
npm run index:typesense
```

Start the dev server

```shell
npm run dev
```

Open http://localhost:3000 to see the app ✌️

## Environment

Set env variables to point the app to the Typesense Cluster

```env
NEXT_PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY=xxx
NEXT_PUBLIC_TYPESENSE_HOST=xxx.typesense.net
NEXT_PUBLIC_TYPESENSE_PORT=443
NEXT_PUBLIC_TYPESENSE_PROTOCOL=https
NEXT_PUBLIC_IMAGE_BASE_URL=...
```
