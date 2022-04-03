
const express=require("express")
const exphbs=require("express-handlebars");
const app=express()
const sqlite3 = require('sqlite3').verbose();

var username="";
var password="";
let reservation={step1:[],step2:[],step3:[],step4:[],step5:[]}
let Reservation_History=[]
let Yphresies=[]
let Paketa=[]

//ΠΡΟΣΒΑΣΗ ΣΤΗ ΒΑΣΗ ΔΕΔΟΜΕΝΩΝ
const path = require('path');
const { nextTick } = require("process");
const dbPath = path.resolve("public/Database/", 'Database.db')

const db = new sqlite3.Database(dbPath , (err) => {
  if (err) {
    return console.log(err.message);
  }
  else{
  console.log('Connected');
}
});

app.use(express.static('public'))

app.engine('hbs', exphbs({extname: '.hbs'}))
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    reservation=[]
    let cars=[]
    let klaseis_oxhmatwn=[]
    db.all("SELECT * FROM KLASH_OXHMATOS LIMIT 4",function(err,rows){
        if(err){throw err}
        else{
            rows.forEach(function(row){
                klaseis_oxhmatwn.push(row.typos_oxhmatos)
            })
            for(let i=0;i<klaseis_oxhmatwn.length;i++){
                db.all("SELECT * FROM OXHMA, KLASH_OXHMATOS WHERE KLASH_OXHMATOS.typos_oxhmatos='"+klaseis_oxhmatwn[i]+"' AND OXHMA.typos_oxhmatos=KLASH_OXHMATOS.typos_oxhmatos LIMIT 12;" , function(err, rows){
                    if(err) {
                        return console.log(err.message); 
                    }
                    else{
                        rows.forEach(function (row) {
                            cars.push({img:row.photo, model:row.modelo,carclass:row.typos_oxhmatos,price:row.timh})
                        })
                        if (i==3){
                            let stathmoi=[]
                            let paketa=[];
                            let yphresies=[];
                            db.all("SELECT * FROM STATHMOS",function(err,rows){
                                rows.forEach(function(row){
                                    stathmoi.push({perioxh:row.perioxh})
                                })
                            })
                            db.all("SELECT * FROM PAKETO_KALYPSHS;" , function(err, rows){
                                if(err) {
                                    return console.log(err.message); 
                                }
                                else{
                                    rows.forEach(function (row) {
                                        paketa.push({title:row.titlos})
                                    })
                                    
                                }
                            })
                            db.all("SELECT * FROM YPHRESIES;" , function(err, rows){
                                if(err) {
                                    return console.log(err.message); 
                                }
                                else{
                                    rows.forEach(function (row) {
                                        yphresies.push({title:row.titlos})
                                    })
                                    
                                }
                            })
                            
                            res.render('Homepage', {
                                title:"Αρχική ",
                                style: "/css/style.css",
                                script: "/scripts/script.js",
                                post:{
                                    klaseis_oxhmatwn:{type1:klaseis_oxhmatwn[0],type2:klaseis_oxhmatwn[1],type3:klaseis_oxhmatwn[2],type4:klaseis_oxhmatwn[3]},
                                    carousel11:[cars[0],cars[1],cars[2]],
                                    carousel12:[cars[3],cars[4],cars[5]],
                                    carousel13:[cars[6],cars[7],cars[8]],  
                                    carousel21:[cars[9],cars[10],cars[11]],
                                    carousel22:[cars[12],cars[13],cars[14]],
                                    carousel23:[cars[15],cars[16],cars[17]],
                                    carousel31:[cars[18],cars[19],cars[20]],
                                    carousel32:[cars[21],cars[22],cars[23]],
                                    carousel33:[cars[24],cars[25],cars[26]],
                                    carousel41:[cars[27],cars[28],cars[29]],
                                    carousel42:[cars[30],cars[31],cars[32]],
                                    carousel43:[cars[33],cars[34],cars[35]],
                                    stathmoi:stathmoi,
                                    paketa:paketa,
                                    yphresies:yphresies
                                }
                            });
                        }
                    }
                }) 
            }
        }
    })
   

    
});

app.post("/",(req,res)=>{
    reservation=[]
    username=req.body.username
    password=req.body.password
    if(req.body.username){
        db.all("SELECT * FROM EGGEGRAMMENOS",function(err, rows,message) {
            if (err) {
                console.log(err)
            }
            else{
                let exists=0;
                rows.forEach(function (row) {
                    if(row.username==username & row.password==password){
                        exists=1;
                    }
                })
                if(exists==1){
                    res.redirect("/SignedIn/"+username)
                }
                else{
                    let cars=[]
                    let klaseis_oxhmatwn=[]
                    db.all("SELECT * FROM KLASH_OXHMATOS LIMIT 4",function(err,rows){
                        if(err){throw err}
                        else{
                            rows.forEach(function(row){
                                klaseis_oxhmatwn.push(row.typos_oxhmatos)
                            })
                            for(let i=0;i<klaseis_oxhmatwn.length;i++){
                                db.all("SELECT * FROM OXHMA, KLASH_OXHMATOS WHERE KLASH_OXHMATOS.typos_oxhmatos='"+klaseis_oxhmatwn[i]+"' AND OXHMA.typos_oxhmatos=KLASH_OXHMATOS.typos_oxhmatos LIMIT 12;" , function(err, rows){
                                    if(err) {
                                        return console.log(err.message); 
                                    }
                                    else{
                                        rows.forEach(function (row) {
                                            cars.push({img:row.photo, model:row.modelo,carclass:row.typos_oxhmatos,price:row.timh})
                                        })
                                        if (i==3){
                                            let stathmoi=[]
                                            let paketa=[];
                                            let yphresies=[];
                                            db.all("SELECT * FROM STATHMOS",function(err,rows){
                                                rows.forEach(function(row){
                                                    stathmoi.push({perioxh:row.perioxh})
                                                })
                                            })
                                            db.all("SELECT * FROM PAKETO_KALYPSHS;" , function(err, rows){
                                                if(err) {
                                                    return console.log(err.message); 
                                                }
                                                else{
                                                    rows.forEach(function (row) {
                                                        paketa.push({title:row.titlos})
                                                    })
                                                    
                                                }
                                            })
                                            db.all("SELECT * FROM YPHRESIES;" , function(err, rows){
                                                if(err) {
                                                    return console.log(err.message); 
                                                }
                                                else{
                                                    rows.forEach(function (row) {
                                                        yphresies.push({title:row.titlos})
                                                    })
                                                    
                                                }
                                            })
                                            
                                            res.render('Homepage', {
                                                title:"Αρχική ",
                                                style: "/css/style.css",
                                                script: "/scripts/script.js",
                                                post:{
                                                    klaseis_oxhmatwn:{type1:klaseis_oxhmatwn[0],type2:klaseis_oxhmatwn[1],type3:klaseis_oxhmatwn[2],type4:klaseis_oxhmatwn[3]},
                                                    carousel11:[cars[0],cars[1],cars[2]],
                                                    carousel12:[cars[3],cars[4],cars[5]],
                                                    carousel13:[cars[6],cars[7],cars[8]],  
                                                    carousel21:[cars[9],cars[10],cars[11]],
                                                    carousel22:[cars[12],cars[13],cars[14]],
                                                    carousel23:[cars[15],cars[16],cars[17]],
                                                    carousel31:[cars[18],cars[19],cars[20]],
                                                    carousel32:[cars[21],cars[22],cars[23]],
                                                    carousel33:[cars[24],cars[25],cars[26]],
                                                    carousel41:[cars[27],cars[28],cars[29]],
                                                    carousel42:[cars[30],cars[31],cars[32]],
                                                    carousel43:[cars[33],cars[34],cars[35]],
                                                    stathmoi:stathmoi,
                                                    paketa:paketa,
                                                    yphresies:yphresies,
                                                    message:"Το όνομα χρήστη ή ο κωδικός είναι λάθος."
                                                }
                                            });
                                        }
                                    }
                                }) 
                            }
                        }
                    })
                }
            }
        })
    }
    else if(req.body.stathmos_par){
        res.render('find_car', {
            title:"Βρείτε Αυτοκίνητο ",
            style: "/css/find_car.css",
            script: "/scripts/find_car.js",
            post:{
                stathmos_par:req.body.stathmos_par,
                stathmos_ep:req.body.stathmos_ep,
                date_paralavis:req.body.date_paralavis,
                date_epistrofis:req.body.date_epistrofis
            }
        });
    }
    
})

