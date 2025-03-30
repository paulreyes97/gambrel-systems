
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
				sans: ['Inter', 'sans-serif'],
				display: ['Manrope', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			backgroundImage: {
				'radial-gradient': 'radial-gradient(circle at center, rgba(242, 236, 217, 0.9) 0%, rgba(221, 221, 221, 0.4) 70%)',
				'soft-radial': 'radial-gradient(circle at top right, rgba(245, 241, 232, 1) 0%, rgba(221, 221, 221, 0.6) 80%)',
				'gradient-shine': 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,0.9) 91.1%)',
				'dual-gradient': 'linear-gradient(135deg, rgba(242, 236, 217, 1) 0%, rgba(193, 211, 226, 0.9) 100%)',
				'accent-gradient': 'linear-gradient(to right, rgba(201, 214, 232, 0.9) 0%, rgba(226, 226, 226, 0.8) 100%)',
				'gray-blue-gradient': 'linear-gradient(to right, #3F4E5D 0%, #6E7A89 50%, #9EAABB 100%)',
				'blue-accent-gradient': 'linear-gradient(135deg, #6E8CAF 0%, #A8B9D5 100%)',
				'slate-gradient': 'linear-gradient(to right, #3F4E5D 0%, #5A6978 100%)',
				'cool-gray-gradient': 'linear-gradient(to bottom, #5A6978 0%, #8393A7 100%)',
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
				gambrel: {
					black: '#000000',
					gray: {
						light: '#F8F8F8',
						medium: '#E8E8E8',
						dark: '#333333',
					},
					silver: '#C0C0C0',
					cream: '#F9F5F0',
					beige: '#F5F1E8',
					sand: '#F2ECD9',
					lightsilver: '#E5E5E5',
					background: '#dddddd',
				},
				// New color scheme
				elegant: {
					gray: {
						50: '#F9FAFB',
						100: '#F3F4F6',
						200: '#E5E7EB',
						300: '#D1D5DB',
						400: '#9CA3AF',
						500: '#6B7280',
						600: '#4B5563',
						700: '#374151',
						800: '#1F2937',
						900: '#111827',
					},
					blue: {
						50: '#EFF6FF',
						100: '#DBEAFE',
						200: '#BFDBFE',
						300: '#93C5FD',
						400: '#60A5FA',
						500: '#3B82F6',
						600: '#2563EB',
						700: '#1D4ED8',
						800: '#1E40AF',
						900: '#1E3A8A',
					},
					teal: {
						50: '#F0FDFA',
						100: '#CCFBF1',
						200: '#99F6E4',
						300: '#5EEAD4',
						400: '#2DD4BF',
						500: '#14B8A6',
						600: '#0D9488',
						700: '#0F766E',
						800: '#115E59',
						900: '#134E4A',
					},
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-up': 'fade-up 0.7s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
