import {ThemeProvider} from "styled-components";
import {Header} from "../components/Header/Header";
import {theme} from "../styles/theme";
import {GlobalStyle} from "../styles/global";
import {API} from "../api/api";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Header/>
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}

// MyApp.getInitialProps = async () => {
//     const res = await API.getNavigation()
//     const navigation = await res.data
//
//     return {navigation}
// }

export default MyApp