app.post('/findcar', (req, res)=>{
    let stathmos_par=req.body["stathmos_par"]
    let stathmos_ep=req.body["stathmos_ep"]
    let d1=req.body["date_paralavis"]
    let d2=req.body["date_epistrofis"]
    let rended_cars=[]
    let all_cars_in_klash=[]
    let diathesimes_klaseis=[]
    let diathesima_cars=[]
    reservation.step1={stathmos_par:stathmos_par,stathmos_ep:stathmos_ep,date1:d1,date2:d2}
    //Αναζήτηση αριθμού κατειλημμένων οχημάτων κατηγοριοποιημένα βάσει της κλάσης οχήματος για τη χρονική περίοδο: ημερομηνία παραλαβής-ημερομηνία επιτροφής.
    db.all("SELECT KLASH_OXHMATOS.typos_oxhmatos,COUNT(*) as count FROM KRATHSH,AFORA,KLASH_OXHMATOS WHERE KRATHSH.topothesia=? AND ((KRATHSH.im_paralavhs<=? AND KRATHSH.im_epistrofhs>=?) OR (KRATHSH.im_paralavhs>=? AND KRATHSH.im_epistrofhs<=? )OR (KRATHSH.im_paralavhs<=? AND KRATHSH.im_epistrofhs>=?)) AND KRATHSH.ar_krathshs=AFORA.ar_krathshs AND AFORA.typos_oxhmatos=KLASH_OXHMATOS.typos_oxhmatos GROUP BY KLASH_OXHMATOS.typos_oxhmatos",[stathmos_par,d1,d2,d1,d2,d2,d2],function(err, rows){
        if (err){
            console.log(err)
        }
        else{
            rows.forEach( function(row){
                rended_cars.push({typos_oxhmatos:row.typos_oxhmatos,count:row.count})
            })
            //Αναζήτηση όλων των οχημάτων της βάσης δεδομένων κατηγοριοποιημένα βάσει της κλάσης οχήματος .
            db.all("SELECT KLASH_OXHMATOS.typos_oxhmatos,COUNT(*) as count FROM OXHMA,KLASH_OXHMATOS,STATHMOS,DIATITHETAI WHERE STATHMOS.perioxh=? AND STATHMOS.kod_stathmou=DIATITHETAI.kod_stathmou AND DIATITHETAI.ar_pinakidas=OXHMA.ar_pinakidas AND OXHMA.typos_oxhmatos=KLASH_OXHMATOS.typos_oxhmatos GROUP BY KLASH_OXHMATOS.typos_oxhmatos",[stathmos_par],function(err,rows){
                if (err){
                    console.log(err)
                }
                else{
                    rows.forEach( function(row){
                        all_cars_in_klash.push({typos_oxhmatos:row.typos_oxhmatos,count:row.count})
                    })
                    for(let i=0;i<rended_cars.length;i++){
                        for(let j=0;j<all_cars_in_klash.length;j++){
                            if(rended_cars[i].typos_oxhmatos==all_cars_in_klash[j].typos_oxhmatos & rended_cars[i].count<all_cars_in_klash[j].count){
                                diathesimes_klaseis.push({typos_oxhmatos:rended_cars[i].typos_oxhmatos,count:all_cars_in_klash.count-rended_cars.count})
                            }
                        }
                    }
                    for(let i=rended_cars.length;i<all_cars_in_klash.length;i++){
                        for(let j=0;j<all_cars_in_klash.length;j++){
                            var objFound1 = diathesimes_klaseis.find(obj => obj.typos_oxhmatos === all_cars_in_klash[j].typos_oxhmatos);
                            var objFound2 = rended_cars.find(obj => obj === all_cars_in_klash[j]);
                            if(objFound1==undefined & objFound2==undefined){
                                diathesimes_klaseis.push({typos_oxhmatos:all_cars_in_klash[j].typos_oxhmatos,count:all_cars_in_klash[j].count})
                            }
                        }
                    } 
                    if (diathesimes_klaseis!=[]){
                        for(let i=0;i<diathesimes_klaseis.length;i++){
                            db.all("SELECT KLASH_OXHMATOS.typos_oxhmatos, KLASH_OXHMATOS.photo, OXHMA.modelo, KLASH_OXHMATOS.timh FROM OXHMA,KLASH_OXHMATOS WHERE KLASH_OXHMATOS.typos_oxhmatos=? AND KLASH_OXHMATOS.typos_oxhmatos=OXHMA.typos_oxhmatos LIMIT ?",[diathesimes_klaseis[i].typos_oxhmatos,parseInt(diathesimes_klaseis[i].count)],function(err, rows){
                                if (err){
                                    throw err;
                                }
                                else{
                                    rows.forEach(function(row){
                                        diathesima_cars.push(row)
                                    })
                                   
                                } 
                            })
                        }
                        res.render('find_car', {
                            title:"Βρείτε Αυτοκίνητο ",
                            style: "/css/find_car.css",
                            script: "/scripts/find_car.js",
                            post:{
                                step1:reservation.step1,
                                diathesimes_klaseis:diathesimes_klaseis,
                                diathesima_cars:diathesima_cars 
                            }
                        })
                    }
                }
            })
        }
    })
})

app.get('/paketa', (req, res)=>{
    let paketa=[]
    let treia_paketa=[]
    db.all("SELECT * FROM PAKETO_KALYPSHS;" , function(err, rows){
        if(err) {
            return console.log(err.message); 
        }
        else{
            rows.forEach(function (row) {
                paketa.push({title:row.titlos,perigrafh:row.perigrafh,price:row.kostos})
                if (paketa.length==3){
                    treia_paketa.push({triplet:paketa})
                    paketa=[]
                }
                
            })
            treia_paketa.push({triplet:paketa})
            res.render('paketa', {
                title:"Πακέτα Κάλυψης",
                style: "/css/paketa.css",
                script: "/scripts/paketa.js",
                post:{paketa:treia_paketa}
            });
            
        }
    })
    
});

app.get('/yphresies', (req, res)=>{
    let yphresies=[]
    let treis_yphresies=[]
    db.all("SELECT * FROM YPHRESIES;" , function(err, rows){
        if(err) {
            return console.log(err.message); 
        }
        else{
            rows.forEach(function (row) {
                yphresies.push({title:row.titlos,perigrafh:row.perigrafh,price:row.kostos})
                if (yphresies.length==3){
                    treis_yphresies.push({triplet:yphresies})
                    yphresies=[]
                }
                
            })
            treis_yphresies.push({triplet:yphresies})
            res.render('yphresies', {
                title:"Υπηρεσίες Ενοικίασης",
                style: "/css/yphresies.css",
                script: "/scripts/yphresies.js",
                post:{yphresies:treis_yphresies}
                
            });
            
        }
    })
});

app.get('/asfaleia', (req, res)=>{
    res.render('asfaleia', {
        title:"Ασφάλεια Αυτοκινήτων",
        style: "/css/asfaleia.css",
        script: "/scripts/asfaleia.js",
        
    });
});

app.get("/car",(req,res)=>{
    res.render('car', {
        title:"Βρείτε Αυτοκίνητο ",
        style: "/css/car.css",
        script: "/scripts/car.js",
        post:{
            step2:{carclass:req.query["carclass"],model:req.query["model"],img:req.query["img"],price:req.query["price"]},
            message:"Δεν βρέθηκε αυτός ο χρήστης."
        }
    })
})

