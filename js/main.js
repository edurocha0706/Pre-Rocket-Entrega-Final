const button = document.getElementsByClassName('.agent')
const popup = document.getElementsByClassName('.popup-wrapper')

button.addEventListener('click', () => {
  popup.style.display = 'block'
})

popup.addEventListener('click', () => {
  const classNameOfClickedElement = event.target.classList[0]
  const classNames = ['popup-close','popup-wrapper','popup-link']
  const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
  
  if(shouldClosePopup){
    popup.style.display = 'none'
  }
  
})




let json = `[{
    "data": {
      "agents": [
        {
          "name": "Jett",
          "function": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 5
            },
            {
              "type": 2,
              "damage": 8
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 30
            }
          ],
          "image": "./agents/jett.png"
        },
        {
          "name": "Raze",
          "function": "Sentinela",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 6
            },
            {
              "type": 2,
              "damage": 3
            },
            {
              "type": 3,
              "damage": 13
            },
            {
              "type": 4,
              "damage": 25
            }
          ],
          "image": "./agents/raze.png"
        },
        {
          "name": "Breach",
          "function": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 5
            },
            {
              "type": 2,
              "damage": 8
            },
            {
              "type": 3,
              "damage": 15
            },
            {
              "type": 4,
              "damage": 10
            }
          ],
          "image": "./agents/breach.png"
        },
        {
          "name": "Omen",
          "function": "Controlador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 9
            },
            {
              "type": 2,
              "damage": 5
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 20
            }
          ],
          "image": "./agents/omen.png"
        },
        {
          "name": "Brimstone",
          "function": "Iniciador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 5
            },
            {
              "type": 2,
              "damage": 5
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 20
            }
          ],
          "image": "./agents/brimstone.png"
        },
        {
          "name": "Phoenix",
          "function": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 15
            },
            {
              "type": 2,
              "damage": 8
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 30
            }
          ],
          "image": "./agents/phoenix.png"
        },
        {
          "name": "Sage",
          "function": "Iniciador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 25
            },
            {
              "type": 2,
              "damage": 4
            },
            {
              "type": 3,
              "damage": 15
            },
            {
              "type": 4,
              "damage": 25
            }
          ],
          "image": "./agents/sage.png"
        },
        {
          "name": "Sova",
          "function": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 5
            },
            {
              "type": 2,
              "damage": 10
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 40
            }
          ],
          "image": "./agents/sage.png"
        },
        {
          "name": "Viper",
          "function": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 12
            },
            {
              "type": 2,
              "damage": 18
            },
            {
              "type": 3,
              "damage": 20
            },
            {
              "type": 4,
              "damage": 15
            }
          ],
          "image": "./agents/viper.png"
        },
        {
          "name": "Cypher",
          "function": "Controlador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 10
            },
            {
              "type": 2,
              "damage": 15
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 20
            }
          ],
          "image": "./agents/cypher.png"
        },
        {
          "name": "Reyna",
          "function": "Iniciador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 14
            },
            {
              "type": 2,
              "damage": 18
            },
            {
              "type": 3,
              "damage": 27
            },
            {
              "type": 4,
              "damage": 45
            }
          ],
          "image": "./agents/reyna.png"
        }
      ],
      "guns": {
        "primaryGun": [
          "./guns/gun6.png",
          "./guns/gun7.png",
          "./guns/gun8.png",
          "./guns/gun11.png",
          "./guns/gun12.png"
        ],
        "secondaryGun": [
          "./guns/gun14.png",
          "./guns/gun15.png",
          "./guns/gun13.png",
          "./guns/gun9.png",
          "./guns/gun10.png"
        ],
        "steel": [
          "./guns/gun1.png",
          "./guns/gun2.png",
          "./guns/gun3.png",
          "./guns/gun4.png",
          "./guns/gun5.png"
        ]
      },
      "maps": [
        "./maps/map1.png",
        "./maps/map2.png",
        "./maps/map3.png",
        "./maps/map4.png",
        "./maps/map5.png"
      ]
    }
  }]`

  let allagents = JSON.parse(json);
  console.log(allagents[0].data.agents[0].name);
  console.log(allagents[0].data.agents[0].function);
  console.log(allagents[0].data.agents[0].description);
  console.log(allagents[0].data.agents[0].skills[0].damage);
  console.log(allagents[0].data.agents[0].skills[1].damage);
  console.log(allagents[0].data.agents[0].skills[2].damage);
  console.log(allagents[0].data.agents[0].skills[3].damage);
  console.log(allagents[0].data.agents[0].image);

  console.log(allagents[0].data.agents[1].name);
  console.log(allagents[0].data.agents[1].function);
  console.log(allagents[0].data.agents[1].description);
  console.log(allagents[0].data.agents[1].skills[0].damage);
  console.log(allagents[0].data.agents[1].skills[1].damage);
  console.log(allagents[0].data.agents[1].skills[2].damage);
  console.log(allagents[0].data.agents[1].skills[3].damage);
  console.log(allagents[0].data.agents[1].image);