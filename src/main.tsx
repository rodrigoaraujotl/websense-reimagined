import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/config'
import { ThemeProvider } from './components/ThemeProvider'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="websense-ui-theme">
    <App />
  </ThemeProvider>
);