app.post('/car', (req, res)=>{
    let queryString=""
    let username=""
    let password=""
    if(req.body.username1){
        username=req.body.username1
        password=req.body.password1
        db.all("SELECT * FROM EGGEGRAMMENOS",function(err, rows) {
            if (err) {
                console.log(err)
            }
            else{
                let exists=0;
                rows.forEach(function (row) {
                    if(row.username==username & row.password==password){
                        exists=1;
                    }
                })
                if(exists==1){
                    let queryString="?carclass="+req.query["carclass"]+"&model="+req.query["model"]+"&img="+req.query["img"]+"&price="+req.query["price"]
                    res.redirect("/SignedIn/"+username+"/findpacket"+queryString)
                }
                else{
                    let queryString="?carclass="+req.query["carclass"]+"&model="+req.query["model"]+"&img="+req.query["img"]+"&price="+req.query["price"]
                    res.redirect("/car"+queryString)
                    
                }
            }
        })
    }
    if(req.body.username2){
        username=req.body.username2
        password=req.body.password2
        console.log(req.body)
        db.all("SELECT * FROM EGGEGRAMMENOS",function(err, rows) {
            if (err) {
                console.log(err)
            }
            else{
                let exists=0;
                rows.forEach(function (row) {
                    if(row.username==username & row.password==password){
                        exists=1;
                    }
                })
                if(exists==0){
                    db.run('INSERT INTO EGGEGRAMMENOS(username, password, firstname,lastname,adt,ar_diplomatos,thl,email) VALUES(?,?,?,?,?,?,?,?)', [username,password,req.body.firstname,req.body.lastname,req.body.adt,req.body.ar_diplomatos,req.body.phone,req.body.email], (err) => {
                        if(err) {
                            return console.log(err.message); 
                        }
                        else{
                            db.run('INSERT INTO DIEUTHINSH(username,TK,poli,odos,arithmos) VALUES(?,?,?,?,?)', [username,req.body.tk,req.body.poli,req.body.odos,req.body.arithmos], (err) => {
                                if(err) {
                                    return console.log(err.message); 
                                }
                                else{
                                    console.log('Row was added to the table');
                                    let queryString="?carclass="+req.query["carclass"]+"&model="+req.query["model"]+"&img="+req.query["img"]+"&price="+req.query["price"]
                                    res.redirect("/SignedIn/"+username+"/findpacket"+queryString)
                                }
                            })
                        }
                    })
                }
                else{
                    res.render('car', {
                        title:"Βρείτε Αυτοκίνητο ",
                        style: "/css/car.css",
                        script: "/scripts/car.js",
                        post:{
                            step2:{carclass:req.query["carclass"],model:req.query["model"],img:req.query["img"],price:req.query["price"]},
                            message:"Υπάρχει χρήστης με αυτό το username."
                        }
                    })

                }
            }
        })
    }
    if(req.query.stathmos_par){
        reservation.step1={stathmos_par:req.query["stathmos_par"],stathmos_ep:req.query["stathmos_ep"],date1:req.query["date1"],date2:req.query["date2"]}
        reservation.step2={carclass:req.query["carclass"],model:req.query["model"],img:req.query["img"],price:req.query["price"]} 
        res.render('car', {
            title:"Βρείτε Αυτοκίνητο ",
            style: "/css/car.css",
            script: "/scripts/car.js",
            post:{
                step1:reservation.step1,
                step2:reservation.step2,
            }
        })
    }
    else{
        reservation.step2={carclass:req.query["carclass"],model:req.query["model"],img:req.query["img"],price:req.query["price"]} 
        queryString="?carclass="+req.query["carclass"]+"&model="+req.query["model"]+"&img="+req.query["img"]+"&price="+req.query["price"]
        res.render('car', {
            title:"Βρείτε Αυτοκίνητο ",
            style: "/css/car.css",
            script: "/scripts/car.js",
            post:{
                step1:reservation.step1,
                step2:reservation.step2,
            }
        })
    }
    
})

app.post("/AccountRecovery",(req,res)=>{
    console.log(req.body.Email)
    username=req.body.username
    firstname=req.body.firstname
    lastname=req.body.lastname
    adt=req.body.adt
    ar_diplomatos=req.body.ar_diplomatos
    thl=req.body.phone
    email=req.body.Email
    let message="Δεν βρέθηκε χρήστης με αυτά τα στοιχεία"
    db.all("SELECT password FROM EGGEGRAMMENOS WHERE username=? AND firstname=? AND lastname=? AND adt=? AND ar_diplomatos=? AND email=? AND thl=?",[username,firstname,lastname,adt,ar_diplomatos,email,thl],function(err,rows){
        if(err){throw err}
        else{
            rows.forEach(function(row){
                message="Ο κωδικός σου είναι: "+row.password
            })
            res.render('AccountRecovery', {
                title:"Ανάκτηση Λογαριασμού ",
                style: "/css/AccountRecovery.css",
                script: "/scripts/AccountRecovery.js",
                post:{message:message}
            }) 
        }
    })

})

app.get("/AccountRecovery",(req,res)=>{
    console.log(req.body)
    res.render('AccountRecovery', {
        title:"Ανάκτηση Λογαριασμού ",
        style: "/css/accountRecovery.css",
        script: "/scripts/accountRecovery.js",
        
    })
})

app.get("/register",(req,res)=>{
    res.render('register/register', {
        title:"Εγγραφή",
        style: "/Register/css/style.css",
        script: "/Register/scripts/script.js",
        
    })
})

app.post("/register",(req,res)=>{
    console.log(req.body)
    let username=req.body.username;
    let password=req.body.password;
    let firstname=req.body.firstname;
    let lastname=req.body.lastname;
    let adt=req.body.adt;
    let ar_diplomatos=req.body.ar_diplomatos;
    let phone=req.body.phone;
    let email=req.body.email;
    let poli=req.body.poli;
    let odos=req.body.odos;
    let arithmos=req.body.arithmos;
    let tk=req.body.tk

    //ΕΛΕΓΧΟΣ ΓΙΑ ΤΗΝ ΜΟΝΑΔΙΚΟΤΗΤΑ ΤΟΥ username

    db.all("SELECT username FROM EGGEGRAMMENOS",function(err,rows){
        if(err){throw err}
        else{
            let exists=0
            rows.forEach(function(row){
                if(row.username==username){
                    exists=1
                }
            })
            if(exists!=1){
                db.run('INSERT INTO EGGEGRAMMENOS(username, password, firstname,lastname,adt,ar_diplomatos,thl,email) VALUES(?,?,?,?,?,?,?,?)', [username,password,firstname,lastname,adt,ar_diplomatos,phone,email], (err) => {
                    if(err) {
                        return console.log(err.message); 
                    }
                    else{
                        db.run('INSERT INTO DIEUTHINSH(username,TK,poli,odos,arithmos) VALUES(?,?,?,?,?)', [username,tk,poli,odos,arithmos], (err) => {
                            if(err) {
                                return console.log(err.message); 
                            }
                            else{
                                console.log('Row was added to the table');
                                res.redirect("/")
                            }
                        })
                    }
                })
            }
            else{
                res.render('register/register', {
                    title:"Εγγραφή",
                    style: "/Register/css/style.css",
                    script: "/Register/scripts/script.js",
                    message:"Υπάρχει χρήστης με αυτά τα στοιχεία."
                })
            }
        }
    })
        
})

