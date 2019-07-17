import styled, { CreateStyled } from '@emotion/styled'

export interface Theme {
  palette: {
    primary: string
    primaryLight: string
    secondary: string
    secondaryLight: string
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

export const theme: Theme = {
  // tslint:disable:object-literal-sort-keys
  palette: {
    primary: '#E09D00',
    primaryLight: '#F9BB2B',
    secondary: '#3f51b5',
    secondaryLight: '#2f41A5',
    primaryNeutral: '#222',
    backgroundNeutral: '#EEE',
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
    primaryLight: '#F9BB2B',
    secondary: '#0f2185',
    secondaryLight: '#4f61C5',
    primaryNeutral: '#333333',
    backgroundNeutral: '#222222',
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
