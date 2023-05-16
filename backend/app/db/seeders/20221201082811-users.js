"use strict";

module.exports = {
  up: (models, mongoose) => {
    return models.users.insertMany([
      {
        name: "User1",
        email: "user1@gmail.com",
        password: "$2a$12$0pXHAZTpan35AEPk/./i9.UDZp14VyP52uLGhqrsPIgv9lZW9rGG2",
        type: "user",
        phone: "+91 9767890123",
        country: "India"
      },
      {
        name: "User2",
        email: "user2@gmail.com",
        password: "$2a$12$/6c/6np9uDv0fr15K0PVU.bVIBpdOiT4wPfbpvpyq3zKiR9Jg8.uy",
        type: "user",
        phone: "+91 989922331",
        country: "India"
      },
      {
        name: "User3",
        email: "user3@gmail.com",
        password: "$2a$12$0pXHAZTpan35AEPk/./i9.UDZp14VyP52uLGhqrsPIgv9lZW9rGG2",
        type: "user",
        phone: "+91 9767890123",
        country: "India"
      },
      {
        name: "User4",
        email: "user4@gmail.com",
        password: "$2a$12$/6c/6np9uDv0fr15K0PVU.bVIBpdOiT4wPfbpvpyq3zKiR9Jg8.uy",
        type: "user",
        phone: "+91 989922331",
        country: "India"
      },
      {
        name: "User5",
        email: "user5@gmail.com",
        password: "$2a$12$0pXHAZTpan35AEPk/./i9.UDZp14VyP52uLGhqrsPIgv9lZW9rGG2",
        type: "user",
        phone: "+91 9767890123",
        country: "India"
      },
      {
        name: "User6",
        email: "user6@gmail.com",
        password: "$2a$12$/6c/6np9uDv0fr15K0PVU.bVIBpdOiT4wPfbpvpyq3zKiR9Jg8.uy",
        type: "user",
        phone: "+91 989922331",
        country: "India"
      },
      {
        name: "User7",
        email: "user7@gmail.com",
        password: "$2a$12$0pXHAZTpan35AEPk/./i9.UDZp14VyP52uLGhqrsPIgv9lZW9rGG2",
        type: "user",
        phone: "+91 9767890123",
        country: "India"
      },
      {
        name: "User8",
        email: "user8@gmail.com",
        password: "$2a$12$/6c/6np9uDv0fr15K0PVU.bVIBpdOiT4wPfbpvpyq3zKiR9Jg8.uy",
        type: "user",
        phone: "+91 989922331",
        country: "India"
      },
      {
        name: "User9",
        email: "user9@gmail.com",
        password: "$2a$12$0pXHAZTpan35AEPk/./i9.UDZp14VyP52uLGhqrsPIgv9lZW9rGG2",
        type: "user",
        phone: "+91 9767890123",
        country: "India"
      },
      {
        name: "User10",
        email: "user10@gmail.com",
        password: "$2a$12$/6c/6np9uDv0fr15K0PVU.bVIBpdOiT4wPfbpvpyq3zKiR9Jg8.uy",
        type: "user",
        phone: "+91 989922331",
        country: "India"
      },
      {
        name: "User11",
        email: "user11@gmail.com",
        password: "$2a$12$0pXHAZTpan35AEPk/./i9.UDZp14VyP52uLGhqrsPIgv9lZW9rGG2",
        type: "user",
        phone: "+91 9767890123",
        country: "India"
      },
      {
        name: "User12",
        email: "user12@gmail.com",
        password: "$2a$12$/6c/6np9uDv0fr15K0PVU.bVIBpdOiT4wPfbpvpyq3zKiR9Jg8.uy",
        type: "user",
        phone: "+91 989922331",
        country: "India"
      }
    ])
      .then((res) => {
        console.log(`Seeding Successful`);
      });
  },

  down: (models, mongoose) => {
    return models.users.deleteMany().then((res) => {
      console.log(`Rollback Successful`);
    });
  },
};