app.get('/SignedIn/:username', (req,res)=>{
    let username=req.params["username"]    
    let cars=[]
    let klaseis_oxhmatwn=[]
    reservation={step1:[],step2:[],step3:[],step4:[],step5:[]}
    db.all("SELECT * FROM KLASH_OXHMATOS LIMIT 4",function(err,rows){
        if(err){throw err}
        else{
            rows.forEach(function(row){
                klaseis_oxhmatwn.push(row.typos_oxhmatos)
            })
            console.log(klaseis_oxhmatwn)
            for(let i=0;i<klaseis_oxhmatwn.length;i++){
                db.all("SELECT * FROM OXHMA, KLASH_OXHMATOS WHERE KLASH_OXHMATOS.typos_oxhmatos='"+klaseis_oxhmatwn[i]+"' AND OXHMA.typos_oxhmatos=KLASH_OXHMATOS.typos_oxhmatos LIMIT 12;" , function(err, rows){
                    if(err) {
                        return console.log(err.message); 
                    }
                    else{
                        rows.forEach(function (row) {
                            cars.push({img:row.photo,carclass:row.typos_oxhmatos, model:row.modelo,price:row.timh})
                        })
                        if (i==3){
                            let paketa=[];
                            let yphresies=[];
                            db.all("SELECT * FROM PAKETO_KALYPSHS;" , function(err, rows){
                                if(err) {
                                    return console.log(err.message); 
                                }
                                else{
                                    rows.forEach(function (row) {
                                        paketa.push({title:row.titlos})
                                    })
                                    
                                }
                            })
                            db.all("SELECT * FROM YPHRESIES;" , function(err, rows){
                                if(err) {
                                    return console.log(err.message); 
                                }
                                else{
                                    rows.forEach(function (row) {
                                        yphresies.push({title:row.titlos})
                                    })
                                    
                                }
                            })
                            res.render('SignedIn/User_Homepage', {
                                title:"Αρχική Χρήστη",
                                style: "/SignedIn/css/User_Homepage.css",
                                script: "/SignedIn/scripts/User_Homepage.js",
                                post:{
                                    username:username,
                                    klaseis_oxhmatwn:{type1:klaseis_oxhmatwn[0],type2:klaseis_oxhmatwn[1],type3:klaseis_oxhmatwn[2],type4:klaseis_oxhmatwn[3]},
                                    carousel11:[cars[0],cars[1],cars[2]],
                                    carousel12:[cars[3],cars[4],cars[5]],
                                    carousel13:[cars[6],cars[7],cars[8]],  
                                    carousel21:[cars[9],cars[10],cars[11]],
                                    carousel22:[cars[12],cars[13],cars[14]],
                                    carousel23:[cars[15],cars[16],cars[17]],
                                    carousel31:[cars[18],cars[19],cars[20]],
                                    carousel32:[cars[21],cars[22],cars[23]],
                                    carousel33:[cars[24],cars[25],cars[26]],
                                    carousel41:[cars[27],cars[28],cars[29]],
                                    carousel42:[cars[30],cars[31],cars[32]],
                                    carousel43:[cars[33],cars[34],cars[35]],
                                    paketa:paketa,
                                    yphresies:yphresies
                                }
                            })
                        }
                    }
                }) 
            }
        }
    })
})
        
app.get('/SignedIn/:username/ProfilSettings', (req, res)=>{
    username=req.params["username"]
    let user_data=[]
    new Promise((resolve, reject) => {
        db.all("SELECT * FROM EGGEGRAMMENOS,DIEUTHINSH WHERE EGGEGRAMMENOS.username=? AND DIEUTHINSH.username=EGGEGRAMMENOS.username LIMIT 1" ,[username], function(err,rows) {
            if(err) {
                return console.log(err.message); 
            }
            else{
                rows.forEach(function (row) {
                    user_data.push(row)
                    
                })
                resolve()
            }
        })
    })
    .then(() => {
        user_data=user_data[0]
        console.log(user_data)
        res.render('SignedIn/Profil_Settings', {
            title:"Ρυθμίσεις Προφίλ ",
            style: "/SignedIn/css/Profil_Settings.css",
            script: "/SignedIn/scripts/Profil_Settings.js",
            post:user_data
        })
    })
});

app.post('/SignedIn/:username/ProfilSettings', (req, res)=>{
    console.log("AAAAAA",req.body)
    new Promise((resolve, reject) => {
        if(req.body.password){
            db.all("UPDATE EGGEGRAMMENOS SET password=? WHERE username=?",[req.body.password,username],function(err,rows){
                console.log(rows)
            })
            resolve()
        }
        else if(req.body.fname){
            db.all("UPDATE EGGEGRAMMENOS SET firstname=? WHERE username=?",[req.body.fname,username],function(err,rows){
                console.log(rows)
            })
            resolve()
        }
        else if(req.body.lname){
            db.all("UPDATE EGGEGRAMMENOS SET lastname=? WHERE username=?",[req.body.lname,username],function(err,rows){
                console.log(rows)
            })
            resolve()
        }
        else if(req.body.adt){
            db.all("UPDATE EGGEGRAMMENOS SET adt=? WHERE adt=?",[req.body.adt,username],function(err,rows){
                console.log(rows)
            })
            resolve()
        }
        else if(req.body.ar_diplomatos){
            db.all("UPDATE EGGEGRAMMENOS SET ar_diplomatos=? WHERE username=?",[req.body.ar_diplomatos,username],function(err,rows){
                console.log(rows)
            })
            resolve()
        }
        else if(req.body.phone){
            db.all("UPDATE EGGEGRAMMENOS SET thl=? WHERE username=?",[req.body.phone,username],function(err,rows){
                console.log(rows)
            })
            resolve()
        }
        else if(req.body.poli ){
            db.all("UPDATE DIEUTHINSH SET TK=?, poli=? , odos=? , arithmos=? WHERE username=?",[req.body.tk,req.body.poli,req.body.odos,req.body.arithmos,username],function(err,rows){
                console.log(rows)
            })
            resolve()
        }
    })
    .then(()=>{

        res.redirect("/SignedIn/"+req.params["username"]+"/ProfilSettings")

    })
    

})

