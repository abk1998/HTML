var mobile = [{

        name: 'Samsung',
        price: 93434,
        variant: ['32', '64']
    },
    {
        name: 'Apple',
        price: 93434,
        variant: ['32', '64']
    },
    {
        name: 'Oneplus',
        price: 93434,
        variant: ['32', '64']
    }
]


mobile.forEach(mobil => {
    for (const m in mobil) {
        var mobu = mobil[m];
        if (mobu instanceof Array) {
            for (const i in mobu)
                console.log('mob variant bit:' + mobu[i]);
        } else
            console.log(mobu);
    }
});