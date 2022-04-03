BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "YPHRESIES" (
	"titlos"	varchar,
	"perigrafh"	text,
	"kostos"	float
);
CREATE TABLE IF NOT EXISTS "PAKETO_KALYPSHS" (
	"titlos"	varchar,
	"perigrafh"	varchar,
	"kostos"	float
);
CREATE TABLE IF NOT EXISTS "EKPTWSH" (
	"kod_ekptwshs"	varchar,
	"pososto"	integer
);
CREATE TABLE IF NOT EXISTS "STATHMOS" (
	"kod_stathmou"	integer,
	"perioxh"	varchar,
	PRIMARY KEY("kod_stathmou" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "KLASH_OXHMATOS" (
	"typos_oxhmatos"	varchar,
	"timh"	float,
	"ar_thesewn"	integer,
	"photo"	varchar
);
CREATE TABLE IF NOT EXISTS "OXHMA" (
	"ar_pinakidas"	varchar,
	"typos_oxhmatos"	varchar,
	"modelo"	varchar,
	"xroma"	varchar,
	"kubismos"	integer,
	"eid_kafsimou"	varchar
);
CREATE TABLE IF NOT EXISTS "PLHRWMH" (
	"kod_plhr"	integer,
	"poso"	float,
	"tropos"	integer,
	PRIMARY KEY("kod_plhr" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "STOIXEIA_KARTAS" (
	"kod_plhr"	integer,
	"ar_kartas"	varchar,
	"on_katoxou"	varchar,
	"im_lhkshs"	varchar,
	PRIMARY KEY("kod_plhr" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "EGGEGRAMMENOS" (
	"username"	varchar,
	"password"	varchar,
	"firstname"	varchar,
	"lastname"	varchar,
	"adt"	varchar,
	"ar_diplomatos"	varchar,
	"thl"	varchar,
	"email"	varchar
);
CREATE TABLE IF NOT EXISTS "DIEUTHINSH" (
	"username"	varchar,
	"TK"	varchar,
	"poli"	varchar,
	"odos"	varchar,
	"arithmos"	integer
);
CREATE TABLE IF NOT EXISTS "KRATHSH" (
	"ar_krathshs"	integer,
	"im_paralavhs"	datetime,
	"im_epistrofhs"	datetime,
	"topothesia"	varchar,
	"topothesia_ep"	varchar,
	PRIMARY KEY("ar_krathshs" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "PRAGMATOPOIEI" (
	"username"	varchar,
	"ar_krathshs"	integer,
	"im_krathshs"	datetime
);
CREATE TABLE IF NOT EXISTS "KALYPTETAI" (
	"titlos_paketou"	varchar,
	"ar_krathshs"	integer
);
CREATE TABLE IF NOT EXISTS "EPILEGEI" (
	"ar_krathshs"	integer,
	"titlos_yphresias"	varchar
);
CREATE TABLE IF NOT EXISTS "PLHRWNEI" (
	"username"	varchar,
	"kod_plhr"	integer
);
CREATE TABLE IF NOT EXISTS "PERIEXEI" (
	"ar_krathshs"	integer,
	"kod_ekptwshs"	varchar
);
CREATE TABLE IF NOT EXISTS "EKSOFLEITAI" (
	"ar_krathshs"	integer,
	"kod_plhr"	integer
);
CREATE TABLE IF NOT EXISTS "AFORA" (
	"ar_krathshs"	integer,
	"typos_oxhmatos"	varchar
);
CREATE TABLE IF NOT EXISTS "DIATITHETAI" (
	"kod_stathmou"	integer,
	"ar_pinakidas"	varchar
);
CREATE TABLE IF NOT EXISTS "AFORA_SYGKEKRIMENA" (
	"ar_krathshs"	integer,
	"ar_pinakidas"	varchar,
	"im_pragm_paralavhs"	datetime,
	"im_pragm_epistrofhs"	datetime
);
INSERT INTO "YPHRESIES" VALUES ('Εκτεταμένη Οδική βοήθεια','Εκτεταμένη υποστήριξη για τουριστικούς προορισμούς, αξιοθέατα και άλλα',30.0),
 ('Πολυτελής Διακόσμηση','Πολυτελής διακόσμηση κατάλληλη για γάμους και κοινωνικά event',60.0),
 ('ΣΟΦΕΡ','Ιδιωτικός σοφέρ',50.0);
INSERT INTO "PAKETO_KALYPSHS" VALUES ('Ασφάλεια Ατυχήματος','Καλύπτει βασικές φθορές στο όχημα',30.0),
 ('Ασφάλεια φθοράς και κλοπής','Καλύπτει κάθε φθορά στο όχημα και κλοπή του οχήματος',50.0),
 ('Εκτεταμένη Ασφάλεια Ατυχήματος','Καλύπτει κάθε φθορά στο όχημα',40.0);
INSERT INTO "EKPTWSH" VALUES ('CARGOBR',25),
 ('FUTURE50',50),
 ('YOUDRIVE',5);
INSERT INTO "STATHMOS" VALUES (1,'ΠΑΤΡΑ'),
 (2,'ΑΙΓΙΟ'),
 (3,'ΑΘΗΝΑ');
INSERT INTO "KLASH_OXHMATOS" VALUES ('OFF ROAD',60.0,4,'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/wrangler_2.jpg?itok=FLgXQnOD'),
 ('SUV',60.0,4,'https://i0.wp.com/blog.spotawheel.gr/wp-content/uploads/2019/02/volvo.jpg?resize=1024%2C576&ssl=1'),
 ('ΜΕΣΑΙΑ',50.0,4,'https://www.carstore.com/-/media/carstore/best/medium-cars/medium-focus-carousel-small-720x405.ashx?mh=1440&la=en&h=405&w=720&mw=2560&hash=7C71AB889AF529C01870CD47EE3BED7D'),
 ('ΜΙΚΡΑ',30.0,4,'https://natalisblog.com/wp-content/uploads/2018/06/peugeot-108.jpg'),
 ('ΠΟΛΥΤΕΛΗ',80.0,4,'https://europeprestigecarrent.com/wp-content/uploads/2020/03/Portofino-768x432.jpg');
INSERT INTO "OXHMA" VALUES ('AR6456','ΠΟΛΥΤΕΛΗ','Porsche Cayenne','Ασημί',1000,'Αμόλυβδη'),
 ('GT6543','ΜΕΣΑΙΑ','Audi A4','Λευκό',1000,'Ντίζελ'),
 ('HT6798','SUV','BWM iX3','Γκρί',1000,'Αμόλυβδη'),
 ('RT8734','OFF ROAD','Toyota Tacoma','Ασημί',1000,'Αμόλυβδη'),
 ('TA7654','OFF ROAD','Jeep Cherokee','Ασημί',1000,'Αμόλυβδη'),
 ('TE6543','ΜΕΣΑΙΑ','Alpha Romeo Giulia','Λευκό',1000,'Αμόλυβδη'),
 ('ΒΤ5689','ΜΕΣΑΙΑ','Peugeot 407','Ασημί',1000,'Αμόλυβδη'),
 ('ΥΓ6754','ΜΙΚΡΑ','Mini Cooper','Ασημί',1000,'Αμόλυβδη');
INSERT INTO "PLHRWMH" VALUES (25,170.0,0),
 (26,190.0,0),
 (27,170.0,0),
 (28,190.0,0),
 (29,80.0,0),
 (30,110.0,0),
 (31,930.0,0),
 (32,640.0,0),
 (33,180.0,0),
 (34,90.0,1);
INSERT INTO "EGGEGRAMMENOS" VALUES ('dhmhtristr','jimtr123','ΔΗΜΗΤΡΗΣ','ΤΡΙΑΝΤΑΦΥΛΛΟΥ','ΓΤ543467','GT5678JF8H6','6987765645','dimtr@gmail.com'),
 ('elenigeorgiou','eleni123','ΕΛΕΝΗ','ΓΕΩΡΓΙΟΥ','ΕΠ675432','TR56GYT678J','6955678767','elenigeorgiou@freemail.com'),
 ('giorgoskyriakou','123456789','ΓΙΩΡΓΟΣ','ΚΥΡΙΑΚΟΥ','BP305654','98TG7654VU1','6955176759','giorgoskyriakou@gmail.com'),
 ('isminigergopoulou','ismini1999','ΙΣΜΗΝΗ','ΓΕΩΡΓΟΠΟΥΛΟΥ','ΚΤ567689','TR347H79J65','6978563423','ismini1999@gmail.com'),
 ('mariapapa','maria123','ΜΑΡΙΑ','ΠΑΠΑ','ΠΚ198765','TFR56HK8GBV','6923456789','mariapapa1999@gmail.com');
INSERT INTO "DIEUTHINSH" VALUES ('dhmhtristr','15432','Πάτρα','Λεμεσού',135),
 ('elenigeorgiou','14532','Αθήνα','Πειραιώς',255),
 ('giorgoskyriakou','12345','Αίγιο','Θεσσαλονίκης',111),
 ('isminigergopoulou','54321','Πάτρα','Θησέως',7),
 ('mariapapa','12344','Πάτρα','Αθηνών',4);
INSERT INTO "KRATHSH" VALUES (27,'2021-01-18 00:00:00','2021-01-21 00:00:00','ΠΑΤΡΑ','ΠΑΤΡΑ'),
 (28,'2021-01-01 00:00:00','2021-01-04 00:00:00','ΠΑΤΡΑ','ΠΑΤΡΑ'),
 (29,'2021-01-03 00:00:00','2021-01-07 00:00:00','ΑΙΓΙΟ','ΠΑΤΡΑ'),
 (30,'2021-01-01 00:00:00','2021-01-05 00:00:00','ΑΘΗΝΑ','ΑΘΗΝΑ'),
 (31,'2021-01-10 00:00:00','2021-01-24 00:00:00','ΠΑΤΡΑ','ΠΑΤΡΑ'),
 (32,'2021-01-10 00:00:00','2021-01-15 00:00:00','ΠΑΤΡΑ','ΠΑΤΡΑ'),
 (33,'2021-01-10 00:00:00','2021-01-12 00:00:00','ΑΙΓΙΟ','ΑΙΓΙΟ'),
 (34,'2021-01-10 00:00:00','2021-01-10 00:00:00','ΠΑΤΡΑ','ΠΑΤΡΑ');
INSERT INTO "PRAGMATOPOIEI" VALUES ('elenigeorgiou',29,'2021-01-10 14:17:19'),
 ('elenigeorgiou',30,'2021-01-10 14:17:48'),
 ('giorgoskyriakou',31,'2021-01-10 14:19:09'),
 ('mariapapa',27,'2021-01-10 14:15:01'),
 ('mariapapa',28,'2021-01-10 14:15:30'),
 ('mariapapa',32,'2021-01-10 14:19:58'),
 ('mariapapa',33,'2021-01-10 14:22:31'),
 ('mariapapa',34,'2021-01-10 18:01:21');
INSERT INTO "KALYPTETAI" VALUES ('Ασφάλεια Ατυχήματος',27),
 ('Ασφάλεια Ατυχήματος',28),
 ('Ασφάλεια Ατυχήματος',29),
 ('Ασφάλεια φθοράς και κλοπής',30),
 ('Ασφάλεια Ατυχήματος',31),
 ('Ασφάλεια φθοράς και κλοπής',32),
 ('Ασφάλεια Ατυχήματος',33),
 ('Ασφάλεια Ατυχήματος',34);
INSERT INTO "EPILEGEI" VALUES (27,'Εκτεταμένη Οδική βοήθεια'),
 (28,'Εκτεταμένη Οδική βοήθεια'),
 (28,'Πολυτελής Διακόσμηση'),
 (32,'Πολυτελής Διακόσμηση'),
 (32,'ΣΟΦΕΡ');
INSERT INTO "PLHRWNEI" VALUES ('mariapapa',27),
 ('mariapapa',28),
 ('elenigeorgiou',29),
 ('elenigeorgiou',30),
 ('giorgoskyriakou',31),
 ('mariapapa',32),
 ('mariapapa',33),
 ('mariapapa',34);
INSERT INTO "PERIEXEI" VALUES (27,'FUTURE50');
INSERT INTO "EKSOFLEITAI" VALUES (27,27),
 (28,28),
 (29,29),
 (30,30),
 (31,31),
 (32,32),
 (33,33),
 (34,34);
INSERT INTO "AFORA" VALUES (31,'OFF ROAD'),
 (30,'SUV'),
 (34,'SUV'),
 (27,'ΜΕΣΑΙΑ'),
 (28,'ΜΕΣΑΙΑ'),
 (29,'ΜΕΣΑΙΑ'),
 (33,'ΜΕΣΑΙΑ'),
 (32,'ΠΟΛΥΤΕΛΗ');
INSERT INTO "DIATITHETAI" VALUES (1,'	\r\nRT8734'),
 (1,'AR6456'),
 (1,'GT6543'),
 (3,'HT6798'),
 (1,'TA7654'),
 (2,'TE6543'),
 (2,'ΒΤ5689'),
 (3,'ΥΓ6754');
INSERT INTO "AFORA_SYGKEKRIMENA" VALUES (27,'ΒΤ5689','2021-01-18 00:00:00',NULL),
 (28,'GT6543','2021-01-01 00:00:00','2021-01-04 00:00:00'),
 (29,'ΒΤ5689','2021-01-03 00:00:00','2021-01-07 00:00:00'),
 (30,'HT6798','2021-01-01 00:00:00','2021-01-08 00:00:00'),
 (31,'RT8734','2021-01-10 00:00:00',NULL),
 (32,'AR6456','2021-01-09 00:00:00',NULL),
 (33,'ΒΤ5689','2021-01-10 00:00:00',NULL),
 (34,'HT6798',NULL,NULL);
COMMIT;
