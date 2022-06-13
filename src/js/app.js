import DonateForm from './DonateForm';
import DonateContainer from './donate_container/DonateContainer';

const donateContainer = new DonateContainer();
const donateForm = new DonateForm();

const body = document.querySelector('body');
donateForm.render(body);
donateContainer.render(body);

donateForm.addSumbitListener(() => {
  donateContainer.addDonate(new Date(), donateForm.donateAmount);
});
