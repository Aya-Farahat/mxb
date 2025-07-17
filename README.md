# 💠 mxb

**mxb** is a modern web project built with **React 19** and styled using **Bootstrap 5**, featuring internationalization, animations, and a smooth product slider. It delivers a responsive and elegant user interface for showcasing brand products effectively.

---

## 🔧 Technologies Used

| Library / Tool                       | Purpose                          |
| ------------------------------------ | -------------------------------- |
| **React 19**                         | UI development framework         |
| **Bootstrap 5**                      | Responsive design and layout     |
| **Framer Motion**                    | Smooth animations                |
| **Swiper**                           | Interactive product sliders      |
| **i18next + react-i18next**          | Multi-language support           |
| **i18next-http-backend**             | Load translation files from JSON |
| **i18next-browser-languagedetector** | Auto-detect user language        |
| **react-icons**                      | Ready-to-use SVG icons           |
| **@react-intersection-observer**     | Detect elements on scroll        |
| **ajv + ajv-keywords**               | Data validation                  |
| **react-countup**                    | Animated number counters         |
| **schema-utils**                     | Schema validation helpers        |
| **web-vitals**                       | Performance monitoring           |
| **@testing-library/react**           | React component testing          |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Aya-Farahat/mxb
cd mxb

```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The app will be available at `http://localhost:3000`.

---

## 📁 Project Structure

```
mxb/
 ┣ public/
 ┣ src/
 ┃ ┣ assets/           ← Images & backgrounds
 ┃ ┣ components/       ← Reusable UI components
 ┃ ┣ pages/            ← App pages
 ┃ ┣ i18n/             ← Translations
 ┃ ┣ styles/           ← CSS & styling
 ┃ ┣ App.js
 ┃ ┗ index.js
┣ package.json
┗ .gitignore
```

---

## 🌍 Internationalization (i18n)

The app supports multiple languages using `i18next`:

- Loads translations via `i18next-http-backend`.
- Detects user language with `i18next-browser-languagedetector`.

---

## 🧪 Running Tests

```bash
npm test
```

