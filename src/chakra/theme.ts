// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
    100: '#ff3c00',
  },
  font: {
    body: "Open Sans, sans-serif", 
  },
  styles: {
    global: () => ({
      body : {
        bg: "gray.200",
      }
    })
  },
  components: {

  },
}

export const theme = extendTheme({ colors })