const lightColors = {
    background: 'hsl(0, 0%, 98%)',
    backgroundMainCard: 'hsl(236, 33%, 92%)',
    backgroundHeaderCard: 'hsla(236, 65%, 77%, 1)',
    backgroundSearchBar: 'hsl(0, 0%, 100%)',
    backgroundTodo: 'hsla(236, 45%, 82%, 1)',
    borderColor: '#E3E2E2',
    text: 'hsl(235, 19%, 35%)',
    titleText: 'hsl(235, 16%, 14%)',
    textTodo: 'hsl(235, 19%, 35%)',
    textCompleted: 'hsl(236, 9%, 61%)',

};

const darkColors = {
    background: 'hsl(235, 21%, 11%)',
    backgroundMainCard: 'hsl(235, 24%, 19%)',
    backgroundHeaderCard: 'hsl(237, 14%, 26%)',
    backgroundSearchBar: 'hsl(235, 24%, 19%)',
    backgroundTodo: 'hsla(237, 14%, 38%, 1)',
    titleText: 'hsl(0, 0%, 98%)',
    textTodo: 'hsl(0, 0%, 98%)',
    text: 'hsl(234, 39%, 85%)',
    textCompleted: 'hsl(236, 33%, 92%)',
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
