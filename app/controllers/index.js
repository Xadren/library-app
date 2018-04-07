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
            const email = this.get('emailAddress');

            const newInvitation = this.store.createRecord('invitation', {email});
            newInvitation.save().then(response => {
                this.set('responseMessage', `Thank you! We've just saved your email address with the following id: ${response.get('id')}`);
                this.set('emailAddress', '');
            });
        }
    }

});
