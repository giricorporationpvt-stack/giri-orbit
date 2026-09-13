/**
 * ============================================================================
 * GIRI ORBIT — COMPREHENSIVE WORLD FONTS CATALOG (fonts.js)
 * By GIRI Corporation (A Subsidiary of Giri Group)
 * ============================================================================
 * Contains 100+ of the world's most widely used typography families,
 * organized into professional categories. Calibri is the designated default font.
 */

export const DEFAULT_FONT_FAMILY = "Calibri, 'Segoe UI', Arial, sans-serif";
export const DEFAULT_FONT_NAME = "Calibri";

export const WORLD_FONTS_CATALOG = [
  // --------------------------------------------------------------------------
  // 1. MICROSOFT 365 & OFFICE CLASSICS (Calibri is #1 Default)
  // --------------------------------------------------------------------------
  { name: 'Calibri', family: "Calibri, 'Segoe UI', Arial, sans-serif", category: 'Microsoft 365', isDefault: true },
  { name: 'Calibri Light', family: "'Calibri Light', Calibri, sans-serif", category: 'Microsoft 365' },
  { name: 'Aptos', family: "Aptos, 'Segoe UI', Arial, sans-serif", category: 'Microsoft 365' },
  { name: 'Aptos Display', family: "'Aptos Display', Aptos, sans-serif", category: 'Microsoft 365' },
  { name: 'Segoe UI', family: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif", category: 'Microsoft 365' },
  { name: 'Segoe UI Variable', family: "'Segoe UI Variable', 'Segoe UI', sans-serif", category: 'Microsoft 365' },
  { name: 'Arial', family: "Arial, Helvetica, sans-serif", category: 'Microsoft 365' },
  { name: 'Arial Black', family: "'Arial Black', Arial, sans-serif", category: 'Microsoft 365' },
  { name: 'Times New Roman', family: "'Times New Roman', Times, serif", category: 'Microsoft 365' },
  { name: 'Georgia', family: "Georgia, 'Times New Roman', serif", category: 'Microsoft 365' },
  { name: 'Garamond', family: "Garamond, 'EB Garamond', Georgia, serif", category: 'Microsoft 365' },
  { name: 'Cambria', family: "Cambria, Georgia, serif", category: 'Microsoft 365' },
  { name: 'Constantia', family: "Constantia, Georgia, serif", category: 'Microsoft 365' },
  { name: 'Corbel', family: "Corbel, 'Segoe UI', sans-serif", category: 'Microsoft 365' },
  { name: 'Candara', family: "Candara, 'Segoe UI', sans-serif", category: 'Microsoft 365' },
  { name: 'Trebuchet MS', family: "'Trebuchet MS', Helvetica, sans-serif", category: 'Microsoft 365' },
  { name: 'Tahoma', family: "Tahoma, Verdana, sans-serif", category: 'Microsoft 365' },
  { name: 'Verdana', family: "Verdana, Geneva, sans-serif", category: 'Microsoft 365' },
  { name: 'Comic Sans MS', family: "'Comic Sans MS', 'Comic Sans', cursive", category: 'Microsoft 365' },
  { name: 'Impact', family: "Impact, Charcoal, sans-serif", category: 'Microsoft 365' },
  { name: 'Palatino Linotype', family: "'Palatino Linotype', 'Book Antiqua', Palatino, serif", category: 'Microsoft 365' },
  { name: 'Book Antiqua', family: "'Book Antiqua', Palatino, serif", category: 'Microsoft 365' },
  { name: 'Century Gothic', family: "'Century Gothic', Futura, sans-serif", category: 'Microsoft 365' },
  { name: 'Franklin Gothic Medium', family: "'Franklin Gothic Medium', Arial, sans-serif", category: 'Microsoft 365' },
  { name: 'Sitka Text', family: "'Sitka Text', Georgia, serif", category: 'Microsoft 365' },
  { name: 'Baskerville', family: "Baskerville, 'Times New Roman', serif", category: 'Microsoft 365' },

  // --------------------------------------------------------------------------
  // 2. MODERN SANS-SERIF & WEB STANDARDS
  // --------------------------------------------------------------------------
  { name: 'Inter', family: "Inter, -apple-system, sans-serif", category: 'Modern Sans' },
  { name: 'Roboto', family: "Roboto, 'Segoe UI', sans-serif", category: 'Modern Sans' },
  { name: 'Open Sans', family: "'Open Sans', sans-serif", category: 'Modern Sans' },
  { name: 'Lato', family: "Lato, sans-serif", category: 'Modern Sans' },
  { name: 'Montserrat', family: "Montserrat, sans-serif", category: 'Modern Sans' },
  { name: 'Poppins', family: "Poppins, sans-serif", category: 'Modern Sans' },
  { name: 'Nunito', family: "Nunito, sans-serif", category: 'Modern Sans' },
  { name: 'Raleway', family: "Raleway, sans-serif", category: 'Modern Sans' },
  { name: 'Plus Jakarta Sans', family: "'Plus Jakarta Sans', sans-serif", category: 'Modern Sans' },
  { name: 'DM Sans', family: "'DM Sans', sans-serif", category: 'Modern Sans' },
  { name: 'Work Sans', family: "'Work Sans', sans-serif", category: 'Modern Sans' },
  { name: 'Fira Sans', family: "'Fira Sans', sans-serif", category: 'Modern Sans' },
  { name: 'Source Sans 3', family: "'Source Sans 3', sans-serif", category: 'Modern Sans' },
  { name: 'Manrope', family: "Manrope, sans-serif", category: 'Modern Sans' },
  { name: 'Rubik', family: "Rubik, sans-serif", category: 'Modern Sans' },
  { name: 'Ubuntu', family: "Ubuntu, sans-serif", category: 'Modern Sans' },
  { name: 'Lexend', family: "Lexend, sans-serif", category: 'Modern Sans' },
  { name: 'Space Grotesk', family: "'Space Grotesk', sans-serif", category: 'Modern Sans' },
  { name: 'Quicksand', family: "Quicksand, sans-serif", category: 'Modern Sans' },
  { name: 'Cabin', family: "Cabin, sans-serif", category: 'Modern Sans' },
  { name: 'Barlow', family: "Barlow, sans-serif", category: 'Modern Sans' },
  { name: 'Outfit', family: "Outfit, sans-serif", category: 'Modern Sans' },

  // --------------------------------------------------------------------------
  // 3. EDITORIAL & CLASSIC SERIF
  // --------------------------------------------------------------------------
  { name: 'Merriweather', family: "Merriweather, Georgia, serif", category: 'Classic Serif' },
  { name: 'Playfair Display', family: "'Playfair Display', Georgia, serif", category: 'Classic Serif' },
  { name: 'Lora', family: "Lora, serif", category: 'Classic Serif' },
  { name: 'PT Serif', family: "'PT Serif', serif", category: 'Classic Serif' },
  { name: 'Source Serif 4', family: "'Source Serif 4', serif", category: 'Classic Serif' },
  { name: 'Roboto Slab', family: "'Roboto Slab', serif", category: 'Classic Serif' },
  { name: 'Cinzel', family: "Cinzel, serif", category: 'Classic Serif' },
  { name: 'Bitter', family: "Bitter, serif", category: 'Classic Serif' },
  { name: 'Cormorant Garamond', family: "'Cormorant Garamond', Garamond, serif", category: 'Classic Serif' },
  { name: 'EB Garamond', family: "'EB Garamond', Garamond, serif", category: 'Classic Serif' },
  { name: 'Bodoni MT', family: "'Bodoni MT', Didot, serif", category: 'Classic Serif' },
  { name: 'Didot', family: "Didot, 'Bodoni MT', serif", category: 'Classic Serif' },

  // --------------------------------------------------------------------------
  // 4. MONOSPACE & CODE
  // --------------------------------------------------------------------------
  { name: 'Consolas', family: "Consolas, 'Courier New', monospace", category: 'Monospace' },
  { name: 'Courier New', family: "'Courier New', Courier, monospace", category: 'Monospace' },
  { name: 'JetBrains Mono', family: "'JetBrains Mono', monospace", category: 'Monospace' },
  { name: 'Fira Code', family: "'Fira Code', monospace", category: 'Monospace' },
  { name: 'Source Code Pro', family: "'Source Code Pro', monospace", category: 'Monospace' },
  { name: 'Inconsolata', family: "Inconsolata, monospace", category: 'Monospace' },
  { name: 'Cascadia Code', family: "'Cascadia Code', Consolas, monospace", category: 'Monospace' },
  { name: 'Space Mono', family: "'Space Mono', monospace", category: 'Monospace' },
  { name: 'Ubuntu Mono', family: "'Ubuntu Mono', monospace", category: 'Monospace' },
  { name: 'Monaco', family: "Monaco, Menlo, monospace", category: 'Monospace' },
  { name: 'Menlo', family: "Menlo, Monaco, monospace", category: 'Monospace' },

  // --------------------------------------------------------------------------
  // 5. HANDWRITING & DISPLAY
  // --------------------------------------------------------------------------
  { name: 'Brush Script MT', family: "'Brush Script MT', cursive", category: 'Script & Display' },
  { name: 'Dancing Script', family: "'Dancing Script', cursive", category: 'Script & Display' },
  { name: 'Pacifico', family: "Pacifico, cursive", category: 'Script & Display' },
  { name: 'Caveat', family: "Caveat, cursive", category: 'Script & Display' },
  { name: 'Great Vibes', family: "'Great Vibes', cursive", category: 'Script & Display' },
  { name: 'Sacramento', family: "Sacramento, cursive", category: 'Script & Display' },
  { name: 'Lobster', family: "Lobster, cursive", category: 'Script & Display' },
  { name: 'Comfortaa', family: "Comfortaa, cursive", category: 'Script & Display' },
  { name: 'Righteous', family: "Righteous, cursive", category: 'Script & Display' },

  // --------------------------------------------------------------------------
  // 6. WORLD SCRIPT FONTS (GLOBAL MULTI-LANGUAGE)
  // --------------------------------------------------------------------------
  { name: 'Noto Sans', family: "'Noto Sans', sans-serif", category: 'World Scripts' },
  { name: 'Noto Serif', family: "'Noto Serif', serif", category: 'World Scripts' },
  { name: 'Noto Sans Devanagari', family: "'Noto Sans Devanagari', 'Noto Sans', sans-serif", category: 'World Scripts' },
  { name: 'Noto Sans Arabic', family: "'Noto Sans Arabic', 'Noto Sans', sans-serif", category: 'World Scripts' },
  { name: 'Noto Sans JP', family: "'Noto Sans JP', 'Hiragino Sans', sans-serif", category: 'World Scripts' },
  { name: 'Noto Sans KR', family: "'Noto Sans KR', 'Malgun Gothic', sans-serif", category: 'World Scripts' },
  { name: 'Noto Sans SC', family: "'Noto Sans SC', 'PingFang SC', sans-serif", category: 'World Scripts' },
  { name: 'Noto Sans TC', family: "'Noto Sans TC', 'PingFang TC', sans-serif", category: 'World Scripts' },
  { name: 'Noto Sans Hebrew', family: "'Noto Sans Hebrew', sans-serif", category: 'World Scripts' },
  { name: 'Noto Sans Thai', family: "'Noto Sans Thai', sans-serif", category: 'World Scripts' }
];
