// import '../styles/globals.css'
import {Header} from "components/Header";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "../components/GlobalStyles/GlobalStyles";
import {NormalizeStyles} from "../components/GlobalStyles/NormalizeStyles";

const theme = {
    colors: {
        primary: '#ff0000'
    }
}

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <NormalizeStyles />
            <GlobalStyles/>
            <Header isDark/>
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}

export default MyApp
