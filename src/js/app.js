import { isWebp, openPopUpActions, closePopUpActions, filterPriceForm, init } from './modules'
import AOS from 'aos'

window['FLS'] = true

isWebp()

openPopUpActions()
closePopUpActions()
filterPriceForm()
init()

AOS.init();
