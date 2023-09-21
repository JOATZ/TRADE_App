export const removeAcceptedTermsBeforeUnload = (itemKey) => {
    const handleVisibilityChange = () => {
        if (document.hidden) {
            localStorage.removeItem(itemKey);
        }
    }
    // Listen for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);
    // Remove the event listener when the component unmounts
    return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
    }
}

export default removeAcceptedTermsBeforeUnload;