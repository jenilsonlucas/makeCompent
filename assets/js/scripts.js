let tabIndex = 0;
const components = [];


//Card
components.push({
    name: 'component-card',
    type: 'div',
    property: { 
        classes: 'card, flex, flex--column',
    },
    children: [
        {
            name: "content",
            type: "h3",
            property: {
                classes: "card__questions",
                content: "Porque que Angola E assim?"
            }
        }
    ]             
})

//card com botao
components.push(
    {
        name: 'component-card--btn',
        type: 'div',
        property: { 
            classes: 'card--btn, flex, flex--column',
        },
        children: [
            {
                name: 'img',
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
//Card com img

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

//Botão
components.push({
    name: 'component-button',
    type: 'button',
    property: { 
        classes: 'button, flex',
        content: 'click aqui'
    }
})

//Grupo de Botao
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


//inppu text
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

//input radio
components.push({
    name: 'component-input--radio',
    type: 'input',
    property: { 
        classes: 'input--radio',
        type: 'radio'
    },
})

//input checkboxx 
components.push({
  name: "component-input--check",
  type: "input",
  property: {
    classes: "input-box, flex",
    type: "checkbox",
  },
});


// input data

components.push({
    name: 'component-input-data',
    type: 'input',
    property: { 
        classes: 'input-data',
        placeholder: 'digite alguma coisa',
        list: 'minha',
        type: "text"
    },
})

components.push({
  name: "component-datalist",
  type: "datalist",
  property: {
    classes: "input-data",
    placeholder: "digite alguma coisa",
    id: "minha",
  },
});

//Carrossel
components.push({
  name: "component-slide",
  type: "div",
  property: {
    classes: "slider",
  },
});

//tabela
components.push({
  name: 'component-table',
  type: 'table',
  property: {
    classes: 'table-comp',
}
});


//breadcrumb
components.push({
    name: 'component-breadcrumb',
    type: 'ul',
    property: { 
        classes: 'breadcrumb',
    },             
})

//section cards
components.push({
    name: 'component-sec-flex',
    type: 'div',
    property: { 
        classes: 'sec-flex, flex',
    }             
})

//barra de navegação com links costumizaveis
components.push({
    name: 'component-navbar',
    type: 'div',
    navbar: true,
    property: { 
        classes: 'navbar, flex' 
    }             
})

//tab

components.push({
  name: "component-tab",
  type: "div",
  property: {
    classes: "tab-container",
  },
});




function define(element) {
  const componentClassName = Array.from(element.classList).find((cls) =>
    cls.startsWith("component-")
  );
  if (!componentClassName) return;

  const component = findByName(componentClassName);
  if (!component) return;
  buildComponents(component, element);
}

function findByName(name) {
  return components.find((element) => element.name === name);
}

function buildComponents(component, element, isChildren = false) {
  const buildComponent = document.createElement(component.type);
  const classes = component.property.classes.split(",");
  classes.forEach((cls) => {
    buildComponent.classList.add(cls.trim());
  });

  if (component.type === "img") {
    if (element.getAttribute(`data-src`))
      buildComponent.src = element.getAttribute(`data-src`);
    else buildComponent.src = component.property.src;
  }

  if (component.name && element.getAttribute(`data-${component.name}`)) {
    buildComponent.innerHTML = element.getAttribute(`data-${component.name}`);
  }

  if (component.property.type) {
    buildComponent.type = component.property.type;
    if (component.property.placeholder)
      buildComponent.placeholder = component.property.placeholder;
    if(element.getAttribute(`data-placeholder`))
      buildComponent.placeholder = element.getAttribute(`data-placeholder`);
    if(element.getAttribute(`data-name`))
      buildComponent.name = element.getAttribute(`data-name`);
  }

  if (component.property.list) {
    if(element.getAttribute(`data-list`))
      buildComponent.setAttribute("list", element.getAttribute(`data-list`));
    else  
      buildComponent.setAttribute("list", component.property.list);
  }

  if(element.getAttribute(`data-classes`)){
    buildComponent.className = buildComponent.className + " " + element.getAttribute(`data-classes`);
  }

  if (component.property.id) {
    if(element.id)
      buildComponent.id = element.id;
    else
      buildComponent.id = component.property.id;
  }

  if (component.children) {
    component.children.forEach((child) => {
      const childElement = buildComponents(child, element, true);
      buildComponent.append(childElement);
    });
  }

  if (!isChildren && element && element.hasChildNodes()) {
    Array.from(element.childNodes).forEach((child) => {
      if (child.nodeType == 1 && child.dataset.rendered) {
        define(child);
      } else {
        buildComponent.appendChild(child);
      }
    });
  }

  if (!isChildren && element) {
    if (component.type === "datalist" && element.dataset.array) {
      const options = element.dataset.array.split(",").map((opt) => opt.trim());
      options.forEach((value) => {
        const optionElement = document.createElement("option");
        optionElement.value = value;
        buildComponent.appendChild(optionElement);
      });
    }

    if (component.navbar && element.dataset.links) {
      const links = element.dataset.links?.split(',').map((opt) => opt.trim());
      const hrefs = element.dataset.hrefs?.split(',').map((opt) => opt.trim());
      const classes = element.dataset.linksClasses?.split(',').map((opt) => opt.trim());
      const contents = element.dataset.linksContents?.split(',').map((opt) => opt.trim());
      const navbarLink = document.createElement("div");
      navbarLink.classList.add("navbar__link");
      links.forEach((_, index) => {
        const a = document.createElement("a");
        a.href = hrefs[index].startsWith('htpps') ? hrefs[index] : `https://${hrefs[index]}`;
        if(classes)
          a.className = classes[index];
        a.innerHTML = contents[index];
        navbarLink.appendChild(a);
      });

      buildComponent.appendChild(navbarLink);
    }

    if(component.name == "component-table")
    {
      const heads = element.dataset.th.split(',').map((opt) => opt.trim());
      const rows = element.dataset.td.split(',').map((opt) => opt.trim());

      const thead = document.createElement("thead");
      heads.forEach((head) => {
        const th = document.createElement("th");
        th.innerHTML = head;
        thead.appendChild(th);
      })  

      const tbody = document.createElement("tbody");

      rows.forEach((row) => {
        const tr = document.createElement("tr");

        const data = row.split(":").map((r) => r.trim());

        data.forEach((d) =>{
          const td = document.createElement("td");
          td.textContent = d;
          tr.appendChild(td);
        })
        tbody.appendChild(tr);
      })
        buildComponent.appendChild(thead);
        buildComponent.appendChild(tbody);
    }
  }

  if(component.name == "component-slide")
  {
    const imgs = element.dataset.imgs.split(",").map((img) => img.trim());

    imgs.forEach((img, index) => {
      const image = document.createElement("img");
      image.src = img;
      image.classList.add("slide");
      if(index == 0)
        image.classList.add("active")

      buildComponent.appendChild(image);
    })
  }

  if(component.name == "component-breadcrumb")
  {
    const links = element.dataset.links.split(',').map((link) => link.trim());
    const contents = element.dataset.contents.split(',').map((c) => c.trim());
    links.forEach((link, index) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link;
      a.innerHTML = contents[index];

      li.appendChild(a);
      buildComponent.appendChild(li);
    })
  }

  if(component.name == "component-tab")
  {
   const contents = element.dataset.contents
      .split(/(?<!\/):/)
      .map(c => c.replace(/\/:/g, ":").trim()); 
    const btnNames = element.dataset.btnNames.split(',').map((n) => n.trim());

    const tabNav = document.createElement("div");
    tabNav.classList.add("tab-nav");
    const tabContents = document.createElement("div");
    tabContents.classList.add("tabs-contents");

    contents.forEach((content, index) => {
      const id = `tab${Date.now()}-${index + 1}`;
      const button = document.createElement("button");
      button.innerHTML = btnNames[index];
      button.onclick = function(){
        openTab(id , this);
      }
      tabNav.appendChild(button);
 
      const con = document.createElement("div");
      con.innerHTML = content;
      con.classList.add("tab-content");
      con.id = id;
      tabContents.appendChild(con);

      if(index == 0){
        button.classList.add("active");
        con.classList.add("active");
      }
    })

    buildComponent.appendChild(tabNav);
    buildComponent.appendChild(tabContents);
  }
  buildComponent.dataset.rendered = true;

  if (!isChildren && element) {
    if (element.dataset.link) {
      buildComponent.href = element.dataset.link;
    }
    element.replaceWith(buildComponent);
  }

  return buildComponent;
}

function hasComponentParent(el) {
  let parent = el.parentNode;
  const hasDotClass = Array.from(parent.classList).some((cls) =>
    cls.startsWith("component")
  );
  if (hasDotClass) return true;

  return false;
}
function initialize() {
  const allElements = Array.from(
    document.querySelectorAll("[class*=component-]")
  );

  for (const element of allElements) {
    if (!hasComponentParent(element)) {
      define(element);
    }
  }
}
