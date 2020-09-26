import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Bocioi3ExxTFH8VtF4_Z5LTNw1_gZcQHgJNsJFZEPw-sQGOfAtbY9QdL9vhtQtAxv9YQPDU2LyGtik_5pbwR1hYZEkTjEJjb46bDGOouXqzshiVFjPyjop7mifMSX3Yx",
  },
});

// yelp.get("/search");
