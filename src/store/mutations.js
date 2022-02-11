export default {

    ACTIVE_LINK(state, payload) {
       
        state.active_link = payload.active_link;
        
    },
    SEND_EMAIL (state, payload) {
        console.log(payload);
        console.log(state);
    },
    SEND_ENQUIRY (state, payload) {
        console.log(state);
        console.log(payload)
    },
    toggle_enquiry_msg(state) {
      state.enquiry_msg = !state.enquiry_msg
    },
    toggle_contact_msg(state) {
        state.contact_msg = !state.contact_msg
    }
    
}
