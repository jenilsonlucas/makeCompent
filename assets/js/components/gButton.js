components.push({
  name: "component-gButton",
  type: "div",
  property: {
    classes: "gButton, flex",
  },
  children: [
    {
      name: "button",
      type: "button",
      property: {
        classes: "button, flex",
        content: "click aqui",
      },
    },
    {
      name: "button--load",
      type: "button",
      property: {
        classes: "button--load, flex",
      },
      children: [
        {
          name: "button--load-circle",
          type: "div",
          property: {
            classes: "button--load-circle",
          },
        },
      ],
    },
    {
      name: "button--dark-light",
      type: "div",
      property: {
        classes: "button--dark-light, flex",
      },
      children: [
        {
          name: "button--dark-light__radion",
          type: "div",
          property: {
            classes: "button--dark-light__radion",
          },
        },
      ],
    },
    {
      name: "button--hover",
      type: "button",
      property: {
        classes: "button--hover, flex",
        content: "click aqui",
      },
    },
  ],
});


