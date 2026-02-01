import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/pages/HomePage";

function App() {
  // Remove Emergent badge
  useEffect(() => {
    const removeBadge = () => {
      const badges = document.querySelectorAll('a[href*="emergent"], div[class*="emergent"], [data-emergent]');
      badges.forEach(el => el.remove());
      
      // Also check for fixed position elements in bottom right
      document.querySelectorAll('body > div').forEach(el => {
        const style = window.getComputedStyle(el);
        if (style.position === 'fixed' && style.bottom && style.right) {
          if (el.textContent?.includes('Emergent') || el.innerHTML?.includes('emergent')) {
            el.remove();
          }
        }
      });
    };
    
    removeBadge();
    const interval = setInterval(removeBadge, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
