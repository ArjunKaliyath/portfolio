# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI components.

## Features

- 🎨 Modern and responsive design
- ⚡ Built with Next.js 15 and TypeScript
- 🎭 Beautiful UI components with ShadCN UI
- 📱 Mobile-first responsive design
- 🚀 Optimized for performance
- 🌙 Dark mode support
- 📧 Contact section with social links

## Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Personal story and achievements
- **Skills**: Technologies and tools you work with
- **Projects**: Featured projects with descriptions and links
- **Contact**: Ways to get in touch

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following in `src/app/page.tsx`:

1. **Name**: Replace "Arjun" with your name
2. **Bio**: Update the description in the hero section
3. **About Section**: Modify the story and achievements
4. **Skills**: Update the technologies you work with
5. **Projects**: Add your real projects with descriptions and links
6. **Contact**: Update email, LinkedIn, and GitHub links

### Styling

- Colors and themes can be customized in `src/app/globals.css`
- Component styles can be modified in the respective component files
- ShadCN UI components can be customized using their documentation

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push your code to the `main` branch
2. Go to your repository settings
3. Navigate to "Pages" section
4. Select "GitHub Actions" as the source
5. The site will be automatically deployed to `https://yourusername.github.io/portfolio-website`

### Manual Build

To build the project for production:

```bash
npm run build
```

The built files will be in the `out` directory.

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own portfolio!