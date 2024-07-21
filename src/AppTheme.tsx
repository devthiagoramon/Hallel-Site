import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

const AppTheme = ({ children }: { children: ReactNode }) => {
    const theme = {
        mainColors:{
            principal: "#033117",
            secondary: "#42A5F5",
            text: "#252525",
            title: "rgba(3, 49, 23, 0.9)",
            background: "#F7F9F9",
            error: "#F44336",
            secondaryLigth: "#E3F2FD",
            success: "#66BB6A"
        },
        card: {
            background: "#06612E",
            text: "#FAFAFA",
            button: "#E3F2FD"
        }
    }
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default AppTheme