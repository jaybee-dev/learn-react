import { useState } from "react";

/**
 * @param {number} initial 
 * @param {array} [state increment decrement]
 */
export function useIncrement (initial = 0) {
    const [state, setState] = useState(initial)
    const increment = () => setState(initial => initial + 1)
    const decrement = () => setState(initial => initial - 1)
    return [state, increment, decrement]
}

// tableau de taille 3
// 1) compteur
// 2) fonction d'incrementation
// 3) fonction de décrémentation