app.get('/SignedIn/:username/ReservationHistory', (req, res)=>{
    username=req.params["username"]
    Reservation_History=[]
    Yphresies=[]
    Paketa=[]
    //Για κάθε κράτηση
    new Promise((resolve, reject) => {
        new Promise((resolve, reject) => {
            db.all("SELECT DISTINCT PRAGMATOPOIEI.ar_krathshs  FROM EGGEGRAMMENOS,PRAGMATOPOIEI,KRATHSH WHERE EGGEGRAMMENOS.username=? AND EGGEGRAMMENOS.username=PRAGMATOPOIEI.username AND KRATHSH.ar_krathshs=PRAGMATOPOIEI.ar_krathshs ORDER BY KRATHSH.ar_krathshs",[username],function(err,rows1){
                if(rows1!=[]){
                    rows1.forEach(function(row1){
                        let yphresies=[]
                        let paketa=[]
                        let ar_krathshs=row1.ar_krathshs
                        //Υπηρεσιες κάθε κράτησης
                        db.all("SELECT DISTINCT * FROM EGGEGRAMMENOS,PRAGMATOPOIEI,KRATHSH,EPILEGEI,YPHRESIES WHERE EGGEGRAMMENOS.username=?  AND PRAGMATOPOIEI.username=EGGEGRAMMENOS.username AND KRATHSH.ar_krathshs=? AND KRATHSH.ar_krathshs=PRAGMATOPOIEI.ar_krathshs  AND EPILEGEI.ar_krathshs=KRATHSH.ar_krathshs AND YPHRESIES.titlos=EPILEGEI.titlos_yphresias ORDER BY KRATHSH.ar_krathshs",[username,ar_krathshs],function(err,rows2){
                            rows2.forEach(function(row2){
                                yphresies.push({titlos:row2.titlos,perigrafh:row2.perigrafh,kostos:row2.kostos})
                            })
                        })
                        db.all("SELECT DISTINCT * FROM EGGEGRAMMENOS,PRAGMATOPOIEI,KRATHSH,KALYPTETAI,PAKETO_KALYPSHS WHERE EGGEGRAMMENOS.username=?  AND PRAGMATOPOIEI.username=EGGEGRAMMENOS.username AND KRATHSH.ar_krathshs=? AND KRATHSH.ar_krathshs=PRAGMATOPOIEI.ar_krathshs  AND KALYPTETAI.ar_krathshs=KRATHSH.ar_krathshs AND PAKETO_KALYPSHS.titlos=KALYPTETAI.titlos_paketou ORDER BY KRATHSH.ar_krathshs",[username,ar_krathshs],function(err,rows3){
                            rows3.forEach(function(row3){
                                paketa.push({titlos:row3.titlos,perigrafh:row3.perigrafh,kostos:row3.kostos})
                            })
                        })
                        Yphresies.push({ar_krathshs:ar_krathshs,yphresies:yphresies})
                        Paketa.push({ar_krathshs:ar_krathshs,paketa:paketa})
                    })

                }
                resolve()
            })
        })
        .then(() => {
            db.all("SELECT DISTINCT PRAGMATOPOIEI.ar_krathshs FROM EGGEGRAMMENOS,PRAGMATOPOIEI,KRATHSH WHERE EGGEGRAMMENOS.username=? AND EGGEGRAMMENOS.username=PRAGMATOPOIEI.username AND KRATHSH.ar_krathshs=PRAGMATOPOIEI.ar_krathshs ORDER BY KRATHSH.ar_krathshs",[username],function(err,rows1){
                if(err){throw err}
                else{
                    if(rows1!=[]){
                        let i=0
                        rows1.forEach(function(row1){
                            let ar_krathshs=row1.ar_krathshs
                            //Ολα τα στοιχεια της κράτησης
                            db.each("SELECT DISTINCT KRATHSH.ar_krathshs, KRATHSH.im_paralavhs,KRATHSH.im_epistrofhs,KRATHSH.topothesia,KRATHSH.topothesia_ep,KLASH_OXHMATOS.typos_oxhmatos,KLASH_OXHMATOS.timh,KLASH_OXHMATOS.photo,OXHMA.modelo,PLHRWMH.tropos,PLHRWMH.poso FROM EGGEGRAMMENOS,PRAGMATOPOIEI,KRATHSH,AFORA,KLASH_OXHMATOS,PLHRWNEI,PLHRWMH,KALYPTETAI,PAKETO_KALYPSHS,OXHMA WHERE EGGEGRAMMENOS.username=? AND PLHRWNEI.username=EGGEGRAMMENOS.username AND PLHRWNEI.kod_plhr=? AND PLHRWNEI.kod_plhr=PLHRWMH.kod_plhr AND PRAGMATOPOIEI.username=EGGEGRAMMENOS.username AND KRATHSH.ar_krathshs=? AND KRATHSH.ar_krathshs=PRAGMATOPOIEI.ar_krathshs AND AFORA.ar_krathshs=KRATHSH.ar_krathshs AND KLASH_OXHMATOS.typos_oxhmatos=AFORA.typos_oxhmatos AND KLASH_OXHMATOS.typos_oxhmatos=OXHMA.typos_oxhmatos GROUP BY KRATHSH.ar_krathshs ORDER BY KRATHSH.ar_krathshs",[username,ar_krathshs,ar_krathshs],function(err,row3){
                                
                                for(let k=0;k<Yphresies.length;k++){
                                    if(Yphresies[k].ar_krathshs==ar_krathshs){
                                        yphresies=Yphresies[k].yphresies
                                        break
                                    }
                                }
                                for(let l=0;l<Paketa.length;l++){
                                    if(Paketa[l].ar_krathshs==ar_krathshs){
                                        paketa=Paketa[l].paketa
                                        break
                                    }
                                }
                                let kostos_yphresiwn=0
                                for(let j=0;j<yphresies.length;j++){
                                    kostos_yphresiwn=kostos_yphresiwn+yphresies[j].kostos
                                }
                                    if(parseInt(row3.tropos)==1){
                                        tropos="Μετρητά";
                                        let sum_without_yphresies=(new Date(row3.im_epistrofhs)-new Date(row3.im_paralavhs))/(1000*60*60*24)*parseInt(row3.timh)
                                        let sum=sum_without_yphresies+kostos_yphresiwn+paketa.kostos
                                        let payment={tropos:tropos,poso:row3.poso};
                                        let krathsh={ar_krathshs:ar_krathshs,im_paralavhs:row3.im_paralavhs,im_epistrofhs:row3.im_epistrofhs,topothesia_par:row3.topothesia,topothesia_ep:row3.topothesia_ep,typos_oxhmatos:row3.typos_oxhmatos,timh_oxhmatos:row3.timh,modelo:row3.modelo,photo:row3.photo,sum:row3.poso,payment:payment,paketa:paketa[0],yphresies:yphresies,payment:payment}
                                        Reservation_History.push(krathsh)                                          
                                    }
                                    else if(parseInt(row3.tropos)==2){
                                        tropos="Τιμολόγιο";
                                        let sum_without_yphresies=(new Date(row3.im_epistrofhs)-new Date(row3.im_paralavhs))/(1000*60*60*24)*parseInt(row3.timh)   
                                        let sum=sum_without_yphresies+kostos_yphresiwn+paketa.kostos
                                        let payment={tropos:tropos,poso:row3.poso};
                                        let krathsh={ar_krathshs:ar_krathshs,im_paralavhs:row3.im_paralavhs,im_epistrofhs:row3.im_epistrofhs,topothesia_par:row3.topothesia,topothesia_ep:row3.topothesia_ep,typos_oxhmatos:row3.typos_oxhmatos,timh_oxhmatos:row3.timh,modelo:row3.modelo,photo:row3.photo,sum:row3.poso,payment:payment,paketa:paketa[0],yphresies:yphresies,payment:payment}
                                        Reservation_History.push(krathsh)
                                        
                                    }
                                    else if(parseInt(row3.tropos)==3){
                                        let payment={}
                                        new Promise((resolve, reject) => {
                                            db.all("SELECT * FROM PLHRWNEI,PLHRWMH,STOIXEIA_KARTAS,EKSOFLEITAI WHERE PLHRWNEI.username=? AND EKSOFLEITAI.ar_krathshs=? AND EKSOFLEITAI.kod_plhr=PLHRWMH.kod_plhr AND PLHRWMH.kod_plhr=PLHRWNEI.kod_plhr AND STOIXEIA_KARTAS.kod_plhr=PLHRWMH.kod_plhr",[username,ar_krathshs],function(err,rows4){
                                                rows4.forEach(function(row4){
                                                    //payment={kod_plhr:row4.kod_plhr,poso:row4.poso,tropos:tropos,ar_kartas:row4.ar_kartas,on_katoxou:row4.on_katoxou,im_lhkshs:row4.im_lhkshs,cvv:row4.cvv,ar_krathshs:row4.ar_krathshs}
                                                    payment=row4
                                                    payment.tropos="Κάρτα"
                                                    
                                                })
                                                resolve()
                                            })
                                        })
                                        .then(()=>{
                                            let sum_without_yphresies=(new Date(row3.im_epistrofhs)-new Date(row3.im_paralavhs))/(1000*60*60*24)*parseInt(row3.timh)+row3.kostos    
                                            let sum=sum_without_yphresies+kostos_yphresiwn
                                            payment.poso=sum
                                            let krathsh={ar_krathshs:ar_krathshs,im_paralavhs:row3.im_paralavhs,im_epistrofhs:row3.im_epistrofhs,topothesia_par:row3.topothesia,topothesia_ep:row3.topothesia_ep,typos_oxhmatos:row3.typos_oxhmatos,timh_oxhmatos:row3.timh,modelo:row3.modelo,photo:row3.photo,sum:sum,payment:payment,paketa:paketa,yphresies:yphresies,payment:payment}
                                            Reservation_History.push(krathsh)
                                        })
                                    }
                                    i=i+1 
                            })
                        })
                    }
                }
            })
            resolve()
        })
    })
    .then(() => {
        res.render('SignedIn/Reservation_History', {
            title:"Επίβλεψη Κρατήσεων ",
            style: "/SignedIn/css/Reservation_History.css",
            script: "/SignedIn/scripts/Reservation_History.js",
            post:{
                username:username,
                Reservation_History:Reservation_History
            }
        });
    })
})

