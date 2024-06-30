const express = require('express');
const cors = require('cors');

const {
  Admin,
  User,
  Flat,
  Notice,
  Emergency,
  Shops,
  Orders,
  AddToCart,
  Event,
  Register,
} = require('./database');
const { createNoticeID, createEmergencyID, orderID } = require('./methods');
const { func } = require('prop-types');

const app = express();
app.use(express.json());
app.use(cors());

// Admin Routes
app.post('/adminLogin', async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const check = await Admin.findOne({
    email: email,
    password: password,
  });

  if (check) {
    res.status(200).json({
      msg: 'Successfully Logged In',
    });
  } else {
    res.status(401).json({
      msg: 'Incorrect Credentials',
    });
  }
});

app.post('/flatDetails', async function (req, res) {
  const ownerName = req.body.ownerName;
  const flatNo = req.body.flatNo;
  const wingNo = req.body.wingNo;

  const result = await Flat.create({
    ownerName: ownerName,
    flatNo: flatNo,
    wingNo: wingNo,
  });

  if (result) {
    res.status(200).json({
      msg: 'Details Added',
    });
  } else {
    res.status(400).json({
      msg: 'Error Occurred',
    });
  }
});

app.post('/newNotice', async function (req, res) {
  const title = req.body.title;
  const body = req.body.body;

  const result = await Notice.create({
    noticeID: createNoticeID(),
    title: title,
    body: body,
  });

  if (result) {
    res.status(200).json({
      msg: 'Notice Created Successfully',
    });
  } else {
    res.status(400).json({
      msg: 'Error Occurred',
    });
  }
});

app.post('/emergencyNotice', async function (req, res) {
  const title = req.body.title;
  const body = req.body.body;

  const result = await Emergency.create({
    noticeID: createEmergencyID(),
    title: title,
    body: body,
  });

  if (result) {
    res.status(200).json({
      msg: 'Emergency Notice Created Successfully',
    });
  } else {
    res.status(400).json({
      msg: 'Error Occurred',
    });
  }
});

app.post('/event', async function (req, res) {
  const eventName = req.body.eventName;
  const date = req.body.date;
  const venue = req.body.venue;
  const description = req.body.description;
  const imageURL = req.body.imageURL;

  const result = await Event.create({
    eventName: eventName,
    date: date,
    venue: venue,
    description: description,
    imageURL: imageURL,
  });

  if (result) {
    res.status(200).json({
      msg: 'Event created successsfully',
    });
  } else {
    res.status(400).json({
      msg: 'Error Occurred',
    });
  }
});

app.get('/event', async function (req, res) {
  const result = await Event.find();
  res.status(200).json(result);
});

// User Routes
app.post('/signup', async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const check = await User.findOne({
    email: email,
  });

  if (check) {
    res.status(409).json({
      msg: 'Email already in use',
    });
  } else {
    const result = await User.create({
      email: email,
      password: password,
    });
    if (result) {
      res.status(200).json({
        msg: 'Sign Up Successfull',
      });
    }
  }
});

app.post('/userlogin', async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const check = await User.findOne({
    email: email,
    password: password,
  });

  if (check) {
    res.status(200).json({
      user: check,
      msg: 'Successfully Logged In',
    });
  } else {
    res.status(401).json({
      msg: 'Incorrect Credentials',
    });
  }
});

app.put('/moreDetails', async function (req, res) {
  const fullname = req.body.fullname;
  const phone = req.body.phone;
  const flatNo = req.body.flatNo;
  const wingNo = req.body.wingNo;
  const email = req.body.email;

  const result = await User.updateOne(
    { email: email },
    {
      fullname: fullname,
      phone: phone,
      flatNo: flatNo,
      wingNo: wingNo,
    }
  );

  if (result) {
    res.status(200).json({
      msg: 'User details updated successfully',
    });
  } else {
    res.status(400).json({
      msg: 'Error Occurred',
    });
  }
});

app.get('/allShops', async function (req, res) {
  const shops = await Shops.find();
  let result = [];
  if (shops) {
    for (let index = 0; index < shops.length; index++) {
      let temp = [];
      let element = shops[index];
      temp.push(element.shopName);
      temp.push(element.shopNumber);
      temp.push(element.location);
      temp.push(element.description);
      result.push(temp);
    }
    res.status(200).json({
      msg: result,
    });
  } else {
    res.status(400).json({
      msg: 'error occurred',
    });
  }
});

app.get('/items', async function (req, res) {
  const shopName = req.body.shopName;
  const data = await Shops.findOne({
    shopName: shopName,
  });
  if (data) {
    res.status(200).json({
      msg: data.items,
    });
  } else {
    res.status(400).json({
      msg: 'Error Occurred',
    });
  }
});

app.post('/addToCart', async function (req, res) {
  const email = req.body.email;
  const itemName = req.body.itemName;
  const itemPrice = req.body.itemPrice;
  const itemQuantity = req.body.itemQuantity;
  const check = await AddToCart.findOne({
    email: email,
  });
  if (check) {
    const add = await AddToCart.updateOne(
      {
        email: email,
      },
      {
        $push: {
          items: [
            {
              itemName: itemName,
              itemPrice: itemPrice,
              itemQuantity: itemQuantity,
            },
          ],
        },
      }
    );
    if (add) {
      res.status(200).json({
        msg: 'Items added to the cart',
      });
    } else {
      res.status(400).json({
        msg: 'Error occurred',
      });
    }
  } else {
    const add = await AddToCart.create({
      email: email,
      items: [
        {
          itemName: itemName,
          itemPrice: itemPrice,
          itemQuantity: itemQuantity,
        },
      ],
    });
    if (add) {
      res.status(200).json({
        msg: 'Cart created and items added',
      });
    } else {
      res.status(400).json({
        msg: 'Error occurred',
      });
    }
  }
});

app.post('/order', async function (req, res) {
  const email = req.body.email;
  const user = await User.findOne({
    email: email,
  });
  const data = await AddToCart.findOne({
    email: email,
  });

  const createOrder = await Orders.create({
    orderID: orderID(),
    flatNo: user.flatNo,
    wingNo: user.wingNo,
    items: data.items,
  });
  if (createOrder) {
    res.status(200).json({
      msg: 'Order placed',
    });
  } else {
    res.status(400).json({
      msg: 'Error Occurred',
    });
  }
});

app.get('viewEvents', async function (req, res) {
  const event = await Event.find();
  if (event) {
    res.status(200).json({
      msg: event,
    });
  } else {
    res.status(400).json({
      msg: 'Error Occurred',
    });
  }
});

app.post('/eventRegistration', async function (req, res) {
  const email = req.body.email;
  const noOfPeople = req.body.noOfPeople;
  const fullname = req.body.fullname;
  const phone = req.body.phone;

  const result = await Register.create({
    fullname: fullname,
    email: email,
    phone: phone,
    noOfPeople: noOfPeople,
  });

  if (result) {
    res.status(200).json({
      msg: 'Registration Completed',
    });
  } else {
    res.status(400).json({
      msg: 'Registration Failed',
    });
  }
});

app.listen(3000);
