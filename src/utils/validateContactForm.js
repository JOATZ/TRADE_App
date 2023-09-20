//use Yup at some point
export const validateContactForm = (values) => {
    const errors = {}
    //Validate First
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least than two characters'
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less'
    }
    //Validate Last
    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least than two characters'
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less'
    }
    //Validate Phone is digits
    const reg = /^\d+$/
    if (!reg.test(values.phoneNum) || values.phoneNum.length < 10) {
        errors.phoneNum = 'Enter a 10-digit phone number'
    }
    //Validate Email includes @
    if (!values.email.includes('@' && '.')) {
        errors.email = 'Email should contain a @ and a .'
    }

    return errors
}