app.get("/SignedIn/:username/CancelReservation/:ar_krathshs",(req,res)=>{
    username=req.params["username"]
    ar_krathshs=req.params["ar_krathshs"]
    new Promise((resolve, reject) => {

        db.all("DELETE FROM PLHRWMH WHERE kod_plhr=? ",[ar_krathshs],function(err,rows){
            if(err){throw err}
            else{
                console.log("A")
            }
        })
        db.all("DELETE FROM PLHRWNEI WHERE kod_plhr=? ",[ar_krathshs],function(err,rows){
            if(err){throw err}
            else{
                console.log("A")
            }
        })
        db.all("DELETE FROM KALYPTETAI WHERE ar_krathshs=? ",[ar_krathshs],function(err,rows){
            if(err){throw err}
            else{
                console.log("A")
            }
        })
        db.all("DELETE FROM PRAGMATOPOIEI WHERE ar_krathshs=? ",[ar_krathshs],function(err,rows){
            if(err){throw err}
            else{
                console.log("A")
            }
        })
        db.all("DELETE FROM KRATHSH WHERE ar_krathshs=?",[ar_krathshs],function(err,rows){
            if(err){throw err}
            else{
                console.log("A")
            }
        })
        db.all("DELETE FROM AFORA WHERE ar_krathshs=? ",[ar_krathshs],function(err,rows){
            if(err){throw err}
            else{
                console.log("A")
            }
        })
        db.all("DELETE FROM EPILEGEI WHERE ar_krathshs=? ",[ar_krathshs],function(err,rows){
            if(err){throw err}
            else{
                console.log("A")
            }
        })
        db.all("DELETE FROM STOIXEIA_KARTAS WHERE kod_plhr=?",[ar_krathshs],function(err,rows){
            if(err){throw err}
            else{
                console.log("A")
            }
        }) 
        resolve()
    })
    .then(()=>{
        username=req.params["username"]
        Reservation_History=[]
        Yphresies=[]
        //Για κάθε κράτηση
        new Promise((resolve, reject) => {
            new Promise((resolve, reject) => {
                db.all("SELECT DISTINCT PRAGMATOPOIEI.ar_krathshs  FROM EGGEGRAMMENOS,PRAGMATOPOIEI,KRATHSH WHERE EGGEGRAMMENOS.username=? AND EGGEGRAMMENOS.username=PRAGMATOPOIEI.username AND KRATHSH.ar_krathshs=PRAGMATOPOIEI.ar_krathshs ORDER BY KRATHSH.ar_krathshs",[username],function(err,rows1){
                    if(rows1!=[]){
                        rows1.forEach(function(row1){
                            let yphresies=[]
                            let ar_krathshs=row1.ar_krathshs
                            //Υπηρεσιες κάθε κράτησης
                            db.all("SELECT DISTINCT * FROM EGGEGRAMMENOS,PRAGMATOPOIEI,KRATHSH,EPILEGEI,YPHRESIES WHERE EGGEGRAMMENOS.username=?  AND PRAGMATOPOIEI.username=EGGEGRAMMENOS.username AND KRATHSH.ar_krathshs=? AND KRATHSH.ar_krathshs=PRAGMATOPOIEI.ar_krathshs  AND EPILEGEI.ar_krathshs=KRATHSH.ar_krathshs AND YPHRESIES.titlos=EPILEGEI.titlos_yphresias ORDER BY KRATHSH.ar_krathshs",[username,ar_krathshs],function(err,rows2){
                                rows2.forEach(function(row2){
                                    yphresies.push({titlos:row2.titlos,perigrafh:row2.perigrafh,kostos:row2.kostos})
                                })
                            })
                            
                            Yphresies.push({ar_krathshs:ar_krathshs,yphresies:yphresies})
                        })
                    }
                    resolve()
                })
            })
            .then(() => {
                db.all("SELECT DISTINCT PRAGMATOPOIEI.ar_krathshs FROM EGGEGRAMMENOS,PRAGMATOPOIEI,KRATHSH WHERE EGGEGRAMMENOS.username=? AND EGGEGRAMMENOS.username=PRAGMATOPOIEI.username AND KRATHSH.ar_krathshs=PRAGMATOPOIEI.ar_krathshs ORDER BY KRATHSH.ar_krathshs",[username],function(err,rows1){
                    if(err){throw err}
                    else{
                        if(rows1!=[]){
                            let i=0
                            rows1.forEach(function(row1){
                                let ar_krathshs=row1.ar_krathshs
                                console.log(ar_krathshs)
                                for(let k=0;k<Yphresies.length;k++){
                                    if(Yphresies[k].ar_krathshs==ar_krathshs){
                                        yphresies=Yphresies[k].yphresies
                                        break
                                    }
                                }
                                let kostos_yphresiwn=0
                                for(let j=0;j<yphresies.length;j++){
                                    kostos_yphresiwn=kostos_yphresiwn+yphresies[j].kostos
                                }
                                //Ολα τα στοιχεια της κράτησης
                                db.each("SELECT DISTINCT KRATHSH.ar_krathshs, KRATHSH.im_paralavhs,KRATHSH.im_epistrofhs,KRATHSH.topothesia,KRATHSH.topothesia_ep,KLASH_OXHMATOS.typos_oxhmatos,KLASH_OXHMATOS.timh,KLASH_OXHMATOS.photo,PAKETO_KALYPSHS.titlos,PAKETO_KALYPSHS.perigrafh,PAKETO_KALYPSHS.kostos, OXHMA.modelo,PLHRWMH.tropos,PLHRWMH.poso FROM EGGEGRAMMENOS,PRAGMATOPOIEI,KRATHSH,AFORA,KLASH_OXHMATOS,PLHRWNEI,PLHRWMH,KALYPTETAI,PAKETO_KALYPSHS,OXHMA WHERE EGGEGRAMMENOS.username=? AND PLHRWNEI.username=EGGEGRAMMENOS.username AND PLHRWNEI.kod_plhr=? AND PLHRWNEI.kod_plhr=PLHRWMH.kod_plhr AND PRAGMATOPOIEI.username=EGGEGRAMMENOS.username AND KRATHSH.ar_krathshs=? AND KRATHSH.ar_krathshs=PRAGMATOPOIEI.ar_krathshs AND KALYPTETAI.ar_krathshs=KRATHSH.ar_krathshs AND PAKETO_KALYPSHS.titlos=KALYPTETAI.titlos_paketou AND AFORA.ar_krathshs=KRATHSH.ar_krathshs AND KLASH_OXHMATOS.typos_oxhmatos=AFORA.typos_oxhmatos AND KLASH_OXHMATOS.typos_oxhmatos=OXHMA.typos_oxhmatos GROUP BY KRATHSH.ar_krathshs ORDER BY KRATHSH.ar_krathshs",[username,ar_krathshs,ar_krathshs],function(err,row3){
                                    
                                    if(parseInt(row3.tropos)==1){
                                        tropos="Μετρητά";
                                        let sum_without_yphresies=(new Date(row3.im_epistrofhs)-new Date(row3.im_paralavhs))/(1000*60*60*24)*parseInt(row3.timh)+row3.kostos
                                        let sum=sum_without_yphresies+kostos_yphresiwn
                                        let payment={tropos:tropos,poso:sum};
                                        let krathsh={ar_krathshs:ar_krathshs,im_paralavhs:row3.im_paralavhs,im_epistrofhs:row3.im_epistrofhs,topothesia_par:row3.topothesia,topothesia_ep:row3.topothesia_ep,typos_oxhmatos:row3.typos_oxhmatos,timh_oxhmatos:row3.timh,modelo:row3.modelo,photo:row3.photo,sum:sum,payment:payment,titlos_paketoy:row3.titlos,kostos_paketoy:row3.kostos,yphresies:yphresies,payment:payment}
                                        Reservation_History.push(krathsh)                                          
                                    }
                                    else if(parseInt(row3.tropos)==2){
                                        tropos="Τιμολόγιο";
                                        let sum_without_yphresies=(new Date(row3.im_epistrofhs)-new Date(row3.im_paralavhs))/(1000*60*60*24)*parseInt(row3.timh)+row3.kostos    
                                        let sum=sum_without_yphresies+kostos_yphresiwn
                                        let payment={tropos:tropos,poso:sum};
                                        let krathsh={ar_krathshs:ar_krathshs,im_paralavhs:row3.im_paralavhs,im_epistrofhs:row3.im_epistrofhs,topothesia_par:row3.topothesia,topothesia_ep:row3.topothesia_ep,typos_oxhmatos:row3.typos_oxhmatos,timh_oxhmatos:row3.timh,modelo:row3.modelo,photo:row3.photo,sum:sum,payment:payment,titlos_paketoy:row3.titlos,kostos_paketoy:row3.kostos,yphresies:yphresies,payment:payment}
                                        Reservation_History.push(krathsh)
                                        
                                    }
                                    else if(parseInt(row3.tropos)==3){
                                        let payment={}
                                        new Promise((resolve, reject) => {
                                            db.all("SELECT * FROM PLHRWNEI,PLHRWMH,STOIXEIA_KARTAS,EKSOFLEITAI WHERE PLHRWNEI.username=? AND EKSOFLEITAI.ar_krathshs=? AND EKSOFLEITAI.kod_plhr=PLHRWMH.kod_plhr AND PLHRWMH.kod_plhr=PLHRWNEI.kod_plhr AND STOIXEIA_KARTAS.kod_plhr=PLHRWMH.kod_plhr",[username,ar_krathshs],function(err,rows4){
                                                rows4.forEach(function(row4){
                                                    //payment={kod_plhr:row4.kod_plhr,poso:row4.poso,tropos:tropos,ar_kartas:row4.ar_kartas,on_katoxou:row4.on_katoxou,im_lhkshs:row4.im_lhkshs,cvv:row4.cvv,ar_krathshs:row4.ar_krathshs}
                                                    payment=row4
                                                    payment.tropos="Κάρτα"
                                                    
                                                })
                                                resolve()
                                            })
                                        })
                                        .then(()=>{
                                            let sum_without_yphresies=(new Date(row3.im_epistrofhs)-new Date(row3.im_paralavhs))/(1000*60*60*24)*parseInt(row3.timh)+row3.kostos    
                                            let sum=sum_without_yphresies+kostos_yphresiwn
                                            payment.poso=sum
                                            let krathsh={ar_krathshs:ar_krathshs,im_paralavhs:row3.im_paralavhs,im_epistrofhs:row3.im_epistrofhs,topothesia_par:row3.topothesia,topothesia_ep:row3.topothesia_ep,typos_oxhmatos:row3.typos_oxhmatos,timh_oxhmatos:row3.timh,modelo:row3.modelo,photo:row3.photo,sum:sum,payment:payment,titlos_paketoy:row3.titlos,kostos_paketoy:row3.kostos,yphresies:yphresies,payment:payment}
                                            Reservation_History.push(krathsh)
                                        })
                                    }
                                    i=i+1 
                                })
                            })

                        }
                    }
                })
                    
                resolve()
                
                
            })
        })
        .then(() => {
            res.render('SignedIn/Reservation_History', {
                title:"Επίβλεψη Κρατήσεων ",
                style: "/SignedIn/css/Reservation_History.css",
                script: "/SignedIn/scripts/Reservation_History.js",
                post:{
                    username:username,
                    Reservation_History:Reservation_History,
                    message:"Η κράτησή σας διαγράφηκε"
                }
            });
            res.redirect("/SignedIn/"+username+"/ReservationHistory")
        })
    })
})

