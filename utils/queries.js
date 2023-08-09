  export const allFoodsQuery = () => {
    const query = `*[_type == "food"]  | order(_createdAt desc){
      _id,
      "slug": slug.current,
      title,
      glovo,
      boltfood,
      image,
      description,
      }
    }`;
  
    return query;
  };

  export const aboutsQuery = () => {
    const query = `*[_type == "about"]{
      story,
      story2,
      image,
      image2,
      image3,
      title,
      }
    }`;
  
    return query;
  };


  export const bookingQuery = () => {
    const query = `*[_type == "booking"]{
        name,
        email,
        phone,
        date,
        time,
        people,
        message,
      }
    }`;
  
    return query;
  };

  export const postDetailQuery = (postId) => {
    const query = `*[_type == "post" && _id == '${postId}']{
      _id,
       caption,
         video{
          asset->{
            _id,
            url
          }
        },
        userId,
      postedBy->{
        _id,
        userName,
        image
      },
       likes,
      comments[]{
        comment,
        _key,
        postedBy->{
          _ref,
        _id,
      },
      }
    }`;
    return query;
  };
  
  export const searchPostsQuery = (searchTerm) => {
    const query = `*[_type == "post" && caption match '${searchTerm}*' || topic match '${searchTerm}*'] {
      _id,
       caption,
         video{
          asset->{
            _id,
            url
          }
        },
        userId,
      postedBy->{
        _id,
        userName,
        image
      },
  likes,
      comments[]{
        comment,
        _key,
        postedBy->{
        _id,
        userName,
        image
      },
      }
    }`;
    return query;
  };
  
  export const singleUserQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
  
    return query;
  };
  
  export const allUsersQuery = () => {
    const query = `*[_type == "user"]`;
  
    return query;
  };
  
  export const userCreatedPostsQuery = (userId) => {
    const query = `*[ _type == 'post' && userId == '${userId}'] | order(_createdAt desc){
      _id,
       caption,
         video{
          asset->{
            _id,
            url
          }
        },
        userId,
      postedBy->{
        _id,
        userName,
        image
      },
   likes,
  
      comments[]{
        comment,
        _key,
        postedBy->{
        _id,
        userName,
        image
      },
      }
    }`;
  
    return query;
  };
  
  export const userLikedPostsQuery = (userId) => {
    const query = `*[_type == 'post' && '${userId}' in likes[]._ref ] | order(_createdAt desc) {
      _id,
       caption,
         video{
          asset->{
            _id,
            url
          }
        },
        userId,
      postedBy->{
        _id,
        userName,
        image
      },
   likes,
  
      comments[]{
        comment,
        _key,
        postedBy->{
        _id,
        userName,
        image
      },
      }
    }`;
  
    return query;
  };
  
  export const topicPostsQuery = (topic) => {
    const query = `*[_type == "post" && topic match '${topic}*'] {
      _id,
       caption,
         video{
          asset->{
            _id,
            url
          }
        },
        userId,
      postedBy->{
        _id,
        userName,
        image
      },
   likes,
  
      comments[]{
        comment,
        _key,
        postedBy->{
        _id,
        userName,
        image
      },
      }
    }`;
  
    return query;
  };
  