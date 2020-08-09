export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(response));
};

const response = [
  {
    id: 65362,
    agentId: 2125,
    title: "Awesome Cotton Chicken",
    slug: "reiciendis-consequatur-dolore",
    content:
      "In South Williamsburg only a few blocks inland from the East River, Marlo &Sons is a rustic respite with nice wine, good cocktails, and excellent snacking fare such as oysters, local cheese, and potato tortilla. But thereâ€™s more: seasonal salads and soups, the famous brick chicken, a dimly lit space outfitted in various types of wood(this is an Andrew Tarlow restaurant, after all). In many ways.",
    status: "draft",
    price: "253.00",
    isNegotiable: true,
    propertyType: "Hotel",
    condition: "Excellent",
    rating: 5,
    ratingCount: 35,
    contactNumber: "1-403-000-9038 x910",
    termsAndCondition:
      "Sed natus quia earum atque libero dolore natus mollitia. Quibusdam quibusdam fugiat similique et. Aut quo natus est consequatur.",
    amenities: [
      {
        id: 11895,
        wifiAvailability: true,
        amenityText: "Free Wi-Fi",
        slug: "free-wifi",
      },
      {
        id: 14671,
        parkingAvailability: true,
        amenityText: "Free Parking",
        slug: "free-parking",
      },
      {
        id: 25396,
        poolAvailability: true,
        amenityText: "Free Pool",
        slug: "pool",
      },
      {
        id: 89598,
        airCondition: false,
        amenityText: "Air Condition",
        slug: "air-condition",
      },
    ],
    image: {
      id: 41632,
      url: "http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-1.jpg",
      thumb_url:
        "http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-1_thumb.jpg",
    },
    location: {
      id: 48797,
      lat: 40.706877,
      lng: -74.011265,
      formattedAddress: "Broklyn New York, United States Of America",
      zipcode: "10001",
      city: "Broklyn",
      state_long: "New York",
      state_short: "NY",
      country_long: "United States Of America",
      country_short: "USA",
    },
    gallery: [
      {
        id: 49921,
        url:
          "http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-single2.jpg",
      },
      {
        id: 43045,
        url:
          "http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-single3.jpg",
      },
      {
        id: 19843,
        url:
          "http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-single4.jpg",
      },
    ],
    categories: [
      {
        id: 15109,
        slug: "Ergonomic",
        name: "Unbranded",
        image: {
          id: 99921,
          url:
            "http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-single5.jpg",
        },
      },
      {
        id: 85959,
        slug: "Small",
        name: "Rustic",
        image: {
          id: 30943,
          url:
            "http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-single6.jpg",
        },
      },
    ],
    reviews: [
      {
        reviewID: 77370,
        reviewTitle: "Quia asperiores et ducimus.",
        reviewText:
          "Accusamus cumque architecto itaque porro sint nihil ipsam totam ducimus. Doloremque fuga fuga ab vel neque id eum et voluptatibus. Qui eius quos quas mollitia enim vel provident facere. Hic nobis sunt aut sed qui dolore nihil accusantium.",
        reviewAuthorId: 39531,
        reviewAuthorFirstName: "Terrance",
        reviewAuthorLastName: "Wolff",
        reviewAuthorEmail: "Reed_Okuneva@yahoo.com",
        reviewAuthorPic: {
          id: 984,
          url:
            "http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-single7.jpg",
        },
        reviewDate: "2018-11-25T01:20:05.316Z",
        reviewFields: [
          {
            id: 56278,
            rating: 4,
            ratingFieldName: "Service",
          },
          {
            id: 296,
            rating: 1,
            ratingFieldName: "Room",
          },
          {
            id: 30575,
            rating: 3,
            ratingFieldName: "Cleanness",
          },
          {
            id: 11857,
            rating: 3,
            ratingFieldName: "Food",
          },
        ],
      },
      {
        reviewID: 23288,
        reviewTitle: "Qui unde exercitationem quis nulla ut earum qui ea sit.",
        reviewText:
          "Distinctio at aut perspiciatis dolores. Sed sit ut labore nostrum. Est amet repellat dolore maiores id eligendi eveniet autem praesentium. Porro illo perspiciatis repellat atque laborum voluptatem tempore nobis odio. Fugiat et molestias ab id temporibus dignissimos culpa fugit. Nulla magni iusto dolores at.",
        reviewAuthorId: 85017,
        reviewAuthorFirstName: "Harmon",
        reviewAuthorLastName: "Bechtelar",
        reviewAuthorEmail: "Jacklyn.Corwin49@yahoo.com",
        reviewAuthorPic: {
          id: 18652,
          url:
            "http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-single3.jpg",
        },
        reviewDate: "2018-02-28T00:50:14.479Z",
        reviewFields: [
          {
            id: 50043,
            rating: 1,
            ratingFieldName: "Service",
          },
          {
            id: 44884,
            rating: 3,
            ratingFieldName: "Room",
          },
          {
            id: 15340,
            rating: 3,
            ratingFieldName: "Cleanness",
          },
          {
            id: 79946,
            rating: 3,
            ratingFieldName: "Food",
          },
        ],
      },
      {
        reviewID: 57342,
        reviewTitle:
          "Occaecati corrupti beatae rerum et fugit dolores dolor dolorem.",
        reviewText:
          "Cum velit laborum consectetur facere dignissimos est nulla et. Aperiam repellendus exercitationem et possimus ut veniam temporibus. Vel excepturi aut commodi inventore eius aliquam eos corporis deleniti. Sequi tempore exercitationem esse quis deserunt rerum quia. Aut optio laboriosam aliquid qui modi quia esse voluptas.",
        reviewAuthorId: 52646,
        reviewAuthorFirstName: "Isom",
        reviewAuthorLastName: "Conn",
        reviewAuthorEmail: "Mozelle34@yahoo.com",
        reviewAuthorPic: {
          id: 44935,
          url:
            "http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-single6.jpg",
        },
        reviewDate: "2018-05-26T06:11:41.520Z",
        reviewFields: [
          {
            id: 71865,
            rating: 1,
            ratingFieldName: "Service",
          },
          {
            id: 57470,
            rating: 5,
            ratingFieldName: "Room",
          },
          {
            id: 98655,
            rating: 3,
            ratingFieldName: "Cleanness",
          },
          {
            id: 98138,
            rating: 4,
            ratingFieldName: "Food",
          },
        ],
      },
    ],
  },
];