app.post('/SignedIn/:username/findcar', (req, res)=>{
    reservation.step1={}
    username=req.params["username"]
    let stathmos_par=req.body["stathmos_par"]
    let stathmos_ep=req.body["stathmos_ep"]
    let d1=req.body["date_paralavis"]
    let d2=req.body["date_epistrofis"]
    let rended_cars=[]
    let all_cars_in_klash=[]
    let diathesimes_klaseis=[]
    let diathesima_cars=[]
    reservation.step1={stathmos_par:stathmos_par,stathmos_ep:stathmos_ep,date1:d1,date2:d2}
    console.log(reservation.step1)
    //Αναζήτηση αριθμού κατειλημμένων οχημάτων κατηγοριοποιημένα βάσει της κλάσης οχήματος για τη χρονική περίοδο: ημερομηνία παραλαβής-ημερομηνία επιτροφής.
    db.all("SELECT KLASH_OXHMATOS.typos_oxhmatos,COUNT(*) as count FROM KRATHSH,AFORA,KLASH_OXHMATOS WHERE KRATHSH.topothesia=? AND ((KRATHSH.im_paralavhs<=? AND KRATHSH.im_epistrofhs>=?) OR (KRATHSH.im_paralavhs>=? AND KRATHSH.im_epistrofhs<=? )OR (KRATHSH.im_paralavhs<=? AND KRATHSH.im_epistrofhs>=?)) AND KRATHSH.ar_krathshs=AFORA.ar_krathshs AND AFORA.typos_oxhmatos=KLASH_OXHMATOS.typos_oxhmatos GROUP BY KLASH_OXHMATOS.typos_oxhmatos",[stathmos_par,d1,d2,d1,d2,d2,d2],function(err, rows){
        if (err){
            console.log(err)
        }
        else{
            rows.forEach( function(row){
                rended_cars.push({typos_oxhmatos:row.typos_oxhmatos,count:row.count})
            })
            //Αναζήτηση όλων των οχημάτων της βάσης δεδομένων κατηγοριοποιημένα βάσει της κλάσης οχήματος .
            db.all("SELECT KLASH_OXHMATOS.typos_oxhmatos,COUNT(*) as count FROM OXHMA,KLASH_OXHMATOS,STATHMOS,DIATITHETAI WHERE STATHMOS.perioxh=? AND STATHMOS.kod_stathmou=DIATITHETAI.kod_stathmou AND DIATITHETAI.ar_pinakidas=OXHMA.ar_pinakidas AND OXHMA.typos_oxhmatos=KLASH_OXHMATOS.typos_oxhmatos GROUP BY KLASH_OXHMATOS.typos_oxhmatos",[stathmos_par],function(err,rows){
                if (err){
                    console.log(err)
                }
                else{
                    rows.forEach( function(row){
                        all_cars_in_klash.push({typos_oxhmatos:row.typos_oxhmatos,count:row.count})
                    })
                    for(let i=0;i<rended_cars.length;i++){
                        for(let j=0;j<all_cars_in_klash.length;j++){
                            if(rended_cars[i].typos_oxhmatos==all_cars_in_klash[j].typos_oxhmatos & rended_cars[i].count<all_cars_in_klash[j].count){
                                diathesimes_klaseis.push({typos_oxhmatos:rended_cars[i].typos_oxhmatos,count:all_cars_in_klash.count-rended_cars.count})
                            }
                            
                        }
                    }
                    for(let i=rended_cars.length;i<all_cars_in_klash.length;i++){
                        for(let j=0;j<all_cars_in_klash.length;j++){
                            var objFound1 = diathesimes_klaseis.find(obj => obj.typos_oxhmatos === all_cars_in_klash[j].typos_oxhmatos);
                            var objFound2 = rended_cars.find(obj => obj === all_cars_in_klash[j]);
                            if(objFound1==undefined & objFound2==undefined){
                                diathesimes_klaseis.push({typos_oxhmatos:all_cars_in_klash[j].typos_oxhmatos,count:all_cars_in_klash[j].count})
                            }
                        }
                    } 
                    if (diathesimes_klaseis!=[]){
                        for(let i=0;i<diathesimes_klaseis.length;i++){
                            db.all("SELECT KLASH_OXHMATOS.typos_oxhmatos, KLASH_OXHMATOS.photo, OXHMA.modelo, KLASH_OXHMATOS.timh FROM OXHMA,KLASH_OXHMATOS WHERE KLASH_OXHMATOS.typos_oxhmatos=? AND KLASH_OXHMATOS.typos_oxhmatos=OXHMA.typos_oxhmatos LIMIT ?",[diathesimes_klaseis[i].typos_oxhmatos,parseInt(diathesimes_klaseis[i].count)],function(err, rows){
                                if (err){
                                    throw err;
                                }
                                else{
                                    rows.forEach(function(row){
                                        diathesima_cars.push(row)
                                    })
                                   
                                } 
                            })
                        }
                        res.render('SignedIn/find_car', {
                            title:"Βρείτε Αυτοκίνητο ",
                            style: "/SignedIn/css/find_car.css",
                            script: "/SignedIn/scripts/find_car.js",
                            post:{
                                username:username,
                                step1:{stathmos_par:stathmos_par,stathmos_ep:stathmos_ep,date1:d1,date2:d2},
                                diathesimes_klaseis:diathesimes_klaseis,
                                diathesima_cars:diathesima_cars 
                            }
                        })
                    }
                }
            })
        }
    })
});

