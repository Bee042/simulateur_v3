import { useEffect } from "react"

/**
 * * custom hook to change the meta description tag pf <head> * 
 * 
 * If the description is not given or is empty, no changes will be made.
 */


const useDocMeta = (description) => {
    // useEffect runs after the component is rendered and when dependency changes
    useEffect(() => {
        // check if there is an existing description (= if not null or undefined)
        if (description) {
            // create a variable to store and use the meta tag with the name description
            let metaDescription = document.querySelector('meta[name="description');

            // if meta tag does not exist :
            if (!metaDescription) {
                // create a new meta tag :
                metaDescription = document.createElement('meta');
                // set the name of the tag :
                metaDescription.name = "description";
                // append the meta tag to the <head> section
                document.head.appendChild(metaDescription);
            }
            // update the content of meta tag with the given description
            metaDescription.content = description;
        };

// dependency array : useEffect will run again if dependency value changes
    },[description]);
};

export default useDocMeta;