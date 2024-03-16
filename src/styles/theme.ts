const lightColors = {
    background: '#ECEBEB',
    backgroundMainCard: '#F8F7F7',
    borderColor: '#E3E2E2',
    text: '#333333',
};

const darkColors = {
    background: '#121212',
    text: '#FFFFFF',
};

const spacings = {
    small: '1rem',
    medium: '2rem',
    large: '3rem',
};

const lightTheme = {
    colors: lightColors,
    spacings: spacings,
    images: {
        toggle: {
            light: '/images/icon-moon.svg',
            dark: '/images/icon-sun.svg',
        },
    },
}


const darkTheme = {
    colors: darkColors,
    spacings: spacings,
    images: {
        toggle: {
            light: '/images/icon-moon.svg',
            dark: '/images/icon-sun.svg',
        },
    },
};

const typography = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: {
        regular: 400,
        bold: 700,
    },
    styles: {
        strikethrough: {
            textDecoration: 'line-through',
        },
    },
};

const theme = {
    light: lightTheme,
    dark: darkTheme,
    typography: typography,
};



export default theme;
