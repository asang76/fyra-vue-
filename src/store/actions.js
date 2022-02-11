import axios from 'axios'

export default {
    ACTIVE_LINK({commit}, payload) {
        commit("ACTIVE_LINK", payload)
    },

    SEND_EMAIL ({commit}, payload) {
        console.log(payload.target);


        let email = {
            email: payload.target.email.value,
            fullname: payload.target.fullname.value,
            message: payload.target.message.value,
        }
        axios.post(
            '/api/client_query',
            {email},
        )
        .then()
        // Add Telegram Bot Message 

        commit('SEND_EMAIL', payload);

        commit('toggle_contact_msg');
    },
    
    send_enquiry ({commit}, payload) {
        
        let enquiry = {
           email: payload.email,
           mobile: payload.mobile,
           requirements: JSON.stringify(payload.requirements)
         }
         
        
        axios.post(
           '/api/client_query',
           {enquiry},
         )
        .then()
        // Telegram bot msg 
        axios
        .post('/api/contact/', {enquiry})
        .then()
        commit('SEND_ENQUIRY', enquiry)
        commit('toggle_enquiry_msg');

    },

    toggle_enquiry_msg({commit}) {
        commit('toggle_enquiry_msg');
    },
    toggle_contact_msg({commit}) {
       commit('toggle_contact_msg');
    }

}