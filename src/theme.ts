import styled, { CreateStyled } from '@emotion/styled'

export interface Theme {
  palette: {
    primary: string
    primaryMedium: string
    primaryLight: string
    primaryHighlight: string
    secondary: string
    secondaryLight: string
    secondaryHighlight: string
    primaryNeutral: string
    backgroundNeutral: string
    destructive: string
  }
  typography: {
    // Fonts depend on outer - ruetech or system - definitions. We don't provide
    // a way to load own fonts in the application at the moment.
    fontFamilies: {
      cabin: string
      georgia: string
      openSans: string
    }
  }
}

export const lightTheme: Theme = {
  // tslint:disable:object-literal-sort-keys
  palette: {
    primary: '#333333',
    primaryNeutral: '#BBBBEE',
    primaryMedium: '#9999CC',
    primaryLight: '#3f51b5',
    primaryHighlight: '#696969',
    secondary: '#3f51b5',
    secondaryLight: '#2f41A5',
    secondaryHighlight: '#4f61C5',
    backgroundNeutral: '#EEEEEE',
    destructive: '#f50057',
  },
  typography: {
    fontFamilies: {
      cabin: `'Cabin', 'Helvetica Neue', Helvetica, Arial, sans-serif;`,
      georgia: `'Georgia', serif`,
      openSans: `'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    },
  },
  // tslint:enable:object-literal-sort-keys
}

export const darkTheme: Theme = {
  // tslint:disable:object-literal-sort-keys
  palette: {
    primary: '#DDDDDD',
    primaryNeutral: '#333333',
    primaryMedium: '#555555',
    primaryLight: '#898989',
    primaryHighlight: '#B9B9B9',
    secondary: '#0f6155',
    secondaryLight: '#4f61C5',
    secondaryHighlight: '#6F81E5',
    backgroundNeutral: '#191919',
    destructive: '#f50057',
  },
  typography: {
    fontFamilies: {
      cabin: `'Cabin', 'Helvetica Neue', Helvetica, Arial, sans-serif;`,
      georgia: `'Georgia', serif`,
      openSans: `'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    },
  },
  // tslint:enable:object-literal-sort-keys
}

const themeStyled = styled as CreateStyled<Theme>
export { themeStyled as styled }
