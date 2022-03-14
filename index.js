const traila = () => {
    // java script object Notation . (JSON)
    // const user = { id: 05, name: 'Rabby', job: 'Web Engineer' };
    // const Suser = JSON.stringify(user);
    // console.log(Suser);

    const shop = {
        name: 'Al-ramz super market',
        address: 'Ajman,sanaya,UAE',
        owner: {
            name: 'Amir',
            address: 'kerala , India',
            age: 23 + ' ' + 'years old',
        },
        product: ['Cosmetics', 'Electronics', 'Toilatriz', 'fast-food'],
        isExpensive: false
    }
    const shopStringified = JSON.stringify(shop);
    console.log(shop);
    console.log(shopStringified);
}