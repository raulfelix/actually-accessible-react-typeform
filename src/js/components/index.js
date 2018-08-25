import {STEP_1, STEP_2, STEP_3} from '../constants/BladeConstants';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const components = {
  [STEP_1]: Step1,
  [STEP_2]: Step2,
  [STEP_3]: Step3
};

export default components;
