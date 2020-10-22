export interface InputStyleTypeInterface {
    id: string;
    type: string;
}

export const InputStyleTypes: Array<InputStyleTypeInterface> =
    [
        // Estilos para el control input-text 
        { id: '1', type: 'blue-white' },
        { id: '2', type: 'grey' },

        // Estilos para el control input-checkbox 
        { id: '3', type: 'blue-check' },
        { id: '4', type: 'blue-circle' },
        { id: '5', type: 'blue-women-symbol' },
        { id: '6', type: 'blue-men-symbol' }
    ]