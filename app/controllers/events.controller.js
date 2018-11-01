module.exports = {
    showEvents: (req, res) => {
        //create dummy data
        const events = [
            { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket yo' },
            { name: 'Swimming', slug: 'swimming', description: 'Michael Phelps is fast' },
            { name: 'Weight Lifting', slug: 'weightlifting', description: 'Liftinh heavy things up' }
        ];
        //return a view with data
        res.render('pages/events', { events: events });
    },

    showSingle: (req, res) => {
        const event = { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket yo' };
        res.render('pages/single', {event: event});
    }

}