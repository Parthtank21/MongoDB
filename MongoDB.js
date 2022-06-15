const MongoClient = require('mongodb').MongoClient;

const dburl = "mongodb://localhost:27017";

MongoClient.connect(dburl, { useUnifiedTopology: true }, (err,db) => {
  if (err) throw err;

  console.log("Connection Successful.");

  const dbo = db.db("mefgi");

  dbo.createCollection("it", (err, result) => {
    if (err) throw err;
    console.log("Collection created.");
    // db.close();
  });

  const dbc = dbo.collection("it");

  let data = { name: "Person1", email: "person1@gmail.com", status: true };
  dbc.insertOne(data, (err, result) => {
    if (err) throw err;
    console.log("Data inserted.");
    // console.log(result);
    db.close();
  });

  // data = [
  //   { name: "Person2", email: "person2@mefgi.com", status: false },
  //   { name: "Person3", email: "person3@gmail.com", status: true },
  //   { name: "Person4", email: "person4@gmail.com", status: true },
  //   { name: "Person4", email: "person4@mefgi.com", status: false },
  // ];
  // dbc.insertMany(data, (err, result) => {
  //   if (err) throw err;
  //   console.log("Data(" + result.insertedCount + ") inserted.");
  //   console.log(result.ops);
  //   db.close();
  // });

  // dbc.find({}).toArray((err, result) => {
  //   if (err) throw err;
  //   console.log("Collection has documents as below:");
  //   console.log(result);
  //   // db.close();
  // });

  // dbc
  //   .find({}, { projection: { _id: 1, name: 1, email: 1 } })
  //   .toArray((err, result) => {
  //     if (err) throw err;
  //     console.log("Data with projection:");
  //     console.log(result);
  //   //   db.close();
  //   });

  // dbc
  //   .find({}, { projection: { _id: 0, name: 1 } })
  //   .limit(3)
  //   .toArray((err, result) => {
  //     if (err) throw err;
  //     console.log("Data with projection and limit:");
  //     console.log(result);
  //   //   db.close();
  //   });

  // let query = { name: "Person4" };
  // dbc.find(query).toArray((err, result) => {
  //   if (err) throw err;
  //   console.log(result);
  //   // db.close();
  // });

  // query = { name: "Person4" };
  // dbc.findOne(query, (err, result) => {
  //   if (err) throw err;
  //   console.log(result);
  //   // db.close();
  // });

  // query = { email: /mefgi.com$/ };
  // dbc.find(query).toArray((err, result) => {
  //   if (err) throw err;
  //   console.log(result);
  //   // db.close();
  // });

  // query = { email: /mefgi.com$/ };
  // let mysort = { name: -1 };
  // dbc
  //   .find(query)
  //   .sort(mysort)
  //   .toArray((err, result) => {
  //     if (err) throw err;
  //     console.log(result);
  //   //   db.close();
  //   });

  // query = { name: "Person2" };
  // let newValue = { $set: { status: false } };

  // dbc.updateOne(query, newValue, (err, result) => {
  //     if (err) throw err;
  //     if (result.modifiedCount)
  //         console.log("Data (" + result.modifiedCount + ") updated.");
  //     else
  //         console.log("No matchng document found.");
  //   //   db.close();
  // });

  // query = { email: /mefgi.com$/ };
  // newValue = { $set: { status: true } };

  // dbc.updateMany(query, newValue, (err, result) => {
  //     if (err) throw err;
  //     if (result.modifiedCount)
  //         console.log("Data (" + result.modifiedCount + ") updated.");
  //     else
  //         console.log("No matchng document found.");
  //   //   db.close();
  // });

  // query = { name: "Person4" };
  // dbc.deleteOne(query, (err, result) => {
  //   if (err) throw err;
  //   if (result.deletedCount)
  //     console.log("Data (" + result.deletedCount + ") deleted.");
  //   else console.log("No matchng document found.");
  //   // db.close();
  // });

  // query = { email: /gmail.com$/ };
  // dbc.deleteMany(query, (err, result) => {
  //   if (err) throw err;
  //   if (result.deletedCount)
  //     console.log("Data (" + result.deletedCount + ") deleted.");
  //   else console.log("No matchng document found.");
  //   // db.close();
  // });

  // dbc.drop((err,result) => {
  //     if (err) throw err;
  //     if(result) console.log("Collection dropped.");
  //     db.close();
  // });

//   dbo.dropCollection("it", (err, result) => {
//     if (err) throw err;
//     if (result) console.log("Collection dropped.");
//     //   db.close();
//   });

//   db.close();
});
