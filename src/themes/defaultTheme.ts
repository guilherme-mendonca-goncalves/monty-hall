const defaultTheme = {
  breakpoints: {
    xs: '321px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400'
  },
  colors: {
    black: '#000000',
    danger: '#FF9442',
    dark: '#363636',
    error: '#FC3C2B',
    gray: '#dbdbdb',
    light: '#F2F4F7',
    primary: '#0230BA',
    secondary: '#c7c7c7',
    success: '#30B47A',
    warning: '#FFCF00',
    white: '#ffffff',
    green1: '#7aa944',
    green2: '#5c7e32'
  },
  font: {
    sizes: {
      xxs: '12px',
      xs: '13px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '22px',
      xxl: '26px',
    },
    weights: {
      regular: 400,
      bold: 700,
    },
  },
  layers: {
    base: 0,
    modal: 10,
    awaysOnTop: 20,
  },
} as const;

export default defaultTheme;
