export interface MaskTypeInterface {
    id: string;
    type: string;
}

export const MaskTypes: Array<MaskTypeInterface> =
    [
        { id: '1', type: 'money' },
        { id: '2', type: 'names' },
        { id: '3', type: 'number' },
        { id: '4', type: 'email' },
        { id: '5', type: 'phone' },
        { id: '6', type: 'money-investment' },
        { id: '7', type: 'default' },
        { id: '8', type: 'defaultOutCapitalized'}
    ]