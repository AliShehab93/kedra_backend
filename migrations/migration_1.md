# Run this script in postgres query to create the database

## Locations table
`CREATE TABLE "Locations"
(
id serial,
"address" varchar(50) NOT NULL,
"macAddress" varchar(50) NOT NULL
);`

## Units table
`CREATE TABLE "Units"
(
id serial,
"macAddress" varchar(50) NOT NULL,
"name" varchar(50) NOT NULL,
capacity integer NOT NULL,
"locationId" integer NOT NULL
);`

## Compartments table
`CREATE TABLE "Compartments"
(
id serial,
"macAddress" varchar(50) NOT NULL,
capacity integer NOT NULL,
"unitId" integer NOT NULL
);`

## Assign PKs in tables
`ALTER TABLE "Locations" ADD CONSTRAINT "PK_Locations" PRIMARY KEY (id);
ALTER TABLE "Units" ADD CONSTRAINT "PK_Units" PRIMARY KEY (id);
ALTER TABLE "Compartments" ADD CONSTRAINT "PK_Compartments" PRIMARY KEY (id);
`
## Assign FKs for the tables
`ALTER TABLE "Units" ADD CONSTRAINT "FK_Units_Locations"
FOREIGN KEY ("locationId") REFERENCES "Locations" (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE "Compartments" ADD CONSTRAINT "FK_Compartments_Units"
FOREIGN KEY ("unitId") REFERENCES "Units" (id) ON DELETE No Action ON UPDATE No Action;
`

## insert data into Locations tables
`INSERT INTO public."Locations"(address, "macAddress")
VALUES ('Location Address 1', '71:E3:6D:CC:F4:DA');
INSERT INTO public."Locations"(address, "macAddress")
VALUES ('Location Address 2', '72:E3:6D:CC:F4:DB');
INSERT INTO public."Locations"(address, "macAddress")
VALUES ('Location Address 3', '73:E3:6D:CC:F4:DC');`