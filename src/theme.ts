import styled, { CreateStyled } from '@emotion/styled'

// tslint:disable:object-literal-sort-keys
export interface Theme {
  palette: {
    primary: string
    primaryMedium: string
    primaryLight: string
    primaryMediumLight: string
    primaryHighlight: string
    secondary: string
    secondaryLight: string
    secondaryHighlight: string
    primaryNeutral: string
    backgroundNeutral: string
    destructive: string
  }
}

export const lightTheme: Theme = {
  palette: {
    primary: '#333333',
    primaryNeutral: '#BBBBEE',
    primaryMedium: '#9999CC',
    primaryMediumLight: '#AAAADD',
    primaryLight: '#3f51b5',
    primaryHighlight: '#595959',
    secondary: '#3f51b5',
    secondaryLight: '#2f41A5',
    secondaryHighlight: '#4f61C5',
    backgroundNeutral: '#EEEEEE',
    destructive: '#f50057',
  },
}

export const darkTheme: Theme = {
  palette: {
    primary: '#DDDDDD',
    primaryNeutral: '#333333',
    primaryMedium: '#555555',
    primaryLight: '#898989',
    primaryMediumLight: '#444444',
    primaryHighlight: '#B9B9B9',
    secondary: '#0f6155',
    secondaryLight: '#4f61C5',
    secondaryHighlight: '#6F81E5',
    backgroundNeutral: '#191919',
    destructive: '#f50057',
  },
}
// tslint:enable:object-literal-sort-keys

const themeStyled = styled as CreateStyled<Theme>
export { themeStyled as styled }
