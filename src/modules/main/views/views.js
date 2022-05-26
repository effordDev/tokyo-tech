import { api, LightningElement } from 'lwc';

export default class Views extends LightningElement {
     
     views = []

     isHome = false
     isDev = false

     @api get view() {
		return this._current;
	}
     
	set view(view) {
		if (!view) {
			return;
		}
		console.log('views: setting view - ', view);

		if (view === undefined) {
			return;
		}

		const name =
			view.substring(0, 5) === 'view-' ? view.substring(0, 5) : view;

		const newView = this.format(name);
		const otherViews = this.views.filter((v) => v !== newView);

		otherViews.map((key) => this.setBoolean(key, false));

		this.setBoolean(newView, true);
		this.views = [newView, ...otherViews];
		this._current = newView;
	}

     setBoolean(key, bool) {
		this[`is${key}`] = bool;
	}

     format(string) {
		return camelCase(capitalize(string));
	}
}

function camelCase(string) {
	return string.replace(/-([a-z])/gi, (all, letter) => letter.toUpperCase());
}

function capitalize(s) {
	return s.slice(0, 1).toUpperCase() + s.slice(1, s.length);
}

