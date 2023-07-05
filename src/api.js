import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';
const customConfig = {
  dictionaries: [adjectives, animals],
  separator: ' ',
  length: 2
}

const btns = [
    {
      icon: 'src/assets/img/icon/select.svg',
      alt: 'select a fighter'
    },
    {
      icon: 'src/assets/img/icon/bag.svg',
      alt: 'pick some stuff'
    },
    {
      icon: 'src/assets/img/icon/fight.svg',
      alt: 'start fight'
    }
]

const filters = [
    {
        icon: 'src/assets/img/icon/paw.svg'
    },
    {
        icon: 'src/assets/img/icon/skull.svg'
    },
    {
        icon: 'src/assets/img/icon/bag.svg'
    }
]

const slots = [
    {
        name: 'helmet',
        icon: 'src/assets/img/icon/paw.svg'
    },
    {
        name: 'armor',
        icon: 'src/assets/img/icon/paw.svg'
    },
    {
        name: 'weapon',
        icon: 'src/assets/img/icon/paw.svg'
    },
    {
        name: 'potion',
        icon: 'src/assets/img/icon/paw.svg'
    },
    {
        name: 'pet',
        icon: 'src/assets/img/icon/paw.svg'
    }
]

const stats = [
    {
        name: 'health',
        icon: 'src/assets/img/health.png',
        color: '#ef3e3e'
    },
    {
        name: 'strength',
        icon: 'src/assets/img/strength.png',
        color: '#0012ff'
    },
    {
        name: 'agility',
        icon: 'src/assets/img/agility.png',
        color: '#edb116'
    },
    {
        name: 'failure',
        icon: 'src/assets/img/failure.png',
        color: '#d748c9'
    },
]

const characters = [
    {
        img: '1.png',
        bg: '#00a5da'
    },
    {
        img: '2.png',
        bg: '#6017d1'
    },
    {
        img: '3.png',
        bg: '#222035'
    },
    {
        img: '4.png',
        bg: '#ffa037'
    },
    {
        img: '5.png',
        bg: '#f2504f'
    }
]

const generateFighters = (n) => {

    let fighters = [];

    for(let i = 0; i <= n; i++){

        let fighter = {
            name: uniqueNamesGenerator(customConfig),
            dead: Math.random() > 0.8,
            stats: {
                health: Math.floor(Math.random() * (420 - 240 + 1) + 240),
                strength: Math.floor(Math.random() * (22 - 6 + 1) + 6),
                agility: Math.floor(Math.random() * (100 - 0 + 1) + 0) + '%',
                failure: Math.floor(Math.random() * (100 - 0 + 1) + 0) + '%'
            },
            passive: {
                name: uniqueNamesGenerator(customConfig),
                description: 'EACH TURN HAS A 1/10 CHANCE OF NOT RECEIVING DAMAGE FROM THE ENEMY'
            }
        }

        fighter = { ...fighter, ...characters[Math.floor(Math.random()*characters.length)]}
        fighters.push(fighter);
    }

    return fighters;
}

export {
    btns,
    filters,
    slots,
    stats,
    generateFighters
}