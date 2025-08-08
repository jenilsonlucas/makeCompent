components.push({
    name: 'component-input-box--text',
    type: 'div',
    property: { 
        classes: 'input-box, flex',
    },
    children: [
        {
            name: 'input__text',
            type: 'input',
            property: {
                classes: 'input__text',
                type: 'text',
                placeholder: ' '
            }
        },
        {
            name: 'input__label',
            type: 'label',
            property: {
                classes: 'input__label',
                content: 'Digite o seu nome'
            }
        }
    ]
})