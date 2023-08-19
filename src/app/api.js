import { ImUser } from "react-icons/im";

export const getComments = async () => {
    return [
      {
        id: "1",
        body: "this is a comment",
        username: "sam",
        userId: "1",
        parentId: null,
        createdAt: "2023-07-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "this is another comment",
        username: "NotSam",
        userId: "2",
        parentId: null,
        createdAt: "2023-07-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "i like this post",
        username: "NotSam",
        userId: "2",
        parentId: null,
        createdAt: "2023-07-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "needs improvement",
        username: "NotSam",
        userId: "2",
        parentId: null,
        createdAt: "2023-07-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "New Person",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };