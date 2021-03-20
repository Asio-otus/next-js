import {ThemeProvider} from "styled-components";
import {Header} from "../components/Header";
import {theme} from "../styles/theme";
import {GlobalStyle} from "../styles/global";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Header/>
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}

export default MyApp
