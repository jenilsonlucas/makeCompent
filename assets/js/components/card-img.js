components.push(
    {
        name: 'component-card--img',
        type: 'div',
        property: { 
            classes: 'card--img, flex, flex--column',
        },
        children: [
            {
                name: 'img',
                type: 'img',
                property: {
                     classes: 'img--card',
                     src: './assets/images/test.jpg'    
                }
            },
            {
                name: '.content',
                type: 'div',
                property: {
                     classes: 'card__content, flex, flex--column',    
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
                          content: 'poucas coisas foram feitas para isso'
                        }
                    }
                ]
            }
        ]
   },
)