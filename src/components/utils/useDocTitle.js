import { useEffect } from 'react'

// customized hook to update the browser title with a specific value
const useDocTitle = (title) => {

    useEffect(() => {
        //update the tab in the browser with the string given in 'titel' argument
        document.title = title;
    }, [title]); // runs again only if the title value changes
};

export default useDocTitle;