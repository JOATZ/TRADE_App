//clear acceptedTerms data value on refresh/close
export const removeAcceptedTermsBeforeUnload = (itemKey) => {
    const handleBeforeUnload = () => {
        localStorage.removeItem(itemKey)
    }
    //listen for unload
    window.addEventListener('beforeunload', handleBeforeUnload)
    //remove the event listener when the component unmounts
    return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload)
    }
}

export default removeAcceptedTermsBeforeUnload
