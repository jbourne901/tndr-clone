export default interface IChat {
    _id: string;
    name: string;
    message: string;
    timestamp: string;
    profilePic: string;
};

export const testChats: IChat[] = [
    {
        _id: "1",
        name: "Mark",
        message: "Yo what's up",
        timestamp: "4 days ago",
        profilePic: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
    },

    {
        _id: "2",
        name: "Ellen",
        message: "Hey! how are you",
        timestamp: "35 minutes ago",
        profilePic: "https://i.pinimg.com/originals/fb/9a/87/fb9a876f293fb4254bcb0b478f6ad76f.jpg"        
    },

    {
        _id: "3",
        name: "Sarah",
        message: "Ola!",
        timestamp: "3 days ago",
        profilePic: "https://m.media-amazon.com/images/M/MV5BOTQwYjU2NGQtMmI2ZS00NDExLWEzMDMtZmY2ZGMxOWVhNTBjXkEyXkFqcGdeQXVyNjc0NjEwNw@@._V1_UY317_CR22,0,214,317_AL_.jpg"  
    },
    
    {
        _id: "4",
        name: "Sandra",
        message: "Oops there is he is...",
        timestamp: "1 week ago",
        profilePic: "https://i.pinimg.com/originals/c3/9b/4d/c39b4d2d8cb2c2c5e2eef7be6f80f48f.jpg"  
    },

];



export const testChats2: IChat[] = [
    {
        _id: "1",
        name: "Mark",
        message: "Yo what's up",
        timestamp: "4 days ago",
        profilePic: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
    },

    {
        _id: "2",
        name: "Ellen",
        message: "Hey! how are you",
        timestamp: "35 minutes ago",
        profilePic: "https://i.pinimg.com/originals/fb/9a/87/fb9a876f293fb4254bcb0b478f6ad76f.jpg"        
    },

    {
        _id: "3",
        name: "Mark",
        message: "Ola!",
        timestamp: "3 days ago",
        profilePic: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
    },
    
    {
        _id: "4",
        name: "Ellen",
        message: "Oops there is he is...",
        timestamp: "1 week ago",
        profilePic: "https://i.pinimg.com/originals/fb/9a/87/fb9a876f293fb4254bcb0b478f6ad76f.jpg"        
    },

];

export const testSelf = "Mark";
export const testSelfPic = "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"



