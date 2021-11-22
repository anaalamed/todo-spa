// export const breakpoints = {
//     mobile: 812,
//     md: 30,
//     lg: 45,
//     xl: 60,
// }

// export const mediaQueries = key => {
//     return style => `@media only screen and (max-width: ${breakpoints[key]}px) { ${style} }`
// }

const sizes = {
    // mobileS: '320px',
    // mobileM: '375px',
    // mobileL: '425px',
    // tablet: '768px',
    // laptop: '1024px',
    // laptopL: '1440px',
    // desktop: '2560px',
    my: '812px'
};

export const devices = {
    // mobileS: `(min-width: ${sizes.mobileS})`,
    // mobileM: `(min-width: ${sizes.mobileM})`,
    // mobileL: `(min-width: ${sizes.mobileL})`,
    // tablet: `(min-width: ${sizes.tablet})`,
    // laptop: `(min-width: ${sizes.laptop})`,
    // laptopL: `(min-width: ${sizes.laptopL})`,
    // desktop: `(min-width: ${sizes.desktop})`,
    laptop: `only screen and (min-width: ${sizes.my})`,
};