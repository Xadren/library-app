import Ember from 'ember';
import {match, not} from '@ember/object/computed';


export default Ember.Controller.extend({
    jumboMessage: "Coming Soon!",
    emailAddress: '',

    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),

    actions: {
        saveInvitation() {
            // alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
            this.set('responseMessage', `Thank you! We've just save your email address: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');
        }
    }

});
