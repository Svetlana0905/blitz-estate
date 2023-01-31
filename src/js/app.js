import { isWebp, openPopUpActions, closePopUpActions } from './modules'
import AOS from 'aos'

window['FLS'] = true

isWebp()

openPopUpActions()
closePopUpActions()

AOS.init();
