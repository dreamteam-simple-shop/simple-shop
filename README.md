# Simple Shop

A modern e-commerce application built with Next.js, featuring product browsing, filtering, and shopping cart functionality.

## Description

Simple Shop is a lightweight e-commerce application that displays products from the DummyJSON API. Users can browse products, filter by category, view product details, and manage a shopping cart with persistent storage.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.0
- **State Management**: Zustand (with persistence)
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **API**: DummyJSON (external product data)

## Features

- Product listing with category filtering
- Product detail pages
- Shopping cart with persistent storage
- Search functionality
- Responsive design

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── (routes)/
│   │   ├── detalje/[id]/    # Product detail pages
│   │   └── list/            # Product listing page
│   ├── components/          # React components
│   └── page.js             # Home page
└── store/
    └── Cart.jsx            # Zustand cart store
```

## Build

```bash
npm run build
npm start
```
