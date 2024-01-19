import { useState } from "react";

export function useDocumentTitle (initial = 'Nom') {
    const [state, setState] = useState(initial)
    return {
        name: state,
        setName: () => setState(prompt('Votre nom'))
    }
}