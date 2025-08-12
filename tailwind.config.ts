import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Travel theme colors
				'primary-glow': 'hsl(var(--primary-glow))',
				sand: 'hsl(var(--sand))',
				palm: 'hsl(var(--palm))',
				sky: 'hsl(var(--sky))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms',
				'5000': '5000ms',
			},
			transitionTimingFunction: {
				'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
			backdropBlur: {
				'xs': '2px',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'text-glow': {
					'0%, 100%': {
						textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
					},
					'50%': {
						textShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.3)'
					}
				},
				'slide-background': {
					'0%': {
						opacity: '0',
						transform: 'scale(1.1)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
				'scale-in': 'scale-in 0.6s ease-out forwards',
				'text-glow': 'text-glow 3s ease-in-out infinite',
				'float': 'float 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'slide-background': 'slide-background 2s ease-out forwards',
				'shimmer': 'shimmer 2s linear infinite',
				// Delayed animations for staggered effects
				'fade-in-up-delay-100': 'fade-in-up 0.8s ease-out 100ms forwards',
				'fade-in-up-delay-200': 'fade-in-up 0.8s ease-out 200ms forwards',
				'fade-in-up-delay-300': 'fade-in-up 0.8s ease-out 300ms forwards',
				'fade-in-up-delay-500': 'fade-in-up 0.8s ease-out 500ms forwards',
				'fade-in-up-delay-700': 'fade-in-up 0.8s ease-out 700ms forwards',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
			},
			boxShadow: {
				'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
				'glow-lg': '0 0 30px rgba(59, 130, 246, 0.6)',
				'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		// Custom plugin for glassmorphism utilities
		function({ addUtilities }: any) {
			const newUtilities = {
				'.glass-effect': {
					background: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(10px)',
					border: '1px solid rgba(255, 255, 255, 0.2)',
					boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
				},
				'.glass-dark': {
					background: 'rgba(0, 0, 0, 0.1)',
					backdropFilter: 'blur(10px)',
					border: '1px solid rgba(255, 255, 255, 0.1)',
				},
				'.text-shadow-glow': {
					textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
				},
				'.parallax-bg': {
					willChange: 'transform',
					backfaceVisibility: 'hidden',
				}
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;