app.all('/SignedIn/:username/findpacket', (req, res)=>{
    let paketa=[]
    let username=req.params["username"]
    reservation.step2=[]
    
    if(req.query.stathmos_par){
        reservation.step1={stathmos_par:req.query["stathmos_par"],stathmos_ep:req.query["stathmos_ep"],date1:req.query["date1"],date2:req.query["date2"]}
        reservation.step2={carclass:req.query["carclass"],model:req.query["model"],img:req.query["img"],price:req.query["price"]} 
        
    }
    else{
        reservation.step2=req.query
    }
    db.all("SELECT * FROM PAKETO_KALYPSHS ORDER BY kostos",function(err,rows){
        if(err) {
            return console.log(err); 
        }
        else{
            rows.forEach(function (row) {
                paketa.push(row)
            })
            res.render('SignedIn/find_packet', {
                title:"Βρείτε Πακέτο Κάλυψης ",
                style: "/SignedIn/css/find_packet.css",
                script: "/SignedIn/scripts/find_packet.js",
                post:{
                    username:username,
                    step1:reservation.step1,
                    step2:{carclass:req.query["carclass"],model:req.query["model"],img:req.query["img"],price:req.query["price"]},
                    paketa:paketa
                }
            });
        }
    })

});

app.post('/SignedIn/:username/findyphresies', (req, res)=>{
    reservation.step3=[]
    let yphresies=[]
    let username=req.params["username"]
    reservation.step3=req.query
    db.all("SELECT * FROM YPHRESIES",function(err,rows){
        if(err) {
            return console.log(err.message); 
        }
        else{
            rows.forEach(function (row) {
                yphresies.push(row)
            })
            res.render('SignedIn/find_yphresies', {
                title:"Βρείτε Υπηρεσίες ",
                style: "/SignedIn/css/find_yphresies.css",
                script: "/SignedIn/scripts/find_yphresies.js",
                post:{
                    username:username,
                    step1:reservation.step1,
                    step2:reservation.step2,
                    step3:{packet_title:req.query["packet_title"],packet_price:req.query["packet_price"]},
                    yphresies:yphresies
                    
                }
            });
        }
    })
});

app.post('/SignedIn/:username/payment', (req, res)=>{
    username=req.params["username"]
    reservation.step4=req.query
    db.all("SELECT * FROM EGGEGRAMMENOS,DIEUTHINSH WHERE EGGEGRAMMENOS.username=? AND EGGEGRAMMENOS.username=DIEUTHINSH.username LIMIT 1",[username],function(err,rows){
        if (err){
            throw err
        }
        else{
            let user_data=[]
            rows.forEach(function(row){
                user_data.push(row)
            })
            console.log(user_data)
            user_data=user_data[0]
            res.render('SignedIn/payment', {
                title:"Πληρωμή",
                style: "/SignedIn/css/payment.css",
                script: "/SignedIn/scripts/payment.js",
                post:{
                    username:username,
                    userdata:{firstname:user_data.firstname,lastname:user_data.lastname,thl:user_data.thl,email:user_data.email,full_address:user_data.poli+" "+user_data.odos+" "+user_data.arithmos+" "+user_data.TK},
                    step1:reservation.step1,
                    step2:reservation.step2,
                    step3:reservation.step3,
                    step4:reservation.step4
                }
            });
        }
    })
});

app.post('/SignedIn/:username/SubmitReservation', (req, res)=>{
    username=req.params["username"]
    console.log(req.body)
    let tropos=1
    if(req.body.paymentRadios=="option1"){tropos=1}
    if(req.body.paymentRadios=="option2"){tropos=2}
    if(req.body.paymentRadios=="option3"){tropos=3}
    reservation.step5={tropos:tropos,poso:reservation.step4.sum,card_num:req.body.card_num,name:req.body.name,exp:req.body.exp,cvv:req.body.cvv}
    db.all("SELECT MAX(ar_krathshs) as ar_krathshs FROM PRAGMATOPOIEI ",function(err, rows){
        let ar_krathshs=rows[0].ar_krathshs+1
        db.run('INSERT INTO PLHRWMH VALUES(?,?,?)', [ar_krathshs,reservation.step5.poso,reservation.step5.tropos], (err) => {
            if(err) {
                return console.log(err.message); 
            }
            else{
                console.log('plhrwmh was added to the table');
            }
        })
        db.run('INSERT INTO PLHRWNEI VALUES(?,?)', [username,ar_krathshs], (err) => {
            if(err) {
                return console.log(err.message); 
            }
            else{
                console.log('plhrwnei was added to the table');
            }
        })
        db.run('INSERT INTO KALYPTETAI VALUES(?,?)', [reservation.step3.packet_title,ar_krathshs], (err) => {
            if(err) {
                return console.log(err.message); 
            }
            else{
                console.log('kalyptetai was added to the table');
            }
        }) 
        db.run('INSERT INTO AFORA VALUES(?,?)', [ar_krathshs,reservation.step2.carclass], (err) => {
            if(err) {
                return console.log(err.message); 
            }
            else{
                console.log('afora was added to the table');
            }
        })
        db.run('INSERT INTO PRAGMATOPOIEI(username,ar_krathshs, im_krathshs) VALUES(?,?,?)', [username,ar_krathshs,new Date()], (err) => {
            if(err) {
                return console.log(err.message); 
            }
            else{
                console.log('pragmatopoiei was added to the table');
            }
        })
        db.run('INSERT INTO KRATHSH VALUES(?,?,?,?,?)', [ar_krathshs,reservation.step1.date1,reservation.step1.date2,reservation.step1.stathmos_par,reservation.step1.stathmos_ep], (err) => {
            if(err) {
                return console.log(err.message); 
            }
            else{
                console.log('krathsh was added to the table');
            }
        }) 
        
        for(let i=0;i<reservation.step4.num_yphresies;i++){
            let yphresies=reservation.step4
            console.log(yphresies["yphresia"+i])
            db.run('INSERT INTO EPILEGEI VALUES(?,?)', [ar_krathshs,yphresies["yphresia"+i]], (err) => {
                if(err) {
                    return console.log(err.message); 
                }
                else{
                    console.log('epilegei was added to the table');
                }
            }) 
        }
        if(req.body.paymentRadios=="option3"){
            db.run('INSERT INTO STOIXEIA_KARTAS VALUES(?,?,?,?,?)', [ar_krathshs,reservation.step5.card_num,reservation.step5.name,reservation.step5.exp,reservation.step5.cvv], (err) => {
                if(err) {
                    return console.log(err.message); 
                }
                else{
                    console.log('stoixeia kartas was added to the table');
                }
            })
            db.run('INSERT INTO EKSOFLEITAI VALUES(?,?)',[ar_krathshs,ar_krathshs], (err) => {
                if(err) {
                    return console.log(err.message); 
                }
                else{
                    console.log('stoixeia kartas was added to the table');
                }
            })
        }  
    })
    console.log(reservation)
    res.render('SignedIn/submit_reservation', {
        title:"Ευχαριστούμε για την Κράτηση.",
        style: "/SignedIn/css/Submit_Reservation.css",
        script: "/SignedIn/scripts/Submit_Reservation.js",
        post:{
            username:username
        }
    });
});

app.listen(3000, ()=>{
console.log("Server listening...")
})
