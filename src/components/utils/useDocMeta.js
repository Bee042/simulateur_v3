import { useEffect } from "react"

const useDocMeta = (description) => {
    useEffect(() => {
        // vérifie qu'on passe bien notre string depuis app.js ( la description )
        if (description) {
            // On crée une variable et on va cibler la balise meta dans le DOM
            let metaDescription = document.querySelector('meta[name="description');
            // Si la balise meta n'existe pas on la crée, on lui donne le nom description et on l'ajoute dans notre <head>
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.name = "description";
                document.head.appendChild(metaDescription);
            }
            // Enfin on met notre description dans le content de la balise
            metaDescription.content = description;
        };
    });
};

export default useDocMeta;