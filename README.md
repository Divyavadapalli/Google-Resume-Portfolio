# Google Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Inspired by Google's design aesthetic with a professional look and feel.


## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
├── layout.tsx          # Root layout
├── globals.css         # Global styles
├── page.tsx            # Home page
├── skills/
│   └── page.tsx        # Skills page
├── projects/
│   └── page.tsx        # Projects page
└── contact/
    └── page.tsx        # Contact page
```

## Pages

- **Home** (`/`) - Main landing page with work experience and featured projects
- **Skills** (`/skills`) - Display of technical skills and expertise
- **Projects** (`/projects`) - Showcase of completed projects
- **Contact** (`/contact`) - Contact form and social links

## Customization

To personalize the portfolio:

1. **Update personal information** in `app/page.tsx` (Divya Sri Vadapalli, email, phone)
2. **Add your projects** in `app/projects/page.tsx`
3. **Update skills** in `app/skills/page.tsx`
4. **Modify colors** in `tailwind.config.ts` and `app/globals.css`
5. **Add images** to the `public` folder and update image references

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React 18** - UI library

## License

This project is open source and available under the MIT License.

## Author

DIVYA SRI VADAPALLI

---

For more information about Next.js, visit [https://nextjs.org/docs](https://nextjs.org/docs)
