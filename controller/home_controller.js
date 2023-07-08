const Habbit =  require('../model/habbit');


function getTodayDate() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    if (day < 10) day = '0' + day;
    let month = currentDate.getMonth() + 1;
    if (month < 10) month = '0' + month;
    let year = currentDate.getFullYear();
    let today = day + "/" + month + "/" + year;
    return today;
}


function getOneWeekDate() {
    let arr = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() + i);
        let mm = d.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        let dd = d.getDate();
        if (dd < 10) dd = '0' + dd;
        const yyyy = d.getFullYear();
        arr.push(dd + '/' + mm + '/' + yyyy)
    }
    return arr;
}

// Reading data from database and showing in UI
module.exports.home=function(req,res){
let dates = getOneWeekDate();
Habbit.find({})
    .then(results => {
        return res.render('home',{title:"Habit Tracker",habits:results,weeklyDate:dates});
    })
    .catch(err => {
        console.log('Error in fetching habbit!', err)
        return;
    }) 
}

// creating habbit in db------
module.exports.createHabbit = function(req,res){
    Habbit.create({habbit: req.body.habbit,dates: { date: getTodayDate(), complete: "none" }})
    .then( result => {
        console.log('habbit added in DB', result);
        return res.redirect('back');
    })
    .catch(err => {
        console.log('Error in creating a habbit!', err)
            return;
    }) 
            
}

 //find the contact in the database uding  id and delete
module.exports.deleteHabbit = function(req,res){
    let id=req.query.id;
    Habbit.findByIdAndDelete(id)
        .then( result => {
            console.log('deleted succesfully an object from database', result);
            return res.redirect('back');
        })
    
        .catch(err => {
            console.log('Error in deleting a contact!', err)
                return;
        })       
}





// Add/Remove Habit to/from Favorites 
module.exports.favoriteHabbit = (req, res) => {
    let id = req.query.id;
    Habbit.findOne({ _id: { $in: [ id ] }})
        .then(habbit => {
            habbit.favorite = !habbit.favorite;
            habbit.save()
                .then(habbit => {
                    return res.redirect('back');
                })
                .catch(err => console.log(err));
        })
        .catch(err => {
            console.log("Error adding to favorites!");
            return;
        })
};


module.exports.statusUpdate = function(req, res) {
    var d = req.query.date;
    var id = req.query.id;
    Habbit.findById(id)
        .then(habit => {
            let dates = habit.dates;
            let found = false;
            dates.find((item, index) => {
                if (item.date === d) {
                    if (item.complete === 'yes') {
                        item.complete = 'no';
                    }
                    else if (item.complete === 'no') {
                        item.complete = 'none'
                    }
                    else if (item.complete === 'none') {
                        item.complete = 'yes'
                    }
                    found = true;
                }
            })
            if (!found) {
                dates.push({ date: d, complete: 'yes' })
            }
            habit.dates = dates;
            habit.save()
                .then(habit => {
                    // console.log(habit);
                    res.redirect('back');
                })
                .catch(err => console.log(err));
        })
        .catch(err => { console.log("Error updating status!"); return;})
}