/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        sidebar: {
          background: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        gothic: ['Cinzel', 'Playfair Display', 'serif'],
        serif: ['Crimson Text', 'Times New Roman', 'serif'],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "bat-fly": "batFly 15s linear infinite",
        "bat-hover": "batHover 4s ease-in-out infinite",
        "cross-glow": "crossGlow 4s ease-in-out infinite",
        "mist-drift": "mistDrift 8s ease-in-out infinite",
        "gothic-pulse": "gothicPulse 3s ease-in-out infinite",
        "shadow-dance": "shadowDance 5s ease-in-out infinite",
        "typewriter": "typewriter 3s steps(40, end), blink 1s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px hsl(var(--gothic-wine) / 0.3)" },
          "50%": { boxShadow: "0 0 20px hsl(var(--gothic-wine) / 0.6)" },
        },
        batFly: {
          "0%": { 
            transform: "translateX(-100px) translateY(0px) rotate(0deg)",
            opacity: "0"
          },
          "10%": { opacity: "1" },
          "50%": { 
            transform: "translateX(50vw) translateY(-20px) rotate(5deg)",
            opacity: "0.8"
          },
          "90%": { opacity: "1" },
          "100%": { 
            transform: "translateX(calc(100vw + 100px)) translateY(-10px) rotate(-5deg)",
            opacity: "0"
          },
        },
        batHover: {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)"
          },
          "50%": { 
            transform: "translateY(-5px) rotate(2deg)"
          },
        },
        crossGlow: {
          "0%, 100%": { 
            textShadow: "0 0 5px hsl(var(--gothic-wine) / 0.5)"
          },
          "50%": { 
            textShadow: "0 0 15px hsl(var(--gothic-wine) / 0.8), 0 0 25px hsl(var(--gothic-wine) / 0.4)"
          },
        },
        mistDrift: {
          "0%": { 
            transform: "translateX(-20px) rotate(0deg)",
            opacity: "0.1"
          },
          "50%": { 
            transform: "translateX(20px) rotate(2deg)",
            opacity: "0.3"
          },
          "100%": { 
            transform: "translateX(-20px) rotate(0deg)",
            opacity: "0.1"
          },
        },
        gothicPulse: {
          "0%, 100%": { 
            transform: "scale(1)",
            opacity: "0.7"
          },
          "50%": { 
            transform: "scale(1.05)",
            opacity: "1"
          },
        },
        shadowDance: {
          "0%, 100%": { 
            boxShadow: "0 0 10px hsl(var(--gothic-wine) / 0.3), inset 0 0 10px hsl(var(--gothic-purple) / 0.2)"
          },
          "50%": { 
            boxShadow: "0 0 20px hsl(var(--gothic-wine) / 0.6), inset 0 0 20px hsl(var(--gothic-purple) / 0.4)"
          },
        },
        typewriter: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        blink: {
          "0%, 50%": { borderColor: "transparent" },
          "51%, 100%": { borderColor: "hsl(var(--gothic-wine))" },
        },
      },
      boxShadow: {
        "gothic": "0 10px 30px -5px hsl(var(--gothic-wine) / 0.3)",
        "glow": "0 0 20px hsl(var(--gothic-wine) / 0.4)",
        "glow-lg": "0 0 30px hsl(var(--gothic-wine) / 0.6)",
      },
    },
  },
  plugins: [],
} 