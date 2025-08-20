# Next News App

A modern news web application built with Next.js, featuring dynamic routing, modular components, and a clean structure. This project is designed for learning and demonstration purposes.

## Features

- Next.js 14+ app directory structure
- Dynamic news pages with slugs and modals
- Archive and latest news sections
- Custom middleware for advanced routing
- Modular React components
- CSS styling with global and scoped styles
- Image assets and public folder for static files

## Project Structure

```
next_news_app/
├── app/                # Next.js app directory
│   ├── content/        # Main content and layouts
│   ├── news/           # News pages, dynamic routes, modals
│   ├── marketing/      # Marketing pages
│   └── globals.css     # Global styles
├── assets/             # Project assets (e.g., logo)
├── components/         # Reusable React components
├── lib/                # Library code (e.g., news.js)
├── public/             # Public static files (images, etc.)
├── middleware.js       # Custom Next.js middleware
├── package.json        # Project dependencies and scripts
├── next.config.mjs     # Next.js configuration
├── jsconfig.json       # JS/TS config
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm (v9 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd next_news_app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the Next.js development server:

```bash
npm run dev
```

- The frontend will be available at `http://localhost:3000`

## Development

- Edit pages and components in the `app/` and `components/` directories.
- Static images go in `public/images/`.

## License

MIT

---

_This project is for educational purposes and not intended for production use._
