import Ember from 'ember';
import {match, not, gte, and} from '@ember/object/computed';
export default Ember.Controller.extend({
    emailAddress: '',
    message: '',
    isValidEmail: match('emailAddress', /^.+@.+\..+$/),
    isLongEnough: gte('message.length', 5),

    isBothTrue: and('isValidEmail', 'isLongEnough'),

    isDisabled: not('isBothTrue'),
    actions: {
        sendMessage: function(){
            const email = this.get('emailAddress');
            const message = this.get('message');

            console.log('sending message...');

            let responseMessage = 'To: ' + email + ', Message: ' + message;
            this.set('responseMessage', responseMessage);
            this.set('emailAddress', '');
            this.set('message', '');
        }
    }
});
