import VanillaCalendar from '@src/vanilla-calendar';
import setVariables from '@scripts/helpers/setVariables';
import handleInput from '@scripts/handles/handleInput';
import handleClick from '@scripts/handles/handleClick';
import create from '@scripts/create';

const init = (self: VanillaCalendar) => {
	self.HTMLOriginalElement = self.HTMLElement.cloneNode(true) as HTMLElement;
	self.isInit = true;

	if (self.input) {
		return handleInput(self);
	} else {
		setVariables(self);
		create(self);
		return handleClick(self);
	}
};

export default init;
