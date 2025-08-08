components.push(
    {
        name: 'component-card--btn',
        type: 'div',
        property: { 
            classes: 'card--btn, flex, flex--column',
        },
        children: [
            {
                name: '.img',
                type: 'img',           
                property: {
                     classes: 'card__img',
                     src: './assets/images/test.jpg'    
                }
            },
            {
                name: 'content',
                type: 'div',
                property: {
                     classes: 'card__content, flex, flex--column, relative',    
                },
                children: [
                    {
                        name: 'title',
                        type: 'h1',
                        property: {
                            classes: 'card__title',    
                            content: 'Tecnologia'
                        }
                    },
                    {
                        name: 'subtitle',
                        type: 'p',
                        property: {
                            classes: 'card__subtitle',    
                            content: 'Poucas coisas foram feitas para isso...'
                        }
                    },
                    {
                        name: 'button',
                        type: 'div',
                        property: {
                            classes: 'card__btn, flex',    
                            content: 'Saber mais'
                        }
                    }
                ]
            }
        ]
   },
)